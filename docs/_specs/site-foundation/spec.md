# Site Foundation Spec — Museum of Cold War Propaganda (First Review Build)

## Problem
Students often learn Cold War propaganda as disconnected artifacts instead of a repeatable persuasion system. The result is recognition without analysis: they can identify posters or radio programs, but cannot explain the mechanism of influence (authority, framing, repetition, target audience design).

## Product goal
Ship a first-review digital exhibition tonight that teaches one clear claim: Cold War propaganda worked through authoritative presentation across print and broadcast channels. The site must feel museum-curated, not app-like, and be complete enough for class critique.

## Audience
- Primary: instructor and classmates reviewing a course project
- Secondary: non-specialist visitors interested in modern media history
- User intent: quickly understand thesis, inspect examples, confirm source credibility
- Attention window: 5–10 minutes total

## Design style
Swiss editorial exhibition style with strict constraints:
- One-column reading experience with grid-based modules
- Strong hierarchy: all-caps labels, bold headlines, restrained body copy
- Palette limited to ink, paper, and one accent red
- Minimal decoration; no novelty UI patterns
- Page rhythm must follow: context header → artifact analysis field → curatorial close

## Cialdini principle
**Authority**
- Every artifact must include date/range and institutional or creator context
- Claims should be framed as analysis, not opinionated rhetoric
- Process page must make methods and sources explicit to reinforce trust

## Brand archetype
**Sage**
- Voice: precise, calm, evidence-led
- Posture: teach and interpret, do not perform outrage
- Language rule: declarative sentences, no hype, no sensational phrasing

## In-scope pages
Exactly 4 routes, no additions:
1. `/` — Homepage (thesis + exhibit entry)
2. `/exhibit/posters` — Exhibit I: Propaganda Posters
3. `/exhibit/broadcast` — Exhibit II: Radio and Broadcast
4. `/process` — Research and Method

Hard non-goals for tonight:
- No search, filters, tagging, comments, login, CMS, animations
- No per-artifact detail routes
- No additional pages, sections, or alternate themes

## Content strategy
Bounded content model for one-evening delivery:
- Homepage: one thesis paragraph, two exhibit entry blocks, one contextual quote
- Posters exhibit: exactly 8 artifacts
- Broadcast exhibit: exactly 6 artifacts/operations
- Process page: 4–6 sources with one-sentence annotations each

Artifact schema (required on exhibit pages):
- Title
- Origin (US or USSR)
- Year or year range
- 2–3 sentence analysis linking to persuasion mechanics

Copy limits to prevent drift:
- Artifact analysis: max 90 words each
- Curatorial closing note: max 140 words per exhibit
- Homepage intro text: max 120 words

## UX goals
- User understands topic + thesis within first screen on homepage
- User reaches either exhibit in one click from homepage
- User can scan each artifact card/entry in under 10 seconds
- User can complete each exhibit page without interactive controls
- User can verify research credibility from Process page without external navigation

## Visual system goals
- Keep visual language consistent across all four pages
- Use the same spacing rhythm for section blocks and labels
- Use accent red only for tags, rules, and emphasis markers
- Keep dark headers and light reading surfaces across all routes
- Ensure text remains readable on mobile widths without layout breakage

## Technical constraints
- Stack: Next.js App Router + TypeScript + Tailwind
- Content source: static in-code arrays (no API, DB, or CMS)
- Component scope: one shared artifact card + page-level sections
- Rendering target: static build for all routes
- Time budget: 3–5 hours total implementation and polish
- Definition of done tonight: deployable review version, not production CMS architecture

## Acceptance criteria
All criteria must pass:
1. Exactly 4 routes exist: `/`, `/exhibit/posters`, `/exhibit/broadcast`, `/process`
2. Homepage includes thesis statement and links to both exhibits
3. Posters page has exactly 8 artifacts using required schema
4. Broadcast page has exactly 6 entries using required schema
5. Process page includes 4–6 sources plus design and technical rationale
6. No out-of-scope features are present
7. Tone is consistently museum-curatorial (Authority + Sage) across pages
8. Build command succeeds with no TypeScript errors

## Risks
- Scope expansion late in build (new sections/components) may block completion
- Overlong copy may reduce scanability and weaken exhibition pacing
- Inconsistent metadata per artifact may undermine authority framing
- Last-minute visual tweaks may break system consistency
- Time spent on polishing before content completion may delay review readiness

## Verification checklist
- [ ] Route count is exactly 4 and paths match spec
- [ ] Homepage has thesis + two exhibit entry links above fold
- [ ] Posters page contains exactly 8 artifacts with title/origin/year/analysis
- [ ] Broadcast page contains exactly 6 entries with title/origin/year(or range)/analysis
- [ ] Process page includes 4–6 cited sources with short annotations
- [ ] No search/filter/auth/CMS/detail-route features exist
- [ ] Accent color usage is limited to labels/rules/emphasis
- [ ] Copy limits are respected (artifact, closing notes, homepage intro)
- [ ] Mobile viewport shows no clipped text or broken sections
- [ ] Project builds successfully for production review
