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
    <article className="flex flex-col border border-[--rule] bg-[--paper] group hover:border-[--ink] transition-colors">
      {/* Image placeholder */}
      <div className="aspect-[3/4] bg-[--ink] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[--paper]/20 text-6xl font-black uppercase tracking-widest select-none">
            {origin}
          </span>
          {imageLabel && (
            <span className="text-[--paper]/40 text-xs tracking-widest uppercase mt-2">
              {imageLabel}
            </span>
          )}
        </div>
        {/* Red corner tag */}
        <div className="absolute top-0 left-0 bg-[--red] text-[--paper] text-[10px] tracking-widest uppercase px-3 py-1">
          {origin}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold uppercase tracking-tight leading-snug">
            {title}
          </h3>
          <span className="text-xs text-[--muted] shrink-0 font-mono">{year}</span>
        </div>
        <div className="w-8 h-px bg-[--red]" />
        <p className="text-[13px] text-[--muted] leading-relaxed">{analysis}</p>
      </div>
    </article>
  );
}
