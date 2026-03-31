import ArtifactCard from "@/components/ArtifactCard";

const posters = [
  {
    title: "I Want You for U.S. Army",
    origin: "US" as const,
    year: "1917 / reissued 1941",
    analysis:
      "Flagg's pointing figure converts the state into a personal authority speaking directly to the viewer. Its force lies in collapsing public duty into an individual summons.",
    creator: "James M. Flagg / U.S. Army",
    medium: "Lithographic poster",
    circulation: "National recruitment campaign",
    repository: "Library of Congress",
    accession: "MCWP-P-001",
    archiveStatus: "Digitized record",
  },
  {
    title: "Build More Tanks",
    origin: "USSR" as const,
    year: "1942",
    analysis:
      "This production image turns labor into patriotic proof. The worker is presented not as an individual but as a disciplined instrument of state strength.",
    creator: "TASS Windows Series",
    medium: "Screenprint / poster",
    circulation: "Factory and civic display",
    repository: "Russian State Library (digital copy)",
    accession: "MCWP-P-002",
    archiveStatus: "Catalog reference",
  },
  {
    title: "This Is the Enemy",
    origin: "US" as const,
    year: "1943",
    analysis:
      "The poster relies on caricature to make the enemy legible at a glance. Once the opponent is reduced to a type, moral complexity becomes easier to discard.",
    creator: "Office of War Information",
    medium: "Offset poster",
    circulation: "Public information campaign",
    repository: "U.S. National Archives",
    accession: "MCWP-P-003",
    archiveStatus: "Digitized record",
  },
  {
    title: "The Communist Threat",
    origin: "US" as const,
    year: "1950",
    analysis:
      "American anti-communist poster design often borrowed the authority of public health messaging. Here ideology is treated as contamination, making vigilance appear rational and necessary.",
    creator: "American Legion / Civil Defense",
    medium: "Mass-printed poster",
    circulation: "Civic and school distribution",
    repository: "American Heritage collections",
    accession: "MCWP-P-004",
    archiveStatus: "Attributed reproduction",
  },
  {
    title: "Peace to the World",
    origin: "USSR" as const,
    year: "1950",
    analysis:
      "Soviet peace imagery framed the USSR as the guardian of world stability while preserving a militant visual grammar. The poster's persuasion lies in making state power appear synonymous with peace itself.",
    creator: "Soviet Peace Committee",
    medium: "State propaganda poster",
    circulation: "Party and union venues",
    repository: "Soviet poster archives",
    accession: "MCWP-P-005",
    archiveStatus: "Catalog reference",
  },
  {
    title: "Duck and Cover",
    origin: "US" as const,
    year: "1951",
    analysis:
      "Presented as child-friendly instruction, this campaign normalized permanent nuclear anxiety. The lesson was not only survival procedure but habitual reliance on official guidance.",
    creator: "Federal Civil Defense Administration",
    medium: "Instructional poster",
    circulation: "School and civil defense program",
    repository: "Prelinger Archives",
    accession: "MCWP-P-006",
    archiveStatus: "Digitized record",
  },
  {
    title: "Rodina-Mat Zovyot (The Motherland Calls)",
    origin: "USSR" as const,
    year: "1941 / circulated 1960s",
    analysis:
      "Toidze's figure fuses nation, motherhood, and command into a single image. Authority is embodied rather than explained, giving mobilization the force of moral obligation.",
    creator: "Irakli Toidze",
    medium: "Lithographic poster",
    circulation: "Mass wartime and commemorative circulation",
    repository: "Russian State Library (digital copy)",
    accession: "MCWP-P-007",
    archiveStatus: "Digitized record",
  },
  {
    title: "Are You Doing All You Can?",
    origin: "US" as const,
    year: "1942",
    analysis:
      "The rhetorical question functions as a quiet accusation. Viewers are asked to measure themselves against national duty before they have a chance to refuse it.",
    creator: "U.S. Government Printing Office",
    medium: "Offset poster",
    circulation: "Transit and workplace display",
    repository: "Library of Congress",
    accession: "MCWP-P-008",
    archiveStatus: "Digitized record",
  },
];

export default function PostersExhibit() {
  return (
    <div>
      {/* Exhibit Header */}
      <div className="bg-[--ink] text-[--paper] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-4">
            Gallery I — Printed Persuasion, 1941 to 1975
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-8">
            The Paper War
          </h1>
          <div className="w-16 h-1 bg-[--red] mb-8" />
          <p className="max-w-2xl text-base text-[--paper]/80 leading-relaxed">
            Before television dominated the domestic sphere, the poster carried
            ideology into streets, factories, schools, and transit systems.
            This room considers the poster as an instrument of instruction:
            concise, repeatable, and designed to make authority visible.
          </p>
        </div>
      </div>

      <div className="border-b border-[--rule] px-6 py-12 bg-[--paper]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-4">
              Room Guide
            </p>
            <p className="text-sm text-[--muted] leading-relaxed max-w-xl">
              Read these posters as systems of command. Note how each object
              simplifies political conflict into legible roles: protector,
              worker, enemy, citizen, child. The goal is not subtle argument but
              immediate compliance.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-4">
              Interpretive Lens
            </p>
            <p className="text-sm text-[--muted] leading-relaxed max-w-xl">
              Across both superpowers, authority is established through direct
              address, institutional symbolism, and repeated visual hierarchy.
              What changes is not the structure of persuasion, but the ideology
              each state asks the viewer to inhabit.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-3 mb-10">
            <p className="text-xs tracking-[0.25em] uppercase text-[--muted]">
              Cataloged Objects — 8 Posters
            </p>
            <p className="max-w-2xl text-sm text-[--muted] leading-relaxed">
              Each object label includes accession-style metadata, archival
              context, and a concise interpretive note.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posters.map((poster, index) => (
              <div key={poster.title} className="flex flex-col gap-3">
                <p className="text-[10px] tracking-[0.18em] uppercase text-[--muted]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <ArtifactCard {...poster} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[--rule] px-6 py-12 bg-[--paper]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-4">
            Selected Source Context
          </p>
          <p className="text-sm text-[--muted] leading-relaxed max-w-3xl">
            Object labels draw on Library of Congress and National Archives
            metadata, Soviet poster catalog references, and civil-defense media
            records. Accession numbers are exhibition catalog IDs for this
            project's archival register.
          </p>
        </div>
      </div>

      <div className="border-t border-[--rule] px-6 py-16 bg-[--ink] text-[--paper]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[--red] mb-4">
            Curatorial Note
          </p>
          <p className="text-base text-[--paper]/80 leading-relaxed">
            By the mid-1970s, the poster was no longer the dominant vehicle of
            state persuasion, but its visual logic endured. Broadcast media
            inherited the same grammar of threat, duty, innocence, and command.
            The room therefore serves as a prehistory of later information
            systems: the medium changes, but the structure of persuasion
            remains remarkably stable.
          </p>
        </div>
      </div>
    </div>
  );
}
