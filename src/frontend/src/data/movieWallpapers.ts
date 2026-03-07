import type { Wallpaper } from "./wallpapers";

// ─── Movie Wallpapers (1500 total) ────────────────────────────
// IDs: 20000–21499 (anime uses 10000–11999)
// Franchises: Avengers, Spider-Man, Batman, Joker, Avatar,
//             John Wick, Fast & Furious, Transformers, Star Wars
// ~167 per franchise

// Unsplash image pools per franchise
const AVENGERS_IMGS = [
  "photo-1534008897995-27a23e859048",
  "photo-1578632767115-351597cf2477",
  "photo-1614728263952-84ea256f9679",
  "photo-1612036782180-6f0b6cd846fe",
  "photo-1624213111452-35e8d3d5cc18",
  "photo-1560343787-92a01e3f6e2c",
  "photo-1596727147705-61a532a659bd",
  "photo-1518770660439-4636190af475",
  "photo-1559827260-dc66d52bef19",
  "photo-1547931682-9be59b3b4d55",
];

const SPIDERMAN_IMGS = [
  "photo-1626814026160-2237a95fc5a0",
  "photo-1564858470678-0886be5e1d59",
  "photo-1635805737707-575885ab0820",
  "photo-1509281373149-e957c6296406",
  "photo-1608889175157-0554b4f9be2b",
  "photo-1601645191163-3fc0d5d64e35",
  "photo-1571019613454-1cb2f99b2d8b",
  "photo-1624213111452-35e8d3d5cc18",
  "photo-1559827260-dc66d52bef19",
  "photo-1614728263952-84ea256f9679",
];

const BATMAN_IMGS = [
  "photo-1531259683007-016a7b628fc3",
  "photo-1568702846914-96b305d2aaeb",
  "photo-1519125323398-675f0ddb6308",
  "photo-1478760329108-5c3ed9d495a0",
  "photo-1478144592103-25e218a04891",
  "photo-1604147706283-d7119b5b822c",
  "photo-1478760329108-5c3ed9d495a0",
  "photo-1541701494587-cb58502866ab",
  "photo-1516912481808-3406841bd33c",
  "photo-1495616811223-4d98c6e9c869",
];

const JOKER_IMGS = [
  "photo-1607604276583-eef5d176d184",
  "photo-1534008897995-27a23e859048",
  "photo-1516912481808-3406841bd33c",
  "photo-1541701494587-cb58502866ab",
  "photo-1519125323398-675f0ddb6308",
  "photo-1495616811223-4d98c6e9c869",
  "photo-1554080353-a576cf803bda",
  "photo-1531259683007-016a7b628fc3",
  "photo-1497271679421-ce9c3d6a31de",
  "photo-1614728263952-84ea256f9679",
];

const AVATAR_IMGS = [
  "photo-1446776653964-20c1d3a81b06",
  "photo-1419242902214-272b3f66ee7a",
  "photo-1462275646964-a0e3386b89fa",
  "photo-1502082553048-f009c37129b9",
  "photo-1501854140801-50d01698950b",
  "photo-1441974231531-c6227db76b6e",
  "photo-1518495973542-4542c06a5843",
  "photo-1465146344425-f00d5f5c8f07",
  "photo-1508739773434-c26b3d09e071",
  "photo-1504173010664-32509aeebb62",
];

const JOHNWICK_IMGS = [
  "photo-1555949963-aa79dcee981c",
  "photo-1509281373149-e957c6296406",
  "photo-1534008897995-27a23e859048",
  "photo-1519125323398-675f0ddb6308",
  "photo-1568702846914-96b305d2aaeb",
  "photo-1541701494587-cb58502866ab",
  "photo-1516912481808-3406841bd33c",
  "photo-1554080353-a576cf803bda",
  "photo-1607604276583-eef5d176d184",
  "photo-1547931682-9be59b3b4d55",
];

const FASTFURIOUS_IMGS = [
  "photo-1568605117036-5fe5e7bab0b7",
  "photo-1503376780353-7e6692767b70",
  "photo-1544636331-e26879cd4d9b",
  "photo-1494976388531-d1058494cdd8",
  "photo-1591464116228-e9f50d67e9ce",
  "photo-1567808291548-fc3ee04dbcf0",
  "photo-1618843479313-40f8afb4b4d8",
  "photo-1558618666-fcd25c85cd64",
  "photo-1525609004556-c46c7d6cf023",
  "photo-1519641471654-76ce0107ad1b",
];

const TRANSFORMERS_IMGS = [
  "photo-1518770660439-4636190af475",
  "photo-1555949963-aa79dcee981c",
  "photo-1485827404703-89b55fcc595e",
  "photo-1531297484001-80022131f5a1",
  "photo-1526374965328-7f61d4dc18c5",
  "photo-1563207153-f403bf289096",
  "photo-1573804633927-bfcbcd909acd",
  "photo-1451187580459-43490279c0fa",
  "photo-1533236897111-3e94666b2edf",
  "photo-1506784983877-45594efa4cbe",
];

const STARWARS_IMGS = [
  "photo-1446776653964-20c1d3a81b06",
  "photo-1419242902214-272b3f66ee7a",
  "photo-1506318137071-a8e063b4bec0",
  "photo-1462275646964-a0e3386b89fa",
  "photo-1454789548928-9efd52dc4031",
  "photo-1419242902214-272b3f66ee7a",
  "photo-1502759683571-2ef5f89b47a8",
  "photo-1484600899469-230e8d1d59c0",
  "photo-1470770903676-69b98201ea1c",
  "photo-1451187580459-43490279c0fa",
];

type MovieDef = {
  name: string;
  tags: string[];
  imgs: string[];
  titles: string[];
};

const MOVIES: MovieDef[] = [
  {
    name: "Avengers",
    tags: ["avengers", "marvel", "superhero", "mcu", "action"],
    imgs: AVENGERS_IMGS,
    titles: [
      "Avengers Assemble",
      "Infinity War",
      "Endgame Sunrise",
      "Iron Man Suit",
      "Thor's Lightning",
      "Hulk Smash",
      "Black Widow",
      "Captain America Shield",
      "Hawkeye Ready",
      "Vision Awakens",
      "Scarlet Witch Power",
      "Doctor Strange Portal",
      "Thanos Gauntlet",
      "Wakanda Forever",
      "Ant-Man Micro",
      "Falcon Wings",
      "War Machine Armor",
      "Nebula Dark",
      "Gamora's Blade",
      "Starlord Dance",
    ],
  },
  {
    name: "Spider-Man",
    tags: ["spider-man", "spiderman", "marvel", "spidey", "web", "nyc"],
    imgs: SPIDERMAN_IMGS,
    titles: [
      "Web Slinger NYC",
      "Homecoming Rooftop",
      "Into the Spider-Verse",
      "No Way Home Multiversal",
      "Spider Sense Tingle",
      "Miles Morales Leap",
      "Gwen Stacy Dimension",
      "Green Goblin Night",
      "Doc Ock Tentacles",
      "Electro Storm",
      "Venom Symbiote",
      "Spidey Upside Down",
      "Far From Home Venice",
      "Daily Bugle Rooftop",
      "Friendly Neighborhood",
      "Across Spider-Verse",
      "Peni Parker Mech",
      "Spider-Noir Shadow",
      "Prowler Hunt",
      "Kingpin Throne",
    ],
  },
  {
    name: "Batman",
    tags: ["batman", "dc", "gotham", "dark knight", "bruce wayne"],
    imgs: BATMAN_IMGS,
    titles: [
      "Gotham Dark Knight",
      "Bat Signal Rises",
      "Wayne Manor Silhouette",
      "Joker's Gotham",
      "Batmobile Chase",
      "Batman Begins Rooftop",
      "The Dark Knight Rises",
      "Alfred's Shadow",
      "Catwoman Alley",
      "Bane Breaks Batman",
      "Robin Emerges",
      "Gotham City Rain",
      "Bat Cave Interior",
      "Nightwing Flight",
      "Ra's al Ghul Temple",
      "Commissioner Gordon",
      "Harvey Dent Coin",
      "Oracle's Screens",
      "Batgirl Kickstand",
      "Lucius Fox Labs",
    ],
  },
  {
    name: "Joker",
    tags: ["joker", "dc", "clown", "chaos", "joker 2019"],
    imgs: JOKER_IMGS,
    titles: [
      "Arthur Fleck Broken",
      "Joker Staircase Dance",
      "Laugh in the Dark",
      "Gotham Clown Prince",
      "Makeup Transformation",
      "Subway Rampage",
      "Murray Show Chaos",
      "Gotham Riots Begin",
      "Joker Laughs Last",
      "Arkham Smile",
      "Clown Car Escape",
      "Joker Playing Card",
      "Blood Red Curtain",
      "Why So Serious",
      "Purple Suit Strut",
      "Joker Origin Dark",
      "Chaos Agent",
      "Hospital Walkout",
      "Social Worker Scene",
      "One Bad Day",
    ],
  },
  {
    name: "Avatar",
    tags: ["avatar", "pandora", "na'vi", "james cameron", "unobtanium"],
    imgs: AVATAR_IMGS,
    titles: [
      "Pandora Bioluminescent",
      "Toruk Makto Rider",
      "Na'vi War Paint",
      "Floating Mountains",
      "Home Tree Falls",
      "Eywa Connects All",
      "Jake Sully Avatar",
      "Neytiri Bow Ready",
      "Hallelujah Mountains",
      "Great Leonopteryx",
      "Banshee Flight",
      "Omaticaya Clan",
      "Marine Invades Pandora",
      "The Way of Water",
      "Metkayina Reef",
      "Lo'ak Deep Dive",
      "Kiri Spiritual",
      "Quaritch Returns",
      "RDA Battleship",
      "Pandora Sunrise",
    ],
  },
  {
    name: "John Wick",
    tags: [
      "john wick",
      "johnwick",
      "keanu reeves",
      "assassin",
      "continental",
      "action",
    ],
    imgs: JOHNWICK_IMGS,
    titles: [
      "Baba Yaga Returns",
      "Continental Hotel",
      "Pencil Scene",
      "Night Raid",
      "Gold Coin Market",
      "High Table Decree",
      "Catacombs Battle",
      "Casablanca Showdown",
      "Brooklyn Bridge",
      "Museum Fight",
      "Motorcycle Chase",
      "Mirror Maze",
      "Bowery King Lair",
      "Tarasov Mansion",
      "Red Circle Club",
      "Russian Church Battle",
      "Viggo's Office",
      "Dog Avenged",
      "Sofia's Dogs",
      "Osaka Continental",
    ],
  },
  {
    name: "Fast & Furious",
    tags: [
      "fast furious",
      "fastfurious",
      "fast and furious",
      "cars",
      "racing",
      "vin diesel",
      "dom",
      "street racing",
    ],
    imgs: FASTFURIOUS_IMGS,
    titles: [
      "Dom's Charger Burnout",
      "NOS Boost Quarter Mile",
      "Tokyo Drift Drift King",
      "Letty's Return",
      "Brian O'Conner Legacy",
      "Hobbs & Shaw Showdown",
      "Safe Drop Vault",
      "Cipher Hack",
      "Team Arrives Furiously",
      "Coronas & Respect",
      "Muscle Car vs Sports",
      "Neon Undercarriage",
      "LA Street Race",
      "Midnight Sprint",
      "Family BBQ Crew",
      "Shaw Brothers Brawl",
      "Ice Lake Race",
      "Parachute Cars",
      "Tank On Highway",
      "Rocket Powered Car",
    ],
  },
  {
    name: "Transformers",
    tags: [
      "transformers",
      "autobot",
      "decepticon",
      "optimus prime",
      "bumblebee",
    ],
    imgs: TRANSFORMERS_IMGS,
    titles: [
      "Optimus Prime Charge",
      "Bumblebee Transform",
      "Megatron Rises",
      "Decepticon Invasion",
      "Autobots Assemble",
      "Cybertron Warzone",
      "Bumblebee VW",
      "Starscream Flight",
      "Ironhide Cannons",
      "Jazz Fight",
      "Sentinel Prime Betrayal",
      "Age of Extinction",
      "Grimlock Roar",
      "Drift Swords",
      "Dinobots Charge",
      "Soundwave Transmit",
      "The Last Knight",
      "Quintessa Reveal",
      "Cybertron Sphere",
      "Autobot Memorial",
    ],
  },
  {
    name: "Star Wars",
    tags: [
      "star wars",
      "starwars",
      "jedi",
      "sith",
      "lightsaber",
      "force",
      "galaxy",
    ],
    imgs: STARWARS_IMGS,
    titles: [
      "Darth Vader Silhouette",
      "Luke Skywalker Binary Sunset",
      "Millennium Falcon Hyperspace",
      "Lightsaber Duel",
      "Yoda's Wisdom",
      "Obi-Wan Ghost",
      "Rey Desert Scavenger",
      "Kylo Ren Unmasked",
      "Death Star Trench Run",
      "Mandalorian & Grogu",
      "The Force Awakens",
      "Clone Wars Battle",
      "Rogue One Hope",
      "Princess Leia Legacy",
      "Han Solo Blaster",
      "Chewbacca Roar",
      "R2-D2 & C-3PO",
      "Darth Maul Duel",
      "Padme's Resolve",
      "Anakin Turns Dark",
    ],
  },
];

const RESOLUTIONS: Array<"HD" | "4K"> = ["HD", "4K"];
const DEVICE_TYPES: Array<"desktop" | "mobile"> = ["desktop", "mobile"];

function buildMovieWallpapers(): Wallpaper[] {
  const wallpapers: Wallpaper[] = [];
  let id = 20000; // Start after anime IDs (10000–11999) to avoid collisions

  for (const movie of MOVIES) {
    // How many wallpapers for this franchise (~167 each to reach 1500 total)
    const count = Math.ceil(1500 / MOVIES.length);

    for (let i = 0; i < count; i++) {
      const titleBase = movie.titles[i % movie.titles.length];
      const variantNum = Math.floor(i / movie.titles.length);
      const title =
        variantNum === 0
          ? titleBase
          : `${titleBase} ${["Vol.2", "Remastered", "4K Edition", "Extended", "Director's Cut", "Alternate", "2160p", "Fan Art", "Concept Art", "Dark Version", "Light Version", "Anniversary"][variantNum % 12]}`;

      const imgKey = movie.imgs[i % movie.imgs.length];
      const resolution = RESOLUTIONS[i % 2];
      const deviceType = DEVICE_TYPES[Math.floor(i / 2) % 2];
      const isTrending = i < 5;

      const wRes = resolution === "4K" ? "3840" : "1920";

      wallpapers.push({
        id,
        title,
        category: "Movies",
        resolution,
        deviceType,
        imageUrl: `https://images.unsplash.com/${imgKey}?w=800&q=80`,
        fullUrl: `https://images.unsplash.com/${imgKey}?w=${wRes}&q=95`,
        tags: [
          ...movie.tags,
          movie.name.toLowerCase().replace(/\s+&\s+/g, "-"),
          movie.name
            .toLowerCase()
            .replace(/[\s&-]+/g, ""), // no-space variant e.g. "spiderman"
          resolution.toLowerCase(),
          "movie",
          "movies",
          "film",
        ],
        isTrending,
      });

      id++;
    }
  }

  return wallpapers;
}

export const MOVIE_WALLPAPERS: Wallpaper[] = buildMovieWallpapers();
