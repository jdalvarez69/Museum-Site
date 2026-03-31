# Sprint 1 — Midterm Build Record (Museum of Cold War Propaganda)

## Sprint objective
Produce a credible first-review web exhibition that demonstrates a structured design and content process under time pressure, with a working implementation of the core museum narrative and no dependency on unfinished platform features.

## Current baseline
- Project type: Next.js + TypeScript + Tailwind museum website
- Build status: production build succeeds
- Implemented routes:
  - `/`
  - `/exhibit/posters`
  - `/exhibit/broadcast`
  - `/process`
- Design direction in place: Swiss-inspired editorial layout
- Persuasion framing in place: Cialdini principle of Authority
- Voice direction in place: Sage archetype (educational, evidence-led)

This baseline is intentionally constrained to a reviewable midterm state, not a feature-complete final exhibition.

## Scope of Sprint 1
1. Establish project architecture and route structure
2. Implement shared layout shell and global visual tokens
3. Build homepage with thesis framing and exhibit entry points
4. Build Exhibit I page for propaganda posters
5. Build Exhibit II page for radio/broadcast operations
6. Build process page documenting sources and rationale
7. Add foundational documentation for spec-driven workflow

## Out of scope
- CMS or dynamic content ingestion
- Search, filtering, tagging, or personalization
- Per-artifact detail pages
- Multimedia-heavy interactions or animation systems
- Accessibility audit beyond basic readable structure
- Final content polish to publication-grade museum standard

## Files involved
- Core app shell and styling:
  - `app/layout.tsx`
  - `app/globals.css`
- Route pages:
  - `app/page.tsx`
  - `app/exhibit/posters/page.tsx`
  - `app/exhibit/broadcast/page.tsx`
  - `app/process/page.tsx`
- Shared component:
  - `components/ArtifactCard.tsx`
- Spec docs:
  - `docs/_specs/site-foundation/spec.md`
  - `docs/_specs/site-foundation/sprint-1.md`

## Design invariants
- Swiss system: clean grid logic, strong hierarchy, restrained palette
- Consistent zone structure: dark contextual headers + light reading fields
- Accent red reserved for labels/rules/emphasis, not decorative fills
- Reusable section rhythm and spacing across all pages
- Minimal interface chrome so artifacts and interpretation remain central

## Narrative invariants
- Core thesis: propaganda is presented as a repeatable influence system, not isolated facts
- Tone: authoritative, neutral, educational; avoids sensational language
- Interpretation style: short analytical blocks tied to persuasion mechanics
- Balanced framing: compares US and USSR media strategies without collapsing historical distinctions
- Process transparency: sources and method are visible on the process route

## Tasks completed
- Initialized and configured Next.js + TypeScript + Tailwind project foundation
- Implemented route architecture for the 4-page exhibition scope
- Built homepage with exhibition framing and navigation entry points
- Built posters exhibit with artifact card pattern and analytical captions
- Built broadcast exhibit with timeline-style structure and analytical entries
- Built process page documenting research sources and design/technical rationale
- Established documentation structure under `docs/_specs/site-foundation/`
- Added and refined site foundation spec for bounded implementation control

## Verification steps
1. Confirm route availability: `/`, `/exhibit/posters`, `/exhibit/broadcast`, `/process`
2. Run production build and verify successful static generation
3. Check cross-page visual consistency (header zones, typography, spacing, accent usage)
4. Confirm content presence on each route:
   - homepage framing
   - poster exhibit entries
   - broadcast entries
   - process/source rationale
5. Validate process documentation exists in the spec folder for review evidence

## Remaining risks
- Content density may still exceed ideal scan length in portions of exhibit copy
- Invariant drift is possible if late edits introduce ad hoc styles or structure
- Time-boxed build leaves limited room for formal usability/accessibility testing
- Current version prioritizes argument clarity over archival richness and media depth
- Spec constraints and implemented copy may require one alignment pass before final review

## Next sprint recommendations
1. Run a strict spec-compliance pass (counts, copy-length caps, invariants)
2. Tighten exhibit text for faster scanability while preserving analytical rigor
3. Add explicit source labels or references at artifact level where needed
4. Perform a focused mobile pass to improve readability at smaller breakpoints
5. Prepare review package: short walkthrough script + route-by-route rationale
6. Defer all feature expansion until after content-quality stabilization

---

Sprint 1 status: **complete for midterm review baseline**.
This build is a respectable first-review version demonstrating structured process, coherent narrative direction, and working implementation, while explicitly not claiming final museum-grade polish.
