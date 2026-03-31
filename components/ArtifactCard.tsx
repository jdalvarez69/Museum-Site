interface ArtifactCardProps {
  title: string;
  origin: "US" | "USSR";
  year: string;
  analysis: string;
  imageLabel?: string;
}

export default function ArtifactCard({
  title,
  origin,
  year,
  analysis,
  imageLabel,
}: ArtifactCardProps) {
  return (
    <article className="flex h-full flex-col border border-[--rule] bg-[--paper]">
      <div className="border-b border-[--rule] px-5 py-3">
        <p className="text-[10px] tracking-[0.18em] uppercase text-[--muted]">
          Object Label
        </p>
      </div>

      <div className="aspect-[3/4] bg-[--ink] flex items-center justify-center relative overflow-hidden border-b border-[--rule]">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[--paper]/18 text-6xl font-black uppercase tracking-[0.2em] select-none">
            {origin}
          </span>
          {imageLabel && (
            <span className="mt-3 text-[--paper]/45 text-[10px] tracking-[0.18em] uppercase">
              {imageLabel}
            </span>
          )}
        </div>
        <div className="absolute top-0 left-0 bg-[--red] text-[--paper] text-[10px] tracking-[0.18em] uppercase px-3 py-1">
          {origin}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3 border-b border-[--rule] pb-3">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[--muted] mb-2">
              Poster
            </p>
            <h3 className="text-sm font-bold uppercase tracking-tight leading-snug max-w-[16rem]">
              {title}
            </h3>
          </div>
          <span className="text-xs text-[--muted] shrink-0 font-mono">{year}</span>
        </div>

        {imageLabel && (
          <p className="text-[10px] tracking-[0.18em] uppercase text-[--muted]">
            {imageLabel}
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
