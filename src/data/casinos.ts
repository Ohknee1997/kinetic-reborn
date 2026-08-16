export type Offer = {
  id: string;
  name: string;
  tags: string[];
  blurb: string;
  code: string;
  reward: string;
  link: string;
};

export const casinos: Offer[] = [
  { id: "stake", name: "Stake.us", tags: ["SWEEPS", "NO KYC TO PLAY"], blurb: "Daily login drip, big Discord raindrops, LTC in and out.", code: "OHKNEE", reward: "$25 Stake Cash + 250K GC", link: "#" },
  { id: "mcluck", name: "McLuck", tags: ["SWEEPS", "FAST PAYOUT"], blurb: "Slot heavy, redeems land same day if you keep it under $500.", code: "MCOHKNEE", reward: "57.5K GC + 32 SC", link: "#" },
  { id: "pulsz", name: "Pulsz", tags: ["SWEEPS", "DAILY BONUS"], blurb: "Cheapest first purchase in the space. Skip the mail-in.", code: "PULSZ25", reward: "367K GC + 32.3 SC", link: "#" },
  { id: "fortune-coins", name: "Fortune Coins", tags: ["SWEEPS", "NO PURCHASE"], blurb: "Free daily wheel plus social posts for extra FC.", code: "FCOHK", reward: "890K GC + 3 FC", link: "#" },
  { id: "golden-hearts", name: "Golden Hearts", tags: ["CHARITY", "SWEEPS"], blurb: "Donation model, easiest daily free coins of the bunch.", code: "GHOHKNEE", reward: "$5 free + 100% match", link: "#" },
  { id: "crown-coins", name: "Crown Coins", tags: ["SWEEPS", "NEW"], blurb: "New rooms every week, redemptions via LTC are quick.", code: "CROWN10", reward: "100K CC + 2 SC", link: "#" },
  { id: "hello-millions", name: "Hello Millions", tags: ["SWEEPS"], blurb: "Small library, but the daily wheel actually pays.", code: "HMOHK", reward: "200K GC + 3 SC", link: "#" },
  { id: "jackpota", name: "Jackpota", tags: ["SWEEPS", "DAILY BONUS"], blurb: "Same backend as McLuck — stack both dailies.", code: "JPOHK", reward: "57.5K GC + 27.5 SC", link: "#" },
  { id: "sweepslots", name: "SweepSlots", tags: ["SWEEPS"], blurb: "Underrated. Support answers in minutes on live chat.", code: "SWEEPOHK", reward: "100K GC + 10 SC", link: "#" },
  { id: "high5", name: "High 5 Casino", tags: ["SWEEPS", "BIG LIBRARY"], blurb: "Real Vegas titles. Redeem threshold is low.", code: "H5OHK", reward: "250 GC + 5 SC daily", link: "#" },
  { id: "chumba", name: "Chumba Casino", tags: ["SWEEPS", "LEGACY"], blurb: "The original. Mail-in still works if you're patient.", code: "CHUMBAOHK", reward: "2M GC + $30 SC", link: "#" },
  { id: "luckyland", name: "LuckyLand Slots", tags: ["SWEEPS"], blurb: "Sister site to Chumba, separate free coin stream.", code: "LLOHK", reward: "7.7K GC + 10 SC", link: "#" },
  { id: "wow-vegas", name: "WOW Vegas", tags: ["SWEEPS", "FAST PAYOUT"], blurb: "Fastest redemptions I've personally clocked.", code: "WOWOHK", reward: "1.5M WOW + 34.5 SC", link: "#" },
  { id: "zula", name: "Zula Casino", tags: ["SWEEPS", "NEW"], blurb: "New but generous. Daily bonus scales with streak.", code: "ZULAOHK", reward: "100K GC + 3 SC", link: "#" },
  { id: "sportzino", name: "Sportzino", tags: ["SPORTS", "SWEEPS"], blurb: "Sweeps sportsbook — parlays with free coins.", code: "ZINOOHK", reward: "250K GC + 20 SC", link: "#" },
  { id: "realprize", name: "RealPrize", tags: ["SWEEPS", "DAILY BONUS"], blurb: "Login daily, hit the wheel, cash out on LTC.", code: "RPOHK", reward: "100K GC + 87.5 SC", link: "#" },
];
