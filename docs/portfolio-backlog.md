---
title: Portfolio backlog
description: Seven proposed stories with acceptance checks, grouped for review.
---

# Portfolio backlog

[← Planning overview](/consulting-portfolio-plan)

**Draft backlog, not a commitment to build everything.** P0/P1 labels are inherited from the original plan; release scope still needs prioritization. Open only the story you are reviewing.

| Story | Visitor or owner outcome | Draft priority |
| --- | --- | --- |
| S1 | Identify fit | P0 |
| S2 | Compare services | P0 |
| S3 | Evaluate a case study | P0 |
| S4 | Understand Keith | P0 |
| S5 | Make an inquiry | P0 |
| S6 | Explore research | P1 |
| S7 | Maintain accurately | P0 |

## Stories and acceptance criteria

**Theme → epic → story → task.** A theme expresses an outcome; an epic groups a capability; a story is a useful visitor action; tasks implement it. An epic may span screens, so do not force every epic to equal one page.

### Theme A: Establish fit and trust

**Epic E1: Understand the offer**

::: details Identify fit (P0).
**S1 — Identify fit (P0).** As a prospective client, I want to identify whom Keith helps and how, so I can decide whether to explore further.
- Given the home page, when I scan its opening content, then I can find the audience, problem and proposed help without playing audio or following an animation.
- The opening description is no more than 60 words; each service summary is no more than 45 words.
- In a review with three representative readers, at least two can name an audience and one service after a 30-second scan. Record actual results; do not invent participants.
- **Tasks:** draft positioning; select three service themes; assemble opening layout; run comprehension review.
:::

::: details Compare services (P0).
**S2 — Compare services (P0).** As a client, I want consistent service descriptions so I can choose a useful starting conversation.
- Each service has the same six fields: audience, problem, output, process, exclusions and related work.
- Unconfirmed pricing, availability and timing are absent; proposed offers remain labeled during planning.
- Each service links to one relevant evidence item and the contact route.
- **Tasks:** write service records; map evidence; review scope language; test links.
:::

**Epic E2: Inspect credible work**

::: details Evaluate a case study (P0).
**S3 — Evaluate a case study (P0).** As a client, I want to see Keith’s contribution and evidence, so I can judge relevance.
- At least three case studies cover education, software/tooling and organizational work.
- Every case has context, Keith’s role, approach, artifact, result, status, limitations and a dated source.
- An educational demo or planned runtime is labeled as such; unsupported outcomes are omitted or explicitly unknown.
- **Tasks:** evidence audit; write case studies; verify artifact links; review every outcome claim.
:::

::: details Understand Keith (P0).
**S4 — Understand Keith (P0).** As a visitor, I want an authentic short biography and verifiable credentials.
- About separates career history, current focus and future questions.
- Professional roles and dates are checked against authoritative sources before release.
- No home address, student records, private Life Tracker content or defunct business branding appears.
- **Tasks:** verify biography; select authorized portrait; review role wording and privacy.
:::

### Theme B: Make useful contact

**Epic E3: Start a qualified conversation**

::: details Make an inquiry (P0).
**S5 — Make an inquiry (P0).** As a prospective client, I want a clear private contact route without an account requirement.
- Given any service page, when I activate Contact, then I reach the same approved contact destination in one navigation step.
- The page asks for a short problem description, organization/context and desired outcome; no required confidential documents.
- If a form is chosen, invalid input gets accessible feedback, failed sends do not claim success, and a non-form fallback is available.
- No fabricated response-time promise, external scheduler or new data processor is introduced without Keith’s approval.
- **Tasks:** confirm contact destination; choose mail link or form; test success/failure; document privacy handling.
:::

### Theme C: Share knowledge without overwhelming people

**Epic E4: Find relevant insight**

::: details Explore research (P1).
**S6 — Explore research (P1).** As a visitor, I want a small number of topic routes and concise summaries.
- Insights groups material into AI practice, education and evidence/research, with descriptive titles and dates.
- Each research claim distinguishes source findings from Keith’s interpretation; sample limitations remain visible.
- Career job records retain check dates and links; stale listings never display as verified current openings.
- **Tasks:** content inventory; choose initial entries; add summaries and cross-links; validate provenance.
:::

::: details Maintain accurately (P0).
**S7 — Maintain accurately (P0).** As Keith, I want to update shared content once and see what release contains it.
- Shared identity, services and project status have one canonical record rather than copied facts across components.
- Each change links its story/issue, acceptance checks and commit; a preview is reviewed before release.
- An editorial checklist covers facts, dates, permissions, link health and planned-versus-delivered status.
- **Tasks:** content schema; ownership notes; build checks; release checklist and rollback procedure.
:::
