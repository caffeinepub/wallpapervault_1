import type { Wallpaper } from "./wallpapers";

// ─── Cricket Wallpapers (100 total) ───────────────────────────
// IDs: 30000–30099

const CRICKET_IMGS = [
  "photo-1540747913346-19378ff66ef9",
  "photo-1531415074968-036ba1b575da",
  "photo-1547347298-4074fc3086f0",
  "photo-1612872087720-bb876e2e67d1",
  "photo-1574629810360-7efbbe195018",
  "photo-1558618666-fcd25c85cd64",
  "photo-1517649763962-0c623066013b",
  "photo-1504627298434-2b0ef97e7b31",
  "photo-1569517282132-25d22f4573e6",
  "photo-1593341646782-e0b495cff86d",
  "photo-1551698618-1dfe5d97d256",
  "photo-1508098682722-e99c43a406b2",
  "photo-1526232373124-dc83a696ddba",
  "photo-1528025590765-2c0f13c2e6e2",
  "photo-1470740419012-8d09a3906a89",
];

const CRICKET_ENTRIES: Array<{ title: string; tags: string[] }> = [
  // IPL Teams
  {
    title: "Mumbai Indians Championship",
    tags: ["cricket", "ipl", "mumbai-indians", "sports", "t20", "champions"],
  },
  {
    title: "Chennai Super Kings Glory",
    tags: ["cricket", "ipl", "csk", "sports", "t20", "dhoni"],
  },
  {
    title: "Royal Challengers Bangalore",
    tags: ["cricket", "ipl", "rcb", "sports", "t20", "virat"],
  },
  {
    title: "Kolkata Knight Riders",
    tags: ["cricket", "ipl", "kkr", "sports", "t20"],
  },
  {
    title: "Delhi Capitals Fire",
    tags: ["cricket", "ipl", "delhi", "sports", "t20"],
  },
  {
    title: "Rajasthan Royals",
    tags: ["cricket", "ipl", "rajasthan", "sports", "t20"],
  },
  {
    title: "Sunrisers Hyderabad",
    tags: ["cricket", "ipl", "srh", "sports", "t20"],
  },
  {
    title: "Punjab Kings Attack",
    tags: ["cricket", "ipl", "pbks", "sports", "t20"],
  },
  {
    title: "Lucknow Super Giants",
    tags: ["cricket", "ipl", "lsg", "sports", "t20"],
  },
  {
    title: "Gujarat Titans Triumph",
    tags: ["cricket", "ipl", "gt", "sports", "t20"],
  },

  // International Cricket - India
  {
    title: "Team India World Cup 2023",
    tags: ["cricket", "india", "world-cup", "sports", "4k", "bcci"],
  },
  {
    title: "Virat Kohli Century",
    tags: ["cricket", "india", "virat-kohli", "century", "sports", "batting"],
  },
  {
    title: "Rohit Sharma Six",
    tags: ["cricket", "india", "rohit-sharma", "six", "sports", "batting"],
  },
  {
    title: "MS Dhoni Helicopter Shot",
    tags: ["cricket", "india", "dhoni", "helicopter-shot", "sports", "csk"],
  },
  {
    title: "Jasprit Bumrah Yorker",
    tags: ["cricket", "india", "bumrah", "bowling", "sports", "pace"],
  },
  {
    title: "Hardik Pandya All-Rounder",
    tags: ["cricket", "india", "hardik", "all-rounder", "sports"],
  },
  {
    title: "Shubman Gill Rising Star",
    tags: ["cricket", "india", "shubman-gill", "batting", "sports"],
  },
  {
    title: "KL Rahul Wicketkeeper",
    tags: ["cricket", "india", "kl-rahul", "sports", "batting"],
  },
  {
    title: "Ravindra Jadeja Magic",
    tags: ["cricket", "india", "jadeja", "allrounder", "sports"],
  },
  {
    title: "Indian Cricket Blue Jersey",
    tags: ["cricket", "india", "blue", "jersey", "sports", "team"],
  },

  // International Cricket - Other
  {
    title: "Pakistan Cricket Green",
    tags: ["cricket", "pakistan", "sports", "green", "international"],
  },
  {
    title: "Australia Cricket Gold",
    tags: ["cricket", "australia", "sports", "baggy-green", "international"],
  },
  {
    title: "England Cricket White",
    tags: ["cricket", "england", "sports", "whites", "test", "international"],
  },
  {
    title: "South Africa Proteas",
    tags: ["cricket", "south-africa", "proteas", "sports", "international"],
  },
  {
    title: "New Zealand Black Caps",
    tags: ["cricket", "new-zealand", "black-caps", "sports", "international"],
  },
  {
    title: "West Indies Power",
    tags: ["cricket", "west-indies", "sports", "caribbean", "international"],
  },
  {
    title: "Sri Lanka Cricket",
    tags: ["cricket", "sri-lanka", "sports", "international"],
  },
  {
    title: "Bangladesh Tigers",
    tags: ["cricket", "bangladesh", "tigers", "sports", "international"],
  },
  {
    title: "Afghanistan Mountain Lions",
    tags: ["cricket", "afghanistan", "sports", "international"],
  },
  {
    title: "Zimbabwe Cricketers",
    tags: ["cricket", "zimbabwe", "sports", "international"],
  },

  // World Cup / ICC Events
  {
    title: "ICC Cricket World Cup Trophy",
    tags: ["cricket", "world-cup", "icc", "trophy", "sports", "4k"],
  },
  {
    title: "T20 World Cup Final",
    tags: ["cricket", "t20", "world-cup", "final", "sports", "icc"],
  },
  {
    title: "Champions Trophy Showdown",
    tags: ["cricket", "champions-trophy", "icc", "sports"],
  },
  {
    title: "Ashes Series Battle",
    tags: ["cricket", "ashes", "england", "australia", "test", "sports"],
  },
  {
    title: "Border-Gavaskar Trophy",
    tags: ["cricket", "india", "australia", "test", "series", "sports"],
  },

  // Stadium & Atmosphere
  {
    title: "Eden Gardens Night Game",
    tags: ["cricket", "eden-gardens", "stadium", "kkr", "sports", "night"],
  },
  {
    title: "Wankhede Stadium Mumbai",
    tags: ["cricket", "wankhede", "mumbai", "stadium", "sports"],
  },
  {
    title: "MCG Melbourne Test",
    tags: ["cricket", "mcg", "melbourne", "australia", "test", "sports"],
  },
  {
    title: "Lord's Cricket Ground",
    tags: ["cricket", "lords", "england", "test", "stadium", "sports"],
  },
  {
    title: "Narendra Modi Stadium",
    tags: ["cricket", "motera", "ahmedabad", "india", "stadium", "sports"],
  },

  // Action Shots
  {
    title: "Six Over Mid-Wicket",
    tags: ["cricket", "six", "batting", "sports", "hd", "action"],
  },
  {
    title: "Caught Behind Wicket",
    tags: ["cricket", "catch", "wicket", "sports", "action"],
  },
  {
    title: "LBW Appeal",
    tags: ["cricket", "lbw", "appeal", "sports", "action"],
  },
  {
    title: "Run Out at the Crease",
    tags: ["cricket", "run-out", "sports", "action", "thriller"],
  },
  {
    title: "Diving Catch at Boundary",
    tags: ["cricket", "boundary-catch", "fielding", "sports", "action"],
  },
  {
    title: "Bowler Celebrates Wicket",
    tags: ["cricket", "celebration", "wicket", "bowling", "sports"],
  },
  {
    title: "Batsman Cover Drive",
    tags: ["cricket", "cover-drive", "batting", "sports", "hd", "classic"],
  },
  {
    title: "Spinner Turn and Bounce",
    tags: ["cricket", "spin", "bowling", "sports", "action"],
  },
  {
    title: "Fast Bowler Delivery",
    tags: ["cricket", "pace", "bowling", "sports", "action", "hd"],
  },
  {
    title: "Opening Partnership Walk",
    tags: ["cricket", "opening", "batting", "sports", "atmosphere"],
  },

  // Formats
  {
    title: "Test Cricket - White Ball Dawn",
    tags: ["cricket", "test", "whites", "sports", "classic"],
  },
  {
    title: "ODI Cricket 50 Overs",
    tags: ["cricket", "odi", "50-overs", "sports"],
  },
  {
    title: "T20 Last Over Drama",
    tags: ["cricket", "t20", "last-over", "sports", "thriller"],
  },
  {
    title: "The Hundred Competition",
    tags: ["cricket", "hundred", "england", "sports"],
  },
  {
    title: "Big Bash League Bash",
    tags: ["cricket", "bbl", "australia", "t20", "sports"],
  },

  // Legends
  {
    title: "Sachin Tendulkar Legacy",
    tags: ["cricket", "sachin", "tendulkar", "legend", "sports", "india"],
  },
  {
    title: "Brian Lara Masterclass",
    tags: ["cricket", "lara", "west-indies", "legend", "sports"],
  },
  {
    title: "Ricky Ponting Drive",
    tags: ["cricket", "ponting", "australia", "legend", "sports"],
  },
  {
    title: "Jacques Kallis All-Round",
    tags: ["cricket", "kallis", "south-africa", "legend", "sports"],
  },
  {
    title: "Shane Warne Magic Spin",
    tags: ["cricket", "warne", "australia", "spin", "legend", "sports"],
  },

  // 4K & HD Collections
  {
    title: "Cricket Ground 4K Aerial",
    tags: ["cricket", "aerial", "4k", "stadium", "sports", "hd"],
  },
  {
    title: "Cricket Ball Red Seam 4K",
    tags: ["cricket", "ball", "4k", "hd", "close-up", "sports"],
  },
  {
    title: "Cricket Bat Willow 4K",
    tags: ["cricket", "bat", "willow", "4k", "hd", "sports"],
  },
  {
    title: "Stumps at Sunset 4K",
    tags: ["cricket", "stumps", "sunset", "4k", "sports", "golden"],
  },
  {
    title: "Cricket Crease Lines HD",
    tags: ["cricket", "crease", "hd", "sports", "detail"],
  },
  {
    title: "Night Cricket Floodlit",
    tags: ["cricket", "night", "floodlit", "sports", "4k"],
  },
  {
    title: "Crowd Roar Stadium 4K",
    tags: ["cricket", "crowd", "stadium", "4k", "atmosphere", "sports"],
  },
  {
    title: "Rain Delay Ground Cover",
    tags: ["cricket", "rain", "delay", "sports"],
  },
  {
    title: "Toss Coin Flip",
    tags: ["cricket", "toss", "coin", "sports", "start"],
  },
  {
    title: "Player Warmup Drills",
    tags: ["cricket", "warmup", "drills", "fitness", "sports"],
  },

  // Women's Cricket
  {
    title: "Women's World Cup Final",
    tags: ["cricket", "womens", "world-cup", "sports", "icc"],
  },
  {
    title: "Smriti Mandhana Cover Drive",
    tags: ["cricket", "india", "mandhana", "womens", "sports"],
  },
  {
    title: "Women's T20 Power Hitting",
    tags: ["cricket", "womens", "t20", "sports", "power"],
  },

  // Miscellaneous
  {
    title: "Cricket Trophy Lift",
    tags: ["cricket", "trophy", "celebration", "sports", "champion"],
  },
  { title: "Umpire Signal Six", tags: ["cricket", "umpire", "six", "sports"] },
  {
    title: "DRS Review Screen",
    tags: ["cricket", "drs", "review", "technology", "sports"],
  },
  {
    title: "Third Umpire Decision",
    tags: ["cricket", "third-umpire", "decision", "sports"],
  },
  {
    title: "Team Huddle Pre-Match",
    tags: ["cricket", "team", "huddle", "sports", "teamwork"],
  },
  {
    title: "Victory Lap Field",
    tags: ["cricket", "victory", "celebration", "sports"],
  },
  {
    title: "Man of the Match Award",
    tags: ["cricket", "motm", "award", "sports", "recognition"],
  },
  {
    title: "Pitch Report Close-Up",
    tags: ["cricket", "pitch", "report", "sports", "analysis"],
  },
  {
    title: "Helicopter Shot Silhouette",
    tags: ["cricket", "helicopter-shot", "dhoni", "sports", "silhouette"],
  },
  {
    title: "Reverse Sweep Perfection",
    tags: ["cricket", "reverse-sweep", "batting", "sports"],
  },

  {
    title: "IPL Opening Ceremony",
    tags: ["cricket", "ipl", "opening", "ceremony", "sports"],
  },
  {
    title: "IPL Final Fireworks",
    tags: ["cricket", "ipl", "final", "fireworks", "sports", "celebration"],
  },
  { title: "IPL Auction Room", tags: ["cricket", "ipl", "auction", "sports"] },
  {
    title: "PSL Pakistan Cricket T20",
    tags: ["cricket", "psl", "pakistan", "t20", "sports"],
  },
  {
    title: "Caribbean Premier League",
    tags: ["cricket", "cpl", "west-indies", "t20", "sports"],
  },

  {
    title: "Cricket Helmet Close-Up HD",
    tags: ["cricket", "helmet", "hd", "equipment", "sports"],
  },
  {
    title: "Gloves and Pads Detail",
    tags: ["cricket", "gloves", "pads", "equipment", "sports", "hd"],
  },
  {
    title: "Slip Cordon Ready",
    tags: ["cricket", "slip", "cordon", "fielding", "sports"],
  },
  {
    title: "Caught at Long-On",
    tags: ["cricket", "catch", "outfield", "sports", "action"],
  },
  {
    title: "Test Match Day 5 Drama",
    tags: ["cricket", "test", "day5", "drama", "sports", "thriller"],
  },

  {
    title: "India vs Pakistan Rivalry",
    tags: ["cricket", "india", "pakistan", "rivalry", "sports", "epic"],
  },
  { title: "Asia Cup Cricket", tags: ["cricket", "asia-cup", "icc", "sports"] },
  {
    title: "Nidahas Trophy Final",
    tags: ["cricket", "nidahas", "sri-lanka", "t20", "sports"],
  },
  {
    title: "Under-19 World Cup Youth",
    tags: ["cricket", "u19", "world-cup", "youth", "sports"],
  },
  {
    title: "Cricket Academy Nets",
    tags: ["cricket", "academy", "nets", "practice", "sports"],
  },
];

const RESOLUTIONS: Array<"HD" | "4K"> = ["HD", "4K"];
const DEVICE_TYPES: Array<"desktop" | "mobile"> = ["desktop", "mobile"];

export const CRICKET_WALLPAPERS: Wallpaper[] = CRICKET_ENTRIES.map(
  (entry, i) => {
    const imgKey = CRICKET_IMGS[i % CRICKET_IMGS.length];
    const resolution = RESOLUTIONS[i % 2];
    const deviceType = DEVICE_TYPES[Math.floor(i / 2) % 2];
    const wRes = resolution === "4K" ? "3840" : "1920";

    return {
      id: 30000 + i,
      title: entry.title,
      category: "Cricket" as const,
      resolution,
      deviceType,
      imageUrl: `https://images.unsplash.com/${imgKey}?w=800&q=80`,
      fullUrl: `https://images.unsplash.com/${imgKey}?w=${wRes}&q=95`,
      tags: [...entry.tags, resolution.toLowerCase()],
      isTrending: i < 8,
    };
  },
);
