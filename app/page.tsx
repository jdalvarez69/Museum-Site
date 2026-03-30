import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-[--ink] text-[--paper] px-6 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[--red] mb-6">
            Permanent Collection — 1947 to 1991
          </p>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-none mb-10">
            Museum of Cold War Propaganda
          </h1>
          <div className="w-16 h-1 bg-[--red] mb-10" />
          <p className="max-w-xl text-base md:text-lg text-[--paper]/80 leading-relaxed mb-12">
            An examination of how the United States and Soviet Union weaponized
            image, language, and broadcast to manufacture consent, engineer fear,
            and construct competing visions of civilization.
          </p>
          <Link
            href="/exhibit/posters"
            className="inline-block border border-[--red] text-[--red] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[--red] hover:text-[--paper] transition-all"
          >
            Enter Exhibition
          </Link>
        </div>
      </section>

      <section className="border-b border-[--rule] px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <blockquote className="border-l-4 border-[--red] pl-6 max-w-3xl">
            <p className="text-xl md:text-2xl font-light italic leading-snug text-[--ink] mb-4">
              &ldquo;Propaganda does not deceive people as much as it helps them
              deceive themselves.&rdquo;
            </p>
            <cite className="text-xs tracking-widest uppercase text-[--muted]">
              — Adapted from Eric Hoffer
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[--muted] mb-12">
            Current Exhibitions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[--rule]">
            <Link
              href="/exhibit/posters"
              className="group bg-[--paper] p-10 hover:bg-[--ink] hover:text-[--paper] transition-all"
            >
              <p className="text-xs tracking-widest uppercase text-[--red] mb-4">Exhibit I</p>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-4">The Paper War</h2>
              <p className="text-sm text-[--muted] group-hover:text-[--paper]/70 leading-relaxed mb-8">
                Propaganda posters as instruments of mass persuasion — examining
                visual rhetoric deployed by both superpowers from 1947 to 1975.
              </p>
              <span className="text-xs tracking-widest uppercase text-[--red] border-b border-[--red] pb-0.5">
                View Exhibit →
              </span>
            </Link>
            <Link
              href="/exhibit/broadcast"
              className="group bg-[--paper] p-10 hover:bg-[--ink] hover:text-[--paper] transition-all"
            >
              <p className="text-xs tracking-widest uppercase text-[--red] mb-4">Exhibit II</p>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-4">The Airwaves War</h2>
              <p className="text-sm text-[--muted] group-hover:text-[--paper]/70 leading-relaxed mb-8">
                Radio and broadcast as vectors of ideological penetration —
                tracing the clandestine and overt war for the electromagnetic
                spectrum from 1950 to 1989.
              </p>
              <span className="text-xs tracking-widest uppercase text-[--red] border-b border-[--red] pb-0.5">
                View Exhibit →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[--ink] text-[--paper] px-6 py-16 border-t border-[--rule]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-3">Period</p>
            <p className="text-2xl font-bold">1947–1991</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-3">Artifacts</p>
            <p className="text-2xl font-bold">14 Primary Sources</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-[--red] mb-3">Scope</p>
            <p className="text-2xl font-bold">US &amp; Soviet Union</p>
          </div>
        </div>
      </section>
    </div>
  );
}
