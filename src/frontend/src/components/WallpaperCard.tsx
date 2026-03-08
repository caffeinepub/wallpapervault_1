import { Badge } from "@/components/ui/badge";
import type { Wallpaper } from "@/data/wallpapers";
import { cn } from "@/lib/utils";
import { Download, Flame, LayoutGrid, Monitor, Smartphone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface WallpaperCardProps {
  wallpaper: Wallpaper;
  index: number;
  onClick: (wallpaper: Wallpaper) => void;
  onDownload: (wallpaper: Wallpaper, e: React.MouseEvent) => void;
  downloadCount?: number;
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}m`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export function WallpaperCard({
  wallpaper,
  index,
  onClick,
  onDownload,
  downloadCount = 0,
}: WallpaperCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const markerIndex = index + 1;
  const isMobile = wallpaper.deviceType === "mobile";

  return (
    /*
     * Outer div: establishes the intrinsic aspect-ratio so the CSS-columns
     * masonry can measure the card height before painting.
     * padding-top trick: 56.25% = 16:9, 177.78% = 9:16
     */
    <motion.button
      type="button"
      data-ocid={`wallpaper.item.${markerIndex}`}
      className={cn(
        "group relative overflow-hidden rounded-xl cursor-pointer w-full block",
        "bg-card border border-border",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      )}
      style={{ paddingTop: isMobile ? "177.78%" : "56.25%" }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.25,
        delay: Math.min(index * 0.015, 0.15),
        ease: "easeOut",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClick(wallpaper)}
      aria-label={`View ${wallpaper.title} wallpaper`}
    >
      {/* Skeleton shimmer — shown until image loads */}
      {!imgLoaded && !imgError && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-secondary to-muted bg-[length:200%_100%] animate-shimmer" />
      )}

      {/* Error fallback — shown when image fails to load */}
      {imgError && (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col items-center justify-center gap-2 p-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <LayoutGrid className="w-5 h-5 text-white/30" />
          </div>
          <p className="text-white/40 text-[10px] text-center line-clamp-2 font-medium">
            {wallpaper.title}
          </p>
        </div>
      )}

      {/* Thumbnail image */}
      <img
        src={wallpaper.imageUrl}
        alt={wallpaper.title}
        className={cn(
          "absolute inset-0 w-full h-full object-cover",
          "transition-transform duration-500 ease-out",
          isHovered ? "scale-[1.06]" : "scale-100",
          imgLoaded && !imgError ? "opacity-100" : "opacity-0",
        )}
        loading="lazy"
        onLoad={() => setImgLoaded(true)}
        onError={() => {
          setImgError(true);
          setImgLoaded(true);
        }}
      />

      {/* Permanent soft vignette at bottom so badges are always readable */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      {/* Download count badge — bottom left, always visible */}
      <div
        data-ocid={`wallpaper.download_count.${markerIndex}`}
        className="absolute bottom-2 left-2 z-10 flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/55 text-white/80 backdrop-blur-sm pointer-events-none select-none"
      >
        <Download className="w-2.5 h-2.5 opacity-70" />
        {formatCount(downloadCount)}
      </div>

      {/* Trending badge — top left */}
      {wallpaper.isTrending && (
        <div className="absolute top-2 left-2 z-10">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-500/90 text-white backdrop-blur-sm shadow-sm">
            <Flame className="w-2.5 h-2.5" />
            Hot
          </span>
        </div>
      )}

      {/* Resolution badge — top right */}
      <div className="absolute top-2 right-2 z-10">
        <Badge
          className={cn(
            "text-[10px] font-bold px-1.5 py-0 h-5 border-0 backdrop-blur-sm shadow-sm",
            wallpaper.resolution === "4K"
              ? "bg-primary/90 text-primary-foreground"
              : "bg-black/60 text-white/80",
          )}
        >
          {wallpaper.resolution}
        </Badge>
      </div>

      {/* Hover overlay — slides up from bottom */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-x-0 bottom-0 z-20 px-3 pt-10 pb-3"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.92) 55%, transparent 100%)",
            }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <div className="flex items-end justify-between gap-2">
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm leading-tight line-clamp-1 font-heading">
                  {wallpaper.title}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  {isMobile ? (
                    <Smartphone className="w-3 h-3 text-white/50 flex-shrink-0" />
                  ) : (
                    <Monitor className="w-3 h-3 text-white/50 flex-shrink-0" />
                  )}
                  <span className="text-white/50 text-[11px] capitalize">
                    {wallpaper.deviceType}
                  </span>
                </div>
              </div>

              {/* Download button */}
              <motion.button
                type="button"
                data-ocid={`wallpaper.download_button.${markerIndex}`}
                className={cn(
                  "flex-shrink-0 p-2 rounded-lg",
                  "bg-primary text-primary-foreground",
                  "hover:bg-primary/80 active:scale-95",
                  "transition-colors duration-150",
                  "shadow-glow-sm",
                )}
                onClick={(e) => onDownload(wallpaper, e)}
                aria-label={`Download ${wallpaper.title}`}
                whileTap={{ scale: 0.88 }}
              >
                <Download className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
