import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Career Field Guide',
  description: 'An IS117005 research portfolio exploring growing occupations, emerging AI job titles, and practical career pathways.',
  lang: 'en-US',
  base: '/is117005-portfolio/',
  cleanUrls: false,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#163e34' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/is117005-portfolio/favicon.svg' }]
  ],
  sitemap: { hostname: 'https://kaw393939.github.io/is117005-portfolio/' },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'AI Career Field Guide',
    nav: [
      { text: 'Explore careers', link: '/careers' },
      { text: 'The research', link: '/research' },
      { text: 'Build your path', link: '/pathways' }
    ],
    sidebar: [
      { text: 'THE FIELD GUIDE', items: [
        { text: 'Career profiles', link: '/careers' },
        { text: 'Growth & evidence', link: '/research' },
        { text: 'Learning pathways', link: '/pathways' }
      ] },
      { text: 'THE RESEARCH DESK', items: [
        { text: 'Methodology', link: '/methodology' },
        { text: 'Sources & references', link: '/sources' }
      ] }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/kaw393939/is117005-portfolio' }],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    footer: {
      message: 'IS117005 · A research portfolio on the changing world of work.',
      copyright: 'Research reviewed November 5, 2026. Projections are estimates, not guarantees.'
    },
    editLink: {
      pattern: 'https://github.com/kaw393939/is117005-portfolio/edit/main/docs/:path',
      text: 'Suggest an update on GitHub'
    }
  }
})
