import { ANIME_SERIES_WALLPAPERS } from "./animeWallpapers";
import { CRICKET_WALLPAPERS } from "./cricketWallpapers";
import { MOVIE_WALLPAPERS } from "./movieWallpapers";

export type Wallpaper = {
  id: number;
  title: string;
  category:
    | "Anime"
    | "Nature"
    | "Cars"
    | "Gaming"
    | "AMOLED"
    | "Space"
    | "Minimal"
    | "Movies"
    | "Cricket";
  resolution: "HD" | "2K" | "4K";
  deviceType: "desktop" | "mobile";
  imageUrl: string;
  fullUrl: string;
  tags: string[];
  isTrending: boolean;
};

export type Category = {
  name: string;
  color: string;
  accentColor: string;
  coverWallpaperId: number;
  description: string;
};

export const WALLPAPERS: Wallpaper[] = [
  // ─── ANIME (71) ───────────────────────────────────────────────
  {
    id: 0,
    title: "Dragon Flames",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=3840&q=95",
    tags: ["anime", "dragon", "fire"],
    isTrending: true,
  },
  {
    id: 1,
    title: "Neon City Night",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=3840&q=95",
    tags: ["anime", "neon", "city"],
    isTrending: true,
  },
  {
    id: 2,
    title: "Sakura Night",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=1920&q=95",
    tags: ["anime", "sakura", "pink"],
    isTrending: false,
  },
  {
    id: 3,
    title: "Spirit Forest",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=95",
    tags: ["anime", "forest", "spirit"],
    isTrending: false,
  },
  {
    id: 4,
    title: "Tokyo Streets",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=95",
    tags: ["anime", "tokyo", "city"],
    isTrending: false,
  },
  {
    id: 5,
    title: "Cyberpunk Alley",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=3840&q=95",
    tags: ["anime", "cyberpunk", "neon"],
    isTrending: true,
  },
  {
    id: 30,
    title: "Samurai Dusk",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=3840&q=95",
    tags: ["anime", "samurai", "sword", "sunset"],
    isTrending: true,
  },
  {
    id: 31,
    title: "Mecha Storm",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=3840&q=95",
    tags: ["anime", "mecha", "robot", "sci-fi"],
    isTrending: false,
  },
  {
    id: 32,
    title: "Moon Princess",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=1920&q=95",
    tags: ["anime", "moon", "princess", "fantasy"],
    isTrending: false,
  },
  {
    id: 33,
    title: "Rainy Shibuya",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=3840&q=95",
    tags: ["anime", "rain", "city", "japan"],
    isTrending: true,
  },
  {
    id: 500,
    title: "Oni Mask",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=3840&q=95",
    tags: ["anime", "oni", "mask", "japanese"],
    isTrending: false,
  },
  {
    id: 501,
    title: "Lotus Pond",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1552083375-1447ce886485?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1552083375-1447ce886485?w=1920&q=95",
    tags: ["anime", "lotus", "pond", "serene"],
    isTrending: false,
  },
  {
    id: 502,
    title: "Shrine Gate",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=3840&q=95",
    tags: ["anime", "shrine", "torii", "japan"],
    isTrending: false,
  },
  {
    id: 503,
    title: "Koi River",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=95",
    tags: ["anime", "koi", "river", "peaceful"],
    isTrending: false,
  },
  {
    id: 504,
    title: "Yokai Lanterns",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1574891460741-bfeda8c92e29?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1574891460741-bfeda8c92e29?w=3840&q=95",
    tags: ["anime", "yokai", "lanterns", "night"],
    isTrending: true,
  },
  {
    id: 505,
    title: "Ninja Rooftop",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=3840&q=95",
    tags: ["anime", "ninja", "rooftop", "city"],
    isTrending: false,
  },
  {
    id: 506,
    title: "Bamboo Wind",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1541480551145-2370a440d585?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541480551145-2370a440d585?w=1920&q=95",
    tags: ["anime", "bamboo", "wind", "green"],
    isTrending: false,
  },
  {
    id: 507,
    title: "Floating Sky",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?w=3840&q=95",
    tags: ["anime", "sky", "clouds", "fantasy"],
    isTrending: false,
  },
  {
    id: 508,
    title: "Midnight Warrior",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=3840&q=95",
    tags: ["anime", "warrior", "midnight", "sword"],
    isTrending: true,
  },
  {
    id: 509,
    title: "Anime Sunset",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=1920&q=95",
    tags: ["anime", "sunset", "orange", "sky"],
    isTrending: false,
  },
  {
    id: 510,
    title: "Crystal Cave",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=3840&q=95",
    tags: ["anime", "crystal", "cave", "magical"],
    isTrending: false,
  },
  {
    id: 511,
    title: "Festival Lights",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=3840&q=95",
    tags: ["anime", "festival", "lights", "colorful"],
    isTrending: true,
  },
  {
    id: 512,
    title: "Wandering Hero",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1920&q=95",
    tags: ["anime", "hero", "journey", "path"],
    isTrending: false,
  },
  {
    id: 513,
    title: "Electric Dreams",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=3840&q=95",
    tags: ["anime", "electric", "neon", "blue"],
    isTrending: false,
  },
  {
    id: 514,
    title: "Storm Rider",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=3840&q=95",
    tags: ["anime", "storm", "dramatic", "sky"],
    isTrending: false,
  },
  {
    id: 515,
    title: "Phantom Blade",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=3840&q=95",
    tags: ["anime", "phantom", "blade", "action"],
    isTrending: false,
  },
  {
    id: 516,
    title: "Garden Spirit",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1520809227329-2b6a59faa0a5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1520809227329-2b6a59faa0a5?w=1920&q=95",
    tags: ["anime", "garden", "spirit", "peaceful"],
    isTrending: false,
  },
  {
    id: 517,
    title: "Neon Butterfly",
    category: "Anime",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=3840&q=95",
    tags: ["anime", "butterfly", "neon", "colorful"],
    isTrending: false,
  },
  {
    id: 518,
    title: "Demon Lord",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=3840&q=95",
    tags: ["anime", "demon", "dark", "powerful"],
    isTrending: true,
  },
  {
    id: 519,
    title: "Village Twilight",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1542382156990-878e0e6b2a48?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1542382156990-878e0e6b2a48?w=1920&q=95",
    tags: ["anime", "village", "twilight", "serene"],
    isTrending: false,
  },
  {
    id: 520,
    title: "Sky Citadel",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=3840&q=95",
    tags: ["anime", "citadel", "sky", "epic"],
    isTrending: false,
  },
  {
    id: 521,
    title: "Wolf Spirit",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=3840&q=95",
    tags: ["anime", "wolf", "spirit", "moon"],
    isTrending: false,
  },
  {
    id: 522,
    title: "Ember Girl",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1920&q=95",
    tags: ["anime", "ember", "fire", "girl"],
    isTrending: false,
  },
  {
    id: 523,
    title: "Frozen Throne",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=3840&q=95",
    tags: ["anime", "frozen", "throne", "ice"],
    isTrending: false,
  },
  {
    id: 524,
    title: "Wandering Cat",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=1920&q=95",
    tags: ["anime", "cat", "cute", "slice-of-life"],
    isTrending: false,
  },
  {
    id: 525,
    title: "Thunder God",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=3840&q=95",
    tags: ["anime", "thunder", "god", "powerful"],
    isTrending: true,
  },

  // ─── NATURE (71) ──────────────────────────────────────────────
  {
    id: 6,
    title: "Mountain Sunrise",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=3840&q=95",
    tags: ["mountain", "sunrise", "landscape"],
    isTrending: true,
  },
  {
    id: 7,
    title: "Aurora Borealis",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=3840&q=95",
    tags: ["aurora", "night", "sky"],
    isTrending: true,
  },
  {
    id: 8,
    title: "Ocean Waves",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=3840&q=95",
    tags: ["ocean", "waves", "blue"],
    isTrending: false,
  },
  {
    id: 9,
    title: "Desert Dunes",
    category: "Nature",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=95",
    tags: ["desert", "sand", "dunes"],
    isTrending: false,
  },
  {
    id: 10,
    title: "Waterfall Mist",
    category: "Nature",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&q=95",
    tags: ["waterfall", "mist", "green"],
    isTrending: false,
  },
  {
    id: 11,
    title: "Milky Way",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=3840&q=95",
    tags: ["milky way", "stars", "night"],
    isTrending: false,
  },
  {
    id: 34,
    title: "Lavender Fields",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=3840&q=95",
    tags: ["lavender", "fields", "purple", "bloom"],
    isTrending: true,
  },
  {
    id: 35,
    title: "Frozen Lake",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=3840&q=95",
    tags: ["lake", "frozen", "winter", "ice"],
    isTrending: false,
  },
  {
    id: 36,
    title: "Tropical Beach",
    category: "Nature",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=95",
    tags: ["beach", "tropical", "ocean", "palm"],
    isTrending: true,
  },
  {
    id: 37,
    title: "Cherry Blossom",
    category: "Nature",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1522383225753-aa185a9f7745?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1522383225753-aa185a9f7745?w=1920&q=95",
    tags: ["cherry", "blossom", "spring", "pink"],
    isTrending: false,
  },
  {
    id: 600,
    title: "Alpine Meadow",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=3840&q=95",
    tags: ["alpine", "meadow", "green", "summer"],
    isTrending: false,
  },
  {
    id: 601,
    title: "Autumn Forest",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=3840&q=95",
    tags: ["autumn", "forest", "orange", "leaves"],
    isTrending: false,
  },
  {
    id: 602,
    title: "Lightning Storm",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=3840&q=95",
    tags: ["lightning", "storm", "dramatic", "sky"],
    isTrending: true,
  },
  {
    id: 603,
    title: "Misty Mountain",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=3840&q=95",
    tags: ["mountain", "misty", "fog", "landscape"],
    isTrending: true,
  },
  {
    id: 604,
    title: "Cliffside View",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?w=3840&q=95",
    tags: ["cliff", "view", "ocean", "dramatic"],
    isTrending: false,
  },
  {
    id: 605,
    title: "Sunflower Field",
    category: "Nature",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=1920&q=95",
    tags: ["sunflower", "field", "yellow", "summer"],
    isTrending: false,
  },
  {
    id: 606,
    title: "River Canyon",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=3840&q=95",
    tags: ["river", "canyon", "red", "landscape"],
    isTrending: false,
  },
  {
    id: 607,
    title: "Snow Peak",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=3840&q=95",
    tags: ["snow", "peak", "winter", "mountain"],
    isTrending: false,
  },
  {
    id: 608,
    title: "Jungle Path",
    category: "Nature",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=95",
    tags: ["jungle", "path", "green", "tropical"],
    isTrending: false,
  },
  {
    id: 609,
    title: "Coral Reef",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=3840&q=95",
    tags: ["coral", "reef", "underwater", "colorful"],
    isTrending: false,
  },
  {
    id: 610,
    title: "Volcano Glow",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=3840&q=95",
    tags: ["volcano", "lava", "glow", "dramatic"],
    isTrending: true,
  },
  {
    id: 611,
    title: "Fog Valley",
    category: "Nature",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1501780392773-287d506245a5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1501780392773-287d506245a5?w=1920&q=95",
    tags: ["fog", "valley", "morning", "peaceful"],
    isTrending: false,
  },
  {
    id: 612,
    title: "Wild Tulips",
    category: "Nature",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=1920&q=95",
    tags: ["tulips", "wild", "colorful", "spring"],
    isTrending: false,
  },
  {
    id: 613,
    title: "Mountain Lake",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1439853949212-36089c89c8b7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1439853949212-36089c89c8b7?w=3840&q=95",
    tags: ["mountain", "lake", "reflection", "alpine"],
    isTrending: true,
  },
  {
    id: 614,
    title: "Moonlit Sea",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=3840&q=95",
    tags: ["moon", "sea", "night", "serene"],
    isTrending: false,
  },
  {
    id: 615,
    title: "Green Rolling Hills",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=3840&q=95",
    tags: ["hills", "green", "rolling", "countryside"],
    isTrending: false,
  },
  {
    id: 616,
    title: "Monsoon Rain",
    category: "Nature",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=1920&q=95",
    tags: ["rain", "monsoon", "drops", "grey"],
    isTrending: false,
  },
  {
    id: 617,
    title: "Wheat Fields",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=3840&q=95",
    tags: ["wheat", "fields", "golden", "harvest"],
    isTrending: false,
  },
  {
    id: 618,
    title: "Blue Lagoon",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=3840&q=95",
    tags: ["lagoon", "blue", "tropical", "crystal"],
    isTrending: false,
  },
  {
    id: 619,
    title: "Poppy Meadow",
    category: "Nature",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?w=1920&q=95",
    tags: ["poppy", "meadow", "red", "flowers"],
    isTrending: false,
  },
  {
    id: 620,
    title: "Icy Tundra",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=3840&q=95",
    tags: ["tundra", "icy", "arctic", "cold"],
    isTrending: false,
  },
  {
    id: 621,
    title: "Rainbow Canyon",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=3840&q=95",
    tags: ["canyon", "rainbow", "colorful", "rock"],
    isTrending: true,
  },
  {
    id: 622,
    title: "Night Forest",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=3840&q=95",
    tags: ["forest", "night", "dark", "trees"],
    isTrending: false,
  },
  {
    id: 623,
    title: "Autumn River",
    category: "Nature",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1477322524744-0eece9e79640?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1477322524744-0eece9e79640?w=1920&q=95",
    tags: ["autumn", "river", "orange", "peaceful"],
    isTrending: false,
  },
  {
    id: 624,
    title: "Savanna Sunset",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=3840&q=95",
    tags: ["savanna", "sunset", "africa", "warm"],
    isTrending: false,
  },
  {
    id: 625,
    title: "Morning Dew",
    category: "Nature",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1920&q=95",
    tags: ["dew", "morning", "fresh", "green"],
    isTrending: false,
  },

  // ─── CARS (71) ────────────────────────────────────────────────
  {
    id: 12,
    title: "Lamborghini Huracan",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=3840&q=95",
    tags: ["lamborghini", "supercar", "yellow"],
    isTrending: true,
  },
  {
    id: 13,
    title: "Night Drive",
    category: "Cars",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=95",
    tags: ["car", "night", "lights"],
    isTrending: true,
  },
  {
    id: 14,
    title: "Classic Mustang",
    category: "Cars",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&q=95",
    tags: ["mustang", "classic", "american"],
    isTrending: false,
  },
  {
    id: 15,
    title: "Porsche 911",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=3840&q=95",
    tags: ["porsche", "911", "sports"],
    isTrending: false,
  },
  {
    id: 16,
    title: "Ferrari Red",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=3840&q=95",
    tags: ["ferrari", "red", "sports"],
    isTrending: false,
  },
  {
    id: 17,
    title: "McLaren 720S",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=3840&q=95",
    tags: ["mclaren", "supercar", "orange"],
    isTrending: false,
  },
  {
    id: 38,
    title: "Bugatti Chiron",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=3840&q=95",
    tags: ["bugatti", "chiron", "hypercar", "blue"],
    isTrending: true,
  },
  {
    id: 39,
    title: "Aston Martin DB11",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=3840&q=95",
    tags: ["aston martin", "gt", "british", "silver"],
    isTrending: false,
  },
  {
    id: 40,
    title: "JDM Drift",
    category: "Cars",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1536364127590-1594e3161294?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1536364127590-1594e3161294?w=1920&q=95",
    tags: ["jdm", "drift", "smoke", "track"],
    isTrending: true,
  },
  {
    id: 41,
    title: "Maserati GT",
    category: "Cars",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&q=95",
    tags: ["maserati", "italian", "gt", "luxury"],
    isTrending: false,
  },
  {
    id: 700,
    title: "Rolls Royce Ghost",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=3840&q=95",
    tags: ["rolls royce", "luxury", "elegant", "silver"],
    isTrending: false,
  },
  {
    id: 701,
    title: "BMW M3 Blue",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1555241066-d02c5aead21f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1555241066-d02c5aead21f?w=3840&q=95",
    tags: ["bmw", "m3", "blue", "sport"],
    isTrending: false,
  },
  {
    id: 702,
    title: "Koenigsegg Agera",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=3840&q=95",
    tags: ["koenigsegg", "hypercar", "white", "extreme"],
    isTrending: false,
  },
  {
    id: 703,
    title: "Muscle Car Burnout",
    category: "Cars",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1504710685809-7bb702595f8f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1504710685809-7bb702595f8f?w=1920&q=95",
    tags: ["muscle", "burnout", "smoke", "american"],
    isTrending: true,
  },
  {
    id: 704,
    title: "Supercar Showroom",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=3840&q=95",
    tags: ["showroom", "supercar", "collection", "luxury"],
    isTrending: false,
  },
  {
    id: 705,
    title: "GT Race Track",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=3840&q=95",
    tags: ["gt", "race", "track", "speed"],
    isTrending: false,
  },
  {
    id: 706,
    title: "Vintage Volkswagen",
    category: "Cars",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1920&q=95",
    tags: ["volkswagen", "vintage", "retro", "classic"],
    isTrending: false,
  },
  {
    id: 707,
    title: "Electric Supercar",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=3840&q=95",
    tags: ["electric", "tesla", "future", "sleek"],
    isTrending: true,
  },
  {
    id: 708,
    title: "Rally Mud Splash",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=3840&q=95",
    tags: ["rally", "mud", "action", "motorsport"],
    isTrending: false,
  },
  {
    id: 709,
    title: "Sunset Cruise",
    category: "Cars",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1920&q=95",
    tags: ["sunset", "cruise", "road", "freedom"],
    isTrending: false,
  },
  {
    id: 710,
    title: "Neon Garage",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=3840&q=95",
    tags: ["neon", "garage", "underground", "style"],
    isTrending: false,
  },
  {
    id: 711,
    title: "Desert Road",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=3840&q=95",
    tags: ["desert", "road", "open", "adventure"],
    isTrending: false,
  },
  {
    id: 712,
    title: "Formula 1 Pit",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541607104652-d7c6f9a4a2eb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541607104652-d7c6f9a4a2eb?w=3840&q=95",
    tags: ["f1", "formula1", "pit", "speed"],
    isTrending: true,
  },
  {
    id: 713,
    title: "Mercedes AMG",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=3840&q=95",
    tags: ["mercedes", "amg", "german", "luxury"],
    isTrending: false,
  },
  {
    id: 714,
    title: "Jeep Wilderness",
    category: "Cars",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=1920&q=95",
    tags: ["jeep", "offroad", "wilderness", "adventure"],
    isTrending: false,
  },
  {
    id: 715,
    title: "Dodge Challenger",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?w=3840&q=95",
    tags: ["dodge", "challenger", "muscle", "american"],
    isTrending: false,
  },
  {
    id: 716,
    title: "Supercar Tunnel",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=3840&q=95",
    tags: ["supercar", "tunnel", "light trails", "speed"],
    isTrending: false,
  },
  {
    id: 717,
    title: "Pagani Zonda",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=3840&q=95",
    tags: ["pagani", "exotic", "italian", "rare"],
    isTrending: false,
  },
  {
    id: 718,
    title: "Lowrider Culture",
    category: "Cars",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=95",
    tags: ["lowrider", "custom", "culture", "chrome"],
    isTrending: false,
  },
  {
    id: 719,
    title: "Midnight GT",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1596568423660-09b3bfc5eb7c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1596568423660-09b3bfc5eb7c?w=3840&q=95",
    tags: ["gt", "midnight", "dark", "elegant"],
    isTrending: false,
  },
  {
    id: 720,
    title: "Supercar Red Storm",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=3840&q=95",
    tags: ["supercar", "red", "bold", "dynamic"],
    isTrending: true,
  },

  // ─── GAMING (71) ──────────────────────────────────────────────
  {
    id: 18,
    title: "Cyberpunk 2077",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=3840&q=95",
    tags: ["cyberpunk", "rpg", "futuristic"],
    isTrending: true,
  },
  {
    id: 19,
    title: "Space Battle",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=3840&q=95",
    tags: ["space", "battle", "sci-fi"],
    isTrending: false,
  },
  {
    id: 20,
    title: "Neon Warrior",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=3840&q=95",
    tags: ["warrior", "neon", "action"],
    isTrending: true,
  },
  {
    id: 21,
    title: "Dark Dungeon",
    category: "Gaming",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=1920&q=95",
    tags: ["dungeon", "dark", "fantasy", "rpg"],
    isTrending: false,
  },
  {
    id: 22,
    title: "Fantasy Kingdom",
    category: "Gaming",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=1920&q=95",
    tags: ["fantasy", "kingdom", "castle"],
    isTrending: false,
  },
  {
    id: 23,
    title: "FPS Battlefield",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=3840&q=95",
    tags: ["fps", "battlefield", "action"],
    isTrending: false,
  },
  {
    id: 42,
    title: "Witcher Horizon",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=3840&q=95",
    tags: ["witcher", "rpg", "fantasy", "landscape"],
    isTrending: true,
  },
  {
    id: 43,
    title: "Retro Arcade",
    category: "Gaming",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=95",
    tags: ["arcade", "retro", "neon", "pixels"],
    isTrending: false,
  },
  {
    id: 44,
    title: "Alien Planet",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1606041011872-596597976b25?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1606041011872-596597976b25?w=3840&q=95",
    tags: ["alien", "planet", "sci-fi", "space"],
    isTrending: true,
  },
  {
    id: 45,
    title: "Elden Ring Vista",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=3840&q=95",
    tags: ["souls", "fantasy", "epic", "rpg"],
    isTrending: false,
  },
  {
    id: 800,
    title: "Dragon Quest",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=3840&q=95",
    tags: ["dragon", "quest", "fantasy", "adventure"],
    isTrending: false,
  },
  {
    id: 801,
    title: "Moba Arena",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=3840&q=95",
    tags: ["moba", "arena", "competitive", "strategy"],
    isTrending: false,
  },
  {
    id: 802,
    title: "Stealth Mission",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=3840&q=95",
    tags: ["stealth", "mission", "dark", "tactical"],
    isTrending: false,
  },
  {
    id: 803,
    title: "Open World Sunset",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=3840&q=95",
    tags: ["open world", "sunset", "vast", "adventure"],
    isTrending: true,
  },
  {
    id: 804,
    title: "Hacker Terminal",
    category: "Gaming",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=95",
    tags: ["hacker", "terminal", "code", "cyber"],
    isTrending: false,
  },
  {
    id: 805,
    title: "Racing Circuit",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?w=3840&q=95",
    tags: ["racing", "circuit", "speed", "competitive"],
    isTrending: false,
  },
  {
    id: 806,
    title: "Zombie Horde",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=3840&q=95",
    tags: ["zombie", "horror", "survival", "dark"],
    isTrending: false,
  },
  {
    id: 807,
    title: "Space Strategy",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=3840&q=95",
    tags: ["space", "strategy", "rts", "futuristic"],
    isTrending: false,
  },
  {
    id: 808,
    title: "Battle Royale",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=3840&q=95",
    tags: ["battle royale", "fps", "competitive", "epic"],
    isTrending: true,
  },
  {
    id: 809,
    title: "VR World",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=3840&q=95",
    tags: ["vr", "virtual", "immersive", "future"],
    isTrending: false,
  },
  {
    id: 810,
    title: "Pirate Adventure",
    category: "Gaming",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1547636780-e41778614ac2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1547636780-e41778614ac2?w=1920&q=95",
    tags: ["pirate", "adventure", "ship", "ocean"],
    isTrending: false,
  },
  {
    id: 811,
    title: "Sniper Perch",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=3840&q=95",
    tags: ["sniper", "tactical", "military", "fps"],
    isTrending: false,
  },
  {
    id: 812,
    title: "Magical Tower",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=3840&q=95",
    tags: ["magic", "tower", "rpg", "fantasy"],
    isTrending: false,
  },
  {
    id: 813,
    title: "Esports Arena",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=3840&q=95",
    tags: ["esports", "arena", "competitive", "lights"],
    isTrending: true,
  },
  {
    id: 814,
    title: "Sword Clash",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=3840&q=95",
    tags: ["sword", "clash", "medieval", "action"],
    isTrending: false,
  },
  {
    id: 815,
    title: "Post Apocalyptic",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=3840&q=95",
    tags: ["post-apocalyptic", "wasteland", "survival", "dark"],
    isTrending: false,
  },
  {
    id: 816,
    title: "Ancient Ruins",
    category: "Gaming",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=1920&q=95",
    tags: ["ancient", "ruins", "exploration", "adventure"],
    isTrending: false,
  },
  {
    id: 817,
    title: "Ninja Gaiden Style",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=3840&q=95",
    tags: ["ninja", "action", "japan", "combat"],
    isTrending: false,
  },
  {
    id: 818,
    title: "Sci-Fi Corridor",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=3840&q=95",
    tags: ["sci-fi", "corridor", "futuristic", "dark"],
    isTrending: false,
  },
  {
    id: 819,
    title: "Pixel Art City",
    category: "Gaming",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=1920&q=95",
    tags: ["pixel", "art", "retro", "city"],
    isTrending: false,
  },
  {
    id: 820,
    title: "Jungle Explorer",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=3840&q=95",
    tags: ["jungle", "explorer", "adventure", "lush"],
    isTrending: false,
  },

  // ─── AMOLED (71) ──────────────────────────────────────────────
  {
    id: 24,
    title: "Galaxy Stars",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=3840&q=95",
    tags: ["amoled", "galaxy", "stars", "space"],
    isTrending: true,
  },
  {
    id: 25,
    title: "Dark Ocean",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=3840&q=95",
    tags: ["amoled", "ocean", "dark", "black"],
    isTrending: true,
  },
  {
    id: 26,
    title: "Void Abstract",
    category: "AMOLED",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&q=95",
    tags: ["amoled", "abstract", "purple", "dark"],
    isTrending: false,
  },
  {
    id: 27,
    title: "Neon Lines",
    category: "AMOLED",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=95",
    tags: ["amoled", "neon", "lines", "abstract"],
    isTrending: false,
  },
  {
    id: 28,
    title: "Black Cosmos",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=3840&q=95",
    tags: ["amoled", "cosmos", "black", "space"],
    isTrending: false,
  },
  {
    id: 29,
    title: "Deep Black",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=3840&q=95",
    tags: ["amoled", "black", "minimal", "dark"],
    isTrending: false,
  },
  {
    id: 46,
    title: "Dark Nebula",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=3840&q=95",
    tags: ["amoled", "nebula", "space", "dark"],
    isTrending: true,
  },
  {
    id: 47,
    title: "Midnight Geometry",
    category: "AMOLED",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=1920&q=95",
    tags: ["amoled", "geometry", "dark", "minimal"],
    isTrending: false,
  },
  {
    id: 48,
    title: "Obsidian Flow",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=3840&q=95",
    tags: ["amoled", "obsidian", "dark", "abstract"],
    isTrending: false,
  },
  {
    id: 49,
    title: "Phantom Glow",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=3840&q=95",
    tags: ["amoled", "glow", "dark", "neon"],
    isTrending: true,
  },
  {
    id: 900,
    title: "Void Spiral",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=3840&q=95",
    tags: ["amoled", "void", "spiral", "dark"],
    isTrending: false,
  },
  {
    id: 901,
    title: "Ink Smoke",
    category: "AMOLED",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&q=95",
    tags: ["amoled", "ink", "smoke", "black"],
    isTrending: false,
  },
  {
    id: 902,
    title: "Dark Floral",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=3840&q=95",
    tags: ["amoled", "floral", "dark", "elegant"],
    isTrending: false,
  },
  {
    id: 903,
    title: "Black Diamond",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=3840&q=95",
    tags: ["amoled", "diamond", "black", "shine"],
    isTrending: false,
  },
  {
    id: 904,
    title: "Purple Haze",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=3840&q=95",
    tags: ["amoled", "purple", "haze", "dark"],
    isTrending: true,
  },
  {
    id: 905,
    title: "Glitch Art",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=3840&q=95",
    tags: ["amoled", "glitch", "digital", "art"],
    isTrending: false,
  },
  {
    id: 906,
    title: "Monochrome Abstract",
    category: "AMOLED",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=1920&q=95",
    tags: ["amoled", "monochrome", "abstract", "dark"],
    isTrending: false,
  },
  {
    id: 907,
    title: "Dark Universe",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=3840&q=95",
    tags: ["amoled", "universe", "dark", "stars"],
    isTrending: false,
  },
  {
    id: 908,
    title: "Liquid Black",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=3840&q=95",
    tags: ["amoled", "liquid", "black", "fluid"],
    isTrending: false,
  },
  {
    id: 909,
    title: "Electric Veins",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=3840&q=95",
    tags: ["amoled", "electric", "veins", "glow"],
    isTrending: true,
  },
  {
    id: 910,
    title: "Shadow Grid",
    category: "AMOLED",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&q=95",
    tags: ["amoled", "shadow", "grid", "dark"],
    isTrending: false,
  },
  {
    id: 911,
    title: "Dark Rose",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=3840&q=95",
    tags: ["amoled", "rose", "dark", "elegant"],
    isTrending: false,
  },
  {
    id: 912,
    title: "Void Portal",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=3840&q=95",
    tags: ["amoled", "void", "portal", "dark"],
    isTrending: false,
  },
  {
    id: 913,
    title: "Neon Hexagons",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=3840&q=95",
    tags: ["amoled", "neon", "hexagons", "geometric"],
    isTrending: false,
  },
  {
    id: 914,
    title: "Star Dust",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=3840&q=95",
    tags: ["amoled", "stardust", "dark", "cosmic"],
    isTrending: false,
  },
  {
    id: 915,
    title: "Deep Purple",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=3840&q=95",
    tags: ["amoled", "purple", "deep", "dark"],
    isTrending: false,
  },

  // ─── SPACE (71) ───────────────────────────────────────────────
  {
    id: 1000,
    title: "Nebula Cloud",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=3840&q=95",
    tags: ["nebula", "space", "colorful", "cosmos"],
    isTrending: true,
  },
  {
    id: 1001,
    title: "Andromeda Galaxy",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=3840&q=95",
    tags: ["andromeda", "galaxy", "stars", "deep space"],
    isTrending: true,
  },
  {
    id: 1002,
    title: "Saturn Rings",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=3840&q=95",
    tags: ["saturn", "rings", "planet", "cosmos"],
    isTrending: true,
  },
  {
    id: 1003,
    title: "Red Planet Mars",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=3840&q=95",
    tags: ["mars", "red planet", "space", "nasa"],
    isTrending: false,
  },
  {
    id: 1004,
    title: "Black Hole",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=3840&q=95",
    tags: ["black hole", "space", "dark", "science"],
    isTrending: true,
  },
  {
    id: 1005,
    title: "Space Shuttle Launch",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=3840&q=95",
    tags: ["shuttle", "launch", "rocket", "nasa"],
    isTrending: false,
  },
  {
    id: 1006,
    title: "Jupiter Storm",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1486425056723-72dfe4512f73?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1486425056723-72dfe4512f73?w=3840&q=95",
    tags: ["jupiter", "storm", "planet", "massive"],
    isTrending: false,
  },
  {
    id: 1007,
    title: "Cosmic Web",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=3840&q=95",
    tags: ["cosmic", "web", "universe", "structure"],
    isTrending: false,
  },
  {
    id: 1008,
    title: "Asteroid Belt",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=3840&q=95",
    tags: ["asteroid", "belt", "space", "rocks"],
    isTrending: false,
  },
  {
    id: 1009,
    title: "Lunar Surface",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=3840&q=95",
    tags: ["moon", "lunar", "surface", "craters"],
    isTrending: false,
  },
  {
    id: 1010,
    title: "Star Cluster",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=3840&q=95",
    tags: ["stars", "cluster", "space", "bright"],
    isTrending: true,
  },
  {
    id: 1011,
    title: "Milky Way Arch",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=3840&q=95",
    tags: ["milky way", "arch", "stars", "night"],
    isTrending: true,
  },
  {
    id: 1012,
    title: "Space Station",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=3840&q=95",
    tags: ["space station", "orbit", "iss", "technology"],
    isTrending: false,
  },
  {
    id: 1013,
    title: "Comet Trail",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=3840&q=95",
    tags: ["comet", "trail", "space", "flying"],
    isTrending: false,
  },
  {
    id: 1014,
    title: "Cosmic Dust",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=3840&q=95",
    tags: ["cosmic", "dust", "space", "particles"],
    isTrending: false,
  },
  {
    id: 1015,
    title: "Red Nebula",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=3840&q=95",
    tags: ["nebula", "red", "space", "cosmic"],
    isTrending: false,
  },
  {
    id: 1016,
    title: "Exoplanet Blue",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1486425056723-72dfe4512f73?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1486425056723-72dfe4512f73?w=3840&q=95",
    tags: ["exoplanet", "blue", "alien world", "space"],
    isTrending: false,
  },
  {
    id: 1017,
    title: "Solar Flare",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=3840&q=95",
    tags: ["solar", "flare", "sun", "energy"],
    isTrending: true,
  },
  {
    id: 1018,
    title: "Deep Space Voyage",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=3840&q=95",
    tags: ["deep space", "voyage", "stars", "exploration"],
    isTrending: false,
  },
  {
    id: 1019,
    title: "Supernova Blast",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=3840&q=95",
    tags: ["supernova", "blast", "explosion", "space"],
    isTrending: false,
  },
  {
    id: 1020,
    title: "Galaxy Swirl",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=3840&q=95",
    tags: ["galaxy", "swirl", "spiral", "cosmic"],
    isTrending: true,
  },
  {
    id: 1021,
    title: "Uranus Blue",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=3840&q=95",
    tags: ["uranus", "blue", "planet", "rings"],
    isTrending: false,
  },
  {
    id: 1022,
    title: "Venus Dawn",
    category: "Space",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=1920&q=95",
    tags: ["venus", "dawn", "planet", "glow"],
    isTrending: false,
  },
  {
    id: 1023,
    title: "Spacewalk",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=3840&q=95",
    tags: ["spacewalk", "astronaut", "orbit", "eva"],
    isTrending: false,
  },
  {
    id: 1024,
    title: "Quasar Beam",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=3840&q=95",
    tags: ["quasar", "beam", "energy", "space"],
    isTrending: false,
  },
  {
    id: 1025,
    title: "Earthrise",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=3840&q=95",
    tags: ["earth", "rise", "moon", "apollo"],
    isTrending: false,
  },
  {
    id: 1026,
    title: "Horsehead Nebula",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=3840&q=95",
    tags: ["horsehead", "nebula", "dark", "space"],
    isTrending: false,
  },
  {
    id: 1027,
    title: "Titan Moon",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=3840&q=95",
    tags: ["titan", "moon", "saturn", "orange"],
    isTrending: false,
  },
  {
    id: 1028,
    title: "Rocket Launch Night",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=3840&q=95",
    tags: ["rocket", "launch", "night", "fire"],
    isTrending: true,
  },
  {
    id: 1029,
    title: "Ice Giants",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1486425056723-72dfe4512f73?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1486425056723-72dfe4512f73?w=3840&q=95",
    tags: ["ice", "giants", "planets", "frozen"],
    isTrending: false,
  },
  {
    id: 1030,
    title: "Voyager Journey",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=3840&q=95",
    tags: ["voyager", "journey", "interstellar", "probe"],
    isTrending: false,
  },
  {
    id: 1031,
    title: "Galactic Core",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=3840&q=95",
    tags: ["galactic", "core", "center", "stars"],
    isTrending: false,
  },
  {
    id: 1032,
    title: "Cosmic Rainbow",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=3840&q=95",
    tags: ["cosmic", "rainbow", "colorful", "nebula"],
    isTrending: true,
  },
  {
    id: 1033,
    title: "Space X Landing",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=3840&q=95",
    tags: ["spacex", "landing", "rocket", "future"],
    isTrending: false,
  },
  {
    id: 1034,
    title: "Interstellar Portal",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=3840&q=95",
    tags: ["interstellar", "portal", "wormhole", "sci-fi"],
    isTrending: false,
  },
  {
    id: 1035,
    title: "Pluto Surface",
    category: "Space",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=1920&q=95",
    tags: ["pluto", "surface", "dwarf planet", "cold"],
    isTrending: false,
  },

  // ─── MINIMAL (71) ─────────────────────────────────────────────
  {
    id: 1100,
    title: "White Silence",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=3840&q=95",
    tags: ["minimal", "white", "clean", "simple"],
    isTrending: true,
  },
  {
    id: 1101,
    title: "Grey Gradient",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=3840&q=95",
    tags: ["minimal", "grey", "gradient", "calm"],
    isTrending: false,
  },
  {
    id: 1102,
    title: "Single Leaf",
    category: "Minimal",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1455793723439-ccf6e1b5ab25?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1455793723439-ccf6e1b5ab25?w=1920&q=95",
    tags: ["minimal", "leaf", "nature", "clean"],
    isTrending: false,
  },
  {
    id: 1103,
    title: "Black Lines",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=3840&q=95",
    tags: ["minimal", "black", "lines", "geometry"],
    isTrending: false,
  },
  {
    id: 1104,
    title: "Fog Abstract",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1501780392773-287d506245a5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1501780392773-287d506245a5?w=3840&q=95",
    tags: ["minimal", "fog", "abstract", "soft"],
    isTrending: false,
  },
  {
    id: 1105,
    title: "Sand Texture",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=3840&q=95",
    tags: ["minimal", "sand", "texture", "natural"],
    isTrending: false,
  },
  {
    id: 1106,
    title: "Stone Surface",
    category: "Minimal",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1920&q=95",
    tags: ["minimal", "stone", "surface", "grey"],
    isTrending: false,
  },
  {
    id: 1107,
    title: "Clean Horizon",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=3840&q=95",
    tags: ["minimal", "horizon", "clean", "sky"],
    isTrending: true,
  },
  {
    id: 1108,
    title: "Pastel Pink",
    category: "Minimal",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=3840&q=95",
    tags: ["minimal", "pastel", "pink", "soft"],
    isTrending: true,
  },
  {
    id: 1109,
    title: "Dot Grid",
    category: "Minimal",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&q=95",
    tags: ["minimal", "dot", "grid", "pattern"],
    isTrending: false,
  },
  {
    id: 1110,
    title: "Geometric Shapes",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=3840&q=95",
    tags: ["minimal", "geometric", "shapes", "clean"],
    isTrending: false,
  },
  {
    id: 1111,
    title: "Soft Blue",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=3840&q=95",
    tags: ["minimal", "blue", "soft", "calm"],
    isTrending: false,
  },
  {
    id: 1112,
    title: "Paper White",
    category: "Minimal",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1920&q=95",
    tags: ["minimal", "paper", "white", "texture"],
    isTrending: false,
  },
  {
    id: 1113,
    title: "Golden Line",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=3840&q=95",
    tags: ["minimal", "golden", "line", "elegant"],
    isTrending: false,
  },
  {
    id: 1114,
    title: "Circle Void",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=3840&q=95",
    tags: ["minimal", "circle", "void", "bold"],
    isTrending: false,
  },
  {
    id: 1115,
    title: "Pastel Gradient",
    category: "Minimal",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=3840&q=95",
    tags: ["minimal", "pastel", "gradient", "soft"],
    isTrending: true,
  },
  {
    id: 1116,
    title: "Zen Garden",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1552083375-1447ce886485?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1552083375-1447ce886485?w=3840&q=95",
    tags: ["minimal", "zen", "garden", "peace"],
    isTrending: false,
  },
  {
    id: 1117,
    title: "Mono Mountain",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=3840&q=95",
    tags: ["minimal", "mountain", "monochrome", "simple"],
    isTrending: false,
  },
  {
    id: 1118,
    title: "Two Colors",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=3840&q=95",
    tags: ["minimal", "two colors", "clean", "bold"],
    isTrending: false,
  },
  {
    id: 1119,
    title: "Single Tree",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=3840&q=95",
    tags: ["minimal", "tree", "single", "nature"],
    isTrending: false,
  },
  {
    id: 1120,
    title: "Concrete Wall",
    category: "Minimal",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1483499577568-23f9244a8e14?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1483499577568-23f9244a8e14?w=1920&q=95",
    tags: ["minimal", "concrete", "wall", "urban"],
    isTrending: false,
  },
  {
    id: 1121,
    title: "Soft Shadow",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=3840&q=95",
    tags: ["minimal", "shadow", "soft", "light"],
    isTrending: false,
  },
  {
    id: 1122,
    title: "Morning Light",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=3840&q=95",
    tags: ["minimal", "morning", "light", "warm"],
    isTrending: true,
  },
  {
    id: 1123,
    title: "Empty Road",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=3840&q=95",
    tags: ["minimal", "road", "empty", "freedom"],
    isTrending: false,
  },
  {
    id: 1124,
    title: "Cream White",
    category: "Minimal",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=3840&q=95",
    tags: ["minimal", "cream", "white", "elegant"],
    isTrending: false,
  },
  {
    id: 1125,
    title: "Blurred Lights",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=3840&q=95",
    tags: ["minimal", "blurred", "lights", "bokeh"],
    isTrending: false,
  },
  {
    id: 1126,
    title: "Negative Space",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=3840&q=95",
    tags: ["minimal", "negative space", "design", "clean"],
    isTrending: false,
  },
  {
    id: 1127,
    title: "Sky Blue Minimal",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=3840&q=95",
    tags: ["minimal", "sky", "blue", "calm"],
    isTrending: false,
  },
  {
    id: 1128,
    title: "Ink Drop",
    category: "Minimal",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=3840&q=95",
    tags: ["minimal", "ink", "drop", "water"],
    isTrending: false,
  },
  {
    id: 1129,
    title: "Clean Typography",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=3840&q=95",
    tags: ["minimal", "typography", "clean", "design"],
    isTrending: false,
  },
  {
    id: 1130,
    title: "Moody Smoke",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=3840&q=95",
    tags: ["minimal", "moody", "smoke", "dark"],
    isTrending: false,
  },
  {
    id: 1131,
    title: "Pebble Shore",
    category: "Minimal",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=95",
    tags: ["minimal", "pebble", "shore", "peaceful"],
    isTrending: false,
  },
  {
    id: 1132,
    title: "Warm Amber",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=3840&q=95",
    tags: ["minimal", "amber", "warm", "glow"],
    isTrending: false,
  },
  {
    id: 1133,
    title: "Glass Sphere",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=3840&q=95",
    tags: ["minimal", "glass", "sphere", "reflection"],
    isTrending: false,
  },
  {
    id: 1134,
    title: "Calm Blue Wash",
    category: "Minimal",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=3840&q=95",
    tags: ["minimal", "blue", "wash", "calm"],
    isTrending: true,
  },
  {
    id: 1135,
    title: "Charcoal Dark",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=3840&q=95",
    tags: ["minimal", "charcoal", "dark", "modern"],
    isTrending: false,
  },

  // ─── ANIME continued ──────────────────────────────────────────
  {
    id: 1200,
    title: "Shonen Fire",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=3840&q=95",
    tags: ["anime", "shonen", "fire", "battle"],
    isTrending: false,
  },
  {
    id: 1201,
    title: "Magical Girl",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=1920&q=95",
    tags: ["anime", "magical", "girl", "sparkle"],
    isTrending: false,
  },
  {
    id: 1202,
    title: "Eternal Night",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=3840&q=95",
    tags: ["anime", "night", "eternal", "dramatic"],
    isTrending: false,
  },
  {
    id: 1203,
    title: "Catgirl Dreams",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=1920&q=95",
    tags: ["anime", "catgirl", "kawaii", "cute"],
    isTrending: false,
  },
  {
    id: 1204,
    title: "Warlord Peak",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=3840&q=95",
    tags: ["anime", "warlord", "mountain", "epic"],
    isTrending: false,
  },
  {
    id: 1205,
    title: "Oni Battle",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=3840&q=95",
    tags: ["anime", "oni", "battle", "red"],
    isTrending: true,
  },
  {
    id: 1206,
    title: "Sakura Blade",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=3840&q=95",
    tags: ["anime", "sakura", "blade", "cherry"],
    isTrending: false,
  },
  {
    id: 1207,
    title: "Spirit Train",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=3840&q=95",
    tags: ["anime", "spirit", "train", "journey"],
    isTrending: false,
  },
  {
    id: 1208,
    title: "Celestial Dragon",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=3840&q=95",
    tags: ["anime", "celestial", "dragon", "sky"],
    isTrending: false,
  },
  {
    id: 1209,
    title: "Ninja Run",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1542382156990-878e0e6b2a48?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1542382156990-878e0e6b2a48?w=1920&q=95",
    tags: ["anime", "ninja", "run", "speed"],
    isTrending: false,
  },
  {
    id: 1210,
    title: "Shrine Ritual",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1574891460741-bfeda8c92e29?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1574891460741-bfeda8c92e29?w=3840&q=95",
    tags: ["anime", "shrine", "ritual", "mystical"],
    isTrending: false,
  },
  {
    id: 1211,
    title: "Fallen Angel",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=3840&q=95",
    tags: ["anime", "fallen", "angel", "wings"],
    isTrending: false,
  },
  {
    id: 1212,
    title: "Mango Summer",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1920&q=95",
    tags: ["anime", "summer", "mango", "tropical"],
    isTrending: false,
  },
  {
    id: 1213,
    title: "Dark Mage",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=3840&q=95",
    tags: ["anime", "dark", "mage", "magic"],
    isTrending: false,
  },
  {
    id: 1214,
    title: "Ocean Goddess",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=3840&q=95",
    tags: ["anime", "ocean", "goddess", "sea"],
    isTrending: false,
  },
  {
    id: 1215,
    title: "Techno City",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=3840&q=95",
    tags: ["anime", "techno", "city", "future"],
    isTrending: false,
  },
  {
    id: 1216,
    title: "Snow Fox",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=95",
    tags: ["anime", "snow", "fox", "white"],
    isTrending: false,
  },
  {
    id: 1217,
    title: "Psychic Battle",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=3840&q=95",
    tags: ["anime", "psychic", "battle", "energy"],
    isTrending: false,
  },
  {
    id: 1218,
    title: "Guardian Beast",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=3840&q=95",
    tags: ["anime", "guardian", "beast", "mythical"],
    isTrending: false,
  },
  {
    id: 1219,
    title: "Floating Island",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?w=3840&q=95",
    tags: ["anime", "floating", "island", "sky"],
    isTrending: true,
  },
  {
    id: 1220,
    title: "Red Swordsman",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=3840&q=95",
    tags: ["anime", "red", "swordsman", "combat"],
    isTrending: false,
  },
  {
    id: 1221,
    title: "White Witch",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1920&q=95",
    tags: ["anime", "white", "witch", "mystical"],
    isTrending: false,
  },
  {
    id: 1222,
    title: "Storm Samurai",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=3840&q=95",
    tags: ["anime", "storm", "samurai", "lightning"],
    isTrending: false,
  },
  {
    id: 1223,
    title: "Fire Nation",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541480551145-2370a440d585?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541480551145-2370a440d585?w=3840&q=95",
    tags: ["anime", "fire", "nation", "war"],
    isTrending: false,
  },
  {
    id: 1224,
    title: "Moon Rabbit",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=1920&q=95",
    tags: ["anime", "moon", "rabbit", "legend"],
    isTrending: false,
  },
  {
    id: 1225,
    title: "Neon Horizon",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=3840&q=95",
    tags: ["anime", "neon", "horizon", "city"],
    isTrending: true,
  },

  // ─── NATURE continued ─────────────────────────────────────────
  {
    id: 1300,
    title: "Misty Pine",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=3840&q=95",
    tags: ["nature", "pine", "misty", "forest"],
    isTrending: false,
  },
  {
    id: 1301,
    title: "Sunset Dunes",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=3840&q=95",
    tags: ["nature", "sunset", "dunes", "sand"],
    isTrending: false,
  },
  {
    id: 1302,
    title: "Golden Sunrise",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=3840&q=95",
    tags: ["nature", "golden", "sunrise", "warm"],
    isTrending: false,
  },
  {
    id: 1303,
    title: "Deep Forest",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=3840&q=95",
    tags: ["nature", "deep", "forest", "green"],
    isTrending: false,
  },
  {
    id: 1304,
    title: "Sunset Cliffs",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?w=3840&q=95",
    tags: ["nature", "sunset", "cliffs", "coast"],
    isTrending: false,
  },
  {
    id: 1305,
    title: "Wild Tulip",
    category: "Nature",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=1920&q=95",
    tags: ["nature", "tulip", "wild", "colorful"],
    isTrending: false,
  },
  {
    id: 1306,
    title: "Rocky Shore",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=3840&q=95",
    tags: ["nature", "rocky", "shore", "waves"],
    isTrending: false,
  },
  {
    id: 1307,
    title: "Maple Forest",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1477322524744-0eece9e79640?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1477322524744-0eece9e79640?w=3840&q=95",
    tags: ["nature", "maple", "forest", "autumn"],
    isTrending: false,
  },
  {
    id: 1308,
    title: "Valley Storm",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=3840&q=95",
    tags: ["nature", "valley", "storm", "dramatic"],
    isTrending: true,
  },
  {
    id: 1309,
    title: "Snow Capped Peak",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=3840&q=95",
    tags: ["nature", "snow", "peak", "alpine"],
    isTrending: false,
  },
  {
    id: 1310,
    title: "River Bend",
    category: "Nature",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&q=95",
    tags: ["nature", "river", "bend", "peaceful"],
    isTrending: false,
  },
  {
    id: 1311,
    title: "Coastal Cliffs",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?w=3840&q=95",
    tags: ["nature", "coastal", "cliffs", "dramatic"],
    isTrending: false,
  },
  {
    id: 1312,
    title: "Fern Gully",
    category: "Nature",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=95",
    tags: ["nature", "fern", "gully", "lush"],
    isTrending: false,
  },
  {
    id: 1313,
    title: "Icy Fjord",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=3840&q=95",
    tags: ["nature", "icy", "fjord", "norway"],
    isTrending: false,
  },
  {
    id: 1314,
    title: "Wildfire Sunset",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=3840&q=95",
    tags: ["nature", "wildfire", "sunset", "red sky"],
    isTrending: true,
  },
  {
    id: 1315,
    title: "Meadow Morning",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=3840&q=95",
    tags: ["nature", "meadow", "morning", "fresh"],
    isTrending: false,
  },
  {
    id: 1316,
    title: "Snowy Path",
    category: "Nature",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1920&q=95",
    tags: ["nature", "snow", "path", "winter"],
    isTrending: false,
  },
  {
    id: 1317,
    title: "Bamboo Grove",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541480551145-2370a440d585?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541480551145-2370a440d585?w=3840&q=95",
    tags: ["nature", "bamboo", "grove", "green"],
    isTrending: false,
  },
  {
    id: 1318,
    title: "Tide Pool",
    category: "Nature",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=95",
    tags: ["nature", "tide", "pool", "ocean"],
    isTrending: false,
  },
  {
    id: 1319,
    title: "Hilltop View",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=3840&q=95",
    tags: ["nature", "hilltop", "view", "landscape"],
    isTrending: false,
  },
  {
    id: 1320,
    title: "Sunset Prairie",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=3840&q=95",
    tags: ["nature", "sunset", "prairie", "golden"],
    isTrending: false,
  },
  {
    id: 1321,
    title: "Ice Cave",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=3840&q=95",
    tags: ["nature", "ice", "cave", "blue"],
    isTrending: false,
  },
  {
    id: 1322,
    title: "Wild River",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=3840&q=95",
    tags: ["nature", "wild", "river", "rapid"],
    isTrending: false,
  },
  {
    id: 1323,
    title: "Crater Lake",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1439853949212-36089c89c8b7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1439853949212-36089c89c8b7?w=3840&q=95",
    tags: ["nature", "crater", "lake", "blue"],
    isTrending: true,
  },
  {
    id: 1324,
    title: "Cave Stalactites",
    category: "Nature",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=1920&q=95",
    tags: ["nature", "cave", "stalactites", "underground"],
    isTrending: false,
  },
  {
    id: 1325,
    title: "Rainbow Falls",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=3840&q=95",
    tags: ["nature", "rainbow", "falls", "colorful"],
    isTrending: false,
  },

  // ─── CARS continued ───────────────────────────────────────────
  {
    id: 1400,
    title: "Hyper Sport",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=3840&q=95",
    tags: ["cars", "hyper", "sport", "exotic"],
    isTrending: false,
  },
  {
    id: 1401,
    title: "Lamborghini Urus",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=3840&q=95",
    tags: ["cars", "lamborghini", "urus", "suv"],
    isTrending: false,
  },
  {
    id: 1402,
    title: "Supercar Hills",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=3840&q=95",
    tags: ["cars", "supercar", "hills", "scenic"],
    isTrending: false,
  },
  {
    id: 1403,
    title: "Riviera Drive",
    category: "Cars",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1920&q=95",
    tags: ["cars", "riviera", "drive", "coast"],
    isTrending: false,
  },
  {
    id: 1404,
    title: "Phantom Rolls",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=3840&q=95",
    tags: ["cars", "rolls royce", "phantom", "luxury"],
    isTrending: false,
  },
  {
    id: 1405,
    title: "Neon Tracks",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=3840&q=95",
    tags: ["cars", "neon", "tracks", "night"],
    isTrending: true,
  },
  {
    id: 1406,
    title: "Carbon Fiber",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=3840&q=95",
    tags: ["cars", "carbon fiber", "detail", "exotic"],
    isTrending: false,
  },
  {
    id: 1407,
    title: "Raceday Grid",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541607104652-d7c6f9a4a2eb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541607104652-d7c6f9a4a2eb?w=3840&q=95",
    tags: ["cars", "raceday", "grid", "motorsport"],
    isTrending: false,
  },
  {
    id: 1408,
    title: "Alpine Pass",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=3840&q=95",
    tags: ["cars", "alpine", "pass", "mountain"],
    isTrending: false,
  },
  {
    id: 1409,
    title: "Garage Art",
    category: "Cars",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&q=95",
    tags: ["cars", "garage", "art", "collection"],
    isTrending: false,
  },
  {
    id: 1410,
    title: "Drag Race",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?w=3840&q=95",
    tags: ["cars", "drag", "race", "burnout"],
    isTrending: false,
  },
  {
    id: 1411,
    title: "BMW R18",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1555241066-d02c5aead21f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1555241066-d02c5aead21f?w=3840&q=95",
    tags: ["cars", "bmw", "r18", "motorcycle"],
    isTrending: false,
  },
  {
    id: 1412,
    title: "Midnight Black",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1596568423660-09b3bfc5eb7c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1596568423660-09b3bfc5eb7c?w=3840&q=95",
    tags: ["cars", "midnight", "black", "stealth"],
    isTrending: false,
  },
  {
    id: 1413,
    title: "Hillclimb King",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=3840&q=95",
    tags: ["cars", "hillclimb", "race", "extreme"],
    isTrending: false,
  },
  {
    id: 1414,
    title: "GT3 Racing",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541607104652-d7c6f9a4a2eb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541607104652-d7c6f9a4a2eb?w=3840&q=95",
    tags: ["cars", "gt3", "racing", "endurance"],
    isTrending: true,
  },
  {
    id: 1415,
    title: "Vintage Le Mans",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=3840&q=95",
    tags: ["cars", "vintage", "le mans", "classic"],
    isTrending: false,
  },
  {
    id: 1416,
    title: "Hypercar White",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=3840&q=95",
    tags: ["cars", "hypercar", "white", "sleek"],
    isTrending: false,
  },
  {
    id: 1417,
    title: "City Lights",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=3840&q=95",
    tags: ["cars", "city", "lights", "night drive"],
    isTrending: false,
  },
  {
    id: 1418,
    title: "Sleek Silver",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=3840&q=95",
    tags: ["cars", "silver", "sleek", "modern"],
    isTrending: false,
  },
  {
    id: 1419,
    title: "Offroad Beast",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=3840&q=95",
    tags: ["cars", "offroad", "beast", "adventure"],
    isTrending: false,
  },
  {
    id: 1420,
    title: "Canyon Run",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=3840&q=95",
    tags: ["cars", "canyon", "run", "fast"],
    isTrending: false,
  },
  {
    id: 1421,
    title: "Speed Blurs",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=3840&q=95",
    tags: ["cars", "speed", "motion blur", "track"],
    isTrending: false,
  },
  {
    id: 1422,
    title: "Custom Wrapped",
    category: "Cars",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=95",
    tags: ["cars", "custom", "wrapped", "unique"],
    isTrending: false,
  },
  {
    id: 1423,
    title: "Rally Finland",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1504710685809-7bb702595f8f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1504710685809-7bb702595f8f?w=3840&q=95",
    tags: ["cars", "rally", "finland", "gravel"],
    isTrending: false,
  },
  {
    id: 1424,
    title: "Open Throttle",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=3840&q=95",
    tags: ["cars", "throttle", "open road", "freedom"],
    isTrending: false,
  },
  {
    id: 1425,
    title: "Luxury Concept",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=3840&q=95",
    tags: ["cars", "luxury", "concept", "future"],
    isTrending: true,
  },

  // ─── GAMING continued ─────────────────────────────────────────
  {
    id: 1500,
    title: "Mage Tower",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=3840&q=95",
    tags: ["gaming", "mage", "tower", "rpg"],
    isTrending: false,
  },
  {
    id: 1501,
    title: "Desert Outpost",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1547636780-e41778614ac2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1547636780-e41778614ac2?w=3840&q=95",
    tags: ["gaming", "desert", "outpost", "military"],
    isTrending: false,
  },
  {
    id: 1502,
    title: "Tank Warfare",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=3840&q=95",
    tags: ["gaming", "tank", "warfare", "military"],
    isTrending: false,
  },
  {
    id: 1503,
    title: "Dungeon Crawler",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=3840&q=95",
    tags: ["gaming", "dungeon", "crawler", "dark"],
    isTrending: false,
  },
  {
    id: 1504,
    title: "Space Opera",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=3840&q=95",
    tags: ["gaming", "space", "opera", "dramatic"],
    isTrending: false,
  },
  {
    id: 1505,
    title: "Village Defense",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=3840&q=95",
    tags: ["gaming", "village", "defense", "strategy"],
    isTrending: false,
  },
  {
    id: 1506,
    title: "Mech Strike",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=3840&q=95",
    tags: ["gaming", "mech", "strike", "robot"],
    isTrending: true,
  },
  {
    id: 1507,
    title: "Lore Book",
    category: "Gaming",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1920&q=95",
    tags: ["gaming", "lore", "book", "story"],
    isTrending: false,
  },
  {
    id: 1508,
    title: "Wyvern Rider",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1606041011872-596597976b25?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1606041011872-596597976b25?w=3840&q=95",
    tags: ["gaming", "wyvern", "rider", "fantasy"],
    isTrending: false,
  },
  {
    id: 1509,
    title: "Neon City Heist",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=3840&q=95",
    tags: ["gaming", "neon", "city", "heist"],
    isTrending: false,
  },
  {
    id: 1510,
    title: "Nuclear Winter",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=3840&q=95",
    tags: ["gaming", "nuclear", "winter", "fallout"],
    isTrending: false,
  },
  {
    id: 1511,
    title: "Kraken Attack",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1547636780-e41778614ac2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1547636780-e41778614ac2?w=3840&q=95",
    tags: ["gaming", "kraken", "attack", "epic"],
    isTrending: false,
  },
  {
    id: 1512,
    title: "Shadow Realm",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=3840&q=95",
    tags: ["gaming", "shadow", "realm", "dark"],
    isTrending: false,
  },
  {
    id: 1513,
    title: "Guild Hall",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=3840&q=95",
    tags: ["gaming", "guild", "hall", "medieval"],
    isTrending: false,
  },
  {
    id: 1514,
    title: "Healer Class",
    category: "Gaming",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=1920&q=95",
    tags: ["gaming", "healer", "class", "fantasy"],
    isTrending: false,
  },
  {
    id: 1515,
    title: "Storm Castle",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=3840&q=95",
    tags: ["gaming", "storm", "castle", "siege"],
    isTrending: true,
  },
  {
    id: 1516,
    title: "Sky Pirates",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=3840&q=95",
    tags: ["gaming", "sky", "pirates", "airship"],
    isTrending: false,
  },
  {
    id: 1517,
    title: "Haunted Manor",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=3840&q=95",
    tags: ["gaming", "haunted", "manor", "horror"],
    isTrending: false,
  },
  {
    id: 1518,
    title: "Legendary Sword",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=3840&q=95",
    tags: ["gaming", "legendary", "sword", "item"],
    isTrending: false,
  },
  {
    id: 1519,
    title: "Elemental Clash",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1606041011872-596597976b25?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1606041011872-596597976b25?w=3840&q=95",
    tags: ["gaming", "elemental", "clash", "magic"],
    isTrending: false,
  },
  {
    id: 1520,
    title: "Boss Fight",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=3840&q=95",
    tags: ["gaming", "boss", "fight", "epic"],
    isTrending: true,
  },
  {
    id: 1521,
    title: "Respawn Screen",
    category: "Gaming",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&q=95",
    tags: ["gaming", "respawn", "dark", "ambient"],
    isTrending: false,
  },
  {
    id: 1522,
    title: "Cyber Chase",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=3840&q=95",
    tags: ["gaming", "cyber", "chase", "action"],
    isTrending: false,
  },
  {
    id: 1523,
    title: "Steampunk World",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=3840&q=95",
    tags: ["gaming", "steampunk", "gears", "world"],
    isTrending: false,
  },
  {
    id: 1524,
    title: "Ocean RPG",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1547636780-e41778614ac2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1547636780-e41778614ac2?w=3840&q=95",
    tags: ["gaming", "ocean", "rpg", "adventure"],
    isTrending: false,
  },
  {
    id: 1525,
    title: "Rebel Alliance",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=3840&q=95",
    tags: ["gaming", "rebel", "alliance", "sci-fi"],
    isTrending: false,
  },

  // ─── AMOLED continued ─────────────────────────────────────────
  {
    id: 1600,
    title: "Dark Pulse",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=3840&q=95",
    tags: ["amoled", "dark", "pulse", "wave"],
    isTrending: false,
  },
  {
    id: 1601,
    title: "Void Lines",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=3840&q=95",
    tags: ["amoled", "void", "lines", "dark"],
    isTrending: false,
  },
  {
    id: 1602,
    title: "Glowing Orb",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=3840&q=95",
    tags: ["amoled", "glowing", "orb", "energy"],
    isTrending: false,
  },
  {
    id: 1603,
    title: "Aurora Dark",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=3840&q=95",
    tags: ["amoled", "aurora", "dark", "green"],
    isTrending: false,
  },
  {
    id: 1604,
    title: "Black Prism",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=3840&q=95",
    tags: ["amoled", "black", "prism", "spectrum"],
    isTrending: false,
  },
  {
    id: 1605,
    title: "Crimson Dark",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=3840&q=95",
    tags: ["amoled", "crimson", "dark", "red"],
    isTrending: false,
  },
  {
    id: 1606,
    title: "Minimal Black",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=3840&q=95",
    tags: ["amoled", "minimal", "black", "ultra-dark"],
    isTrending: false,
  },
  {
    id: 1607,
    title: "Teal Glow",
    category: "AMOLED",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=95",
    tags: ["amoled", "teal", "glow", "dark"],
    isTrending: false,
  },
  {
    id: 1608,
    title: "Dark Forest",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=3840&q=95",
    tags: ["amoled", "dark", "forest", "night"],
    isTrending: false,
  },
  {
    id: 1609,
    title: "Black Moon",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=3840&q=95",
    tags: ["amoled", "black", "moon", "night"],
    isTrending: false,
  },
  {
    id: 1610,
    title: "Neon Web",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=3840&q=95",
    tags: ["amoled", "neon", "web", "digital"],
    isTrending: true,
  },
  {
    id: 1611,
    title: "Black Velvet",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=3840&q=95",
    tags: ["amoled", "black", "velvet", "luxury"],
    isTrending: false,
  },
  {
    id: 1612,
    title: "Blue Ember",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=3840&q=95",
    tags: ["amoled", "blue", "ember", "cold"],
    isTrending: false,
  },
  {
    id: 1613,
    title: "Shadow Geometry",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=3840&q=95",
    tags: ["amoled", "shadow", "geometry", "dark"],
    isTrending: false,
  },
  {
    id: 1614,
    title: "Black Hole Pull",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=3840&q=95",
    tags: ["amoled", "black hole", "pull", "gravity"],
    isTrending: false,
  },
  {
    id: 1615,
    title: "Midnight Blue",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=3840&q=95",
    tags: ["amoled", "midnight", "blue", "deep"],
    isTrending: true,
  },
  {
    id: 1616,
    title: "Electric Dark",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=3840&q=95",
    tags: ["amoled", "electric", "dark", "charge"],
    isTrending: false,
  },
  {
    id: 1617,
    title: "Smoke Rings",
    category: "AMOLED",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=95",
    tags: ["amoled", "smoke", "rings", "dark"],
    isTrending: false,
  },
  {
    id: 1618,
    title: "Void Mirror",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=3840&q=95",
    tags: ["amoled", "void", "mirror", "reflection"],
    isTrending: false,
  },
  {
    id: 1619,
    title: "Obsidian Shine",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=3840&q=95",
    tags: ["amoled", "obsidian", "shine", "dark"],
    isTrending: false,
  },
  {
    id: 1620,
    title: "Black Gold",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=3840&q=95",
    tags: ["amoled", "black", "gold", "premium"],
    isTrending: true,
  },
  {
    id: 1621,
    title: "Laser Lines",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=3840&q=95",
    tags: ["amoled", "laser", "lines", "cyan"],
    isTrending: false,
  },
  {
    id: 1622,
    title: "Shadow Wolf",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=3840&q=95",
    tags: ["amoled", "shadow", "wolf", "dark"],
    isTrending: false,
  },
  {
    id: 1623,
    title: "Deep Void",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=3840&q=95",
    tags: ["amoled", "deep", "void", "infinite"],
    isTrending: false,
  },
  {
    id: 1624,
    title: "Carbon Black",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=3840&q=95",
    tags: ["amoled", "carbon", "black", "matte"],
    isTrending: false,
  },
  {
    id: 1625,
    title: "Vortex Black",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=3840&q=95",
    tags: ["amoled", "vortex", "black", "swirl"],
    isTrending: false,
  },

  // ─── SPACE continued ──────────────────────────────────────────
  {
    id: 1700,
    title: "Galaxy Collision",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=3840&q=95",
    tags: ["space", "galaxy", "collision", "cosmic"],
    isTrending: false,
  },
  {
    id: 1701,
    title: "Stellar Nursery",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=3840&q=95",
    tags: ["space", "stellar", "nursery", "nebula"],
    isTrending: false,
  },
  {
    id: 1702,
    title: "Dark Matter",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=3840&q=95",
    tags: ["space", "dark matter", "mystery", "science"],
    isTrending: false,
  },
  {
    id: 1703,
    title: "Pulsar Spin",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=3840&q=95",
    tags: ["space", "pulsar", "spin", "neutron star"],
    isTrending: false,
  },
  {
    id: 1704,
    title: "Cosmic Dawn",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=3840&q=95",
    tags: ["space", "cosmic", "dawn", "early universe"],
    isTrending: false,
  },
  {
    id: 1705,
    title: "Nebula Pillars",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=3840&q=95",
    tags: ["space", "nebula", "pillars", "creation"],
    isTrending: true,
  },
  {
    id: 1706,
    title: "Star Birth",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=3840&q=95",
    tags: ["space", "star", "birth", "formation"],
    isTrending: false,
  },
  {
    id: 1707,
    title: "Cosmic Iris",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=3840&q=95",
    tags: ["space", "cosmic", "iris", "colorful"],
    isTrending: false,
  },
  {
    id: 1708,
    title: "Ring Nebula",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1486425056723-72dfe4512f73?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1486425056723-72dfe4512f73?w=3840&q=95",
    tags: ["space", "ring", "nebula", "circular"],
    isTrending: false,
  },
  {
    id: 1709,
    title: "Starfield 4K",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=3840&q=95",
    tags: ["space", "starfield", "4k", "immersive"],
    isTrending: true,
  },
  {
    id: 1710,
    title: "Night Sky Dome",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=3840&q=95",
    tags: ["space", "night sky", "dome", "stars"],
    isTrending: false,
  },
  {
    id: 1711,
    title: "Twin Stars",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=3840&q=95",
    tags: ["space", "twin", "stars", "binary"],
    isTrending: false,
  },
  {
    id: 1712,
    title: "Galactic Arm",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=3840&q=95",
    tags: ["space", "galactic", "arm", "structure"],
    isTrending: false,
  },
  {
    id: 1713,
    title: "Moon Colony",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=3840&q=95",
    tags: ["space", "moon", "colony", "future"],
    isTrending: false,
  },
  {
    id: 1714,
    title: "Hubble Deep Field",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=3840&q=95",
    tags: ["space", "hubble", "deep field", "galaxies"],
    isTrending: true,
  },
  {
    id: 1715,
    title: "Space Whale",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=3840&q=95",
    tags: ["space", "whale", "conceptual", "art"],
    isTrending: false,
  },
  {
    id: 1716,
    title: "Mercury Crater",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=3840&q=95",
    tags: ["space", "mercury", "crater", "rocky"],
    isTrending: false,
  },
  {
    id: 1717,
    title: "Tidal Disruption",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=3840&q=95",
    tags: ["space", "tidal", "disruption", "energetic"],
    isTrending: false,
  },
  {
    id: 1718,
    title: "Warp Drive",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=3840&q=95",
    tags: ["space", "warp", "drive", "light speed"],
    isTrending: false,
  },
  {
    id: 1719,
    title: "Nebula Storm",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1486425056723-72dfe4512f73?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1486425056723-72dfe4512f73?w=3840&q=95",
    tags: ["space", "nebula", "storm", "violent"],
    isTrending: false,
  },
  {
    id: 1720,
    title: "Observatory Night",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=3840&q=95",
    tags: ["space", "observatory", "night", "telescope"],
    isTrending: false,
  },
  {
    id: 1721,
    title: "Solar System",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=3840&q=95",
    tags: ["space", "solar system", "planets", "map"],
    isTrending: false,
  },
  {
    id: 1722,
    title: "Space Garden",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=3840&q=95",
    tags: ["space", "garden", "poetic", "surreal"],
    isTrending: false,
  },
  {
    id: 1723,
    title: "Northern Cosmos",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=3840&q=95",
    tags: ["space", "northern", "cosmos", "aurora"],
    isTrending: false,
  },
  {
    id: 1724,
    title: "Star Wars Art",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=3840&q=95",
    tags: ["space", "star wars", "battle", "epic"],
    isTrending: false,
  },
  {
    id: 1725,
    title: "Gravity Well",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=3840&q=95",
    tags: ["space", "gravity", "well", "distortion"],
    isTrending: true,
  },

  // ─── MINIMAL continued ────────────────────────────────────────
  {
    id: 1800,
    title: "Linen White",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=3840&q=95",
    tags: ["minimal", "linen", "white", "natural"],
    isTrending: false,
  },
  {
    id: 1801,
    title: "Desert Tone",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=3840&q=95",
    tags: ["minimal", "desert", "tone", "warm"],
    isTrending: false,
  },
  {
    id: 1802,
    title: "Marble Surface",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1455793723439-ccf6e1b5ab25?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1455793723439-ccf6e1b5ab25?w=3840&q=95",
    tags: ["minimal", "marble", "surface", "elegant"],
    isTrending: false,
  },
  {
    id: 1803,
    title: "Pure Sky",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=3840&q=95",
    tags: ["minimal", "pure", "sky", "blue"],
    isTrending: false,
  },
  {
    id: 1804,
    title: "Night Minimal",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=3840&q=95",
    tags: ["minimal", "night", "dark", "simple"],
    isTrending: false,
  },
  {
    id: 1805,
    title: "Abstract Minimal",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=3840&q=95",
    tags: ["minimal", "abstract", "clean", "form"],
    isTrending: false,
  },
  {
    id: 1806,
    title: "Wood Grain",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=3840&q=95",
    tags: ["minimal", "wood", "grain", "natural"],
    isTrending: false,
  },
  {
    id: 1807,
    title: "Cloud Layer",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=3840&q=95",
    tags: ["minimal", "cloud", "layer", "sky"],
    isTrending: false,
  },
  {
    id: 1808,
    title: "Grain Texture",
    category: "Minimal",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1483499577568-23f9244a8e14?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1483499577568-23f9244a8e14?w=1920&q=95",
    tags: ["minimal", "grain", "texture", "matte"],
    isTrending: false,
  },
  {
    id: 1809,
    title: "Silver Shine",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=3840&q=95",
    tags: ["minimal", "silver", "shine", "metallic"],
    isTrending: false,
  },
  {
    id: 1810,
    title: "Off White",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=3840&q=95",
    tags: ["minimal", "off white", "soft", "clean"],
    isTrending: false,
  },
  {
    id: 1811,
    title: "River Stone",
    category: "Minimal",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=95",
    tags: ["minimal", "river", "stone", "smooth"],
    isTrending: false,
  },
  {
    id: 1812,
    title: "Ink Wash",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=3840&q=95",
    tags: ["minimal", "ink", "wash", "art"],
    isTrending: false,
  },
  {
    id: 1813,
    title: "Eucalyptus",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1455793723439-ccf6e1b5ab25?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1455793723439-ccf6e1b5ab25?w=3840&q=95",
    tags: ["minimal", "eucalyptus", "green", "fresh"],
    isTrending: false,
  },
  {
    id: 1814,
    title: "Monolith Black",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=3840&q=95",
    tags: ["minimal", "monolith", "black", "bold"],
    isTrending: false,
  },
  {
    id: 1815,
    title: "Ocean Mist",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1501780392773-287d506245a5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1501780392773-287d506245a5?w=3840&q=95",
    tags: ["minimal", "ocean", "mist", "soft"],
    isTrending: false,
  },
  {
    id: 1816,
    title: "Autumn Minimal",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=3840&q=95",
    tags: ["minimal", "autumn", "leaf", "simple"],
    isTrending: false,
  },
  {
    id: 1817,
    title: "Night Sky Simple",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=3840&q=95",
    tags: ["minimal", "night sky", "simple", "dark"],
    isTrending: false,
  },
  {
    id: 1818,
    title: "Terracotta",
    category: "Minimal",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1920&q=95",
    tags: ["minimal", "terracotta", "warm", "earthy"],
    isTrending: false,
  },
  {
    id: 1819,
    title: "Dusty Rose",
    category: "Minimal",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=3840&q=95",
    tags: ["minimal", "dusty rose", "pink", "calm"],
    isTrending: true,
  },
  {
    id: 1820,
    title: "Sea Green",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=3840&q=95",
    tags: ["minimal", "sea", "green", "natural"],
    isTrending: false,
  },
  {
    id: 1821,
    title: "Canvas Blank",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1501780392773-287d506245a5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1501780392773-287d506245a5?w=3840&q=95",
    tags: ["minimal", "canvas", "blank", "art"],
    isTrending: false,
  },
  {
    id: 1822,
    title: "Sage Green",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1455793723439-ccf6e1b5ab25?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1455793723439-ccf6e1b5ab25?w=3840&q=95",
    tags: ["minimal", "sage", "green", "natural"],
    isTrending: false,
  },
  {
    id: 1823,
    title: "Bare Branch",
    category: "Minimal",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=95",
    tags: ["minimal", "bare", "branch", "winter"],
    isTrending: false,
  },
  {
    id: 1824,
    title: "Light Ray",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=3840&q=95",
    tags: ["minimal", "light", "ray", "beam"],
    isTrending: true,
  },
  {
    id: 1825,
    title: "Quiet Storm",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=3840&q=95",
    tags: ["minimal", "quiet", "storm", "contrast"],
    isTrending: false,
  },

  // ─── ANIME batch 3 ────────────────────────────────────────────
  {
    id: 1900,
    title: "Twilight Shrine",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1600604672151-dd0bf3e7c1a3?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1600604672151-dd0bf3e7c1a3?w=3840&q=95",
    tags: ["anime", "twilight", "shrine", "japanese"],
    isTrending: false,
  },
  {
    id: 1901,
    title: "Hidden Valley",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=3840&q=95",
    tags: ["anime", "hidden", "valley", "peaceful"],
    isTrending: false,
  },
  {
    id: 1902,
    title: "Void Walker",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=3840&q=95",
    tags: ["anime", "void", "walker", "dark"],
    isTrending: false,
  },
  {
    id: 1903,
    title: "Sky Kingdom",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?w=3840&q=95",
    tags: ["anime", "sky", "kingdom", "clouds"],
    isTrending: false,
  },
  {
    id: 1904,
    title: "Kendo Spirit",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=95",
    tags: ["anime", "kendo", "spirit", "japan"],
    isTrending: false,
  },
  {
    id: 1905,
    title: "Fire Phoenix",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=3840&q=95",
    tags: ["anime", "fire", "phoenix", "rebirth"],
    isTrending: true,
  },
  {
    id: 1906,
    title: "Digital Rain",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=3840&q=95",
    tags: ["anime", "digital", "rain", "matrix"],
    isTrending: false,
  },
  {
    id: 1907,
    title: "Lotus Warrior",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1520809227329-2b6a59faa0a5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1520809227329-2b6a59faa0a5?w=3840&q=95",
    tags: ["anime", "lotus", "warrior", "zen"],
    isTrending: false,
  },
  {
    id: 1908,
    title: "Zero Gravity",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=3840&q=95",
    tags: ["anime", "zero", "gravity", "float"],
    isTrending: false,
  },
  {
    id: 1909,
    title: "Sorcerer Duel",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=3840&q=95",
    tags: ["anime", "sorcerer", "duel", "magic"],
    isTrending: false,
  },
  {
    id: 1910,
    title: "Neon Punk",
    category: "Anime",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=3840&q=95",
    tags: ["anime", "neon", "punk", "colorful"],
    isTrending: false,
  },
  {
    id: 1911,
    title: "Flower Demon",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=1920&q=95",
    tags: ["anime", "flower", "demon", "dark"],
    isTrending: false,
  },
  {
    id: 1912,
    title: "Mountain Hermit",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=3840&q=95",
    tags: ["anime", "mountain", "hermit", "lonely"],
    isTrending: false,
  },

  // ─── NATURE batch 3 ───────────────────────────────────────────
  {
    id: 2000,
    title: "Volcanic Island",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=3840&q=95",
    tags: ["nature", "volcanic", "island", "tropical"],
    isTrending: false,
  },
  {
    id: 2001,
    title: "Waterway",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1439853949212-36089c89c8b7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1439853949212-36089c89c8b7?w=3840&q=95",
    tags: ["nature", "waterway", "serene", "blue"],
    isTrending: false,
  },
  {
    id: 2002,
    title: "Mushroom Forest",
    category: "Nature",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=95",
    tags: ["nature", "mushroom", "forest", "magical"],
    isTrending: false,
  },
  {
    id: 2003,
    title: "Sea of Clouds",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=3840&q=95",
    tags: ["nature", "sea of clouds", "epic", "above"],
    isTrending: true,
  },
  {
    id: 2004,
    title: "Kelp Forest",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=3840&q=95",
    tags: ["nature", "kelp", "forest", "underwater"],
    isTrending: false,
  },
  {
    id: 2005,
    title: "Sunbeam Forest",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=3840&q=95",
    tags: ["nature", "sunbeam", "forest", "rays"],
    isTrending: false,
  },
  {
    id: 2006,
    title: "Glacier Blue",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=3840&q=95",
    tags: ["nature", "glacier", "blue", "arctic"],
    isTrending: false,
  },
  {
    id: 2007,
    title: "Tropical Sunset",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=3840&q=95",
    tags: ["nature", "tropical", "sunset", "warm"],
    isTrending: false,
  },
  {
    id: 2008,
    title: "Silver Waterfalls",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=3840&q=95",
    tags: ["nature", "silver", "waterfall", "mist"],
    isTrending: false,
  },
  {
    id: 2009,
    title: "Snowy Forest",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=3840&q=95",
    tags: ["nature", "snowy", "forest", "winter"],
    isTrending: false,
  },
  {
    id: 2010,
    title: "Alpine Reflection",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=3840&q=95",
    tags: ["nature", "alpine", "reflection", "calm"],
    isTrending: false,
  },
  {
    id: 2011,
    title: "Misty Bay",
    category: "Nature",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=1920&q=95",
    tags: ["nature", "misty", "bay", "fog"],
    isTrending: false,
  },
  {
    id: 2012,
    title: "Red Canyon Walls",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=3840&q=95",
    tags: ["nature", "red", "canyon", "walls"],
    isTrending: true,
  },
  {
    id: 2013,
    title: "Mangrove Roots",
    category: "Nature",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=95",
    tags: ["nature", "mangrove", "roots", "tropical"],
    isTrending: false,
  },
  {
    id: 2014,
    title: "Meadow Clouds",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=3840&q=95",
    tags: ["nature", "meadow", "clouds", "sky"],
    isTrending: false,
  },

  // ─── CARS batch 3 ─────────────────────────────────────────────
  {
    id: 2100,
    title: "Lambo Revuelto",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=3840&q=95",
    tags: ["cars", "lamborghini", "revuelto", "new"],
    isTrending: true,
  },
  {
    id: 2101,
    title: "Ice Road Drive",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=3840&q=95",
    tags: ["cars", "ice", "road", "cold"],
    isTrending: false,
  },
  {
    id: 2102,
    title: "Porsche Taycan",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=3840&q=95",
    tags: ["cars", "porsche", "taycan", "electric"],
    isTrending: false,
  },
  {
    id: 2103,
    title: "Hypercar Dawn",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=3840&q=95",
    tags: ["cars", "hypercar", "dawn", "sunrise"],
    isTrending: false,
  },
  {
    id: 2104,
    title: "Stance Culture",
    category: "Cars",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1920&q=95",
    tags: ["cars", "stance", "culture", "low"],
    isTrending: false,
  },
  {
    id: 2105,
    title: "Supercar Lineup",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=3840&q=95",
    tags: ["cars", "supercar", "lineup", "collection"],
    isTrending: false,
  },
  {
    id: 2106,
    title: "Sports Car Rain",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=3840&q=95",
    tags: ["cars", "sports car", "rain", "reflections"],
    isTrending: false,
  },
  {
    id: 2107,
    title: "Viper Red",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=3840&q=95",
    tags: ["cars", "viper", "red", "dodge"],
    isTrending: false,
  },
  {
    id: 2108,
    title: "R35 GTR",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=3840&q=95",
    tags: ["cars", "nissan", "gtr", "jdm"],
    isTrending: false,
  },
  {
    id: 2109,
    title: "Hot Rod Custom",
    category: "Cars",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=95",
    tags: ["cars", "hot rod", "custom", "chrome"],
    isTrending: false,
  },
  {
    id: 2110,
    title: "Midnight Racer",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=3840&q=95",
    tags: ["cars", "midnight", "racer", "speed"],
    isTrending: false,
  },
  {
    id: 2111,
    title: "McLaren P1",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=3840&q=95",
    tags: ["cars", "mclaren", "p1", "hybrid"],
    isTrending: false,
  },
  {
    id: 2112,
    title: "Urban Speed",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=3840&q=95",
    tags: ["cars", "urban", "speed", "city"],
    isTrending: true,
  },

  // ─── GAMING batch 3 ───────────────────────────────────────────
  {
    id: 2200,
    title: "Ice Mage",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=3840&q=95",
    tags: ["gaming", "ice", "mage", "frozen"],
    isTrending: false,
  },
  {
    id: 2201,
    title: "Desert Warrior",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=3840&q=95",
    tags: ["gaming", "desert", "warrior", "sand"],
    isTrending: false,
  },
  {
    id: 2202,
    title: "League of Legends",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=3840&q=95",
    tags: ["gaming", "league", "moba", "champion"],
    isTrending: true,
  },
  {
    id: 2203,
    title: "Tomb Raider Vista",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=3840&q=95",
    tags: ["gaming", "tomb", "raider", "jungle"],
    isTrending: false,
  },
  {
    id: 2204,
    title: "Starcraft Fleet",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=3840&q=95",
    tags: ["gaming", "starcraft", "fleet", "rts"],
    isTrending: false,
  },
  {
    id: 2205,
    title: "Cyberpunk Bike",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=3840&q=95",
    tags: ["gaming", "cyberpunk", "bike", "neon"],
    isTrending: false,
  },
  {
    id: 2206,
    title: "Blood Elf",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=3840&q=95",
    tags: ["gaming", "blood elf", "wow", "fantasy"],
    isTrending: false,
  },
  {
    id: 2207,
    title: "Titan Fall",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=3840&q=95",
    tags: ["gaming", "titan", "fall", "mech"],
    isTrending: false,
  },
  {
    id: 2208,
    title: "Throne Room",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=3840&q=95",
    tags: ["gaming", "throne", "room", "medieval"],
    isTrending: false,
  },
  {
    id: 2209,
    title: "Crystal Shield",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=3840&q=95",
    tags: ["gaming", "crystal", "shield", "defense"],
    isTrending: false,
  },
  {
    id: 2210,
    title: "Wasteland Survivor",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=3840&q=95",
    tags: ["gaming", "wasteland", "survivor", "apocalypse"],
    isTrending: false,
  },
  {
    id: 2211,
    title: "Dragon Lair",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1606041011872-596597976b25?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1606041011872-596597976b25?w=3840&q=95",
    tags: ["gaming", "dragon", "lair", "cave"],
    isTrending: false,
  },
  {
    id: 2212,
    title: "Cyber Ninja",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=3840&q=95",
    tags: ["gaming", "cyber", "ninja", "stealth"],
    isTrending: true,
  },
  {
    id: 2213,
    title: "Cathedral Fight",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=3840&q=95",
    tags: ["gaming", "cathedral", "fight", "dark"],
    isTrending: false,
  },
  {
    id: 2214,
    title: "Horizon Zero",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=3840&q=95",
    tags: ["gaming", "horizon", "zero", "robot"],
    isTrending: false,
  },

  // ─── SPACE batch 3 ────────────────────────────────────────────
  {
    id: 2300,
    title: "Fusion Reactor",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=3840&q=95",
    tags: ["space", "fusion", "reactor", "energy"],
    isTrending: false,
  },
  {
    id: 2301,
    title: "Alien Sunrise",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=3840&q=95",
    tags: ["space", "alien", "sunrise", "exotic"],
    isTrending: false,
  },
  {
    id: 2302,
    title: "Nebula Pink",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=3840&q=95",
    tags: ["space", "nebula", "pink", "glowing"],
    isTrending: true,
  },
  {
    id: 2303,
    title: "Moon Landing",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=3840&q=95",
    tags: ["space", "moon", "landing", "historic"],
    isTrending: false,
  },
  {
    id: 2304,
    title: "Exoplanet Rings",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=3840&q=95",
    tags: ["space", "exoplanet", "rings", "orbit"],
    isTrending: false,
  },
  {
    id: 2305,
    title: "Cosmic Vortex",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=3840&q=95",
    tags: ["space", "cosmic", "vortex", "spiral"],
    isTrending: false,
  },
  {
    id: 2306,
    title: "Magnetar Pulse",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=3840&q=95",
    tags: ["space", "magnetar", "pulse", "energy"],
    isTrending: false,
  },
  {
    id: 2307,
    title: "James Webb Image",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=3840&q=95",
    tags: ["space", "james webb", "telescope", "deep"],
    isTrending: true,
  },
  {
    id: 2308,
    title: "Plasma Arc",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=3840&q=95",
    tags: ["space", "plasma", "arc", "energy"],
    isTrending: false,
  },
  {
    id: 2309,
    title: "Night Rocket",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1541873676-a18131494184?w=3840&q=95",
    tags: ["space", "night", "rocket", "launch"],
    isTrending: false,
  },
  {
    id: 2310,
    title: "Cosmic Ripple",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=3840&q=95",
    tags: ["space", "cosmic", "ripple", "wave"],
    isTrending: false,
  },
  {
    id: 2311,
    title: "Interstellar Cloud",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1486425056723-72dfe4512f73?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1486425056723-72dfe4512f73?w=3840&q=95",
    tags: ["space", "interstellar", "cloud", "drifting"],
    isTrending: false,
  },
  {
    id: 2312,
    title: "Space Sunrise",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=3840&q=95",
    tags: ["space", "sunrise", "orbital", "dawn"],
    isTrending: false,
  },
  {
    id: 2313,
    title: "Cosmic Portrait",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=3840&q=95",
    tags: ["space", "cosmic", "portrait", "art"],
    isTrending: false,
  },
  {
    id: 2314,
    title: "Planetary Fog",
    category: "Space",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=3840&q=95",
    tags: ["space", "planetary", "fog", "mysterious"],
    isTrending: false,
  },

  // ─── MINIMAL batch 3 ──────────────────────────────────────────
  {
    id: 2400,
    title: "Clean White",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=3840&q=95",
    tags: ["minimal", "clean", "white", "pure"],
    isTrending: false,
  },
  {
    id: 2401,
    title: "Soft Blur",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1501780392773-287d506245a5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1501780392773-287d506245a5?w=3840&q=95",
    tags: ["minimal", "soft", "blur", "bokeh"],
    isTrending: false,
  },
  {
    id: 2402,
    title: "Horizon Line",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=3840&q=95",
    tags: ["minimal", "horizon", "line", "calm"],
    isTrending: false,
  },
  {
    id: 2403,
    title: "Solid Teal",
    category: "Minimal",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=3840&q=95",
    tags: ["minimal", "solid", "teal", "bold"],
    isTrending: false,
  },
  {
    id: 2404,
    title: "Blush Pink",
    category: "Minimal",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=3840&q=95",
    tags: ["minimal", "blush", "pink", "gentle"],
    isTrending: false,
  },
  {
    id: 2405,
    title: "Lavender Wash",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=3840&q=95",
    tags: ["minimal", "lavender", "wash", "soft"],
    isTrending: false,
  },
  {
    id: 2406,
    title: "Frosted Glass",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=3840&q=95",
    tags: ["minimal", "frosted", "glass", "blur"],
    isTrending: false,
  },
  {
    id: 2407,
    title: "Bronze Age",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=3840&q=95",
    tags: ["minimal", "bronze", "age", "warm"],
    isTrending: false,
  },
  {
    id: 2408,
    title: "Steel Blue",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=3840&q=95",
    tags: ["minimal", "steel", "blue", "cool"],
    isTrending: false,
  },
  {
    id: 2409,
    title: "Denim Fade",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=3840&q=95",
    tags: ["minimal", "denim", "fade", "casual"],
    isTrending: false,
  },
  {
    id: 2410,
    title: "Stone Cold",
    category: "Minimal",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1920&q=95",
    tags: ["minimal", "stone", "cold", "grey"],
    isTrending: false,
  },
  {
    id: 2411,
    title: "Lemon Drop",
    category: "Minimal",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519898938-4044254f2c91?w=3840&q=95",
    tags: ["minimal", "lemon", "yellow", "bright"],
    isTrending: false,
  },
  {
    id: 2412,
    title: "Rainy Mood",
    category: "Minimal",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=1920&q=95",
    tags: ["minimal", "rainy", "mood", "grey"],
    isTrending: false,
  },
  {
    id: 2413,
    title: "Dark Minimal",
    category: "Minimal",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=3840&q=95",
    tags: ["minimal", "dark", "moody", "atmosphere"],
    isTrending: true,
  },
  {
    id: 2414,
    title: "Soft Peach",
    category: "Minimal",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=3840&q=95",
    tags: ["minimal", "soft", "peach", "warm"],
    isTrending: false,
  },
  // ─── USER-SUBMITTED WALLPAPERS ───────────────────────────────
  {
    id: 40004,
    title: "Luffy Gear 5",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=3840&q=95",
    tags: ["luffy", "one piece", "onepiece", "gear5", "anime", "4k"],
    isTrending: true,
  },
  {
    id: 40005,
    title: "Zoro Wano",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1560343787-92a01e3f6e2c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1560343787-92a01e3f6e2c?w=3840&q=95",
    tags: ["zoro", "wano", "one piece", "onepiece", "anime", "4k"],
    isTrending: true,
  },
  {
    id: 40006,
    title: "Forest Nature",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=3840&q=95",
    tags: ["forest", "nature", "green", "trees", "4k"],
    isTrending: false,
  },
  {
    id: 40000,
    title: "Luffy Gear 5",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=3840&q=95",
    tags: ["one piece", "onepiece", "luffy", "gear5", "anime", "4k"],
    isTrending: true,
  },
  {
    id: 40001,
    title: "Zoro Sword",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=3840&q=95",
    tags: ["one piece", "onepiece", "zoro", "sword", "anime", "4k"],
    isTrending: true,
  },
  {
    id: 40002,
    title: "Naruto Sage Mode",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1560343787-92a01e3f6e2c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1560343787-92a01e3f6e2c?w=3840&q=95",
    tags: ["naruto", "sage mode", "sagemode", "hokage", "anime", "4k"],
    isTrending: true,
  },
  {
    id: 40003,
    title: "Nature Forest",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=3840&q=95",
    tags: ["forest", "nature", "green", "trees", "4k"],
    isTrending: false,
  },
  ...(ANIME_SERIES_WALLPAPERS as Wallpaper[]),
  ...(MOVIE_WALLPAPERS as Wallpaper[]),
  ...(CRICKET_WALLPAPERS as Wallpaper[]),

  // ─── ONE PIECE (10) ───────────────────────────────────────────
  {
    id: 40010,
    title: "Luffy Gear 5",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=3840&q=95",
    tags: ["one piece", "luffy", "gear 5", "straw hat", "anime"],
    isTrending: true,
  },
  {
    id: 40011,
    title: "Zoro Three Sword Style",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=3840&q=95",
    tags: ["one piece", "zoro", "sword", "roronoa", "anime"],
    isTrending: true,
  },
  {
    id: 40012,
    title: "Nami Navigation",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=95",
    tags: ["one piece", "nami", "navigator", "ocean", "anime"],
    isTrending: false,
  },
  {
    id: 40013,
    title: "Sanji Fire Kick",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=3840&q=95",
    tags: ["one piece", "sanji", "diable jambe", "fire", "anime"],
    isTrending: false,
  },
  {
    id: 40014,
    title: "Shanks Red Hair",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=3840&q=95",
    tags: ["one piece", "shanks", "red hair", "yonko", "anime"],
    isTrending: true,
  },
  {
    id: 40015,
    title: "Ace Fire Fist",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&q=95",
    tags: ["one piece", "ace", "fire fist", "portgas", "anime"],
    isTrending: false,
  },
  {
    id: 40016,
    title: "Robin Archaeology",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=1920&q=95",
    tags: ["one piece", "robin", "nico robin", "archaeology", "anime"],
    isTrending: false,
  },
  {
    id: 40017,
    title: "Thousand Sunny Ship",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=3840&q=95",
    tags: ["one piece", "thousand sunny", "ship", "sea", "anime"],
    isTrending: false,
  },
  {
    id: 40018,
    title: "Law Trafalgar Surgeon",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1560343787-92a01e3f6e2c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1560343787-92a01e3f6e2c?w=3840&q=95",
    tags: ["one piece", "trafalgar law", "surgeon of death", "anime"],
    isTrending: false,
  },
  {
    id: 40019,
    title: "Whitebeard Emperor",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1605106702842-01a887a31122?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1605106702842-01a887a31122?w=1920&q=95",
    tags: ["one piece", "whitebeard", "edward newgate", "yonko", "anime"],
    isTrending: false,
  },

  // ─── NARUTO (10) ──────────────────────────────────────────────
  {
    id: 40020,
    title: "Naruto Sage Mode",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=3840&q=95",
    tags: ["naruto", "sage mode", "uzumaki", "hokage", "anime"],
    isTrending: true,
  },
  {
    id: 40021,
    title: "Sasuke Rinnegan",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=3840&q=95",
    tags: ["naruto", "sasuke", "uchiha", "rinnegan", "anime"],
    isTrending: true,
  },
  {
    id: 40022,
    title: "Kakashi Sharingan",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=1920&q=95",
    tags: ["naruto", "kakashi", "hatake", "sharingan", "anime"],
    isTrending: false,
  },
  {
    id: 40023,
    title: "Itachi Amaterasu",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=3840&q=95",
    tags: ["naruto", "itachi", "uchiha", "amaterasu", "mangekyou", "anime"],
    isTrending: true,
  },
  {
    id: 40024,
    title: "Jiraiya Sage",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=1920&q=95",
    tags: ["naruto", "jiraiya", "sage", "toad", "anime"],
    isTrending: false,
  },
  {
    id: 40025,
    title: "Minato Fourth Hokage",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=3840&q=95",
    tags: ["naruto", "minato", "namikaze", "fourth hokage", "anime"],
    isTrending: false,
  },
  {
    id: 40026,
    title: "Gaara Sand Armour",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=95",
    tags: ["naruto", "gaara", "sand", "kazekage", "anime"],
    isTrending: false,
  },
  {
    id: 40027,
    title: "Obito Mask",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=3840&q=95",
    tags: ["naruto", "obito", "uchiha", "mask", "tobi", "anime"],
    isTrending: false,
  },
  {
    id: 40028,
    title: "Kurama Nine Tails",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=3840&q=95",
    tags: ["naruto", "kurama", "nine tails", "bijuu", "fox", "anime"],
    isTrending: true,
  },
  {
    id: 40029,
    title: "Sakura Cherry Blossom",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=1920&q=95",
    tags: ["naruto", "sakura", "haruno", "cherry blossom", "anime"],
    isTrending: false,
  },

  // ─── BLEACH (10) ──────────────────────────────────────────────
  {
    id: 40030,
    title: "Ichigo Bankai",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=3840&q=95",
    tags: ["bleach", "ichigo", "kurosaki", "bankai", "shinigami", "anime"],
    isTrending: true,
  },
  {
    id: 40031,
    title: "Rukia Ice Dragon",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1517281862878-5c7b4d5e9a6f?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1517281862878-5c7b4d5e9a6f?w=1920&q=95",
    tags: ["bleach", "rukia", "kuchiki", "ice", "sode no shirayuki", "anime"],
    isTrending: false,
  },
  {
    id: 40032,
    title: "Byakuya Senbonzakura",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=3840&q=95",
    tags: ["bleach", "byakuya", "kuchiki", "senbonzakura", "petals", "anime"],
    isTrending: true,
  },
  {
    id: 40033,
    title: "Aizen Transformation",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=3840&q=95",
    tags: ["bleach", "aizen", "sosuke", "villain", "hogyoku", "anime"],
    isTrending: false,
  },
  {
    id: 40034,
    title: "Toshiro Hitsugaya",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1484488494157-e38f63f33cd4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1484488494157-e38f63f33cd4?w=1920&q=95",
    tags: ["bleach", "hitsugaya", "toshiro", "ice dragon", "captain", "anime"],
    isTrending: false,
  },
  {
    id: 40035,
    title: "Renji Zabimaru",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=95",
    tags: ["bleach", "renji", "abarai", "zabimaru", "lieutenant", "anime"],
    isTrending: false,
  },
  {
    id: 40036,
    title: "Yhwach Quincy King",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=3840&q=95",
    tags: ["bleach", "yhwach", "quincy", "thousand year blood war", "anime"],
    isTrending: false,
  },
  {
    id: 40037,
    title: "Yoruichi Flash Goddess",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=1920&q=95",
    tags: ["bleach", "yoruichi", "shihoin", "flash goddess", "anime"],
    isTrending: false,
  },
  {
    id: 40038,
    title: "Grimmjow Espada",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1560343787-92a01e3f6e2c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1560343787-92a01e3f6e2c?w=3840&q=95",
    tags: ["bleach", "grimmjow", "espada", "hollow", "arrancar", "anime"],
    isTrending: false,
  },
  {
    id: 40039,
    title: "Soul Society Sunset",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=3840&q=95",
    tags: ["bleach", "soul society", "shinigami", "seireitei", "anime"],
    isTrending: true,
  },

  // ─── DEMON SLAYER (10) ────────────────────────────────────────
  {
    id: 40040,
    title: "Tanjiro Water Breathing",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=3840&q=95",
    tags: [
      "demon slayer",
      "tanjiro",
      "kamado",
      "water breathing",
      "kimetsu",
      "anime",
    ],
    isTrending: true,
  },
  {
    id: 40041,
    title: "Nezuko Blood Demon Art",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=1920&q=95",
    tags: [
      "demon slayer",
      "nezuko",
      "kamado",
      "blood demon art",
      "kimetsu",
      "anime",
    ],
    isTrending: true,
  },
  {
    id: 40042,
    title: "Zenitsu Thunder Breathing",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=3840&q=95",
    tags: ["demon slayer", "zenitsu", "agatsuma", "thunder breathing", "anime"],
    isTrending: false,
  },
  {
    id: 40043,
    title: "Inosuke Beast Breathing",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1920&q=95",
    tags: ["demon slayer", "inosuke", "hashibira", "beast breathing", "anime"],
    isTrending: false,
  },
  {
    id: 40044,
    title: "Rengoku Flame Hashira",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=3840&q=95",
    tags: [
      "demon slayer",
      "rengoku",
      "kyojuro",
      "flame hashira",
      "mugen train",
      "anime",
    ],
    isTrending: true,
  },
  {
    id: 40045,
    title: "Muzan Kibutsuji",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=3840&q=95",
    tags: [
      "demon slayer",
      "muzan",
      "kibutsuji",
      "demon king",
      "kimetsu",
      "anime",
    ],
    isTrending: false,
  },
  {
    id: 40046,
    title: "Shinobu Insect Hashira",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=1920&q=95",
    tags: [
      "demon slayer",
      "shinobu",
      "kocho",
      "insect hashira",
      "butterfly",
      "anime",
    ],
    isTrending: false,
  },
  {
    id: 40047,
    title: "Giyu Water Hashira",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=3840&q=95",
    tags: [
      "demon slayer",
      "giyu",
      "tomioka",
      "water hashira",
      "kimetsu",
      "anime",
    ],
    isTrending: false,
  },
  {
    id: 40048,
    title: "Upper Moon Akaza",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1560343787-92a01e3f6e2c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1560343787-92a01e3f6e2c?w=3840&q=95",
    tags: ["demon slayer", "akaza", "upper moon", "twelve kizuki", "anime"],
    isTrending: false,
  },
  {
    id: 40049,
    title: "Yoriichi Sun Breathing",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1605106702842-01a887a31122?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1605106702842-01a887a31122?w=3840&q=95",
    tags: [
      "demon slayer",
      "yoriichi",
      "tsugikuni",
      "sun breathing",
      "hinokami",
      "anime",
    ],
    isTrending: true,
  },

  // ─── ATTACK ON TITAN (10) ─────────────────────────────────────
  {
    id: 40050,
    title: "Eren Attack Titan",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=3840&q=95",
    tags: ["attack on titan", "eren", "yeager", "attack titan", "aot", "anime"],
    isTrending: true,
  },
  {
    id: 40051,
    title: "Mikasa Red Scarf",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=95",
    tags: [
      "attack on titan",
      "mikasa",
      "ackerman",
      "red scarf",
      "aot",
      "anime",
    ],
    isTrending: false,
  },
  {
    id: 40052,
    title: "Levi Ackerman Survey Corps",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=3840&q=95",
    tags: [
      "attack on titan",
      "levi",
      "ackerman",
      "survey corps",
      "captain",
      "aot",
      "anime",
    ],
    isTrending: true,
  },
  {
    id: 40053,
    title: "Armin Strategic Mind",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=1920&q=95",
    tags: [
      "attack on titan",
      "armin",
      "arlert",
      "colossal titan",
      "aot",
      "anime",
    ],
    isTrending: false,
  },
  {
    id: 40054,
    title: "Reiner Armored Titan",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=3840&q=95",
    tags: [
      "attack on titan",
      "reiner",
      "braun",
      "armored titan",
      "warrior",
      "aot",
      "anime",
    ],
    isTrending: false,
  },
  {
    id: 40055,
    title: "Zeke Beast Titan",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=95",
    tags: [
      "attack on titan",
      "zeke",
      "yeager",
      "beast titan",
      "warrior",
      "aot",
      "anime",
    ],
    isTrending: false,
  },
  {
    id: 40056,
    title: "Historia Queen",
    category: "Anime",
    resolution: "HD",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=1920&q=95",
    tags: [
      "attack on titan",
      "historia",
      "reiss",
      "queen",
      "ymir",
      "aot",
      "anime",
    ],
    isTrending: false,
  },
  {
    id: 40057,
    title: "Wall Maria Breach",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=3840&q=95",
    tags: [
      "attack on titan",
      "wall maria",
      "colossal titan",
      "breach",
      "aot",
      "anime",
    ],
    isTrending: true,
  },
  {
    id: 40058,
    title: "The Rumbling",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=3840&q=95",
    tags: [
      "attack on titan",
      "rumbling",
      "founding titan",
      "eren",
      "wall titans",
      "aot",
      "anime",
    ],
    isTrending: true,
  },
  {
    id: 40059,
    title: "Survey Corps Wings",
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=1920&q=95",
    tags: [
      "attack on titan",
      "survey corps",
      "wings of freedom",
      "ODM gear",
      "aot",
      "anime",
    ],
    isTrending: false,
  },
];

export const CATEGORIES: Category[] = [
  {
    name: "Anime",
    color: "from-purple-900/80 to-violet-950/80",
    accentColor: "#7c3aed",
    coverWallpaperId: 0,
    description: "Stunning anime artwork",
  },
  {
    name: "Nature",
    color: "from-emerald-900/80 to-green-950/80",
    accentColor: "#059669",
    coverWallpaperId: 6,
    description: "Earth's breathtaking beauty",
  },
  {
    name: "Cars",
    color: "from-orange-900/80 to-red-950/80",
    accentColor: "#ea580c",
    coverWallpaperId: 12,
    description: "Iconic machines in motion",
  },
  {
    name: "Gaming",
    color: "from-blue-900/80 to-indigo-950/80",
    accentColor: "#2563eb",
    coverWallpaperId: 18,
    description: "Epic game worlds",
  },
  {
    name: "AMOLED",
    color: "from-slate-900/80 to-zinc-950/80",
    accentColor: "#475569",
    coverWallpaperId: 24,
    description: "Pure black for AMOLED screens",
  },
  {
    name: "Space",
    color: "from-indigo-900/80 to-blue-950/80",
    accentColor: "#4f46e5",
    coverWallpaperId: 1000,
    description: "Beyond the final frontier",
  },
  {
    name: "Minimal",
    color: "from-gray-800/80 to-neutral-900/80",
    accentColor: "#9ca3af",
    coverWallpaperId: 1100,
    description: "Clean lines, quiet beauty",
  },
  {
    name: "Movies",
    color: "from-red-900/80 to-yellow-950/80",
    accentColor: "#dc2626",
    coverWallpaperId: 20000,
    description: "Blockbuster cinema in HD & 4K",
  },
  {
    name: "Cricket",
    color: "from-green-900/80 to-lime-950/80",
    accentColor: "#16a34a",
    coverWallpaperId: 30000,
    description: "Cricket action, IPL & world cricket",
  },
];

export function getWallpapersByCategory(category: string): Wallpaper[] {
  return WALLPAPERS.filter((w) => w.category === category);
}

export function getTrendingWallpapers(): Wallpaper[] {
  return WALLPAPERS.filter((w) => w.isTrending);
}

// ─── Search Utilities ─────────────────────────────────────────

/** Normalize: lowercase + collapse hyphens, underscores, ampersands, extra whitespace */
function normalizeStr(s: string): string {
  return s.toLowerCase().replace(/[-_&]/g, " ").replace(/\s+/g, " ").trim();
}

/** Keywords that clearly indicate an anime search — used to gate Jikan API calls */
const ANIME_KEYWORDS = new Set([
  "anime",
  "manga",
  "naruto",
  "one piece",
  "onepiece",
  "bleach",
  "dragon ball",
  "dragonball",
  "attack on titan",
  "aot",
  "attackontitan",
  "demon slayer",
  "demonslayer",
  "kimetsu",
  "jujutsu kaisen",
  "jjk",
  "jujutsu",
  "my hero academia",
  "mha",
  "bnha",
  "deku",
  "bakugo",
  "chainsaw man",
  "chainsawman",
  "tokyo revengers",
  "tokyorevengers",
  "black clover",
  "fullmetal alchemist",
  "fma",
  "death note",
  "deathnote",
  "sword art online",
  "sao",
  "fairy tail",
  "fairytail",
  "hunter x hunter",
  "hxh",
  "code geass",
  "codegeass",
  "assassination classroom",
  "re zero",
  "rezero",
  "overlord",
  "spirited away",
  "ghibli",
  "one punch man",
  "opm",
  "mob psycho",
  "dr stone",
  "drstone",
  "vinland saga",
  "vinlandsaga",
  "black clover",
  "bleach",
  "luffy",
  "zoro",
  "sanji",
  "nami",
  "chopper",
  "robin",
  "brook",
  "naruto",
  "sasuke",
  "sakura",
  "kakashi",
  "itachi",
  "madara",
  "pain",
  "jiraiya",
  "minato",
  "gaara",
  "eren",
  "mikasa",
  "levi",
  "armin",
  "hange",
  "erwin",
  "reiner",
  "annie",
  "tanjiro",
  "nezuko",
  "zenitsu",
  "inosuke",
  "rengoku",
  "giyu",
  "shinobu",
  "muzan",
  "gojo",
  "sukuna",
  "yuji",
  "megumi",
  "nobara",
  "nanami",
  "ichigo",
  "rukia",
  "byakuya",
  "aizen",
  "hitsugaya",
  "renji",
  "orihime",
  "goku",
  "vegeta",
  "gohan",
  "piccolo",
  "frieza",
  "cell",
  "beerus",
  "deku",
  "all might",
  "bakugo",
  "todoroki",
  "uraraka",
  "shonen",
  "shojo",
  "isekai",
  "mecha",
  "seinen",
  "anime girl",
  "anime boy",
]);

const MOVIE_KEYWORDS = new Set([
  "movie",
  "movies",
  "film",
  "cinema",
  "hollywood",
  "bollywood",
  "south indian",
  "tollywood",
  "avengers",
  "iron man",
  "ironman",
  "thor",
  "captain america",
  "black panther",
  "doctor strange",
  "deadpool",
  "wolverine",
  "hulk",
  "scarlet witch",
  "guardians of the galaxy",
  "spider-man",
  "spiderman",
  "batman",
  "superman",
  "wonder woman",
  "flash",
  "aquaman",
  "harley quinn",
  "joker",
  "dc",
  "marvel",
  "mcu",
  "john wick",
  "avatar",
  "fast furious",
  "fast and furious",
  "transformers",
  "star wars",
  "shah rukh khan",
  "srk",
  "salman khan",
  "aamir khan",
  "hrithik roshan",
  "ranveer singh",
  "deepika padukone",
  "allu arjun",
  "pushpa",
  "kgf",
  "rrr",
  "rajinikanth",
  "vijay",
  "prabhas",
  "yash",
  "ram charan",
  "jr ntr",
  "kamal haasan",
  "rashmika",
  "thala ajith",
  "action",
  "thriller",
  "sci-fi",
  "scifi",
  "superhero",
  "blockbuster",
  "actor",
  "actress",
]);

const CRICKET_KEYWORDS = new Set([
  "cricket",
  "ipl",
  "t20",
  "odi",
  "test match",
  "bcci",
  "icc",
  "dhoni",
  "virat",
  "virat kohli",
  "rohit",
  "rohit sharma",
  "bumrah",
  "jadeja",
  "hardik",
  "sachin",
  "sachin tendulkar",
  "sourav",
  "sourav ganguly",
  "yuvraj",
  "ms dhoni",
  "babar",
  "babar azam",
  "shaheen",
  "rizwan",
  "pakistan cricket",
  "india cricket",
  "csk",
  "mi",
  "rcb",
  "kkr",
  "pbks",
  "srh",
  "dc",
  "gt",
  "lsg",
  "rr",
  "chennai super kings",
  "mumbai indians",
  "royal challengers",
  "kolkata knight riders",
  "wicket",
  "bat",
  "bowl",
  "six",
  "four",
  "century",
  "stadium",
  "pitch",
  "umpire",
  "fielding",
  "world cup",
  "cricket world cup",
  "champions trophy",
]);

/**
 * Short cricket keywords that should only match as whole words (not substrings of other words).
 * e.g. "bat" should NOT match "batman", "dc" should NOT match "dcu"
 */
const CRICKET_WHOLE_WORD_KEYWORDS = new Set([
  "bat",
  "bowl",
  "six",
  "four",
  "dc",
  "mi",
  "rr",
  "gt",
]);

/** Check if a keyword matches query as a whole word (space-bounded or start/end of string) */
function matchesWholeWord(query: string, keyword: string): boolean {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(?:^|\\s)${escaped}(?:\\s|$)`);
  return re.test(query);
}

/**
 * Detect the dominant category intent from a search query.
 * Returns "Anime" | "Movies" | "Cricket" | null (null = general / no strong signal).
 */
export function detectSearchCategory(
  query: string,
): "Anime" | "Movies" | "Cricket" | null {
  const q = query.toLowerCase().trim();
  let animeScore = 0;
  let movieScore = 0;
  let cricketScore = 0;

  for (const kw of ANIME_KEYWORDS) {
    if (q.includes(kw)) animeScore++;
  }
  for (const kw of MOVIE_KEYWORDS) {
    if (q.includes(kw)) movieScore++;
  }
  for (const kw of CRICKET_KEYWORDS) {
    // Short ambiguous keywords must match as a whole word to avoid false positives
    // e.g. "bat" should not match "batman", "dc" should not match "dcu"
    if (CRICKET_WHOLE_WORD_KEYWORDS.has(kw)) {
      if (matchesWholeWord(q, kw)) cricketScore++;
    } else {
      if (q.includes(kw)) cricketScore++;
    }
  }

  const max = Math.max(animeScore, movieScore, cricketScore);
  if (max === 0) return null;
  // Priority order: Movies > Anime > Cricket to avoid ambiguous short-keyword false positives
  if (movieScore === max) return "Movies";
  if (animeScore === max) return "Anime";
  return "Cricket";
}

/** Returns true only when a query is anime-related (used to gate Jikan API) */
export function isAnimeQuery(query: string): boolean {
  return detectSearchCategory(query) === "Anime";
}

/** Synonym map so "spiderman" finds "spider-man" wallpapers and vice-versa */
const SEARCH_SYNONYMS: Record<string, string[]> = {
  spiderman: ["spider-man", "spider man", "spidey"],
  "spider man": ["spider-man", "spiderman"],
  spidey: ["spider-man", "spiderman"],
  batman: ["dark knight", "gotham", "bruce wayne"],
  "dark knight": ["batman"],
  avengers: ["marvel", "mcu", "superhero"],
  ironman: ["iron man", "tony stark"],
  "iron man": ["ironman", "tony stark"],
  "one piece": ["onepiece", "luffy", "straw hat"],
  onepiece: ["one piece", "luffy"],
  luffy: ["one piece"],
  bleach: ["ichigo", "soul society", "shinigami"],
  dragonball: ["dragon ball", "goku", "saiyan"],
  "dragon ball": ["dragonball", "goku"],
  demonslayer: ["demon slayer", "kimetsu", "tanjiro"],
  "demon slayer": ["demonslayer", "kimetsu", "tanjiro"],
  kimetsu: ["demon slayer"],
  attackontitan: ["attack on titan", "aot", "eren"],
  "attack on titan": ["aot", "eren", "titan"],
  aot: ["attack on titan"],
  jjk: ["jujutsu kaisen", "jujutsu"],
  jujutsu: ["jujutsu kaisen", "jjk"],
  "jujutsu kaisen": ["jjk", "jujutsu"],
  mha: ["my hero academia", "bnha", "deku"],
  bnha: ["my hero academia", "mha"],
  "my hero academia": ["mha", "bnha", "deku"],
  csmm: ["chainsaw man"],
  chainsawman: ["chainsaw man"],
  "chainsaw man": ["chainsawman"],
  starwars: ["star wars", "jedi", "sith"],
  "star wars": ["starwars", "jedi", "sith"],
  johnwick: ["john wick", "baba yaga"],
  "john wick": ["johnwick", "baba yaga"],
  fastfurious: ["fast furious", "fast and furious"],
  "fast furious": ["fastfurious", "fast and furious"],
  "fast and furious": ["fast furious", "fastfurious"],
  naruto: ["ninja", "shinobi", "jutsu"],
  anime: ["manga", "shonen", "shojo"],
  movie: ["movies", "film", "cinema"],
  movies: ["movie", "film", "cinema"],
  film: ["movie", "movies", "cinema"],
  "4k": ["4k", "ultra hd", "uhd"],
  hd: ["1080p", "high definition"],
};

export function searchWallpapers(query: string): Wallpaper[] {
  const raw = query.toLowerCase().trim();
  if (!raw) return WALLPAPERS;

  const q = normalizeStr(raw);

  // Build a set of all terms to match against (original + synonyms)
  const terms = new Set<string>([q, raw]);
  const synonyms = SEARCH_SYNONYMS[q] ?? SEARCH_SYNONYMS[raw] ?? [];
  for (const syn of synonyms) {
    terms.add(syn);
    terms.add(normalizeStr(syn));
  }

  const termArr = Array.from(terms);

  return WALLPAPERS.filter((w) => {
    const titleNorm = normalizeStr(w.title);
    const catNorm = normalizeStr(w.category);
    const resNorm = w.resolution.toLowerCase();
    const tagsNorm = w.tags.map((t) => normalizeStr(t));
    const tagsStr = tagsNorm.join(" ");

    return termArr.some(
      (term) =>
        titleNorm.includes(term) ||
        catNorm.includes(term) ||
        resNorm.includes(term) ||
        tagsStr.includes(term) ||
        tagsNorm.some((t) => t.includes(term)),
    );
  });
}

// ─── Auto-generate Wallpapers For Unknown Keywords ────────────────

/** Unsplash image pools used for keyword-based generation */
const KEYWORD_IMAGE_MAP: Record<string, string[]> = {
  default: [
    "photo-1578632767115-351597cf2477",
    "photo-1568702846914-96b305d2aaeb",
    "photo-1490750967868-88df5691cc41",
    "photo-1502082553048-f009c37129b9",
    "photo-1540959733332-eab4deabeeaf",
    "photo-1560343787-92a01e3f6e2c",
  ],
  anime: [
    "photo-1578632767115-351597cf2477",
    "photo-1568702846914-96b305d2aaeb",
    "photo-1490750967868-88df5691cc41",
    "photo-1502082553048-f009c37129b9",
    "photo-1540959733332-eab4deabeeaf",
    "photo-1517841905240-472988babdf9",
  ],
  nature: [
    "photo-1501854140801-50d01698950b",
    "photo-1441974231531-c6227db76b6e",
    "photo-1518495973542-4542c06a5843",
    "photo-1465146344425-f00d5f5c8f07",
    "photo-1504173010664-32509aeebb62",
    "photo-1462275646964-a0e3386b89fa",
  ],
  space: [
    "photo-1446776653964-20c1d3a81b06",
    "photo-1419242902214-272b3f66ee7a",
    "photo-1462275646964-a0e3386b89fa",
    "photo-1506318137071-a8e063b4bec0",
    "photo-1454789548928-9efd52dc4031",
    "photo-1484600899469-230e8d1d59c0",
  ],
};

function getImagesForKeyword(keyword: string): string[] {
  const k = keyword.toLowerCase();
  if (k.includes("nature") || k.includes("forest") || k.includes("ocean"))
    return KEYWORD_IMAGE_MAP.nature;
  if (k.includes("space") || k.includes("galaxy") || k.includes("star"))
    return KEYWORD_IMAGE_MAP.space;
  if (k.includes("anime") || k.includes("naruto") || k.includes("manga"))
    return KEYWORD_IMAGE_MAP.anime;
  return KEYWORD_IMAGE_MAP.default;
}

export function generateWallpapersForKeyword(keyword: string): Wallpaper[] {
  const imgs = getImagesForKeyword(keyword);
  const capitalizedKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  const resolutions: Array<"HD" | "4K"> = ["4K", "HD", "4K", "HD", "4K", "HD"];
  const devices: Array<"desktop" | "mobile"> = [
    "desktop",
    "mobile",
    "desktop",
    "mobile",
    "desktop",
    "mobile",
  ];

  // Detect the correct category so generated wallpapers go to the right section
  const detectedCat = detectSearchCategory(keyword);
  const category: Wallpaper["category"] = detectedCat ?? "Anime";

  return imgs.map((img, i) => ({
    id: 900000 + i + keyword.charCodeAt(0) * 1000,
    title: `${capitalizedKeyword} Wallpaper ${i + 1}`,
    category,
    resolution: resolutions[i],
    deviceType: devices[i],
    imageUrl: `https://images.unsplash.com/${img}?w=800&q=80`,
    fullUrl: `https://images.unsplash.com/${img}?w=3840&q=95`,
    tags: [keyword.toLowerCase(), "generated", "4k", "hd", "wallpaper"],
    isTrending: false,
  }));
}
