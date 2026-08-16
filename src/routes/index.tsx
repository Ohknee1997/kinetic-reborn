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

const FILTERS = ["ALL", "SWEEPS", "DAILY BONUS", "FAST PAYOUT", "SPORTS", "NEW"];

function CodesPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [copied, setCopied] = useState<string | null>(null);

  const list = useMemo(
    () =>
      casinos.filter((c) => {
        const matchQ =
          !query.trim() ||
          (c.name + c.blurb + c.code).toLowerCase().includes(query.trim().toLowerCase());
        const matchF = filter === "ALL" || c.tags.includes(filter);
        return matchQ && matchF;
      }),
    [query, filter],
  );

  const copy = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied((v) => (v === code ? null : v)), 1600);
  };

  return (
    <main className="min-h-screen bg-paper text-paper-foreground">
      <section className="mx-auto max-w-[1800px] px-5 pt-12 pb-8 sm:px-8">
        <p className="label-xs text-paper-foreground/50">CODES · SWEEPS · DAILY DRIPS</p>
        <h1 className="mt-4 font-display text-[13vw] leading-[0.82] tracking-[-0.04em] sm:text-[9vw] lg:text-[7.5vw]">
          CODES
          <br />
          WORTH
          <br />
          COPYING<span className="text-primary">.</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-paper-foreground/70">
          No mainstream sportsbooks. No $50 buy-in traps. Only free-to-play, daily-reward,
          no-deposit sweeps sites — worked, with real top-code copy. Free money you don't deposit
          to find.
        </p>

        <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap">
          <label className="flex min-w-0 items-center gap-2 border-2 border-paper-foreground bg-paper px-3 py-2">
            <Search className="size-4 shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a site or code"
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-paper-foreground/40 sm:w-64"
            />
          </label>
          <div className="col-span-2 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`label-xs border-2 px-3 py-2 font-bold transition-colors ${
                  filter === f
                    ? "border-paper-foreground bg-paper-foreground text-paper"
                    : "border-paper-border text-paper-foreground/70 hover:border-paper-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-5 pb-24 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {list.map((c) => (
            <article
              key={c.id}
              className="relative overflow-hidden border-2 border-paper-foreground bg-paper"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 bottom-0 select-none font-display text-[5.5rem] leading-none tracking-[-0.05em] text-paper-foreground/[0.07] sm:text-[7rem]"
              >
                {c.name.split(/[.\s]/)[0]?.toUpperCase()}
              </span>

              <div className="relative flex min-w-0 items-start gap-3 p-4">
                <div className="grid size-11 shrink-0 place-items-center bg-paper-foreground font-display text-base text-paper">
                  {c.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="truncate font-display text-lg tracking-tight">{c.name}</h2>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="label-xs border border-paper-foreground/30 px-1.5 py-0.5 font-bold text-paper-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-paper-foreground/70">{c.blurb}</p>
                </div>
                <span className="label-xs shrink-0 font-bold text-primary">FREE</span>
              </div>

              <div className="relative mx-4 mb-4 flex items-center justify-between gap-3 border-2 border-dashed border-primary/70 px-3 py-2">
                <div className="min-w-0">
                  <p className="label-xs text-paper-foreground/50">BONUS CODE</p>
                  <p className="truncate font-mono text-base font-bold">{c.code}</p>
                </div>
                <button
                  onClick={() => copy(c.code)}
                  className="label-xs flex shrink-0 items-center gap-1.5 bg-paper-foreground px-3 py-2 font-bold text-paper"
                >
                  {copied === c.code ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                  {copied === c.code ? "COPIED" : "COPY"}
                </button>
              </div>

              <a
                href={c.link}
                className="label-xs relative flex items-center justify-between bg-paper-foreground px-4 py-2.5 font-bold text-paper"
              >
                <span>{c.reward}</span>
                <span>CLAIM →</span>
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
