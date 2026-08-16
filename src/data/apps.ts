export type EarnApp = {
  id: string;
  name: string;
  category: string;
  payout: string;
  blurb: string;
  accent: string;
};

export const earnApps: EarnApp[] = [
  { id: "mistplay", name: "Mistplay", category: "PLAY TO EARN", payout: "$10 - $60 / mo", blurb: "Android only. Play featured games, bank units, cash out to gift cards.", accent: "from-[#ff3b3b] to-[#ff8a3b]" },
  { id: "cashgiraffe", name: "Cash Giraffe", category: "PLAY TO EARN", payout: "$5 - $40 / mo", blurb: "Lightweight, low storage, pays out to PayPal at low thresholds.", accent: "from-[#00d1ff] to-[#0066ff]" },
  { id: "justplay", name: "JustPlay", category: "PLAY TO EARN", payout: "$8 - $50 / mo", blurb: "Passive-ish. Runs in background sessions, daily payout window.", accent: "from-[#8b5cf6] to-[#ec4899]" },
  { id: "freecash", name: "Freecash", category: "OFFERWALL", payout: "$20 - $300 / mo", blurb: "Big game offers. Crypto payouts direct to your own wallet.", accent: "from-[#22c55e] to-[#14b8a6]" },
  { id: "swagbucks", name: "Swagbucks", category: "OFFERWALL", payout: "$15 - $150 / mo", blurb: "Surveys, offers, cashback. Slow but extremely reliable.", accent: "from-[#facc15] to-[#f97316]" },
  { id: "kashkick", name: "KashKick", category: "OFFERWALL", payout: "$25 - $200 / mo", blurb: "Cash only, no points math. Casino offers pay the most here.", accent: "from-[#f43f5e] to-[#a21caf]" },
];
