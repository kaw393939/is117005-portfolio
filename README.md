# IS117005 · AI Career Field Guide

A VitePress research portfolio exploring fast-growing technology occupations, emerging AI job titles, job descriptions, skills, and realistic career pathways.

**[Visit the GitHub Pages site →](https://kaw393939.github.io/is117005-portfolio/)**

## Explore the research

- **Career profiles:** responsibilities, skills, entry routes, and portfolio project ideas.
- **Growth & evidence:** dated employment projections with clear source attribution.
- **Learning pathways:** practical options for exploring software, data, and trustworthy AI.
- **Methodology & sources:** how evidence is selected and how emerging titles differ from measured occupations.

The homepage includes a searchable career explorer with category filters. VitePress also provides full-site local search, responsive navigation, and light and dark themes.

Research reviewed November 5, 2026. Growth figures apply to the broad occupations and periods stated on the site; emerging titles do not inherit an occupation's forecast.

## Run locally

Use Node.js 22 or newer (GitHub Actions uses Node.js 24).

```sh
npm ci
npm run docs:dev
```

Build, check internal links, and preview the production site:

```sh
npm run check
npm run docs:preview
```

The production base path is `/is117005-portfolio/`. The preview server prints the full local URL.

## Update the portfolio

Edit the Markdown pages in `docs/`. Career explorer entries are in `docs/.vitepress/data/careers.ts`; keep them aligned with the career profiles and research table. Site settings are in `docs/.vitepress/config.ts`, and the custom homepage and styles are in `docs/.vitepress/theme/`.

## GitHub Pages deployment

Pushing to `main` runs [the deployment workflow](.github/workflows/deploy.yml): install locked dependencies, build VitePress, verify internal links, and deploy the site to GitHub Pages. The repository's Pages publishing source is **GitHub Actions**. The workflow can also be started manually from the Actions tab.

Primary research references are collected on the [sources page](docs/sources.md). Suggested projects are learning proposals, not claims of completed work or guaranteed employment outcomes.
