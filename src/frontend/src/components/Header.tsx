import { cn } from "@/lib/utils";
import { Layers } from "lucide-react";
import { motion } from "motion/react";
import { SearchBar } from "./SearchBar";

const HEADER_CATEGORIES = [
  "Anime",
  "Movies",
  "Nature",
  "Cars",
  "Gaming",
  "AMOLED",
  "Space",
  "Minimal",
  "Cricket",
] as const;

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearch: (query: string) => void;
  onLogoClick: () => void;
  isScrolled?: boolean;
  selectedCategory: string;
  onCategoryClick: (name: string) => void;
}

export function Header({
  searchQuery,
  onSearchChange,
  onSearch,
  onLogoClick,
  isScrolled,
  selectedCategory,
  onCategoryClick,
}: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        "transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          : "bg-background/70 backdrop-blur-md border-b border-transparent",
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: Logo + Search */}
        <div className="flex items-center gap-4 h-16">
          {/* Logo */}
          <button
            type="button"
            data-ocid="nav.home_link"
            onClick={onLogoClick}
            className="flex items-center gap-2.5 flex-shrink-0 group"
            aria-label="WallpaperVault home"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-200">
              <Layers className="w-4 h-4 text-primary" />
            </div>
            <span className="font-heading font-black text-lg tracking-tight hidden sm:block">
              <span className="text-gradient-violet">Wallpaper</span>
              <span className="text-foreground">Vault</span>
            </span>
          </button>

          {/* Search bar */}
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
            onSearch={onSearch}
            className="flex-1 min-w-0 max-w-2xl"
          />
        </div>

        {/* Row 2: Category filter pills */}
        <motion.div
          className="pb-2.5 overflow-x-auto scrollbar-none"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 w-max">
            {/* All button */}
            <button
              type="button"
              data-ocid="category.all.tab"
              onClick={() => onCategoryClick("")}
              className={cn(
                "flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                selectedCategory === ""
                  ? "bg-primary text-primary-foreground border-primary glow-violet"
                  : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground hover:border-border/80",
              )}
              aria-pressed={selectedCategory === ""}
            >
              All
            </button>

            {HEADER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                data-ocid={`category.${cat.toLowerCase()}.tab`}
                onClick={() => onCategoryClick(cat)}
                className={cn(
                  "flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary glow-violet"
                    : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground hover:border-border/80",
                )}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
