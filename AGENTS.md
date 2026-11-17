# Research and planning notebook

## Purpose and boundary
This repository publishes research and planning at `https://kaw393939.github.io/is117005-portfolio/`. It is not Keith’s production consulting portfolio. Do not implement the planned portfolio or change keithwilliams.org merely because a backlog item exists here. Require an explicit task defining the implementation slice and destination.

## Read first
1. `docs/index.md`: the two workstreams and navigation.
2. For career research: `docs/methodology.md`, `docs/job-sources.md`, `docs/local-findings.md`, and the relevant canonical record in `docs/.vitepress/data/jobs.json` (keep the downloadable `docs/public/jobs.json` copy aligned).
3. For portfolio work: `docs/consulting-portfolio-plan.md`, then `portfolio-brief.md`, `portfolio-personas.md`, `portfolio-evidence.md`, `portfolio-backlog.md`, and `portfolio-delivery.md` (all in `docs/`).

## Sources of truth
- User instructions determine authorized scope. Draft priorities, personas and proposed services do not authorize new commitments.
- Career records are dated observations, not current hiring guarantees. Preserve source, check date, eligibility, missing fields and sample limitations. Recheck the employer source before describing a vacancy as current.
- Portfolio evidence belongs in `docs/portfolio-evidence.md`; verify the linked primary source/repository before strengthening a claim. Published self-description is not independent outcome verification.
- Personas are fictional planning hypotheses, never interviews or confirmed customers. Offers, architecture and backlog are proposals until approved. Label demos, alphas and planned work accurately.
- The running site, deployed commit and tests establish release state. Do not claim deployment or completion from a successful local build alone.
- Do not include private Life Tracker records, student records, credentials, home addresses or unapproved client material. Use clearly labeled synthetic examples when needed.

## Change workflow
Keep changes small. Record the question, evidence, decision, relevant story/issue, acceptance checks and commit. Do not invent dates, owners, metrics, testimonials or completed outcomes. Preserve existing research and URLs; when moving content, retain a useful route from old links. Avoid repeating claims across pages; link to the canonical document above.

## Build and verify
Use the existing VitePress/Vue setup. Run `npm ci` if dependencies are absent and `npm run check` (build plus local link checks). Review rendered navigation and the changed page at mobile and desktop sizes for UI changes. Inspect the diff for accidental deletion/private data. Verify deployment and live content after publishing; report blockers honestly. A task about documentation is not a request to add a backend, analytics, forms or new integrations.
