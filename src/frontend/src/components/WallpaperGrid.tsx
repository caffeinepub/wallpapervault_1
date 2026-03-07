import type { Wallpaper } from "@/data/wallpapers";
import { WallpaperCard } from "./WallpaperCard";

interface WallpaperGridProps {
  wallpapers: Wallpaper[];
  onWallpaperClick: (wallpaper: Wallpaper) => void;
  onDownload: (wallpaper: Wallpaper, e: React.MouseEvent) => void;
  indexOffset?: number;
}

export function WallpaperGrid({
  wallpapers,
  onWallpaperClick,
  onDownload,
  indexOffset = 0,
}: WallpaperGridProps) {
  if (wallpapers.length === 0) {
    return (
      <div
        data-ocid="search.empty_state"
        className="flex flex-col items-center justify-center py-24 text-center"
      >
        <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-4">
          <svg
            className="w-10 h-10 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            role="img"
            aria-label="No wallpapers"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-foreground font-semibold text-lg font-heading">
          No wallpapers found
        </h3>
        <p className="text-muted-foreground text-sm mt-1 max-w-sm">
          Try searching for something else, or browse our categories.
        </p>
      </div>
    );
  }

  return (
    /*
     * CSS columns masonry: items flow naturally into columns respecting their
     * intrinsic aspect ratio. `break-inside-avoid` on each card prevents
     * column breaks mid-card.
     */
    <div className="masonry-grid">
      {wallpapers.map((wallpaper, i) => (
        <div key={wallpaper.id} className="masonry-item">
          <WallpaperCard
            wallpaper={wallpaper}
            index={indexOffset + i}
            onClick={onWallpaperClick}
            onDownload={onDownload}
          />
        </div>
      ))}
    </div>
  );
}
