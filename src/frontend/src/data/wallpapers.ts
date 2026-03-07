export type Wallpaper = {
  id: number;
  title: string;
  category: "Anime" | "Nature" | "Cars" | "Gaming" | "AMOLED";
  resolution: "HD" | "4K";
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
  // ANIME (6)
  {
    id: 0,
    title: "Dragon Flames",
    category: "Anime",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=1920&q=95",
    tags: ["anime", "cyberpunk", "neon"],
    isTrending: true,
  },
  // NATURE (6)
  {
    id: 6,
    title: "Mountain Sunrise",
    category: "Nature",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1920&q=95",
    tags: ["milky way", "stars", "night"],
    isTrending: false,
  },
  // CARS (6)
  {
    id: 12,
    title: "Lamborghini Huracan",
    category: "Cars",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&q=95",
    tags: ["mclaren", "supercar", "orange"],
    isTrending: false,
  },
  // GAMING (6)
  {
    id: 18,
    title: "Cyberpunk 2077",
    category: "Gaming",
    resolution: "4K",
    deviceType: "desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&q=95",
    tags: ["fps", "battlefield", "action"],
    isTrending: false,
  },
  // ANIME extra (4)
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
  // NATURE extra (4)
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
  // CARS extra (4)
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
  // GAMING extra (4)
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
  // AMOLED extra (4)
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
  // AMOLED (6)
  {
    id: 24,
    title: "Galaxy Stars",
    category: "AMOLED",
    resolution: "4K",
    deviceType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    fullUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=95",
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
      "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=1920&q=95",
    tags: ["amoled", "black", "minimal", "dark"],
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
];

export function getWallpapersByCategory(category: string): Wallpaper[] {
  return WALLPAPERS.filter((w) => w.category === category);
}

export function getTrendingWallpapers(): Wallpaper[] {
  return WALLPAPERS.filter((w) => w.isTrending);
}

export function searchWallpapers(query: string): Wallpaper[] {
  const q = query.toLowerCase().trim();
  if (!q) return WALLPAPERS;
  return WALLPAPERS.filter(
    (w) =>
      w.title.toLowerCase().includes(q) ||
      w.category.toLowerCase().includes(q) ||
      w.tags.some((t) => t.toLowerCase().includes(q)) ||
      w.resolution.toLowerCase().includes(q) ||
      w.deviceType.toLowerCase().includes(q),
  );
}
