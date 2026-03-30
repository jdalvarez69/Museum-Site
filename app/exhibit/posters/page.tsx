import ArtifactCard from "@/components/ArtifactCard";

const posters = [
  {
    title: "I Want You for U.S. Army",
    origin: "US" as const,
    year: "1917 / reissued 1941",
    analysis:
      "Originally created by James Montgomery Flagg, this poster was reissued throughout the Cold War period as a shorthand for national duty. The direct address — 'I Want You' — positions the state as a singular authority figure whose gaze follows the viewer, exploiting the psychological principle of direct eye contact to manufacture personal obligation.",
    imageLabel: "James M. Flagg / U.S. Army",
  },
  {
    title: "Build More Tanks",
    origin: "USSR" as const,
    year: "1942",
    analysis:
      "Soviet wartime production posters were systematically repurposed in early Cold War propaganda to reinforce the USSR's industrial mythology. This class of imagery depicted workers as heroic actors whose labor directly enabled military power — collapsing the distinction between civilian and combatant in service of total mobilization.",
    imageLabel: "TASS Windows Series",
  },
  {
    title: "This Is the Enemy",
    origin: "US" as const,
    year: "1943",
    analysis:
      "Produced by the Office of War Information, this design depicts a German soldier through exaggerated, menacing features. The dehumanization strategy — consistent across both American and Soviet propaganda — functions to suspend moral reasoning in viewers, making violence against the abstracted 'enemy' psychologically permissible.",
    imageLabel: "Office of War Information",
  },
  {
    title: "The Communist Threat",
    origin: "US" as const,
    year: "1950",
    analysis:
      "Distributed by anti-communist civic organizations in the early 1950s, this genre of American poster leveraged the visual language of public health campaigns — familiar, authoritative forms — to frame Soviet ideology as a contagion. The epidemiological metaphor implied that exposure alone was dangerous, naturalizing surveillance and suspicion.",
    imageLabel: "American Legion / Civil Defense",
  },
  {
    title: "Peace to the World",
    origin: "USSR" as const,
    year: "1950",
    analysis:
      "Soviet 'peace' posters of the 1950s present a recurring paradox: bellicose imagery framed in pacifist language. The dove, borrowed from Picasso's design for the World Peace Council, was deployed state-wide to construct the USSR as the global defender of peace, juxtaposing this claim against U.S. nuclear tests and Korean War operations.",
    imageLabel: "Soviet Peace Committee",
  },
  {
    title: "Duck and Cover",
    origin: "US" as const,
    year: "1951",
    analysis:
      "Bert the Turtle's civil defense campaign represents a sophisticated institutionalization of fear as a governance tool. By training schoolchildren in a survival ritual of scientifically dubious utility, the program served a secondary function: to normalize the permanent presence of nuclear threat, rendering state authority indispensable in everyday life.",
    imageLabel: "Federal Civil Defense Administration",
  },
  {
    title: "Rodina-Mat Zovyot (The Motherland Calls)",
    origin: "USSR" as const,
    year: "1941 / circulated 1960s",
    analysis:
      "Irakli Toidze's iconic image of a Soviet woman holding aloft a conscription document — styled as the motherland herself — inverts conventional gender roles in service of mobilization. The figure's sightline directs the viewer off-frame toward an unseen threat, engineering a sense of imminent vulnerability intended to override individual hesitation.",
    imageLabel: "Irakli Toidze",
  },
  {
    title: "Are You Doing All You Can?",
    origin: "US" as const,
    year: "1942",
    analysis:
      "This poster class employs guilt as its primary mechanism — the rhetorical question implies a verdict before the viewer can respond. Distributed through workplaces and public transit, the campaign targeted adults in non-military roles, extending the logic of duty beyond battlefield service and framing inaction as a form of complicity.",
    imageLabel: "U.S. Government Printing Office",
  },
];

export default function PostersExhibit() {
  return (
    <div>
      {/* Exhibit Header */}
      <div className="bg-[--ink] text-[--paper] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-4">
            Exhibit I — 1941 to 1975
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-8">
            The Paper War
          </h1>
          <div className="w-16 h-1 bg-[--red] mb-8" />
          <p className="max-w-2xl text-base text-[--paper]/80 leading-relaxed">
            Before television saturated the domestic sphere, the poster was the
            primary instrument of state visual rhetoric. Printed in mass
            quantities, affixed to factory floors, transit stations, and
            schoolroom walls, Cold War posters operated not merely as
            advertising but as environmental conditioning — shaping the
            emotional and ideological landscape of daily life on both sides of
            the Iron Curtain.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[--muted] mb-10">
            8 Artifacts — Public Domain / Library of Congress
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[--rule]">
            {posters.map((poster) => (
              <div key={poster.title} className="bg-[--paper]">
                <ArtifactCard {...poster} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <div className="border-t border-[--rule] px-6 py-16 bg-[--ink] text-[--paper]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[--red] mb-4">
            Curatorial Note
          </p>
          <p className="text-base text-[--paper]/80 leading-relaxed">
            By the mid-1970s, the propaganda poster as a primary vehicle of
            state persuasion had largely given way to television advertising,
            news management, and psychological operations conducted through
            commercial media. The visual grammar it established — the heroic
            figure, the binary enemy, the sacrificial demand — migrated intact
            into broadcast, where it reached orders of magnitude more viewers
            with exponentially greater frequency. The poster did not disappear.
            It was absorbed.
          </p>
        </div>
      </div>
    </div>
  );
}
