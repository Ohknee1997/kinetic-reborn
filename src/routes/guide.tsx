import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Cash Out Without the Freeze — Crypto Survival Guide" },
      {
        name: "description",
        content:
          "Move your free money without losing it to fees, frozen accounts or a wrong-network mistake. Step-by-step, cheapest rails, and the rules that keep accounts open.",
      },
      { property: "og:title", content: "Cash Out Without the Freeze" },
      {
        property: "og:description",
        content:
          "The no-BS survival guide for moving free money: cheap rails, self-custody, and never sending straight to an exchange.",
      },
    ],
  }),
  component: GuidePage,
});

const steps = [
  ["01", "Open a CEX account", "Coinbase, Kraken, Crypto.com — pick one, link your bank or debit, finish KYC (selfie + photo of your ID). This is the on-ramp: USD in, crypto out."],
  ["02", "Buy the cheap coin", "Buy the minimum amount of SOL or LTC. Not ETH. You are not investing — you are buying a delivery truck for your money, not a lottery ticket. And make sure the site you're sending to actually takes that coin first — every casino I've ever used takes LTC, plenty of them won't take SOL or USDC. Check before you buy."],
  ["03", "Install a self-custody wallet", "Phantom (SOL) or Exodus / Trust Wallet (LTC). Non-custodial means nobody cleans up your mess after this point — and nobody can freeze you either."],
  ["04", "Write the 12 words on paper", "Numbered 1 through 12, in order. No screenshots. No notes app. No email. No photo of the screen. Paper in a drawer or safe — that's it."],
  ["05", "Receive → copy your address", "In your wallet press Receive, pick the same coin, copy the address (or use the QR). That address belongs to that wallet only."],
  ["06", "Send from CEX to your wallet", "On the exchange press Send, paste your wallet address, match the network exactly, confirm 2FA. Now the money is yours, not the exchange's."],
  ["07", "Wallet → wherever you're sending", "From your wallet, send to the destination address. You're the only middleman between your bank and wherever the money goes."],
  ["08", "Cash out the exact same way, backwards", "Destination → your wallet → CEX → bank. Never send straight from a gambling site to an exchange. That's the move that gets accounts frozen."],
] as const;

const exchanges = ["Coinbase", "Kraken", "Crypto.com", "Gemini", "Uphold", "Bitstamp", "Binance.US", "eToro USA", "Robinhood Crypto", "BitFlyer USA"];
const wallets = ["MetaMask", "Trust Wallet", "Phantom", "Coinbase Wallet", "Exodus", "Rabby Wallet", "OKX Web3 Wallet", "Zengo", "Guarda"];

const rules = [
  ["HAZARD", "danger", "The Cardinal Rule", "NEVER send crypto directly between an exchange and a gambling/sweeps site. Cash App and Coinbase flag those addresses and freeze funds for months. Always route through your own wallet first."],
  ["HAZARD", "danger", "Your 12 words ARE the money", "Anyone with the seed phrase owns the wallet. No support line, no reversal, no recovery. Paper only, stored offline, order preserved."],
  ["WATCH IT", "warn", "Match the network, twice", "Sending LTC on the wrong network or pasting a SOL address for LTC deletes the money permanently. Read the coin AND the network before you hit send."],
  ["WATCH IT", "warn", "Never stake money you need tonight", "Staking locks funds for days. That's not investing here — that's a hold on money you needed right now."],
  ["GOOD HABIT", "ok", "Test with a few bucks first", "First transfer to any new address: send the smallest amount, confirm it lands, then send the rest. Every single time."],
  ["GOOD HABIT", "ok", "Keep gas money in the wallet", "Leave a couple dollars of the native coin in the wallet so you can always move funds out later."],
] as const;

const fees = [
  ["LTC", "Litecoin", "~$0.02", "2-5 min", "USE THIS"],
  ["SOL", "Solana", "~$0.01", "Seconds", "USE THIS"],
  ["TRX", "USDT (TRC20)", "~$1.00", "1-3 min", "USE THIS"],
  ["ETH", "Ethereum (ERC20)", "$4 - $25", "1-5 min", "AVOID"],
  ["BTC", "Bitcoin (mainnet)", "$2 - $15", "10-60 min", "AVOID"],
] as const;

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((i) => (
        <span key={i} className="label-xs border border-border px-3 py-1.5 text-muted-foreground">
          {i}
        </span>
      ))}
    </div>
  );
}

function GuidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="mx-auto max-w-[1800px] px-5 pt-14 pb-16 sm:px-8">
        <p className="label-xs text-accent">MODULE C / MOVE IT FREE</p>
        <h1 className="mt-5 font-display text-[14vw] leading-[0.82] tracking-[-0.05em] sm:text-[9vw]">
          CASH OUT
          <br />
          WITHOUT THE
          <br />
          FREEZE<span className="text-primary">.</span>
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          The no-BS survival guide for moving your free money without losing it to fees, frozen
          accounts, or a wrong-network mistake. Built on real-life lessons — read it like a Reddit
          thread that saves your account.
        </p>
      </section>

      {/* 1 — THE WALKTHROUGH (moved to the top) */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-[1800px] px-5 py-12 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="label-xs mb-4 text-center text-muted-foreground">
                STEP 1 · PICK AN EXCHANGE (CEX)
              </p>
              <Chips items={exchanges} />
            </div>
            <div>
              <p className="label-xs mb-4 text-center text-muted-foreground">
                STEP 2 · PICK A SELF-CUSTODY WALLET
              </p>
              <Chips items={wallets} />
            </div>
          </div>

          <div className="mt-14 grid gap-x-16 gap-y-10 lg:grid-cols-2">
            {steps.map(([n, title, body]) => (
              <div key={n} className="min-w-0 border-t border-border pt-4">
                <p className="label-xs text-primary">{n}</p>
                <h3 className="mt-2 font-display text-lg tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — DO'S AND DON'TS */}
      <section className="mx-auto max-w-[1800px] px-5 py-14 sm:px-8">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-3">
          {rules.map(([tag, tone, title, body]) => (
            <div key={title} className="min-w-0 border-t border-border pt-4">
              <p
                className={`label-xs ${
                  tone === "danger" ? "text-danger" : tone === "warn" ? "text-warn" : "text-ok"
                }`}
              >
                ▲ {tag}
              </p>
              <h3 className="mt-2 font-display text-lg tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 — FEE LADDER */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-[1800px] px-5 py-12 sm:px-8">
          <p className="label-xs text-accent">FEE LADDER / PICK THE CHEAP RAIL</p>
          <h2 className="mt-3 font-display text-2xl tracking-tight sm:text-3xl">
            Fees are a choice you make at the send screen.
          </h2>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="label-xs border-b border-border text-muted-foreground">
                  <th className="py-2 pr-4 font-normal">COIN</th>
                  <th className="py-2 pr-4 font-normal">NETWORK</th>
                  <th className="py-2 pr-4 font-normal">TYPICAL FEE</th>
                  <th className="py-2 pr-4 font-normal">SETTLES IN</th>
                  <th className="py-2 font-normal">VERDICT</th>
                </tr>
              </thead>
              <tbody>
                {fees.map(([coin, net, fee, settle, verdict]) => (
                  <tr key={coin} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-mono font-bold text-accent">{coin}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{net}</td>
                    <td className="py-3 pr-4 font-mono">{fee}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{settle}</td>
                    <td
                      className={`label-xs py-3 font-bold ${
                        verdict === "AVOID" ? "text-danger" : "text-ok"
                      }`}
                    >
                      {verdict}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Buy the coin the destination accepts on the cheapest network it supports — usually LTC
            or SOL. You're not holding it, you're only using it to carry your money for ten minutes.
          </p>
        </div>
      </section>

      {/* 4 — WRONG WAY / RIGHT WAY (moved to the bottom) */}
      <section className="mx-auto grid max-w-[1800px] gap-px bg-border lg:grid-cols-2">
        <div className="bg-background px-6 py-14 text-center">
          <p className="label-xs text-danger">✕ THE WRONG WAY</p>
          <h2 className="mt-3 font-display text-2xl tracking-tight">Straight from the exchange.</h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="label-xs border-2 border-border px-3 py-1.5">EXCHANGE</span>
            <span className="text-danger">→</span>
            <span className="label-xs border-2 border-danger px-3 py-1.5 text-danger">SITE</span>
          </div>
          <ul className="mt-6 space-y-1 text-sm text-muted-foreground">
            <li>· Coinbase, Cash App and Kraken flag gambling addresses.</li>
            <li>· Account frozen, funds held for months, permanent ban.</li>
            <li>· Every deposit and withdrawal is stamped with your name.</li>
          </ul>
        </div>
        <div className="bg-background px-6 py-14 text-center">
          <p className="label-xs text-accent">✓ THE OHKNEE WAY</p>
          <h2 className="mt-3 font-display text-2xl tracking-tight">
            Always hop through your own wallet.
          </h2>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="label-xs border-2 border-accent px-3 py-1.5 text-accent">EXCHANGE</span>
            <span className="text-accent">→</span>
            <span className="label-xs border-2 border-accent px-3 py-1.5 text-accent">
              YOUR WALLET
            </span>
            <span className="text-accent">→</span>
            <span className="label-xs border-2 border-border px-3 py-1.5">SITE</span>
          </div>
          <ul className="mt-6 space-y-1 text-sm text-muted-foreground">
            <li>· The exchange only ever sees a transfer to your own wallet.</li>
            <li>· Pennies in fees on LTC or SOL instead of ETH gas.</li>
            <li>· Same route in reverse on the way out. No exceptions.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
