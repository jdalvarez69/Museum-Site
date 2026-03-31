const sources = [
  {
    title: "Propaganda: The Formation of Men's Attitudes",
    author: "Jacques Ellul",
    year: "1965",
    publisher: "Vintage Books",
    note:
      "The foundational academic text on propaganda as a sociological phenomenon. Ellul's argument that propaganda is inseparable from modern technological society — rather than an aberration from it — informed the framing of both exhibits.",
  },
  {
    title: "Cold War Broadcasting: Impact on the Soviet Union and Eastern Europe",
    author: "A. Ross Johnson & R. Eugene Parta (eds.)",
    year: "2010",
    publisher: "Central European University Press",
    note:
      "A comprehensive academic study of Radio Free Europe and Voice of America, drawing on declassified CIA documents and Eastern European archives. Primary source for the broadcast exhibit.",
  },
  {
    title: "Posters of the Cold War",
    author: "David Crowley",
    year: "2008",
    publisher: "V&A Publishing",
    note:
      "The most thorough visual survey of Cold War poster design from both sides. Used to identify artifacts and understand the formal conventions of each superpower's visual propaganda language.",
  },
  {
    title:
      "Digital Archive: Declassified CIA Documents on Covert Broadcasting",
    author: "Central Intelligence Agency / FOIA Reading Room",
    year: "1948 – 1975 (declassified 1990s–2000s)",
    publisher: "CIA.gov",
    note:
      "Declassified operational documents confirming CIA funding of Radio Free Europe and Radio Swan. Used to verify claims about covert sponsorship in the broadcast exhibit narrative.",
  },
  {
    title: "Prints & Photographs Online Catalog — World War II Posters",
    author: "Library of Congress",
    year: "1941 – 1945",
    publisher: "loc.gov",
    note:
      "Primary source for public domain poster images and metadata. The Library of Congress catalog provided authorship, date, and distribution context for all U.S. propaganda posters in Exhibit I.",
  },
  {
    title:
      "Manufacturing Consent: The Political Economy of the Mass Media",
    author: "Edward S. Herman & Noam Chomsky",
    year: "1988",
    publisher: "Pantheon Books",
    note:
      "Herman and Chomsky's 'propaganda model' provided the theoretical lens for the process page reflection. The argument that democratic media systems exhibit structural propaganda functions comparable to authoritarian ones shaped the closing notes of both exhibits.",
  },
];

const workflowSteps = [
  {
    step: "Spec",
    detail:
      "A foundation specification established scope, tone, page structure, design constraints, and acceptance criteria before implementation began.",
  },
  {
    step: "QA",
    detail:
      "The spec was reviewed for ambiguity, scope creep, and vague acceptance criteria so the project would not drift during execution.",
  },
  {
    step: "Sprint",
    detail:
      "A bounded Sprint 1 document translated the spec into a realistic midterm build plan tied to the current route structure and deliverables.",
  },
  {
    step: "QA",
    detail:
      "The first-review version was assessed as both a website and a museum exhibition, focusing on narrative flow, exhibit organization, artifact presentation, educational value, visual coherence, and visitor experience.",
  },
  {
    step: "Implement",
    detail:
      "Pages, shared components, and design tokens were revised directly against the documents instead of through open-ended iteration.",
  },
  {
    step: "QA",
    detail:
      "A final midterm QA pass documented what was already defensible, what still felt unfinished, and what should be improved before final review.",
  },
];

const processArtifacts = [
  {
    name: "spec.md",
    path: "docs/_specs/site-foundation/spec.md",
    purpose:
      "Defines the foundation of the project: scope, design framework, content boundaries, and measurable acceptance criteria.",
  },
  {
    name: "sprint-1.md",
    path: "docs/_specs/site-foundation/sprint-1.md",
    purpose:
      "Records the intended Sprint 1 deliverable as a respectable midterm build rather than a final museum product.",
  },
  {
    name: "qa-1.md",
    path: "docs/_specs/site-foundation/qa-1.md",
    purpose:
      "Provides an honest review of strengths, unfinished areas, and highest-priority improvements before final review.",
  },
  {
    name: "README.md",
    path: "README.md",
    purpose:
      "Summarizes the project, design framework, and orchestration logic for class submission and repository review.",
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
                drift quickly, especially in a project that combines design,
                history, and argument.
              </p>
              <p className="text-base leading-relaxed">
                In this case, the workflow was designed to keep the site aligned
                to a museum-exhibition concept rather than allowing it to become
                a generic content website. The spec defined what the project was
                trying to prove, the QA passes identified where that proof was
                weak, and the sprint document kept the midterm version bounded
                enough to finish credibly.
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
                  prevented feature creep and kept the AI work focused on the
                  pages that mattered most for evaluation.
                </p>
              </div>
              <div className="border-l-2 border-[--rule] pl-5">
                <p className="text-xs tracking-widest uppercase text-[--muted] mb-2">
                  Tone and Design Discipline
                </p>
                <p className="text-sm leading-relaxed text-[--ink]">
                  The workflow also constrained tone. Because the project was
                  specified as Swiss, Authority, and Sage, revisions could be
                  judged against an explicit standard instead of personal taste
                  alone.
                </p>
              </div>
              <div className="border-l-2 border-[--rule] pl-5">
                <p className="text-xs tracking-widest uppercase text-[--muted] mb-2">
                  Review Against Intent
                </p>
                <p className="text-sm leading-relaxed text-[--ink]">
                  QA was used to compare the implemented pages to the intended
                  exhibition experience. This made it possible to revise pages
                  not just for correctness, but for reading rhythm, narrative
                  progression, and curatorial clarity.
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
                    "The project was checked for route clarity, build stability, maintainability, and whether users could move through the site without friction.",
                },
                {
                  name: "As an Exhibition",
                  reason:
                    "The same pages were also reviewed for narrative flow, exhibit organization, artifact presentation, educational value, visual coherence, and visitor reading rhythm.",
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
            <div className="flex flex-col gap-4 text-[--ink]">
              <p className="text-base leading-relaxed">
                The current midterm version proves that the project has moved
                beyond concept stage. It has a working route structure, a
                coherent design language, and a documented process showing that
                decisions were made deliberately rather than improvised late in
                development.
              </p>
              <p className="text-base leading-relaxed">
                It also demonstrates that AI assistance can be used responsibly
                in an academic project when the work is structured, reviewed,
                and constrained. The result is not a finished museum site, but a
                respectable first-review exhibition with a clear thesis and a
                credible development record.
              </p>
            </div>
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
                  consistency of labels, and artifact-level citation signals.
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
