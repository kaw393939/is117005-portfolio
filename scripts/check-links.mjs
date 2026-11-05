import { readdir, readFile, stat } from 'node:fs/promises'
import { resolve, dirname, join } from 'node:path'

const root = resolve('docs/.vitepress/dist')
const base = '/is117005-portfolio/'
const failures = []
let checked = 0

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(entries.map(entry => entry.isDirectory()
    ? htmlFiles(join(dir, entry.name))
    : entry.name.endsWith('.html') ? [join(dir, entry.name)] : []))
  return files.flat()
}

for (const file of await htmlFiles(root)) {
  const html = await readFile(file, 'utf8')
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&')
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href)) continue
    const [rawPath, hash] = href.split('#')
    const path = decodeURIComponent(rawPath.split('?')[0])
    if (path.startsWith('/') && !path.startsWith(base)) {
      failures.push(`${file}: URL outside production base: ${href}`)
      continue
    }
    let target = path.startsWith('/') ? resolve(root, path.slice(base.length)) : resolve(dirname(file), path || '.')
    if (!path) target = file
    try {
      if ((await stat(target)).isDirectory()) target = join(target, 'index.html')
      const content = await readFile(target, 'utf8')
      if (hash && target.endsWith('.html') && !content.includes(`id="${decodeURIComponent(hash)}"`)) {
        failures.push(`${file}: missing anchor ${href}`)
      }
      checked++
    } catch {
      failures.push(`${file}: missing local target ${href}`)
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'))
  process.exitCode = 1
} else {
  console.log(`Verified ${checked} local links and assets across the production site.`)
}
