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
    name: "Radio Moscow World Service",
    operator: "Soviet State Radio",
    years: "1929 – 1991",
    target: "Global audiences; priority targeting of Western Europe, Latin America, Africa, and Asia",
    origin: "USSR",
    analysis:
      "Radio Moscow framed the USSR as the anti-colonial alternative to Western power. It translated Soviet ideology into a language of peace, development, and historical justice.",
  },
  {
    name: "Voice of America",
    operator: "U.S. Information Agency",
    years: "1942 – present",
    target: "Global audiences, with Cold War emphasis on USSR, Eastern Europe, Southeast Asia, and Africa",
    origin: "US",
    analysis:
      "Unlike covert stations, Voice of America drew credibility from declared authorship. Its persuasive force came from presenting openness itself as proof of democratic legitimacy.",
  },
  {
    name: "Radio Free Europe",
    operator: "CIA / National Committee for a Free Europe",
    years: "1949 – present",
    target:
      "Citizens of Soviet-bloc Eastern Europe: Poland, Czechoslovakia, Hungary, Romania, Bulgaria",
    origin: "US",
    analysis:
      "Radio Free Europe's authority depended on sounding local rather than American. It persuaded by imitating the independent press Soviet-bloc listeners had been denied.",
  },
  {
    name: "Psychological Warfare Leaflet Operations",
    operator: "U.S. Army / Air Force",
    years: "1950 – 1975",
    target: "North Korean and North Vietnamese military and civilian populations",
    origin: "US",
    analysis:
      "Though printed, these leaflet drops behaved like broadcast media: they reached mass audiences at once and aimed for immediate psychological effect. Their power lay in compression, repetition, and institutional authority.",
  },
  {
    name: "Radio Swan / Radio Americas",
    operator: "CIA",
    years: "1960 – 1968",
    target: "Cuba — general population and Cuban military personnel",
    origin: "US",
    analysis:
      "Radio Swan demonstrates the covert end of the spectrum: a station designed to conceal state authorship while issuing operational and psychological instructions. Here secrecy was part of the message's credibility.",
  },
  {
    name: "Vremena (Times) / Moscow Television",
    operator: "Soviet State Television",
    years: "1960 – 1991",
    target: "Soviet domestic population; also broadcast internationally via satellite from 1967",
    origin: "USSR",
    analysis:
      "If radio crossed borders, television stabilized the interior. Vremena functioned as a nightly ritual of state competence, making political order appear continuous and unquestionable.",
  },
];

export default function BroadcastExhibit() {
  return (
    <div>
      {/* Exhibit Header */}
      <div className="bg-[--ink] text-[--paper] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-4">
            Gallery II — Transnational Signals, 1929 to 1991
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-8">
            The Airwaves War
          </h1>
          <div className="w-16 h-1 bg-[--red] mb-8" />
          <p className="max-w-2xl text-base text-[--paper]/80 leading-relaxed">
            Radio and television reorganized Cold War space by allowing states
            to project authority beyond the limits of territory. Signals could
            cross borders, enter domestic interiors, and compete for credibility
            in the same hour. This gallery follows six operations that show how
            broadcast media made ideology feel immediate, routine, and
            difficult to escape.
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
              Read this timeline as a sequence of broadcasting strategies.
              Early entries focus on transmitting across borders; later entries
              show how the same logic extends into domestic television,
              clandestine stations, and mass psychological operations.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-4">
              Interpretive Lens
            </p>
            <p className="text-sm text-[--muted] leading-relaxed max-w-xl">
              The central question is not simply who broadcast, but why the
              signal was believed. Across the timeline, authority is built
              through tone, institutional posture, repetition, and control over
              what counts as credible information.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-3 mb-12">
            <p className="text-xs tracking-[0.25em] uppercase text-[--muted]">
              Timeline Sequence — 6 Broadcast Operations
            </p>
            <p className="max-w-2xl text-sm text-[--muted] leading-relaxed">
              The entries move from international radio toward hybrid and
              domestic systems, tracing how persuasion expanded from border
              crossing to everyday media routine.
            </p>
          </div>

          <div className="flex flex-col gap-0">
            {artifacts.map((a, i) => (
              <div
                key={a.name}
                className="grid grid-cols-[auto_1fr] gap-0 border-b border-[--rule] last:border-b-0"
              >
                <div className="w-20 pt-8 pr-4 flex flex-col items-center gap-2">
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[--muted]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
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

                <div className="py-8 pl-4">
                  <div className="mb-4 border-b border-[--rule] pb-4">
                    <p className="text-[10px] tracking-[0.18em] uppercase text-[--muted] mb-2">
                      Broadcast Object
                    </p>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                      <h2 className="text-xl font-black uppercase tracking-tight">
                        {a.name}
                      </h2>
                      <span
                        className={`text-[10px] tracking-[0.18em] uppercase px-2 py-0.5 ${
                          a.origin === "US"
                            ? "bg-[--red] text-[--paper]"
                            : "bg-[--ink] text-[--paper]"
                        }`}
                      >
                        {a.origin}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-5">
                    <div>
                      <p className="text-[10px] tracking-[0.18em] uppercase text-[--muted] mb-1">
                        Operator
                      </p>
                      <p className="text-[13px] leading-relaxed">{a.operator}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.18em] uppercase text-[--muted] mb-1">
                        Active
                      </p>
                      <p className="text-[13px] font-mono">{a.years}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-[10px] tracking-[0.18em] uppercase text-[--muted] mb-1">
                        Target Audience
                      </p>
                      <p className="text-[13px] leading-relaxed">{a.target}</p>
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
            The operations assembled here show that broadcast propaganda was not
            defined by one ideology or one medium. Its enduring structure lies
            in repetition, institutional posture, and the management of
            credibility. Shortwave radio, television news, and psychological
            leaflet campaigns differ in format, but each asks the audience to
            accept authority as if it were simply information.
          </p>
        </div>
      </div>
    </div>
  );
}
