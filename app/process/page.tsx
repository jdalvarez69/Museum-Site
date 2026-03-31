const sources = [
  {
    title: "Propaganda: The Formation of Men's Attitudes",
    author: "Jacques Ellul",
    year: "1965",
    publisher: "Vintage Books",
    note:
      "Foundational theory for treating propaganda as a structural social system, not an isolated event.",
  },
  {
    title: "Cold War Broadcasting: Impact on the Soviet Union and Eastern Europe",
    author: "A. Ross Johnson & R. Eugene Parta (eds.)",
    year: "2010",
    publisher: "Central European University Press",
    note:
      "Primary scholarly source for the broadcast gallery, grounded in declassified records and regional archives.",
  },
  {
    title: "Posters of the Cold War",
    author: "David Crowley",
    year: "2008",
    publisher: "V&A Publishing",
    note:
      "Visual reference for poster selection and comparative design language across both blocs.",
  },
  {
    title:
      "Digital Archive: Declassified CIA Documents on Covert Broadcasting",
    author: "Central Intelligence Agency / FOIA Reading Room",
    year: "1948 – 1975 (declassified 1990s–2000s)",
    publisher: "CIA.gov",
    note:
      "Declassified records used to verify covert sponsorship claims in the broadcast timeline.",
  },
  {
    title: "Prints & Photographs Online Catalog — World War II Posters",
    author: "Library of Congress",
    year: "1941 – 1945",
    publisher: "loc.gov",
    note:
      "Primary metadata source for U.S. poster authorship, dates, and distribution context.",
  },
  {
    title:
      "Manufacturing Consent: The Political Economy of the Mass Media",
    author: "Edward S. Herman & Noam Chomsky",
    year: "1988",
    publisher: "Pantheon Books",
    note:
      "Theoretical frame for analyzing how media systems can reproduce propaganda functions across political contexts.",
  },
];

const workflowSteps = [
  {
    step: "Spec",
    detail:
      "Defined scope, tone, page roles, design constraints, and acceptance criteria before implementation.",
  },
  {
    step: "QA",
    detail:
      "Audited the spec for ambiguity, scope creep, and weak criteria before build work.",
  },
  {
    step: "Sprint",
    detail:
      "Converted the spec into a realistic Sprint 1 plan tied to route-level deliverables.",
  },
  {
    step: "QA",
    detail:
      "Reviewed the build as both website and exhibition: flow, organization, artifact presentation, educational value, and visual coherence.",
  },
  {
    step: "Implement",
    detail:
      "Revised pages and shared components against the documents, not open-ended iteration.",
  },
  {
    step: "QA",
    detail:
      "Recorded what was defensible, what remained unfinished, and what to prioritize before final review.",
  },
];

const processArtifacts = [
  {
    name: "spec.md",
    path: "docs/_specs/site-foundation/spec.md",
    purpose:
      "Foundation document for scope, design framework, content boundaries, and acceptance criteria.",
  },
  {
    name: "sprint-1.md",
    path: "docs/_specs/site-foundation/sprint-1.md",
    purpose:
      "Sprint record defining the intended midterm deliverable and its limits.",
  },
  {
    name: "qa-1.md",
    path: "docs/_specs/site-foundation/qa-1.md",
    purpose:
      "QA record of strengths, unfinished areas, and highest-priority fixes.",
  },
  {
    name: "README.md",
    path: "README.md",
    purpose:
      "Submission-facing summary of project goals, design framework, and orchestration logic.",
  },
];

export default function ProcessPage() {
  return (
    <div>
      <div className="bg-[--ink] text-[--paper] px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-4">
            Process Room — Method, Review, and Orchestration
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-8">
            Making the Exhibition
          </h1>
          <div className="w-16 h-1 bg-[--red] mb-8" />
          <p className="max-w-2xl text-base text-[--paper]/80 leading-relaxed">
            This page documents how the project was directed, reviewed, and
            revised. For this course, process is part of the argument: the site
            must demonstrate not only visual output, but disciplined
            decision-making under clear constraints.
          </p>
        </div>
      </div>

      <div className="border-b border-[--rule] px-6 py-12 bg-[--paper]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-4">
              Room Guide
            </p>
            <p className="text-sm text-[--muted] leading-relaxed max-w-xl">
              This room explains how the exhibition was planned, reviewed, and
              revised. It is part of the project evidence, not supplemental
              developer notes.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-4">
              Review Standard
            </p>
            <p className="text-sm text-[--muted] leading-relaxed max-w-xl">
              The site was evaluated both as a functioning website and as a
              curated educational exhibition, with process documentation used to
              connect intent, revision, and outcome.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          <section>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-6">
              Why a Spec-Driven Workflow Was Used
            </p>
            <div className="flex flex-col gap-4 text-[--ink]">
              <p className="text-base leading-relaxed">
                The project used a spec-driven workflow because AI assistance is
                only useful when the boundaries are clear. Without a written
                spec, page structure, tone, scope, and interpretive goals can
                drift quickly in a project that combines design, history, and
                argument.
              </p>
              <p className="text-base leading-relaxed">
                In this case, the workflow was designed to keep the site aligned
                to a museum-exhibition concept rather than allowing it to become
                a generic content website. The spec set intent, QA exposed weak
                spots, and sprint constraints kept the midterm version bounded
                enough to complete credibly.
              </p>
            </div>
          </section>

          <section>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-6">
              Orchestration Sequence
            </p>
            <div className="grid grid-cols-1 gap-px bg-[--rule]">
              {workflowSteps.map((item, index) => (
                <div key={`${item.step}-${index}`} className="bg-[--paper] p-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-[10px] tracking-[0.18em] uppercase text-[--muted]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-tight">
                      {item.step}
                    </h3>
                  </div>
                  <p className="text-sm text-[--ink] leading-relaxed max-w-3xl">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-6">
              How This Reduced Drift
            </p>
            <div className="flex flex-col gap-6">
              <div className="border-l-2 border-[--rule] pl-5">
                <p className="text-xs tracking-widest uppercase text-[--muted] mb-2">
                  Scope Control
                </p>
                <p className="text-sm leading-relaxed text-[--ink]">
                  The written spec limited the project to four core routes and
                  defined what belonged in the midterm review version. That
                  prevented feature creep and kept AI effort focused on
                  evaluation-critical pages.
                </p>
              </div>
              <div className="border-l-2 border-[--rule] pl-5">
                <p className="text-xs tracking-widest uppercase text-[--muted] mb-2">
                  Tone and Design Discipline
                </p>
                <p className="text-sm leading-relaxed text-[--ink]">
                  The workflow also constrained tone. Because the project was
                  specified as Swiss, Authority, and Sage, revisions could be
                  judged against explicit criteria instead of taste alone.
                </p>
              </div>
              <div className="border-l-2 border-[--rule] pl-5">
                <p className="text-xs tracking-widest uppercase text-[--muted] mb-2">
                  Review Against Intent
                </p>
                <p className="text-sm leading-relaxed text-[--ink]">
                  QA was used to compare the implemented pages to the intended
                  exhibition experience. This made it possible to revise pages
                  for reading rhythm, narrative progression, and curatorial
                  clarity, not just correctness.
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-6">
              Project Artifacts Created
            </p>
            <div className="grid grid-cols-1 gap-px bg-[--rule]">
              {processArtifacts.map((artifact) => (
                <div key={artifact.path} className="bg-[--paper] p-6">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="text-sm font-bold uppercase tracking-tight">
                      {artifact.name}
                    </h3>
                    <span className="text-[11px] font-mono text-[--muted]">
                      {artifact.path}
                    </span>
                  </div>
                  <p className="text-sm text-[--ink] leading-relaxed">
                    {artifact.purpose}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-6">
              How the Site Was Reviewed
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[--rule]">
              {[
                {
                  name: "As a Website",
                  reason:
                    "Checked for route clarity, build stability, maintainability, and visitor navigation flow.",
                },
                {
                  name: "As an Exhibition",
                  reason:
                    "Assessed for narrative flow, exhibit organization, artifact presentation, educational value, and visual coherence.",
                },
              ].map((item) => (
                <div key={item.name} className="bg-[--paper] p-6">
                  <p className="text-sm font-bold uppercase tracking-tight mb-3">
                    {item.name}
                  </p>
                  <p className="text-sm text-[--muted] leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-6">
              What the Midterm Version Proves
            </p>
            <p className="text-base leading-relaxed text-[--ink] max-w-3xl">
              The midterm version proves the project has moved beyond concept:
              it has a working route structure, coherent design language, and a
              documented process showing deliberate decisions. It is not a final
              museum build, but a credible first formal review with clear intent.
            </p>
          </section>

          <section>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-6">
              What Still Needs Improvement
            </p>
            <div className="flex flex-col gap-6">
              <div className="border-l-2 border-[--rule] pl-5">
                <p className="text-xs tracking-widest uppercase text-[--muted] mb-2">
                  Content Refinement
                </p>
                <p className="text-sm leading-relaxed text-[--ink]">
                  Some exhibit text still needs compression so the project reads
                  more consistently like a gallery and less like an essay in
                  sections.
                </p>
              </div>
              <div className="border-l-2 border-[--rule] pl-5">
                <p className="text-xs tracking-widest uppercase text-[--muted] mb-2">
                  Final Review Alignment
                </p>
                <p className="text-sm leading-relaxed text-[--ink]">
                  The final version should more strictly align the implemented
                  pages with the documentation, especially around copy limits,
                  label consistency, and artifact-level citation signals.
                </p>
              </div>
              <div className="border-l-2 border-[--rule] pl-5">
                <p className="text-xs tracking-widest uppercase text-[--muted] mb-2">
                  Accessibility and Polish
                </p>
                <p className="text-sm leading-relaxed text-[--ink]">
                  Before final review, the site should receive a focused pass on
                  reading rhythm, mobile readability, and interface clarity so
                  the exhibition experience feels complete rather than merely
                  functional.
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-6">
              Research Sources
            </p>
            <div className="flex flex-col gap-px bg-[--rule]">
              {sources.map((s) => (
                <div key={s.title} className="bg-[--paper] p-6">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="text-sm font-bold leading-snug">{s.title}</h3>
                    <span className="text-[11px] font-mono text-[--muted]">
                      {s.year}
                    </span>
                  </div>
                  <p className="text-xs text-[--muted] mb-3">
                    {s.author} — {s.publisher}
                  </p>
                  <p className="text-sm text-[--ink] leading-relaxed">
                    {s.note}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
