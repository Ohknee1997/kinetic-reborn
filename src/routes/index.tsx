import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Copy, Search } from "lucide-react";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codes Worth Copying — Sweeps Casino Bonus Codes" },
      {
        name: "description",
        content:
          "Sixteen sweeps casino offers with working bonus codes, daily rewards and cheap LTC cash-outs. No fluff, just the codes.",
      },
      { property: "og:title", content: "Codes Worth Copying — Sweeps Casino Bonus Codes" },
      {
        property: "og:description",
        content: "Sixteen sweeps casino offers with working bonus codes and cheap LTC cash-outs.",
      },
    ],
  }),
  component: CodesPage,
});

function CodesPage() {
  const [query, setQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const list = useMemo(
    () =>
      casinos.filter((c) => {
        const matchQ =
          !query.trim() ||
          (c.name + c.blurb + c.code).toLowerCase().includes(query.trim().toLowerCase());
        const matchT =
          !tagFilter.trim() ||
          c.tags.some((t) => t.toLowerCase().includes(tagFilter.trim().toLowerCase()));
        return matchQ && matchT;
      }),
    [query, tagFilter],
  );

  const copy = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied((v) => (v === code ? null : v)), 1600);
  };

  return (
    <main className="min-h-screen bg-paper text-paper-foreground">
      <section className="mx-auto max-w-[1800px] px-4 pt-6 pb-3 sm:px-6">
        <p className="label-xs text-paper-foreground/50">CODES · SWEEPS · DAILY DRIPS</p>
        <h1 className="mt-1 font-display text-[10vw] leading-[0.82] tracking-[-0.04em] sm:text-[7vw] lg:text-[5.5vw]">
          CODES
          <br />
          WORTH
          <br />
          COPYING<span className="text-primary">.</span>
        </h1>
        <p className="mt-3 max-w-xl text-xs leading-relaxed text-paper-foreground/70">
          No mainstream sportsbooks. No $50 buy-in traps. Only free-to-play, daily-reward,
          no-deposit sweeps sites — worked, with real top-code copy. Free money you don't deposit
          to find.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <label className="flex min-w-0 items-center gap-2 border-2 border-paper-foreground bg-paper px-2.5 py-1.5">
            <Search className="size-3.5 shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a site or code"
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-paper-foreground/40 sm:w-56"
            />
          </label>
          <label className="flex min-w-0 items-center gap-2 border-2 border-paper-border bg-paper px-2.5 py-1.5">
            <input
              value={tagFilter}
              onChange={(e) => setTagFilter(e.target.value)}
              placeholder="Type a tag"
              className="w-24 bg-transparent text-sm outline-none placeholder:text-paper-foreground/40"
            />
          </label>
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-4 pb-24 sm:px-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <article
              key={c.id}
              className="relative flex flex-col overflow-hidden border-2 border-paper-foreground bg-paper"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-1 bottom-0 select-none font-display text-[4rem] leading-none tracking-[-0.05em] text-paper-foreground/[0.07] sm:text-[5rem]"
              >
                {c.name.split(/[.\s]/)[0]?.toUpperCase()}
              </span>

              <div className="relative flex min-w-0 items-start gap-2 p-3">
                <div className="grid size-9 shrink-0 place-items-center bg-paper-foreground font-display text-sm text-paper">
                  {c.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="truncate font-display text-base tracking-tight">{c.name}</h2>
                  <div className="mt-0.5 flex flex-wrap gap-1">
                    {c.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="label-xs border border-paper-foreground/30 px-1 py-0.5 font-bold text-paper-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-snug text-paper-foreground/70">
                    {c.blurb}
                  </p>
                </div>
                <span className="label-xs shrink-0 font-bold text-primary">FREE</span>
              </div>

              <div className="relative mx-3 mb-2 flex items-center justify-between gap-2 border-2 border-dashed border-primary/70 px-2.5 py-1.5">
                <div className="min-w-0">
                  <p className="label-xs text-paper-foreground/50">BONUS CODE</p>
                  <p className="truncate font-mono text-sm font-bold">{c.code}</p>
                </div>
                <button
                  onClick={() => copy(c.code)}
                  className="label-xs flex shrink-0 items-center gap-1 border-2 border-paper-foreground px-2 py-1 font-bold text-paper-foreground"
                >
                  {copied === c.code ? <Check className="size-3" /> : <Copy className="size-3" />}
                  {copied === c.code ? "COPIED" : "COPY"}
                </button>
              </div>

              <a
                href={c.link}
                className="label-xs relative mt-auto flex items-center justify-between border-t-2 border-paper-foreground bg-paper px-3 py-2 font-bold text-paper-foreground"
              >
                <span className="truncate">{c.reward}</span>
                <span className="shrink-0">CLAIM →</span>
              </a>
            </article>
          ))}
        </div>
        {list.length === 0 && (
          <p className="py-20 text-center text-sm text-paper-foreground/60">
            Nothing matches that search.
          </p>
        )}
      </section>
    </main>
  );
}
