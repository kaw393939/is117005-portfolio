import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Research & Planning',
  description: 'A research and planning notebook for comparing AI careers, evidence, and next steps.',
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
    siteTitle: 'Research & Planning',
    nav: [
      { text: 'Start here', link: '/' },
      { text: 'Job sample', link: '/jobs' },
      { text: 'Portfolio plan', link: '/consulting-portfolio-plan' },
      { text: 'Sources', link: '/sources' }
    ],
    sidebar: [
      { text: 'Start', items: [
        { text: 'Research overview', link: '/' },
        { text: 'Planning worksheet', link: '/plan' }
      ] },
      { text: 'Compare careers', items: [
        { text: 'NY/NJ job sample', link: '/jobs' },
        { text: 'Role families', link: '/title-map' },
        { text: 'Career profiles', link: '/careers' },
        { text: 'Local findings', link: '/local-findings' },
        { text: 'Employment projections', link: '/research' }
      ] },
      { text: 'Plan next steps', items: [
        { text: 'Learning projects', link: '/pathways' }
      ] },
      { text: 'Portfolio planning', items: [
        { text: 'Start & decisions', link: '/consulting-portfolio-plan' },
        { text: 'Brief & structure', link: '/portfolio-brief' },
        { text: 'Employer personas', link: '/portfolio-personas' },
        { text: 'Evidence & claims', link: '/portfolio-evidence' },
        { text: 'Backlog & acceptance', link: '/portfolio-backlog' },
        { text: 'Delivery & quality', link: '/portfolio-delivery' }
      ] },
      { text: 'Check the evidence', collapsed: false, items: [
        { text: 'Employer sources', link: '/job-sources' },
        { text: 'Research sources', link: '/sources' },
        { text: 'Method & limitations', link: '/methodology' },
        { text: 'Earlier Atlas review', link: '/existing-research' }
      ] }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/kaw393939/is117005-portfolio' }],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    footer: {
      message: 'IS117005 · Research, evidence, and planning.',
      copyright: 'Research reviewed November 5, 2026. Projections are estimates, not guarantees.'
    },
    editLink: {
      pattern: 'https://github.com/kaw393939/is117005-portfolio/edit/main/docs/:path',
      text: 'Suggest an update on GitHub'
    }
  }
})
