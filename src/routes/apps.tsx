import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Image as ImageIcon, MessageSquare, Send, X } from "lucide-react";
import { earnApps } from "@/data/apps";

export const Route = createFileRoute("/apps")({
  head: () => ({
    meta: [
      { title: "Play-to-Earn Apps — Notes, Steps & Live Chat" },
      {
        name: "description",
        content:
          "Play-to-earn and offerwall apps with room for your own write-ups, screenshots of each offer flow, and a live chat log.",
      },
      { property: "og:title", content: "Play-to-Earn Apps — Notes, Steps & Live Chat" },
      {
        property: "og:description",
        content: "Earn apps with long-form notes, step screenshots and a live chat room.",
      },
    ],
  }),
  component: AppsPage,
});

type Shot = { id: string; url: string; name: string };

function AppsPage() {
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [shots, setShots] = useState<Record<string, Shot[]>>({});

  const addShots = (id: string, files: FileList | null) => {
    if (!files) return;
    const next = Array.from(files).map((f) => ({
      id: `${id}-${f.name}-${Math.random().toString(36).slice(2, 7)}`,
      url: URL.createObjectURL(f),
      name: f.name,
    }));
    setShots((s) => ({ ...s, [id]: [...(s[id] ?? []), ...next] }));
  };

  const removeShot = (id: string, shotId: string) =>
    setShots((s) => ({ ...s, [id]: (s[id] ?? []).filter((x) => x.id !== shotId) }));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-[1400px] px-5 pt-14 pb-10 sm:px-8">
        <p className="label-xs text-primary">MODULE B · PLAY TO EARN</p>
        <h1 className="mt-4 font-display text-[12vw] leading-[0.85] tracking-[-0.04em] sm:text-[7vw] lg:text-[5.5vw]">
          APPS THAT
          <br />
          ACTUALLY PAY<span className="text-primary">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          One card per app with room to breathe: write the full walkthrough, drop screenshots of
          each step, and keep the offer-specific gotchas next to the offer itself.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] space-y-8 px-5 pb-16 sm:px-8">
        {earnApps.map((a) => (
          <article key={a.id} className="border border-border bg-card">
            <div
              className={`relative flex h-36 items-end overflow-hidden bg-gradient-to-br ${a.accent} px-6 py-4`}
            >
              <span
                aria-hidden
                className="absolute -bottom-4 right-2 select-none font-display text-[5rem] leading-none tracking-[-0.05em] text-background/20 sm:text-[7rem]"
              >
                {a.name.toUpperCase()}
              </span>
              <div className="relative min-w-0">
                <p className="label-xs font-bold text-background/80">{a.category}</p>
                <h2 className="font-display text-3xl tracking-tight text-background">{a.name}</h2>
              </div>
            </div>

            <div className="grid gap-8 p-6 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="label-xs border border-border px-2 py-1 text-muted-foreground">
                    PAYOUT {a.payout}
                  </span>
                  <p className="text-sm text-muted-foreground">{a.blurb}</p>
                </div>

                <label className="label-xs mt-6 block text-muted-foreground" htmlFor={`n-${a.id}`}>
                  YOUR WRITE-UP · STEPS & PROCESS
                </label>
                <textarea
                  id={`n-${a.id}`}
                  value={notes[a.id] ?? ""}
                  onChange={(e) => setNotes((n) => ({ ...n, [a.id]: e.target.value }))}
                  rows={10}
                  placeholder={`Two or three paragraphs on ${a.name}: how you sign up, which offers are worth it, the exact steps you follow, where people get stuck, and how the payout lands.`}
                  className="mt-2 w-full resize-y border border-input bg-background p-4 text-sm leading-relaxed outline-none placeholder:text-muted-foreground/50 focus:border-primary"
                />
              </div>

              <div className="min-w-0">
                <p className="label-xs text-muted-foreground">STEP SCREENSHOTS</p>
                <label className="mt-2 flex cursor-pointer flex-col items-center justify-center gap-2 border border-dashed border-border p-6 text-center transition-colors hover:border-primary">
                  <ImageIcon className="size-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Upload photos of each step
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => addShots(a.id, e.target.files)}
                  />
                </label>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {(shots[a.id] ?? []).map((s, i) => (
                    <div key={s.id} className="group relative border border-border">
                      <img src={s.url} alt={`${a.name} step ${i + 1}`} className="h-24 w-full object-cover" />
                      <span className="label-xs absolute left-1 top-1 bg-background/80 px-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <button
                        onClick={() => removeShot(a.id, s.id)}
                        aria-label="Remove screenshot"
                        className="absolute right-1 top-1 bg-background/80 p-0.5"
                      >
                        <X className="size-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <LiveChat />
    </main>
  );
}

type Msg = { id: number; user: string; text: string; at: string };

function LiveChat() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: 1, user: "ohknee", text: "Chat log is live — post proof, codes, and payout times here.", at: "3:12 AM" },
    { id: 2, user: "dez", text: "Freecash casino offer paid me in 40 min straight to LTC.", at: "3:19 AM" },
  ]);
  const [draft, setDraft] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setMsgs((m) => [
      ...m,
      {
        id: m.length + 1,
        user: "you",
        text: draft.trim(),
        at: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      },
    ]);
    setDraft("");
  };

  return (
    <section id="chat" className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8">
      <div className="border border-border bg-card">
        <header className="flex items-center gap-2 border-b border-border px-5 py-3">
          <MessageSquare className="size-4 text-primary" />
          <h2 className="font-display text-lg tracking-tight">LIVE CHAT</h2>
          <span className="label-xs ml-auto text-ok">● ONLINE</span>
        </header>
        <div className="max-h-80 space-y-3 overflow-y-auto px-5 py-4">
          {msgs.map((m) => (
            <div key={m.id} className="min-w-0">
              <p className="label-xs text-muted-foreground">
                {m.user} · {m.at}
              </p>
              <p className="text-sm leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
        <form onSubmit={send} className="flex gap-2 border-t border-border p-3">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Say something…"
            className="min-w-0 flex-1 border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <button className="flex shrink-0 items-center gap-2 bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
            <Send className="size-4" /> Send
          </button>
        </form>
      </div>
      <p className="label-xs mt-3 text-muted-foreground">
        NOTE · CHAT, NOTES AND UPLOADS ARE LOCAL TO THIS BROWSER UNTIL A BACKEND IS TURNED ON.
      </p>
    </section>
  );
}
