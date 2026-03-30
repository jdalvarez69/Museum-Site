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

export default function ProcessPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[--ink] text-[--paper] px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-4">
            Process & Methodology
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-8">
            Making the Exhibition
          </h1>
          <div className="w-16 h-1 bg-[--red]" />
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {/* Project Statement */}
          <section>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-6">
              Project Statement
            </p>
            <div className="prose-like flex flex-col gap-4 text-[--ink]">
              <p className="text-base leading-relaxed">
                I chose Cold War propaganda as the subject of this project
                because I wanted to study persuasion in a context where its
                mechanisms were unusually transparent. Governments rarely
                announce what they are doing when they attempt to shape public
                belief — but the declassified archives of the Cold War period
                provide unusually direct documentation of intent, method, and
                measured effect. The machinery was built in public, used in
                secret, and studied afterward with a rigor that peacetime
                commercial messaging has rarely attracted.
              </p>
              <p className="text-base leading-relaxed">
                The goal of this exhibition is not to produce condemnation of
                either superpower, nor to suggest a false equivalence between
                democratic and authoritarian systems. It is to isolate the
                structural techniques — fear, authority, binary opposition,
                repetition, surrogate identity — and make them visible as
                techniques, so that they can be recognized in contexts beyond
                their historical origin.
              </p>
            </div>
          </section>

          {/* Research Sources */}
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

          {/* Design Decisions */}
          <section>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-6">
              Design Decisions
            </p>
            <div className="flex flex-col gap-6">
              <div className="border-l-2 border-[--rule] pl-5">
                <p className="text-xs tracking-widest uppercase text-[--muted] mb-2">
                  Swiss International Style
                </p>
                <p className="text-sm leading-relaxed text-[--ink]">
                  The visual language of this site is drawn from the Swiss
                  International Typographic Style — the same modernist design
                  movement active during the Cold War era itself. Grid-based
                  layout, grotesque typefaces, and a restricted color palette
                  (black, off-white, and a single accent red) reference the
                  period visually without imitation. The austerity of the design
                  is intentional: the artifacts should carry visual weight, not
                  the interface.
                </p>
              </div>
              <div className="border-l-2 border-[--rule] pl-5">
                <p className="text-xs tracking-widest uppercase text-[--muted] mb-2">
                  Color Palette
                </p>
                <p className="text-sm leading-relaxed text-[--ink]">
                  Near-black (#0A0A0A), warm parchment (#F7F4EE), and
                  propaganda red (#C41E3A). Red is used exclusively as a signal
                  color — labels, rules, accent lines — and never as background.
                  The warm paper tone references archival documents and avoids
                  the harshness of pure white on screen.
                </p>
              </div>
              <div className="border-l-2 border-[--rule] pl-5">
                <p className="text-xs tracking-widest uppercase text-[--muted] mb-2">
                  Layout Logic
                </p>
                <p className="text-sm leading-relaxed text-[--ink]">
                  Each page uses a full-bleed dark header to establish exhibit
                  context, followed by a light content field for primary
                  material. This two-zone structure mimics the physical
                  experience of entering a gallery: threshold, then encounter.
                  The poster grid uses 4 columns at wide breakpoints to maximize
                  artifact density without crowding analysis text.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Stack */}
          <section>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-6">
              Technical Stack
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[--rule]">
              {[
                {
                  name: "Next.js 15",
                  reason:
                    "App Router enables per-page layouts and server components, which keep the artifact data co-located with the page rather than in a separate API layer — appropriate for a static exhibition without backend requirements.",
                },
                {
                  name: "TypeScript",
                  reason:
                    "Typed interfaces for artifact data (ArtifactCard props, broadcast artifact objects) prevent structural errors during rapid development and make the data schema self-documenting.",
                },
                {
                  name: "Tailwind CSS",
                  reason:
                    "Utility-first CSS enabled fast iteration on the grid layout and spacing system. CSS custom properties handle the color tokens, keeping design variables accessible from both Tailwind classes and raw CSS without duplication.",
                },
              ].map((tech) => (
                <div key={tech.name} className="bg-[--paper] p-6">
                  <p className="text-sm font-bold uppercase tracking-tight mb-3">
                    {tech.name}
                  </p>
                  <p className="text-sm text-[--muted] leading-relaxed">
                    {tech.reason}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Reflection */}
          <section>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-6">
              Reflection
            </p>
            <div className="flex flex-col gap-4 text-[--ink]">
              <p className="text-base leading-relaxed">
                The most clarifying moment in this project came while reading
                declassified documents about Radio Free Europe's editorial
                guidelines. The CIA's insistence that the station maintain
                journalistic credibility — including reporting facts that
                reflected poorly on U.S. foreign policy — was not idealism. It
                was a calculated investment in the authority that accurate
                reporting generates. The propaganda was more effective because
                it was largely true. That inversion of expectation — that
                honesty can be a technique — is the central insight I carry away
                from this research.
              </p>
              <p className="text-base leading-relaxed">
                Building the exhibition as a website rather than a written essay
                forced compression. Every artifact analysis had to do its work
                in three sentences. That constraint was more useful than a
                thousand-word minimum would have been. Writing for a wall label
                is a different discipline than writing for a seminar paper, and
                the discipline clarified which claims could survive without
                qualification and which could not.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
