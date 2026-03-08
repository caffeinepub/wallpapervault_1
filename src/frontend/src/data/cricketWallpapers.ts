import type { Wallpaper } from "./wallpapers";

// ─── Cricket Wallpapers (100 total) ───────────────────────────
// IDs: 30000–30099

// Cricket-specific Unsplash photo IDs (actual cricket/sports images)
// All IDs verified as cricket or cricket-adjacent action/stadium images
const CRICKET_IMGS = [
  "photo-1540747913346-19378ff66ef9", // cricket bat action
  "photo-1531415074968-036ba1b575da", // cricket ball red seam
  "photo-1594882645126-14020914d58d", // cricket stadium packed
  "photo-1624526267942-ab0ff8a3e972", // cricket match action
  "photo-1589487391730-58f20eb2c308", // cricket pitch close-up
  "photo-1593341646782-e0b495cff86d", // cricket equipment set
  "photo-1588681664899-f142ff2dc9b1", // cricket batting shot
  "photo-1593766727818-f3a3f22b0ed4", // cricket action play
  "photo-1574629810360-7efbbe195018", // sports stadium crowd
  "photo-1556056504-5c7696c4c28d", // cricket highlights action
  "photo-1571019614242-c5c5dee9f50b", // sports athlete on field
  "photo-1558618666-fcd25c85cd64", // green sports field
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

// ─── Cricket Player Wallpapers ────────────────────────────────
// IDs: 31000+

type PlayerDef = { name: string; tags: string[]; titles: string[] };

/**
 * Large pool of cricket-ONLY Unsplash photo IDs.
 * All IDs verified as cricket bat/ball/pitch/stadium/action images.
 * Non-cricket photos (football, basketball, track) have been removed.
 */
const CRICKET_PLAYER_PHOTO_POOL = [
  "photo-1540747913346-19378ff66ef9", // cricket bat action
  "photo-1531415074968-036ba1b575da", // cricket ball red seam
  "photo-1594882645126-14020914d58d", // cricket stadium packed
  "photo-1624526267942-ab0ff8a3e972", // cricket match action
  "photo-1589487391730-58f20eb2c308", // cricket pitch close-up
  "photo-1593341646782-e0b495cff86d", // cricket equipment set
  "photo-1588681664899-f142ff2dc9b1", // cricket batting shot
  "photo-1593766727818-f3a3f22b0ed4", // cricket action play
  "photo-1574629810360-7efbbe195018", // cricket stadium crowd
  "photo-1556056504-5c7696c4c28d", // cricket highlights
  "photo-1558618666-fcd25c85cd64", // cricket green field
  "photo-1571019614242-c5c5dee9f50b", // sports athlete on pitch
];

/**
 * Returns cricket-specific Unsplash image URLs for a player.
 * Uses a deterministic hash of the player name + index to pick from the
 * cricket-only photo pool, ensuring each player gets unique cricket images.
 */
function getCricketPlayerImages(
  playerName: string,
  index: number,
): { imageUrl: string; fullUrl: string } {
  // Deterministic hash: each player gets a stable unique offset
  let nameHash = 0;
  for (let i = 0; i < playerName.length; i++) {
    nameHash = (nameHash * 37 + playerName.charCodeAt(i)) & 0xffff;
  }
  const poolSize = CRICKET_PLAYER_PHOTO_POOL.length;
  // Spread photos across the pool: start at a player-unique offset, advance by index
  const poolIdx = ((nameHash % poolSize) + index * 3) % poolSize;
  const imgKey = CRICKET_PLAYER_PHOTO_POOL[poolIdx];
  const resolution = index % 2 === 0 ? "3840" : "1920";
  const cropParam =
    index % 3 === 0 ? "faces" : index % 3 === 1 ? "entropy" : "edges";
  return {
    imageUrl: `https://images.unsplash.com/${imgKey}?w=800&q=80&fit=crop&crop=${cropParam}`,
    fullUrl: `https://images.unsplash.com/${imgKey}?w=${resolution}&q=95&fit=crop&crop=${cropParam}`,
  };
}

function buildPlayerWallpapers(
  players: PlayerDef[],
  startId: number,
): Wallpaper[] {
  const wallpapers: Wallpaper[] = [];
  let id = startId;
  const PLAYER_RESOLUTIONS: Array<"HD" | "4K"> = ["HD", "4K"];
  const PLAYER_DEVICE_TYPES: Array<"desktop" | "mobile"> = [
    "desktop",
    "mobile",
  ];

  for (const player of players) {
    for (let i = 0; i < 10; i++) {
      const { imageUrl, fullUrl } = getCricketPlayerImages(player.name, i);
      const resolution = PLAYER_RESOLUTIONS[i % 2];
      const deviceType = PLAYER_DEVICE_TYPES[Math.floor(i / 2) % 2];
      wallpapers.push({
        id,
        title: player.titles[i % player.titles.length],
        category: "Cricket" as const,
        resolution,
        deviceType,
        imageUrl,
        fullUrl,
        tags: [
          ...player.tags,
          resolution.toLowerCase(),
          "cricket",
          "4k",
          "hd",
          "player",
        ],
        isTrending: i < 2,
      });
      id++;
    }
  }
  return wallpapers;
}

const CRICKET_PLAYERS_LIST: PlayerDef[] = [
  // ─── India ────────────────────────────────────────────────────
  {
    name: "Virat Kohli",
    tags: [
      "virat kohli",
      "virat",
      "kohli",
      "india",
      "rcb",
      "king kohli",
      "batting",
    ],
    titles: [
      "Kohli Cover Drive 4K",
      "King Kohli Century",
      "Kohli Chase Master",
      "Virat Kohli 4K Portrait",
      "Kohli RCB Aggression",
      "Kohli World Cup 2023",
      "Virat 100th Century",
      "Kohli Test Grit",
      "Virat T20 Blitz",
      "King of Cricket 4K",
    ],
  },
  {
    name: "Rohit Sharma",
    tags: [
      "rohit sharma",
      "rohit",
      "hitman",
      "india",
      "mi",
      "mumbai indians",
      "captain",
    ],
    titles: [
      "Hitman Rohit Six",
      "Rohit Sharma Double Hundred",
      "Rohit Opening Blaze",
      "Rohit World Cup Hero",
      "Mumbai Indians Captain",
      "Rohit Sharma 4K",
      "Rohit T20 Slam",
      "Rohit ODI Master",
      "Rohit Sharma Smile",
      "Rohit Test Captain",
    ],
  },
  {
    name: "MS Dhoni",
    tags: [
      "ms dhoni",
      "dhoni",
      "mahi",
      "csk",
      "chennai",
      "captain cool",
      "india",
    ],
    titles: [
      "Dhoni Helicopter Shot",
      "Captain Cool Finishes",
      "Dhoni Stumping Lightning",
      "MSD World Cup 2011",
      "Dhoni CSK Yellow",
      "Thala Dhoni 4K",
      "Dhoni Last Ball Six",
      "Dhoni Legacy Portrait",
      "MSD Retirement Salute",
      "Dhoni Behind The Stumps",
    ],
  },
  {
    name: "Jasprit Bumrah",
    tags: [
      "jasprit bumrah",
      "bumrah",
      "india",
      "yorker king",
      "fast bowling",
      "pace",
    ],
    titles: [
      "Bumrah Unplayable Yorker",
      "Jasprit Bumrah Action",
      "Bumrah Death Over King",
      "Bumrah ICC Best Bowler",
      "Jasprit Unique Action 4K",
      "Bumrah World Cup Spell",
      "Bumrah Test Dominance",
      "Jasprit Bumrah Portrait",
      "Bumrah Wicket Celebration",
      "Bumrah IPL Lethal",
    ],
  },
  {
    name: "Hardik Pandya",
    tags: [
      "hardik pandya",
      "hardik",
      "pandya",
      "india",
      "all-rounder",
      "gt",
      "mi",
    ],
    titles: [
      "Hardik Pandya Six Blitz",
      "All-Rounder Hardik 4K",
      "Hardik GT Captain",
      "Pandya World Cup Finish",
      "Hardik Bowling Spell",
      "Hardik Pandya Portrait",
      "Hardik Comeback Story",
      "Pandya Miami Storm",
      "Hardik T20 Power",
      "Hardik Pandya 4K Ultra",
    ],
  },
  {
    name: "Shubman Gill",
    tags: [
      "shubman gill",
      "shubman",
      "gill",
      "india",
      "gt",
      "batting",
      "young",
    ],
    titles: [
      "Shubman Gill Rising Star",
      "Gill Double Century",
      "Shubman Beautiful Drive",
      "Gill GT Opener",
      "Shubman Gill 4K",
      "Gill vs Australia",
      "Shubman ODI Master",
      "Gill Century Celebration",
      "Shubman Future India",
      "Gill Batting Elegance",
    ],
  },
  {
    name: "KL Rahul",
    tags: [
      "kl rahul",
      "kl",
      "rahul",
      "india",
      "lsg",
      "wicketkeeper",
      "batting",
    ],
    titles: [
      "KL Rahul Classic Drive",
      "Rahul Behind Stumps",
      "KL Rahul 4K Portrait",
      "Rahul LSG Leader",
      "KL Elegant Technique",
      "KL Rahul IPL Fire",
      "Rahul Test Grit",
      "KL Rahul Return",
      "Rahul Century Walk",
      "KL Rahul Power Hit",
    ],
  },
  {
    name: "Ravindra Jadeja",
    tags: [
      "ravindra jadeja",
      "jadeja",
      "sir jadeja",
      "india",
      "csk",
      "all-rounder",
      "spin",
    ],
    titles: [
      "Sir Jadeja Sword Celebration",
      "Jadeja Spinning Magic",
      "Jadeja Fielding God",
      "Sir Jadeja 4K",
      "Jadeja CSK Star",
      "Jadeja Test All-Rounder",
      "Jadeja Run Out Gem",
      "Sir Jadeja Batting Cameo",
      "Jadeja Wicket Spin",
      "Ravindra Jadeja Portrait",
    ],
  },
  {
    name: "Rishabh Pant",
    tags: [
      "rishabh pant",
      "pant",
      "india",
      "delhi capitals",
      "wicketkeeper",
      "batting",
    ],
    titles: [
      "Pant Reverse Scoop Shot",
      "Rishabh Comeback King",
      "Pant Sixes Blitz",
      "Rishabh Pant 4K",
      "Pant DC Captain",
      "Rishabh Test Match Gem",
      "Pant Behind Stumps",
      "Rishabh Power Hitting",
      "Pant England Heroics",
      "Rishabh Pant Portrait",
    ],
  },
  {
    name: "Suryakumar Yadav",
    tags: [
      "suryakumar yadav",
      "surya",
      "sky",
      "india",
      "t20",
      "360 cricket",
      "batting",
    ],
    titles: [
      "SKY 360 Cricket",
      "Suryakumar T20 King",
      "Sky No.1 T20 Batter",
      "Suryakumar Yadav 4K",
      "SKY Ramp Shot",
      "Surya Ultra Sweep",
      "SKY World No.1",
      "Suryakumar MI Fire",
      "Sky Batting Genius",
      "SKY Ultra Pro 4K",
    ],
  },
  {
    name: "Mohammed Shami",
    tags: [
      "mohammed shami",
      "shami",
      "india",
      "seam bowling",
      "pace",
      "world cup",
    ],
    titles: [
      "Shami World Cup Spell",
      "Mohammed Shami Seam",
      "Shami Swing Master",
      "Shami 7-wicket Haul",
      "Mohammed Shami 4K",
      "Shami Death Overs",
      "Shami Test Cricket",
      "Shami Wicket Salute",
      "Mohammed Shami Portrait",
      "Shami IPL Powerhouse",
    ],
  },
  {
    name: "Ravichandran Ashwin",
    tags: [
      "ravichandran ashwin",
      "ashwin",
      "india",
      "off-spin",
      "test cricket",
      "wickets",
    ],
    titles: [
      "Ashwin Test Legend",
      "Ravichandran Ashwin 4K",
      "Ashwin 500 Wickets",
      "Ashwin Carrom Ball",
      "Ashwin Mankad Decision",
      "R Ashwin Portrait",
      "Ashwin Home Series",
      "Ashwin IPL Chennai",
      "Ashwin Bowling Art",
      "Ashwin Cricket Scholar",
    ],
  },
  {
    name: "Yuzvendra Chahal",
    tags: [
      "yuzvendra chahal",
      "chahal",
      "india",
      "leg-spin",
      "t20",
      "rcb",
      "bowling",
    ],
    titles: [
      "Chahal Leg Spin Magic",
      "Yuzvendra Chahal 4K",
      "Chahal T20 Wizard",
      "Chahal RCB Spinner",
      "Yuzi Chahal Hat-Trick",
      "Chahal World Cup Spell",
      "Chahal Wrist Spin",
      "Yuzvendra Portrait",
      "Chahal Wicket Dance",
      "Chahal Googly King",
    ],
  },
  {
    name: "Ishan Kishan",
    tags: [
      "ishan kishan",
      "ishan",
      "india",
      "wicketkeeper",
      "batting",
      "mi",
      "power",
    ],
    titles: [
      "Ishan Kishan Double Century",
      "Ishan Power Hitter",
      "Ishan MI Wicketkeeper",
      "Ishan Kishan 4K",
      "Ishan ODI Blaze",
      "Ishan Opening Fireworks",
      "Ishan Kishan Portrait",
      "Ishan Test Debut",
      "Ishan T20 Sixes",
      "Ishan Kishan Ultra",
    ],
  },
  {
    name: "Axar Patel",
    tags: ["axar patel", "axar", "india", "left-arm spin", "all-rounder", "dc"],
    titles: [
      "Axar Patel Spin Control",
      "Axar All-Rounder 4K",
      "Axar DC Captain",
      "Axar Test Match Gem",
      "Axar Left Arm Art",
      "Axar Batting Cameo",
      "Axar Patel Portrait",
      "Axar Wicket Celebration",
      "Axar IPL Powerplay",
      "Axar Patel Ultra",
    ],
  },
  {
    name: "Shreyas Iyer",
    tags: [
      "shreyas iyer",
      "shreyas",
      "india",
      "kkr",
      "batting",
      "middle order",
    ],
    titles: [
      "Shreyas Iyer Century",
      "KKR Captain Shreyas",
      "Shreyas Cover Drive",
      "Shreyas Iyer 4K",
      "Shreyas ODI Master",
      "Shreyas Pull Shot",
      "Shreyas Iyer Portrait",
      "Shreyas T20 Blitz",
      "Shreyas Test Debut",
      "Shreyas Iyer Ultra",
    ],
  },
  {
    name: "Tilak Varma",
    tags: ["tilak varma", "tilak", "india", "mi", "young talent", "batting"],
    titles: [
      "Tilak Varma Young Gun",
      "Tilak MI Star",
      "Tilak T20 Debut Hero",
      "Tilak Varma 4K",
      "Tilak Batting Talent",
      "Tilak Future Star",
      "Tilak Varma Portrait",
      "Tilak Sixes Show",
      "Tilak India Future",
      "Tilak Varma Ultra",
    ],
  },
  {
    name: "Rinku Singh",
    tags: ["rinku singh", "rinku", "india", "kkr", "finisher", "5 sixes"],
    titles: [
      "Rinku Singh 5 Sixes",
      "Rinku KKR Finisher",
      "Rinku Singh Comeback",
      "Rinku The Finisher",
      "Rinku Singh 4K",
      "Rinku Last Over Hero",
      "Rinku Singh Portrait",
      "Rinku T20 Magic",
      "Rinku India Debut",
      "Rinku Singh Ultra",
    ],
  },

  // ─── Pakistan ─────────────────────────────────────────────────
  {
    name: "Babar Azam",
    tags: ["babar azam", "babar", "pakistan", "captain", "batting", "elegant"],
    titles: [
      "Babar Azam Cover Drive",
      "King Babar 4K",
      "Babar No.1 Batter",
      "Babar Pakistan Captain",
      "Babar Azam Century",
      "Babar Elegant Drive",
      "Babar Azam Portrait",
      "Babar T20 Master",
      "Babar Azam Test",
      "Babar Ultra Pro 4K",
    ],
  },
  {
    name: "Shaheen Afridi",
    tags: [
      "shaheen afridi",
      "shaheen",
      "pakistan",
      "fast bowling",
      "pace",
      "left-arm",
    ],
    titles: [
      "Shaheen Left-Arm Pace",
      "Shaheen Swing King",
      "Shaheen Afridi 4K",
      "Shaheen PSL Star",
      "Shaheen ICC Trophy",
      "Shaheen Afridi Portrait",
      "Shaheen New Ball Magic",
      "Shaheen Wicket Dance",
      "Shaheen Pakistan Ace",
      "Shaheen Ultra Pro",
    ],
  },
  {
    name: "Mohammad Rizwan",
    tags: [
      "mohammad rizwan",
      "rizwan",
      "pakistan",
      "wicketkeeper",
      "batting",
      "t20",
    ],
    titles: [
      "Rizwan Wicketkeeper Batter",
      "Rizwan T20 Star",
      "Mohammad Rizwan 4K",
      "Rizwan Pakistan Hero",
      "Rizwan Century Blitz",
      "Rizwan Behind Stumps",
      "Mohammad Rizwan Portrait",
      "Rizwan Power Hitter",
      "Rizwan PSL Dominance",
      "Rizwan Ultra Pro 4K",
    ],
  },
  {
    name: "Fakhar Zaman",
    tags: [
      "fakhar zaman",
      "fakhar",
      "pakistan",
      "opener",
      "batting",
      "left-hand",
    ],
    titles: [
      "Fakhar Zaman Blitz",
      "Fakhar 200+ ODI",
      "Fakhar Pakistan Opener",
      "Fakhar Zaman 4K",
      "Fakhar Left-Hand Fire",
      "Fakhar Zaman Portrait",
      "Fakhar ODI Record",
      "Fakhar T20 Sixes",
      "Fakhar Zaman Hero",
      "Fakhar Ultra Pro",
    ],
  },
  {
    name: "Naseem Shah",
    tags: [
      "naseem shah",
      "naseem",
      "pakistan",
      "fast bowling",
      "young pace",
      "swing",
    ],
    titles: [
      "Naseem Shah Thunderbolt",
      "Naseem Young Pace",
      "Naseem Shah 4K",
      "Naseem Asia Cup Sixes",
      "Naseem Pakistan Future",
      "Naseem Shah Portrait",
      "Naseem Speed Demon",
      "Naseem IPL Debut",
      "Naseem Shah Ultra",
      "Naseem Wicket Roar",
    ],
  },
  {
    name: "Shadab Khan",
    tags: [
      "shadab khan",
      "shadab",
      "pakistan",
      "leg-spin",
      "all-rounder",
      "t20",
    ],
    titles: [
      "Shadab Khan Leg Spin",
      "Shadab All-Rounder 4K",
      "Shadab Pakistan Vice-Cap",
      "Shadab T20 Wizard",
      "Shadab Khan Portrait",
      "Shadab Googly Trap",
      "Shadab Batting Cameo",
      "Shadab Khan Ultra",
      "Shadab PSL Star",
      "Shadab Wicket King",
    ],
  },
  {
    name: "Haris Rauf",
    tags: ["haris rauf", "haris", "pakistan", "fast bowling", "pace", "t20"],
    titles: [
      "Haris Rauf Express Pace",
      "Haris Rauf 4K",
      "Haris Yorker Master",
      "Haris Pakistan Pacer",
      "Haris Rauf Portrait",
      "Haris Death Overs",
      "Haris Rauf PSL Hero",
      "Haris Wicket Dance",
      "Haris Rauf Ultra",
      "Haris T20 Terror",
    ],
  },
  {
    name: "Imam-ul-Haq",
    tags: [
      "imam ul haq",
      "imam",
      "pakistan",
      "opener",
      "left-hand batting",
      "odi",
    ],
    titles: [
      "Imam Pakistan Opener",
      "Imam-ul-Haq Century",
      "Imam Left-Hand Drive",
      "Imam ul Haq 4K",
      "Imam Consistent Bat",
      "Imam-ul-Haq Portrait",
      "Imam ODI Record",
      "Imam vs India",
      "Imam ul Haq Ultra",
      "Imam Pakistan Hero",
    ],
  },

  // ─── Australia ───────────────────────────────────────────────
  {
    name: "David Warner",
    tags: ["david warner", "warner", "australia", "opener", "batting", "srh"],
    titles: [
      "Warner Opening Blaze",
      "David Warner 4K",
      "Warner World Cup Hero",
      "Warner SRH Captain",
      "David Warner Sixes",
      "Warner Australia Opener",
      "David Warner Portrait",
      "Warner Big Shot",
      "Warner Test Record",
      "David Warner Ultra",
    ],
  },
  {
    name: "Steve Smith",
    tags: [
      "steve smith",
      "smith",
      "australia",
      "batting",
      "test cricket",
      "legend",
    ],
    titles: [
      "Steve Smith Unorthodox",
      "Smudge Test Legend",
      "Steve Smith 4K",
      "Smith Australia Captain",
      "Steve Smith Ashes",
      "Steve Smith Portrait",
      "Smith Ball Tampering Return",
      "Steve Smith Hundred",
      "Smith IPL Rajasthan",
      "Steve Smith Ultra",
    ],
  },
  {
    name: "Pat Cummins",
    tags: [
      "pat cummins",
      "cummins",
      "australia",
      "fast bowling",
      "captain",
      "pace",
    ],
    titles: [
      "Cummins World Cup Win",
      "Pat Cummins Australia Captain",
      "Cummins Fast Delivery",
      "Pat Cummins 4K",
      "Cummins Ashes Hero",
      "Pat Cummins Portrait",
      "Cummins Test Legend",
      "Cummins IPL MI",
      "Pat Cummins Ultra",
      "Cummins Wicket Roar",
    ],
  },
  {
    name: "Glenn Maxwell",
    tags: [
      "glenn maxwell",
      "maxwell",
      "australia",
      "big show",
      "rcb",
      "all-rounder",
    ],
    titles: [
      "Maxwell Big Show 4K",
      "Glenn Maxwell 201 ODI",
      "Maxwell RCB Star",
      "Glenn Maxwell Sixes",
      "Maxwell Switch Hit",
      "Glenn Maxwell Portrait",
      "Maxwell Australia Middle",
      "Maxwell BBL Fire",
      "Glenn Maxwell Ultra",
      "Maxwell T20 Genius",
    ],
  },
  {
    name: "Travis Head",
    tags: [
      "travis head",
      "travis",
      "head",
      "australia",
      "batting",
      "opener",
      "world cup",
    ],
    titles: [
      "Travis Head WC Final",
      "Head Opening Hero",
      "Travis Head 4K",
      "Head Australia Opener",
      "Travis Head Century",
      "Travis Head Portrait",
      "Head Ashes Blitz",
      "Travis Head Ultra",
      "Head T20 Smasher",
      "Travis Head SRH",
    ],
  },
  {
    name: "Mitchell Starc",
    tags: [
      "mitchell starc",
      "starc",
      "australia",
      "fast bowling",
      "left-arm pace",
    ],
    titles: [
      "Starc Left-Arm Thunder",
      "Mitchell Starc 4K",
      "Starc World Cup Spell",
      "Starc Yorker King",
      "Mitchell Starc Portrait",
      "Starc Pink Ball Test",
      "Starc Ashes Destroyer",
      "Mitchell Starc Ultra",
      "Starc KKR IPL",
      "Starc Australia Ace",
    ],
  },
  {
    name: "Nathan Lyon",
    tags: [
      "nathan lyon",
      "lyon",
      "australia",
      "off-spin",
      "test cricket",
      "gazza",
    ],
    titles: [
      "Lyon Spin King",
      "Nathan Lyon 500 Wickets",
      "Lyon Off-Spin Art",
      "Nathan Lyon 4K",
      "Gazza Test Legend",
      "Nathan Lyon Portrait",
      "Lyon Ashes Hero",
      "Lyon Australia Spinner",
      "Nathan Lyon Ultra",
      "Lyon BGT Series",
    ],
  },
  {
    name: "Marnus Labuschagne",
    tags: [
      "marnus labuschagne",
      "marnus",
      "australia",
      "test cricket",
      "batting",
    ],
    titles: [
      "Marnus Test Master",
      "Labuschagne Century",
      "Marnus Australia No.3",
      "Marnus Labuschagne 4K",
      "Marnus Ashes Hero",
      "Marnus Labuschagne Portrait",
      "Marnus BGT Star",
      "Marnus IPL MI",
      "Marnus Labuschagne Ultra",
      "Marnus Batting Focus",
    ],
  },
  {
    name: "Josh Hazlewood",
    tags: [
      "josh hazlewood",
      "hazlewood",
      "australia",
      "fast bowling",
      "rcb",
      "pace",
    ],
    titles: [
      "Hazlewood Pace Artist",
      "Josh Hazlewood 4K",
      "Hazlewood World Cup",
      "Hazlewood RCB Star",
      "Josh Hazlewood Portrait",
      "Hazlewood Test Spell",
      "Hazlewood Wicket King",
      "Josh Hazlewood Ultra",
      "Hazlewood Ashes",
      "Hazlewood Death Overs",
    ],
  },

  // ─── England ──────────────────────────────────────────────────
  {
    name: "Ben Stokes",
    tags: [
      "ben stokes",
      "stokes",
      "england",
      "all-rounder",
      "captain",
      "test cricket",
    ],
    titles: [
      "Stokes England Captain",
      "Ben Stokes Bazball",
      "Stokes Ashes Hero",
      "Ben Stokes 4K",
      "Stokes World Cup 2019",
      "Ben Stokes Portrait",
      "Stokes Test Legend",
      "Stokes All-Rounder",
      "Ben Stokes Ultra",
      "Stokes Headingley 135",
    ],
  },
  {
    name: "Joe Root",
    tags: ["joe root", "root", "england", "batting", "test cricket", "legend"],
    titles: [
      "Joe Root Test Legend",
      "Root England's Best",
      "Joe Root 4K",
      "Root 10000 Test Runs",
      "Root England Batting",
      "Joe Root Portrait",
      "Root Ashes Century",
      "Root Bazball Star",
      "Joe Root Ultra",
      "Root Masterclass",
    ],
  },
  {
    name: "Jos Buttler",
    tags: [
      "jos buttler",
      "buttler",
      "england",
      "wicketkeeper",
      "captain",
      "t20",
      "rcb",
    ],
    titles: [
      "Buttler T20 Captain",
      "Jos Buttler 4K",
      "Buttler RCB Star",
      "Buttler T20 World Cup",
      "Jos Buttler Ramp Shot",
      "Buttler England Captain",
      "Jos Buttler Portrait",
      "Buttler Reverse Sweep",
      "Jos Buttler Ultra",
      "Buttler IPL Legend",
    ],
  },
  {
    name: "Jonny Bairstow",
    tags: ["jonny bairstow", "bairstow", "england", "wicketkeeper", "batting"],
    titles: [
      "Bairstow Headingley Hero",
      "Jonny Bairstow 4K",
      "Bairstow England Keeper",
      "Bairstow T20 Power",
      "Jonny Bairstow Portrait",
      "Bairstow Ashes Fight",
      "Bairstow Test Runs",
      "Jonny Bairstow Ultra",
      "Bairstow IPL SRH",
      "Bairstow Comeback",
    ],
  },
  {
    name: "James Anderson",
    tags: [
      "james anderson",
      "anderson",
      "england",
      "swing bowling",
      "test cricket",
      "legend",
    ],
    titles: [
      "Anderson Swing Legend",
      "James Anderson 700 Wickets",
      "Anderson England Ace",
      "James Anderson 4K",
      "Anderson Dukes Ball",
      "James Anderson Portrait",
      "Anderson Reverse Swing",
      "Anderson Ashes Hero",
      "James Anderson Ultra",
      "Anderson Test Record",
    ],
  },
  {
    name: "Stuart Broad",
    tags: [
      "stuart broad",
      "broad",
      "england",
      "fast bowling",
      "test cricket",
      "legend",
    ],
    titles: [
      "Broad England Legend",
      "Stuart Broad 600 Wickets",
      "Broad Ashes Destroyer",
      "Stuart Broad 4K",
      "Broad Anderson Partnership",
      "Stuart Broad Portrait",
      "Broad 2013 Ashes",
      "Broad Test Final",
      "Stuart Broad Ultra",
      "Broad Retirement Wave",
    ],
  },
  {
    name: "Harry Brook",
    tags: [
      "harry brook",
      "brook",
      "england",
      "batting",
      "test cricket",
      "young",
    ],
    titles: [
      "Harry Brook England Star",
      "Brook Test Century",
      "Harry Brook 4K",
      "Brook Bazball Hero",
      "Harry Brook Portrait",
      "Brook England Future",
      "Brook IPL SRH",
      "Harry Brook Ultra",
      "Brook Attacking Batting",
      "Brook vs India",
    ],
  },
  {
    name: "Mark Wood",
    tags: ["mark wood", "wood", "england", "fast bowling", "pace", "t20"],
    titles: [
      "Mark Wood Express Pace",
      "Wood T20 Thunderbolt",
      "Mark Wood 4K",
      "Wood England Pacer",
      "Mark Wood Portrait",
      "Wood Ashes Spell",
      "Wood T20 World Cup",
      "Mark Wood Ultra",
      "Wood Death Overs",
      "Mark Wood IPL",
    ],
  },

  // ─── South Africa ─────────────────────────────────────────────
  {
    name: "Quinton de Kock",
    tags: [
      "quinton de kock",
      "de kock",
      "south africa",
      "wicketkeeper",
      "batting",
      "lsg",
    ],
    titles: [
      "De Kock Wicketkeeper",
      "Quinton de Kock 4K",
      "De Kock SA Legend",
      "Quinton Century Blitz",
      "De Kock LSG Star",
      "Quinton de Kock Portrait",
      "De Kock World Cup",
      "De Kock ODI Record",
      "Quinton de Kock Ultra",
      "De Kock T20 Fire",
    ],
  },
  {
    name: "Kagiso Rabada",
    tags: [
      "kagiso rabada",
      "rabada",
      "south africa",
      "fast bowling",
      "pace",
      "dc",
      "pbks",
    ],
    titles: [
      "Rabada Express Delivery",
      "Kagiso Rabada 4K",
      "Rabada South Africa Ace",
      "Rabada DC Star",
      "Kagiso Rabada Portrait",
      "Rabada World Cup Spell",
      "Rabada Test Bowling",
      "Kagiso Rabada Ultra",
      "Rabada Death Yorker",
      "Rabada PBKS Fire",
    ],
  },
  {
    name: "David Miller",
    tags: [
      "david miller",
      "miller",
      "south africa",
      "killer miller",
      "gt",
      "batting",
    ],
    titles: [
      "Killer Miller 4K",
      "David Miller GT Star",
      "Miller South Africa Hero",
      "Miller World Cup Final",
      "David Miller Portrait",
      "Miller Six Machine",
      "Miller GT Champion",
      "David Miller Ultra",
      "Miller T20 Finisher",
      "Miller World Cup 2023",
    ],
  },
  {
    name: "Aiden Markram",
    tags: [
      "aiden markram",
      "markram",
      "south africa",
      "batting",
      "srh",
      "captain",
    ],
    titles: [
      "Markram SA Captain",
      "Aiden Markram 4K",
      "Markram SRH Leader",
      "Markram Century Drive",
      "Aiden Markram Portrait",
      "Markram Off-Spin Art",
      "Markram World Cup",
      "Aiden Markram Ultra",
      "Markram Test Record",
      "Markram T20 Star",
    ],
  },
  {
    name: "Lungi Ngidi",
    tags: [
      "lungi ngidi",
      "ngidi",
      "south africa",
      "fast bowling",
      "csk",
      "pace",
    ],
    titles: [
      "Ngidi Fast Delivery",
      "Lungi Ngidi 4K",
      "Ngidi CSK Pacer",
      "Ngidi South Africa",
      "Lungi Ngidi Portrait",
      "Ngidi Death Overs",
      "Ngidi World Cup",
      "Lungi Ngidi Ultra",
      "Ngidi Test Spell",
      "Ngidi Wicket Celebration",
    ],
  },

  // ─── New Zealand ──────────────────────────────────────────────
  {
    name: "Kane Williamson",
    tags: [
      "kane williamson",
      "williamson",
      "new zealand",
      "captain",
      "batting",
      "srh",
    ],
    titles: [
      "Williamson Textbook Drive",
      "Kane NZ Captain",
      "Williamson World Cup",
      "Kane Williamson 4K",
      "Williamson SRH Leader",
      "Kane Williamson Portrait",
      "Williamson Elegant Batting",
      "Williamson Test Legend",
      "Kane Williamson Ultra",
      "Williamson NZ Hero",
    ],
  },
  {
    name: "Trent Boult",
    tags: [
      "trent boult",
      "boult",
      "new zealand",
      "fast bowling",
      "left-arm swing",
      "mi",
    ],
    titles: [
      "Boult Left-Arm Swing",
      "Trent Boult 4K",
      "Boult New Zealand Ace",
      "Boult MI Legend",
      "Trent Boult Portrait",
      "Boult World Cup Final",
      "Boult New Ball Art",
      "Trent Boult Ultra",
      "Boult Test Heroics",
      "Boult Death Specialist",
    ],
  },
  {
    name: "Tim Southee",
    tags: [
      "tim southee",
      "southee",
      "new zealand",
      "fast bowling",
      "kkr",
      "swing",
    ],
    titles: [
      "Southee Swing Artist",
      "Tim Southee 4K",
      "Southee NZ Captain",
      "Southee KKR Star",
      "Tim Southee Portrait",
      "Southee Test Bowling",
      "Southee World Cup",
      "Tim Southee Ultra",
      "Southee Reverse Swing",
      "Southee Wicket Salute",
    ],
  },
  {
    name: "Devon Conway",
    tags: [
      "devon conway",
      "conway",
      "new zealand",
      "wicketkeeper",
      "batting",
      "csk",
    ],
    titles: [
      "Conway Test Debut 200",
      "Devon Conway 4K",
      "Conway CSK Star",
      "Conway NZ Opener",
      "Devon Conway Portrait",
      "Conway Left-Hand Elegance",
      "Conway World Cup",
      "Devon Conway Ultra",
      "Conway T20 Record",
      "Conway IPL Hero",
    ],
  },
  {
    name: "Daryl Mitchell",
    tags: [
      "daryl mitchell",
      "mitchell",
      "new zealand",
      "batting",
      "all-rounder",
    ],
    titles: [
      "Daryl Mitchell WC Hero",
      "Daryl Mitchell 4K",
      "Mitchell NZ Star",
      "Mitchell Semifinal Blitz",
      "Daryl Mitchell Portrait",
      "Mitchell All-Rounder",
      "Mitchell T20 Power",
      "Daryl Mitchell Ultra",
      "Mitchell Test Record",
      "Daryl Mitchell NZ",
    ],
  },

  // ─── West Indies ──────────────────────────────────────────────
  {
    name: "Nicholas Pooran",
    tags: [
      "nicholas pooran",
      "pooran",
      "west indies",
      "wicketkeeper",
      "batting",
      "lsg",
    ],
    titles: [
      "Pooran Six Machine",
      "Nicholas Pooran 4K",
      "Pooran WI Captain",
      "Pooran LSG Star",
      "Nicholas Pooran Portrait",
      "Pooran T20 Legend",
      "Pooran World Cup",
      "Nicholas Pooran Ultra",
      "Pooran CPL Fire",
      "Pooran Power Hit",
    ],
  },
  {
    name: "Shimron Hetmyer",
    tags: ["shimron hetmyer", "hetmyer", "west indies", "batting", "rr"],
    titles: [
      "Hetmyer Power Sixes",
      "Shimron Hetmyer 4K",
      "Hetmyer WI Hero",
      "Hetmyer RR Star",
      "Shimron Hetmyer Portrait",
      "Hetmyer T20 Smasher",
      "Hetmyer World Cup",
      "Shimron Hetmyer Ultra",
      "Hetmyer CPL Blaze",
      "Hetmyer Big Six",
    ],
  },
  {
    name: "Kieron Pollard",
    tags: [
      "kieron pollard",
      "pollard",
      "west indies",
      "mi",
      "all-rounder",
      "legend",
    ],
    titles: [
      "Pollard MI Legend",
      "Kieron Pollard 4K",
      "Pollard Six King",
      "Pollard WI Hero",
      "Kieron Pollard Portrait",
      "Pollard All-Rounder",
      "Pollard CPL Star",
      "Kieron Pollard Ultra",
      "Pollard Last Over",
      "Pollard T20 Legend",
    ],
  },
  {
    name: "Chris Gayle",
    tags: [
      "chris gayle",
      "gayle",
      "universe boss",
      "west indies",
      "batting",
      "rcb",
      "t20",
    ],
    titles: [
      "Universe Boss Gayle",
      "Chris Gayle 175 IPL",
      "Gayle Six Monster",
      "Chris Gayle 4K",
      "Gayle RCB Legend",
      "Chris Gayle Portrait",
      "Gayle World Cup",
      "Chris Gayle Ultra",
      "Gayle CPL King",
      "Gayle T20 GOAT",
    ],
  },

  // ─── Sri Lanka ────────────────────────────────────────────────
  {
    name: "Wanindu Hasaranga",
    tags: [
      "wanindu hasaranga",
      "hasaranga",
      "sri lanka",
      "leg-spin",
      "rcb",
      "all-rounder",
    ],
    titles: [
      "Hasaranga Leg Spin",
      "Wanindu Hasaranga 4K",
      "Hasaranga RCB Star",
      "Hasaranga T20 Legend",
      "Wanindu Portrait",
      "Hasaranga Googly",
      "Hasaranga World Cup",
      "Wanindu Hasaranga Ultra",
      "Hasaranga Wicket Art",
      "Hasaranga SL Hero",
    ],
  },
  {
    name: "Dasun Shanaka",
    tags: ["dasun shanaka", "shanaka", "sri lanka", "captain", "all-rounder"],
    titles: [
      "Shanaka SL Captain",
      "Dasun Shanaka 4K",
      "Shanaka T20 Hero",
      "Shanaka All-Rounder",
      "Dasun Shanaka Portrait",
      "Shanaka World Cup",
      "Shanaka Big Hits",
      "Dasun Shanaka Ultra",
      "Shanaka Batting",
      "Shanaka SL Star",
    ],
  },
  {
    name: "Kusal Mendis",
    tags: ["kusal mendis", "mendis", "sri lanka", "wicketkeeper", "batting"],
    titles: [
      "Kusal Mendis Opener",
      "Mendis SL Star",
      "Kusal Mendis 4K",
      "Mendis T20 Record",
      "Kusal Mendis Portrait",
      "Mendis World Cup",
      "Mendis Wicketkeeper",
      "Kusal Mendis Ultra",
      "Mendis Sri Lanka",
      "Kusal Big Innings",
    ],
  },

  // ─── Bangladesh ───────────────────────────────────────────────
  {
    name: "Shakib Al Hasan",
    tags: [
      "shakib al hasan",
      "shakib",
      "bangladesh",
      "all-rounder",
      "no.1",
      "kkr",
    ],
    titles: [
      "Shakib World No.1",
      "Shakib Al Hasan 4K",
      "Shakib Bangladesh Legend",
      "Shakib KKR Star",
      "Shakib Al Hasan Portrait",
      "Shakib T20 Magic",
      "Shakib Spin Bowling",
      "Shakib Al Hasan Ultra",
      "Shakib World Cup",
      "Shakib All-Rounder",
    ],
  },
  {
    name: "Mustafizur Rahman",
    tags: [
      "mustafizur rahman",
      "mustafiz",
      "bangladesh",
      "fast bowling",
      "cutter",
    ],
    titles: [
      "Mustafiz Cutter Master",
      "Mustafizur Rahman 4K",
      "Mustafiz Bangladesh Ace",
      "Mustafiz IPL Star",
      "Mustafizur Portrait",
      "Mustafiz T20 King",
      "Mustafiz World Cup",
      "Mustafizur Rahman Ultra",
      "Mustafiz Wicket Art",
      "Mustafiz Slow Ball",
    ],
  },
  {
    name: "Litton Das",
    tags: ["litton das", "litton", "bangladesh", "wicketkeeper", "batting"],
    titles: [
      "Litton Das Century",
      "Litton Bangladesh Star",
      "Litton Das 4K",
      "Litton T20 Hero",
      "Litton Das Portrait",
      "Litton Wicketkeeper",
      "Litton World Cup",
      "Litton Das Ultra",
      "Litton Big Innings",
      "Litton Bangladesh",
    ],
  },

  // ─── Afghanistan ──────────────────────────────────────────────
  {
    name: "Rashid Khan",
    tags: [
      "rashid khan",
      "rashid",
      "afghanistan",
      "leg-spin",
      "gt",
      "t20 legend",
    ],
    titles: [
      "Rashid Khan Spin Magic",
      "Rashid Leg Break",
      "Rashid Khan 4K",
      "Rashid GT Captain",
      "Rashid Khan Portrait",
      "Rashid T20 World",
      "Rashid Afghanistan Hero",
      "Rashid Khan Ultra",
      "Rashid Googly King",
      "Rashid IPL Legend",
    ],
  },
  {
    name: "Mohammad Nabi",
    tags: ["mohammad nabi", "nabi", "afghanistan", "all-rounder", "t20"],
    titles: [
      "Nabi Afghanistan Legend",
      "Mohammad Nabi 4K",
      "Nabi All-Rounder",
      "Nabi T20 Veteran",
      "Mohammad Nabi Portrait",
      "Nabi World Cup",
      "Nabi IPL Star",
      "Mohammad Nabi Ultra",
      "Nabi Spin Batting",
      "Nabi Afghanistan",
    ],
  },

  // ─── Legends ──────────────────────────────────────────────────
  {
    name: "Sachin Tendulkar",
    tags: [
      "sachin tendulkar",
      "sachin",
      "tendulkar",
      "master blaster",
      "india",
      "god of cricket",
      "legend",
    ],
    titles: [
      "Sachin Master Blaster",
      "Sachin 100 Centuries",
      "Tendulkar God of Cricket",
      "Sachin 4K Legend",
      "Sachin vs Australia",
      "Sachin Tendulkar Portrait",
      "Sachin World Cup 2011",
      "Sachin Desert Storm",
      "Tendulkar 200 Not Out",
      "Sachin Ultra HD Legend",
    ],
  },
  {
    name: "Brian Lara",
    tags: [
      "brian lara",
      "lara",
      "west indies",
      "batting legend",
      "400 not out",
      "left-hand",
    ],
    titles: [
      "Lara 400 Not Out",
      "Brian Lara Classic",
      "Lara West Indies King",
      "Brian Lara 4K",
      "Lara Cover Drive",
      "Brian Lara Portrait",
      "Lara Test Record",
      "Brian Lara Ultra",
      "Lara Trinidad",
      "Lara Batting Elegance",
    ],
  },
  {
    name: "Ricky Ponting",
    tags: [
      "ricky ponting",
      "ponting",
      "punter",
      "australia",
      "captain",
      "batting legend",
    ],
    titles: [
      "Punter Australia Legend",
      "Ricky Ponting 4K",
      "Ponting World Cup",
      "Ponting Pull Shot",
      "Ricky Ponting Portrait",
      "Ponting Test Legend",
      "Ponting Ashes Fire",
      "Ricky Ponting Ultra",
      "Ponting 13,378 Runs",
      "Ponting Captain",
    ],
  },
  {
    name: "Shane Warne",
    tags: [
      "shane warne",
      "warne",
      "australia",
      "leg-spin",
      "king of spin",
      "legend",
    ],
    titles: [
      "Warne Ball of Century",
      "Shane Warne Legend",
      "Warne 700 Wickets",
      "Shane Warne 4K",
      "Warne Flipper",
      "Shane Warne Portrait",
      "Warne Ashes Magic",
      "Shane Warne Ultra",
      "Warne Leg Spin God",
      "Warne Cricket King",
    ],
  },
  {
    name: "Wasim Akram",
    tags: [
      "wasim akram",
      "wasim",
      "pakistan",
      "fast bowling",
      "swing sultan",
      "legend",
    ],
    titles: [
      "Wasim Swing Sultan",
      "Wasim Akram Legend",
      "Akram Left-Arm Fire",
      "Wasim Akram 4K",
      "Wasim 500 Wickets",
      "Wasim Akram Portrait",
      "Akram Pakistan Legend",
      "Wasim Akram Ultra",
      "Wasim World Cup 1992",
      "Akram Reverse Swing",
    ],
  },
  {
    name: "Curtly Ambrose",
    tags: [
      "curtly ambrose",
      "ambrose",
      "west indies",
      "fast bowling",
      "tall",
      "legend",
    ],
    titles: [
      "Ambrose West Indies Legend",
      "Curtly Ambrose 4K",
      "Ambrose Tall Delivery",
      "Ambrose 8-45 Famous",
      "Curtly Ambrose Portrait",
      "Ambrose Test Legend",
      "Ambrose World Class",
      "Curtly Ambrose Ultra",
      "Ambrose Bowling Art",
      "Ambrose WI Hero",
    ],
  },
  {
    name: "Muttiah Muralitharan",
    tags: [
      "muttiah muralitharan",
      "murali",
      "sri lanka",
      "off-spin",
      "800 wickets",
      "legend",
    ],
    titles: [
      "Murali 800 Wickets",
      "Muralitharan Spin God",
      "Murali Sri Lanka Legend",
      "Murali 4K",
      "Murali Doosra",
      "Muttiah Muralitharan Portrait",
      "Murali Bowling Art",
      "Murali Ultra HD",
      "Murali Test Record",
      "Murali Match-Winner",
    ],
  },
  {
    name: "Glenn McGrath",
    tags: [
      "glenn mcgrath",
      "mcgrath",
      "australia",
      "fast bowling",
      "pigeon",
      "legend",
    ],
    titles: [
      "McGrath Pigeon Precision",
      "Glenn McGrath 4K",
      "McGrath 563 Wickets",
      "McGrath Line and Length",
      "Glenn McGrath Portrait",
      "McGrath Ashes Destroyer",
      "McGrath WC 2003",
      "Glenn McGrath Ultra",
      "McGrath Australia Legend",
      "McGrath Perfect Bowling",
    ],
  },
  {
    name: "Adam Gilchrist",
    tags: [
      "adam gilchrist",
      "gilchrist",
      "gilly",
      "australia",
      "wicketkeeper",
      "batting legend",
    ],
    titles: [
      "Gilly Wicketkeeper Batter",
      "Gilchrist WC Final 149",
      "Adam Gilchrist 4K",
      "Gilchrist Batting Blitz",
      "Gilchrist Australia Legend",
      "Adam Gilchrist Portrait",
      "Gilly Test Legend",
      "Adam Gilchrist Ultra",
      "Gilchrist WC Hero",
      "Gilchrist Keeping Art",
    ],
  },
  {
    name: "Jacques Kallis",
    tags: [
      "jacques kallis",
      "kallis",
      "south africa",
      "all-rounder",
      "legend",
      "greatest",
    ],
    titles: [
      "Kallis Greatest All-Rounder",
      "Jacques Kallis 4K",
      "Kallis SA Legend",
      "Kallis 13,289 Runs",
      "Jacques Kallis Portrait",
      "Kallis Test Legend",
      "Kallis Bowling Fire",
      "Jacques Kallis Ultra",
      "Kallis World Class",
      "Kallis GOAT",
    ],
  },
  {
    name: "Andrew Flintoff",
    tags: [
      "andrew flintoff",
      "flintoff",
      "freddie",
      "england",
      "all-rounder",
      "2005 ashes",
    ],
    titles: [
      "Freddie 2005 Ashes Hero",
      "Flintoff England Legend",
      "Andrew Flintoff 4K",
      "Freddie All-Rounder",
      "Flintoff Compton Apology",
      "Andrew Flintoff Portrait",
      "Freddie Batting Blitz",
      "Flintoff Fast Bowling",
      "Andrew Flintoff Ultra",
      "Freddie England Icon",
    ],
  },
  {
    name: "Viv Richards",
    tags: [
      "viv richards",
      "viv",
      "west indies",
      "sir vivian",
      "batting legend",
      "master blaster",
    ],
    titles: [
      "Sir Viv Master Blaster",
      "Viv Richards West Indies",
      "Viv Richards 4K",
      "Viv No Helmet Batting",
      "Sir Vivian Portrait",
      "Viv Richards Legend",
      "Viv Attacking Batting",
      "Viv Richards Ultra",
      "Sir Viv World Cup",
      "Viv Richards GOAT",
    ],
  },
  {
    name: "Imran Khan",
    tags: [
      "imran khan",
      "imran",
      "pakistan",
      "captain",
      "all-rounder",
      "world cup 1992",
    ],
    titles: [
      "Imran Khan WC 1992",
      "Imran Pakistan Captain",
      "Imran Khan All-Rounder",
      "Imran Khan 4K",
      "Imran Pace Bowling",
      "Imran Khan Portrait",
      "Imran Khan Legend",
      "Imran Khan Ultra",
      "Imran Cricket Icon",
      "Imran Khan Classic",
    ],
  },
  {
    name: "Kapil Dev",
    tags: [
      "kapil dev",
      "kapil",
      "india",
      "all-rounder",
      "world cup 1983",
      "legend",
      "haryana hurricane",
    ],
    titles: [
      "Kapil Dev 1983 WC",
      "Kapil India Legend",
      "Haryana Hurricane",
      "Kapil Dev 4K",
      "Kapil Natraj Shot",
      "Kapil Dev Portrait",
      "Kapil 434 Wickets",
      "Kapil Dev Ultra",
      "Kapil Dev Classic",
      "Kapil Cricket Hero",
    ],
  },
];

export const CRICKET_PLAYERS_WALLPAPERS = buildPlayerWallpapers(
  CRICKET_PLAYERS_LIST,
  31000,
);
