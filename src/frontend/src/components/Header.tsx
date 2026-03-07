import { cn } from "@/lib/utils";
import { Layers } from "lucide-react";
import { SearchBar } from "./SearchBar";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearch: (query: string) => void;
  onLogoClick: () => void;
  isScrolled?: boolean;
}

export function Header({
  searchQuery,
  onSearchChange,
  onSearch,
  onLogoClick,
  isScrolled,
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
      </div>
    </header>
  );
}
