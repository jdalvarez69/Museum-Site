interface ArtifactCardProps {
  title: string;
  origin: "US" | "USSR";
  year: string;
  analysis: string;
  creator?: string;
  medium: string;
  circulation: string;
  repository: string;
  accession: string;
  archiveStatus: string;
}

export default function ArtifactCard({
  title,
  origin,
  year,
  analysis,
  creator,
  medium,
  circulation,
  repository,
  accession,
  archiveStatus,
}: ArtifactCardProps) {
  return (
    <article className="flex h-full flex-col border border-[--rule] bg-[--paper]">
      <div className="border-b border-[--rule] px-5 py-3">
        <p className="text-[10px] tracking-[0.18em] uppercase text-[--muted]">
          Archival Object Record
        </p>
      </div>

      <div className="aspect-[3/4] bg-[--ink] flex items-center justify-center relative overflow-hidden border-b border-[--rule]">
        <div className="absolute inset-4 border border-[--paper]/25" />
        <div className="absolute inset-8 border border-[--paper]/15" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <p className="text-[10px] tracking-[0.18em] uppercase text-[--paper]/55 mb-3">
            Archival Reproduction
          </p>
          <p className="text-[--paper]/85 text-sm font-semibold uppercase tracking-[0.12em] max-w-[14rem] leading-snug">
            {title}
          </p>
          <p className="mt-3 text-[--paper]/45 text-[10px] tracking-[0.18em] uppercase">
            {origin} · {year}
          </p>
        </div>

        <div className="absolute top-0 left-0 bg-[--red] text-[--paper] text-[10px] tracking-[0.18em] uppercase px-3 py-1">
          {origin}
        </div>
        <div className="absolute bottom-0 right-0 bg-[--paper] text-[--ink] text-[10px] tracking-[0.16em] uppercase px-3 py-1 border-t border-l border-[--rule]">
          {accession}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3 border-b border-[--rule] pb-3">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[--muted] mb-2">
              Object
            </p>
            <h3 className="text-sm font-bold uppercase tracking-tight leading-snug max-w-[16rem]">
              {title}
            </h3>
          </div>
          <span className="text-xs text-[--muted] shrink-0 font-mono">{year}</span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] border-b border-[--rule] pb-3">
          <div>
            <p className="text-[10px] tracking-[0.16em] uppercase text-[--muted]">Medium</p>
            <p className="text-[--ink] leading-snug">{medium}</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.16em] uppercase text-[--muted]">Circulation</p>
            <p className="text-[--ink] leading-snug">{circulation}</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.16em] uppercase text-[--muted]">Repository</p>
            <p className="text-[--ink] leading-snug">{repository}</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.16em] uppercase text-[--muted]">Archive Status</p>
            <p className="text-[--ink] leading-snug">{archiveStatus}</p>
          </div>
        </div>

        {creator && (
          <p className="text-[10px] tracking-[0.16em] uppercase text-[--muted]">
            Creator / Source: {creator}
          </p>
        )}

        <div className="w-8 h-px bg-[--red]" />
        <p className="text-[13px] text-[--muted] leading-relaxed">
          {analysis}
        </p>
      </div>
    </article>
  );
}
