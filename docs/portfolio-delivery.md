---
title: Delivery and quality
description: Technical defaults, shared quality checks and decisions before release.
---

# Delivery and quality

[← Planning overview](/consulting-portfolio-plan)

**Planning only.** No framework migration or implementation is authorized by this document.

## Technical defaults

**Default proposal:** retain the current static VitePress/Vue stack unless a documented requirement justifies migration. It already publishes the portfolio and supports concise content. A framework change is not a design outcome.

- **Content:** Markdown case studies and articles; typed shared records for services, identity and project status. Keep research evidence separate from presentation.
- **Components:** small navigation, service, case-study and contact components. Apply single responsibility and clear interfaces; use patterns only for a named problem, not a pattern-count requirement.
- **Data flow:** reviewed source → structured content → static build → preview → human approval → deployment. No client database or authentication in the initial release.
- **Testing efficiency:** fast content/schema/link checks first; unit tests only for actual logic; integration tests for content rendering; a small Playwright set for navigation, mobile menu and contact. Do not use expensive end-to-end tests for every paragraph.
- **Static checks:** TypeScript checks, ESLint, formatting and secret scanning in CI. Pin tool versions and document commands before implementation.

### Cross-cutting acceptance criteria

- Keyboard users can navigate and reach all controls with visible focus; headings and landmarks are logical. Audio has a transcript, never autoplays and is optional.
- At 320px, 768px and 1440px there is no page-level horizontal overflow; 200% zoom preserves content and controls. Meet WCAG 2.2 AA for implemented content; automated scans supplement manual checks.
- On agreed mobile Lighthouse settings, median of three runs targets Performance ≥90 and Accessibility ≥95; report settings and actual scores, not a compliance guarantee.
- Each indexable page has a unique title, description and canonical URL. Structured data contains only supported facts; sitemap, redirects and broken-link checks pass.
- Text is readable, paragraphs are short, headings describe the information, and core content works without animation. No pop-ups, fake scarcity or distracting decorative charts.
- No new analytics, cookies, external integrations or public contact details without an explicit decision. Use synthetic examples when demonstrating student work unless publication permission is confirmed.

## Decisions and release gates

**Milestone 1 — Evidence and plan:** approve positioning and offer scope; audit claims; finish stories, architecture and contact decision. No implementation yet.

**Milestone 2 — Small portfolio release:** implement S1–S5 and S7; preview, accessibility/privacy review and verified release. Preserve existing research resources and URLs.

**Milestone 3 — Iterate:** add S6, test with representative readers, improve the weakest journey. Add translation or interactive demonstrations only when they serve a real audience need.

**Definition of done:** every P0 criterion has recorded pass/fail evidence; public claims have sources; no critical/high test failures remain; contact works; Keith approves final copy and service scope; deployment corresponds to the reviewed commit and has a tested rollback.

**Decisions still needed before launch:** preferred consulting audience; which proposed offers Keith wants to provide; approved private inquiry destination; permission for any client/student imagery or testimonials. These do not block drafting the plan.
