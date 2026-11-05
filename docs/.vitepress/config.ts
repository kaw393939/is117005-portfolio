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
      { text: 'NY / NJ jobs', link: '/jobs' },
      { text: 'Job titles', link: '/title-map' },
      { text: 'Research', items: [
        { text: 'Local findings', link: '/local-findings' },
        { text: 'Growth & BLS evidence', link: '/research' },
        { text: 'Learning from the existing Atlas', link: '/existing-research' },
        { text: 'Methodology', link: '/methodology' }
      ] },
      { text: 'Learning paths', link: '/pathways' }
    ],
    sidebar: [
      { text: 'NY / NJ EMPLOYER RESEARCH', items: [
        { text: 'Real jobs · all experience levels', link: '/jobs' },
        { text: 'What the local sample shows', link: '/local-findings' },
        { text: 'Emerging AI title map', link: '/title-map' },
        { text: 'Employer source ledger', link: '/job-sources' }
      ] },
      { text: 'THE FIELD GUIDE', items: [
        { text: 'Career profiles', link: '/careers' },
        { text: 'Growth & evidence', link: '/research' },
        { text: 'Learning pathways', link: '/pathways' }
      ] },
      { text: 'THE RESEARCH DESK', items: [
        { text: 'Learning from the existing Atlas', link: '/existing-research' },
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
