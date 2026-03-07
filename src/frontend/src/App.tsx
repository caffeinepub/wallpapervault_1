import { Toaster } from "@/components/ui/sonner";
import {
  ChevronLeft,
  Flame,
  Layers,
  LayoutGrid,
  TrendingUp,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { CategoryCard } from "@/components/CategoryCard";
import { Header } from "@/components/Header";
import { Lightbox } from "@/components/Lightbox";
import { SearchBar } from "@/components/SearchBar";
import { WallpaperCard } from "@/components/WallpaperCard";
import { WallpaperGrid } from "@/components/WallpaperGrid";

import {
  CATEGORIES,
  WALLPAPERS,
  type Wallpaper,
  getTrendingWallpapers,
  getWallpapersByCategory,
  searchWallpapers,
} from "@/data/wallpapers";

type View = "home" | "category" | "search";

const TRENDING = getTrendingWallpapers();

export default function App() {
  const [view, setView] = useState<View>("home");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [liveSearchQuery, setLiveSearchQuery] = useState("");
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(
    null,
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Scroll detection for header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when view changes — use a counter to trigger effect
  const scrollTrigger = `${view}::${selectedCategory}`;
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional scroll-to-top trigger
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [scrollTrigger]);

  const handleSearch = useCallback((query: string) => {
    const trimmed = query.trim();
    if (trimmed) {
      setSearchQuery(trimmed);
      setView("search");
    } else {
      setSearchQuery("");
      setView("home");
    }
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setLiveSearchQuery(value);
  }, []);

  const handleGoHome = useCallback(() => {
    setView("home");
    setSearchQuery("");
    setLiveSearchQuery("");
    setSelectedCategory("");
  }, []);

  const handleCategoryClick = useCallback((name: string) => {
    if (name === "") {
      setView("home");
      setSearchQuery("");
      setLiveSearchQuery("");
      setSelectedCategory("");
    } else {
      setSelectedCategory(name);
      setView("category");
    }
  }, []);

  const handleWallpaperClick = useCallback((wallpaper: Wallpaper) => {
    setSelectedWallpaper(wallpaper);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setSelectedWallpaper(null);
  }, []);

  const handleDownload = useCallback(
    async (wallpaper: Wallpaper, e?: React.MouseEvent) => {
      e?.stopPropagation();
      const filename = `${wallpaper.title.replace(/\s+/g, "-").toLowerCase()}-${wallpaper.resolution}.jpg`;
      try {
        const response = await fetch(wallpaper.fullUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success(`Downloading ${wallpaper.title}`, {
          description: `${wallpaper.resolution} · ${wallpaper.deviceType}`,
        });
      } catch {
        window.open(wallpaper.fullUrl, "_blank");
        toast.info(`Opening ${wallpaper.title} in new tab`);
      }
    },
    [],
  );

  const searchResults = view === "search" ? searchWallpapers(searchQuery) : [];
  const categoryWallpapers =
    view === "category" ? getWallpapersByCategory(selectedCategory) : [];

  const currentSearchValue = view === "search" ? searchQuery : liveSearchQuery;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="bottom-right" />

      {/* Header */}
      <Header
        searchQuery={currentSearchValue}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
        onLogoClick={handleGoHome}
        isScrolled={isScrolled}
        selectedCategory={view === "category" ? selectedCategory : ""}
        onCategoryClick={handleCategoryClick}
      />

      {/* Main content */}
      <main ref={mainRef}>
        <AnimatePresence mode="wait">
          {view === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HomePage
                onCategoryClick={handleCategoryClick}
                onWallpaperClick={handleWallpaperClick}
                onDownload={handleDownload}
              />
            </motion.div>
          )}

          {view === "category" && (
            <motion.div
              key={`category-${selectedCategory}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <CategoryPage
                category={selectedCategory}
                wallpapers={categoryWallpapers}
                onBack={handleGoHome}
                onWallpaperClick={handleWallpaperClick}
                onDownload={handleDownload}
              />
            </motion.div>
          )}

          {view === "search" && (
            <motion.div
              key="search"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SearchPage
                query={searchQuery}
                results={searchResults}
                onBack={handleGoHome}
                onSearchChange={handleSearchChange}
                onSearch={handleSearch}
                onWallpaperClick={handleWallpaperClick}
                onDownload={handleDownload}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-border bg-card/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Layers className="w-3 h-3 text-primary" />
              </div>
              <span className="font-heading font-black text-sm">
                <span className="text-gradient-violet">Wallpaper</span>
                <span className="text-foreground">Vault</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              © {new Date().getFullYear()}. Built with{" "}
              <span className="text-red-400">♥</span> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
            <div className="text-muted-foreground text-xs">
              {WALLPAPERS.length} wallpapers · {CATEGORIES.length} categories
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <Lightbox
        wallpaper={selectedWallpaper}
        onClose={handleCloseLightbox}
        onDownload={handleDownload}
      />
    </div>
  );
}

// ─── Home Page ────────────────────────────────────────────────
interface HomePageProps {
  onCategoryClick: (name: string) => void;
  onWallpaperClick: (w: Wallpaper) => void;
  onDownload: (w: Wallpaper, e: React.MouseEvent) => void;
}

function HomePage({
  onCategoryClick,
  onWallpaperClick,
  onDownload,
}: HomePageProps) {
  return (
    <div className="pb-20">
      {/* ── Cinematic Hero ─────────────────────────────────── */}
      <div className="relative overflow-hidden h-[52vh] min-h-[340px] max-h-[560px] mb-16">
        {/* Mosaic backdrop: 4 trending thumbnails tiled */}
        <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-4 gap-0.5 scale-105">
          {TRENDING.slice(0, 4).map((w) => (
            <div key={w.id} className="relative overflow-hidden">
              <img
                src={w.imageUrl}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Deep vignette — ensures crisp text on any image combo */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

        {/* Hero text — anchored to bottom-left for editorial feel */}
        <motion.div
          className="absolute inset-x-0 bottom-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-10"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-heading leading-[0.95] tracking-tight mb-3">
            <span className="text-gradient-violet">Beautiful</span>
            <br />
            <span className="text-foreground">wallpapers.</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md">
            {WALLPAPERS.length} handpicked HD &amp; 4K walls across{" "}
            {CATEGORIES.length} categories — free forever.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trending Section */}
        <section className="mb-14" aria-label="Trending wallpapers">
          <SectionHeading
            icon={<Flame className="w-5 h-5 text-orange-400" />}
            title="Trending Now"
            count={TRENDING.length}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {TRENDING.map((wallpaper, i) => (
              <WallpaperCard
                key={wallpaper.id}
                wallpaper={wallpaper}
                index={i}
                onClick={onWallpaperClick}
                onDownload={onDownload}
              />
            ))}
          </div>
        </section>

        {/* Popular Categories */}
        <section className="mb-14" aria-label="Popular categories">
          <SectionHeading
            icon={<LayoutGrid className="w-5 h-5 text-primary" />}
            title="Popular Categories"
            count={CATEGORIES.length}
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {CATEGORIES.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.06,
                  ease: "easeOut",
                }}
              >
                <CategoryCard category={category} onClick={onCategoryClick} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Wallpapers */}
        <section aria-label="All wallpapers">
          <SectionHeading
            icon={<TrendingUp className="w-5 h-5 text-primary" />}
            title="All Wallpapers"
            count={WALLPAPERS.length}
          />
          <WallpaperGrid
            wallpapers={WALLPAPERS}
            onWallpaperClick={onWallpaperClick}
            onDownload={onDownload}
          />
        </section>
      </div>
    </div>
  );
}

// ─── Category Page ────────────────────────────────────────────
interface CategoryPageProps {
  category: string;
  wallpapers: Wallpaper[];
  onBack: () => void;
  onWallpaperClick: (w: Wallpaper) => void;
  onDownload: (w: Wallpaper, e: React.MouseEvent) => void;
}

function CategoryPage({
  category,
  wallpapers,
  onBack,
  onWallpaperClick,
  onDownload,
}: CategoryPageProps) {
  const catData = CATEGORIES.find((c) => c.name === category);
  const coverWallpaper = catData
    ? WALLPAPERS.find((w) => w.id === catData.coverWallpaperId)
    : null;

  const CATEGORY_ICONS: Record<string, string> = {
    Anime: "⛩️",
    Nature: "🌿",
    Cars: "🏎️",
    Gaming: "🎮",
    AMOLED: "🌑",
    Space: "🚀",
    Minimal: "◻️",
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      {/* Hero banner */}
      <div className="relative overflow-hidden rounded-2xl mb-10 h-44 sm:h-56">
        {coverWallpaper && (
          <img
            src={coverWallpaper.imageUrl}
            alt={category}
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        )}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${catData?.color ?? "from-primary/50 to-primary/80"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute inset-0 flex items-end p-6 sm:p-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <button
                type="button"
                data-ocid="category.back_button"
                onClick={onBack}
                className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors duration-150 text-sm"
                aria-label="Back to home"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            </div>
            <h1 className="text-white font-black text-3xl sm:text-4xl font-heading tracking-tight">
              {CATEGORY_ICONS[category]} {category}
            </h1>
            <p className="text-white/70 text-sm mt-1">
              {wallpapers.length} wallpapers available
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <WallpaperGrid
        wallpapers={wallpapers}
        onWallpaperClick={onWallpaperClick}
        onDownload={onDownload}
      />
    </div>
  );
}

// ─── Search Page ──────────────────────────────────────────────
interface SearchPageProps {
  query: string;
  results: Wallpaper[];
  onBack: () => void;
  onSearchChange: (value: string) => void;
  onSearch: (query: string) => void;
  onWallpaperClick: (w: Wallpaper) => void;
  onDownload: (w: Wallpaper, e: React.MouseEvent) => void;
}

function SearchPage({
  query,
  results,
  onBack,
  onSearchChange,
  onSearch,
  onWallpaperClick,
  onDownload,
}: SearchPageProps) {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      {/* Search header */}
      <div className="mb-8">
        <button
          type="button"
          data-ocid="category.back_button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-150 text-sm mb-4"
          aria-label="Back to home"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to home
        </button>

        {/* Inline search bar */}
        <div className="flex items-center gap-3 max-w-2xl">
          <SearchBar
            value={query}
            onChange={onSearchChange}
            onSearch={onSearch}
            autoFocus
            className="flex-1"
          />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <h2 className="text-foreground font-bold text-xl font-heading">
            Results for:{" "}
            <span className="text-gradient-violet">&ldquo;{query}&rdquo;</span>
          </h2>
          <span className="text-muted-foreground text-sm">
            ({results.length} found)
          </span>
        </div>
      </div>

      <WallpaperGrid
        wallpapers={results}
        onWallpaperClick={onWallpaperClick}
        onDownload={onDownload}
      />
    </div>
  );
}

// ─── Section Heading ──────────────────────────────────────────
interface SectionHeadingProps {
  icon: React.ReactNode;
  title: string;
  count?: number;
}

function SectionHeading({ icon, title, count }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-foreground font-bold text-xl sm:text-2xl font-heading tracking-tight">
          {title}
        </h2>
      </div>
      {count !== undefined && (
        <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border">
          {count}
        </span>
      )}
    </div>
  );
}
