# IS117005 · AI Career Field Guide

A VitePress research portfolio exploring emerging AI job titles and real opportunities in New York and New Jersey, alongside occupational growth evidence, skills, and career pathways.

**[Visit the GitHub Pages site →](https://kaw393939.github.io/is117005-portfolio/)**

## Explore the research

- **[Real NY/NJ jobs](https://kaw393939.github.io/is117005-portfolio/jobs.html):** 26 primary-source postings from 14 employers: 7 internships, 2 entry-level, 3 mid-level, and 14 senior examples. Filter by level, location, job family, and connection to AI.
- **[Local findings](https://kaw393939.github.io/is117005-portfolio/local-findings.html):** FDE, AI security, enterprise IT, infrastructure, enablement, product, and operations work.
- **[Earlier Atlas review](https://kaw393939.github.io/is117005-portfolio/existing-research.html):** lessons from the existing `ai-career-research` repository and its regional evidence gap.
- **Career profiles:** responsibilities, skills, entry routes, and portfolio project ideas.
- **Growth & evidence:** dated employment projections with clear source attribution.
- **Learning pathways:** practical options for exploring software, data, and trustworthy AI.
- **Methodology & sources:** how evidence is selected and how emerging titles differ from measured occupations.

The homepage includes a searchable career explorer with category filters. The job explorer records exact titles, employer links, responsibilities, requirements, location, level rationale, and check dates. VitePress also provides full-site local search, responsive navigation, and light and dark themes.

Research reviewed November 5, 2026. Chrome displayed employer descriptions and Apply controls for 23 postings; 3 CoreWeave listings were reviewed through official employer ATS JSON because their public pages did not render job text. Availability is a dated observation. This selected sample does not measure regional vacancy totals or growth. Growth figures apply to the broad occupations and periods stated on the site; emerging titles do not inherit an occupation's forecast.

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

Edit the Markdown pages in `docs/`. Career explorer entries are in `docs/.vitepress/data/careers.ts`; keep them aligned with the career profiles and research table. Reviewed jobs are in `docs/.vitepress/data/jobs.json`; update the downloadable copy at `docs/public/jobs.json` and the source ledger at `docs/job-sources.md` together. Discovery notes and the original Atlas review are in `research/`. Site settings are in `docs/.vitepress/config.ts`, and the custom homepage and styles are in `docs/.vitepress/theme/`.

## GitHub Pages deployment

Pushing to `main` runs [the deployment workflow](.github/workflows/deploy.yml): install locked dependencies, build VitePress, verify internal links, and deploy the site to GitHub Pages. The repository's Pages publishing source is **GitHub Actions**. The workflow can also be started manually from the Actions tab.

Primary research references are collected on the [sources page](docs/sources.md). Suggested projects are learning proposals, not claims of completed work or guaranteed employment outcomes.
