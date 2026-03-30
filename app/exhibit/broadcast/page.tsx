interface BroadcastArtifact {
  name: string;
  operator: string;
  years: string;
  target: string;
  analysis: string;
  origin: "US" | "USSR";
}

const artifacts: BroadcastArtifact[] = [
  {
    name: "Radio Free Europe",
    operator: "CIA / National Committee for a Free Europe",
    years: "1949 – present",
    target:
      "Citizens of Soviet-bloc Eastern Europe: Poland, Czechoslovakia, Hungary, Romania, Bulgaria",
    origin: "US",
    analysis:
      "Funded covertly by the CIA until 1972, Radio Free Europe presented itself as the authentic voice of exiled citizens broadcasting home. Its authority derived from the fiction of independence — listeners were told they were hearing news suppressed by their own governments. The station pioneered what would later be called 'surrogate broadcasting': not advocating for American policy, but simulating the domestic press that Soviet-bloc states had eliminated. Its influence was confirmed by the volume of Soviet jamming resources dedicated to suppressing its signal.",
  },
  {
    name: "Voice of America",
    operator: "U.S. Information Agency",
    years: "1942 – present",
    target: "Global audiences, with Cold War emphasis on USSR, Eastern Europe, Southeast Asia, and Africa",
    origin: "US",
    analysis:
      "Unlike Radio Free Europe's surrogate model, Voice of America operated openly as an arm of U.S. foreign policy — its founding charter explicitly required it to represent American society accurately, including its contradictions. This transparency was itself a strategic calculation: in contrast to Soviet media, VOA's willingness to report on American racial violence or economic failures lent it credibility that outright propaganda could not achieve. The tension between journalism and statecraft defined its operation throughout the Cold War.",
  },
  {
    name: "Radio Moscow World Service",
    operator: "Soviet State Radio",
    years: "1929 – 1991",
    target: "Global audiences; priority targeting of Western Europe, Latin America, Africa, and Asia",
    origin: "USSR",
    analysis:
      "Broadcasting in over 80 languages at its peak, Radio Moscow was the Soviet counterpart to VOA — and its mirror image in strategy. Where American broadcasts emphasized freedom and consumer prosperity, Radio Moscow emphasized anti-colonialism, nuclear disarmament, and the contradictions of Western capitalism. Its most effective programming was not directed at hardened Western liberals but at postcolonial nations comparing two competing models of modernization. The decolonization era was, in significant part, a radio war.",
  },
  {
    name: "Radio Swan / Radio Americas",
    operator: "CIA",
    years: "1960 – 1968",
    target: "Cuba — general population and Cuban military personnel",
    origin: "US",
    analysis:
      "Established on Swan Island in the Caribbean to support the Bay of Pigs invasion, Radio Swan broadcast instructions to CIA-trained operatives and disinformation to the Cuban public under the cover of an independent commercial station. It represents a category of operation — clandestine radio — in which the U.S. deployed fictional broadcaster identities to obscure state authorship. The failure of the Bay of Pigs operation exposed its true nature and became a template for subsequent scrutiny of covert U.S. propaganda infrastructure.",
  },
  {
    name: "Vremena (Times) / Moscow Television",
    operator: "Soviet State Television",
    years: "1960 – 1991",
    target: "Soviet domestic population; also broadcast internationally via satellite from 1967",
    origin: "USSR",
    analysis:
      "Soviet domestic television propaganda differed structurally from its radio counterpart: where radio addressed foreign audiences, television was the primary instrument of internal ideological maintenance. The nightly news — Vremena — functioned less as information delivery than as ritual affirmation of state competence and socialist progress. Scholars of Soviet media have documented the pronounced passivity this produced over decades: audiences who neither believed nor disbelieved official broadcasts, but inhabited a managed unreality as a practiced survival strategy — a condition that proved, in its way, more durable than active belief.",
  },
  {
    name: "Psychological Warfare Leaflet Operations",
    operator: "U.S. Army / Air Force",
    years: "1950 – 1975",
    target: "North Korean and North Vietnamese military and civilian populations",
    origin: "US",
    analysis:
      "Though technically print-based, aerial leaflet drops functioned as a broadcast medium: they reached mass audiences simultaneously, were not filtered through editorial gatekeepers, and were designed for short-duration psychological effect rather than sustained argument. The Korean and Vietnam-era leaflet campaigns distributed over three billion individual items. Their content ranged from safe-conduct passes to forged official documents to explicit descriptions of enemy casualties — a spectrum revealing the full range of authority, guilt, and fear as persuasive levers.",
  },
];

export default function BroadcastExhibit() {
  return (
    <div>
      {/* Exhibit Header */}
      <div className="bg-[--ink] text-[--paper] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-4">
            Exhibit II — 1949 to 1989
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-8">
            The Airwaves War
          </h1>
          <div className="w-16 h-1 bg-[--red] mb-8" />
          <p className="max-w-2xl text-base text-[--paper]/80 leading-relaxed">
            Radio abolished the geography of the Iron Curtain. Signals crossed
            borders that bodies could not, delivering competing realities into
            kitchens and living rooms across the bloc. Both superpowers
            recognized the electromagnetic spectrum as strategic terrain and
            invested accordingly — in transmitters, in translators, in
            jamming infrastructure, and in the construction of broadcast
            identities designed to be believed. This exhibit documents six
            operations that shaped what millions of people thought they knew.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[--muted] mb-12">
            6 Operations Documented
          </p>

          <div className="flex flex-col gap-0">
            {artifacts.map((a, i) => (
              <div
                key={a.name}
                className="grid grid-cols-[auto_1fr] gap-0 border-b border-[--rule] last:border-b-0"
              >
                {/* Year column */}
                <div className="w-16 pt-8 pr-4 flex flex-col items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      a.origin === "US"
                        ? "border-[--red] bg-[--red]"
                        : "border-[--ink] bg-[--ink]"
                    }`}
                  />
                  {i < artifacts.length - 1 && (
                    <div className="flex-1 w-px bg-[--rule]" />
                  )}
                </div>

                {/* Content */}
                <div className="py-8 pl-4">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                    <h2 className="text-xl font-black uppercase tracking-tight">
                      {a.name}
                    </h2>
                    <span
                      className={`text-[10px] tracking-widest uppercase px-2 py-0.5 ${
                        a.origin === "US"
                          ? "bg-[--red] text-[--paper]"
                          : "bg-[--ink] text-[--paper]"
                      }`}
                    >
                      {a.origin}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-4">
                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-[--muted]">
                        Operator —{" "}
                      </span>
                      <span className="text-[13px]">{a.operator}</span>
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-[--muted]">
                        Active —{" "}
                      </span>
                      <span className="text-[13px] font-mono">{a.years}</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-[10px] tracking-widest uppercase text-[--muted]">
                        Target Audience —{" "}
                      </span>
                      <span className="text-[13px]">{a.target}</span>
                    </div>
                  </div>

                  <div className="w-8 h-px bg-[--red] mb-4" />
                  <p className="text-sm text-[--muted] leading-relaxed max-w-2xl">
                    {a.analysis}
                  </p>
                </div>
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
            The broadcast operations documented here did not end with the Cold
            War. Radio Free Europe operates today. Voice of America continues to
            broadcast. The infrastructure of state-sponsored information
            operations was not dismantled in 1991 — it was digitized. The
            transition from shortwave radio to social media platforms preserved
            the essential architecture: anonymous or pseudonymous authorship,
            mass simultaneous delivery, content calibrated to target audience
            psychology, and state funding obscured behind institutional distance.
            The Cold War airwaves war has a direct genealogy that extends to the
            present.
          </p>
        </div>
      </div>
    </div>
  );
}
