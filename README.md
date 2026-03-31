# 1. Project Title

Museum of Cold War Propaganda

## 2. Project Overview

This project is a digital museum website built for a class assignment using Next.js, TypeScript, and Tailwind CSS. The site presents Cold War propaganda as a structured system of persuasion rather than a random collection of historical images and media clips. It is designed as a serious educational experience and documented through a spec-driven workflow to show both product quality and process rigor.

## 3. Museum Concept

The Museum of Cold War Propaganda examines how the United States and the Soviet Union used posters, radio, and broadcast media to shape public belief between 1947 and 1991. The goal is to help visitors identify the mechanics of influence (authority, framing, repetition, and audience targeting) and connect those mechanisms to modern media environments.

## 4. Design Framework

### Design Style

The visual system follows a Swiss-inspired editorial approach: strong grid structure, high typographic hierarchy, restrained color usage, and minimal interface chrome. The layout is intentionally museum-like, with clear contextual headers and focused reading zones.

### Cialdini Principle of Persuasion

This project applies the principle of **Authority**. Artifact entries emphasize dates, institutions, and source context so the site teaches through evidence-led interpretation rather than dramatic language.

### Brand Archetype

The brand archetype is **Sage**. The writing voice is analytical, calm, and educational. The intent is to increase understanding, not to sensationalize historical conflict.

### How They Work Together

Swiss style provides structure and clarity, Authority provides trust and credibility, and the Sage archetype provides tone and educational direction. Together they support a curated exhibition experience with consistent narrative discipline.

## 5. Site Structure

Current implemented routes:

- `/` — homepage and exhibition framing
- `/exhibit/posters` — Exhibit I: propaganda posters
- `/exhibit/broadcast` — Exhibit II: radio and broadcast
- `/process` — research, rationale, and method documentation

## 6. AI-Orchestrated Development Process

### Spec → QA → Sprint → QA → Implement → QA

The project was developed using a structured orchestration loop instead of ad hoc iteration. The sequence was:

1. Define bounded scope and constraints in a foundation spec
2. Run QA-style review to identify ambiguity and drift risks
3. Formalize a sprint document for what would be delivered in the first review
4. Run another QA pass to capture quality gaps
5. Implement and verify the current build state
6. Record follow-up QA findings for final-review improvements

### What artifacts were created

Spec and process artifacts are stored in:

- `docs/_specs/site-foundation/spec.md`
- `docs/_specs/site-foundation/sprint-1.md`
- `docs/_specs/site-foundation/qa-1.md`

These files document scope boundaries, implementation intent, review findings, and next-step priorities.

### Why this process reduces drift and improves quality

This workflow reduces drift by forcing explicit decisions before implementation and measurable checks after implementation. It improves quality by keeping the project aligned to narrative goals, exhibit standards, and realistic time constraints. It also creates a clear audit trail for class review.

## 7. Current Midterm Review State

This is a functional and respectable midterm version, not a final polished museum product. The site compiles and builds successfully, core routes are implemented, and the design framework is consistent enough for serious review. Remaining work is focused on refinement: tighter copy control, stronger artifact-level consistency, and final presentation polish.

The project has been reviewed not only as a website but as a curated museum exhibition, with evaluation criteria including narrative flow, exhibit organization, artifact presentation, educational value, visual coherence, and visitor experience.

## 8. Planned Improvements for Final Review

- Tighten exhibit copy for scanability and consistency
- Normalize artifact metadata and analysis structure across entries
- Improve transitions between homepage framing, exhibits, and process reflection
- Run a focused accessibility pass (headings, keyboard flow, readability)
- Complete final QA pass against spec acceptance criteria

## 9. Project File Structure

```text
app/
	layout.tsx
	globals.css
	page.tsx
	exhibit/
		posters/page.tsx
		broadcast/page.tsx
	process/page.tsx
components/
	ArtifactCard.tsx
docs/
	_specs/
		site-foundation/
			spec.md
			sprint-1.md
			qa-1.md
```

## 10. Local Development Instructions

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production verification:

```bash
npm run build
```

4. Open in browser:

`http://localhost:3000`

## 11. GitHub Repository Link Placeholder

GitHub Repository: `https://github.com/<your-username>/<your-repo-name>`
