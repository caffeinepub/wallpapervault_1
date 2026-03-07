import { Button } from "@/components/ui/button";
import type { Wallpaper } from "@/data/wallpapers";
import { cn } from "@/lib/utils";
import { ArrowLeft, Download, Monitor, Smartphone, Tag } from "lucide-react";
import { motion } from "motion/react";

interface WallpaperPreviewPageProps {
  wallpaper: Wallpaper;
  onBack: () => void;
  onDownload: (wallpaper: Wallpaper, e: React.MouseEvent) => void;
  downloadCount?: number;
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}m`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

const CATEGORY_COLORS: Record<string, string> = {
  Anime: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Nature: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Cars: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Gaming: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  AMOLED: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  Space: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  Minimal: "bg-zinc-500/20 text-zinc-300 border-zinc-500/30",
};

export function WallpaperPreviewPage({
  wallpaper,
  onBack,
  onDownload,
  downloadCount = 0,
}: WallpaperPreviewPageProps) {
  const categoryColor =
    CATEGORY_COLORS[wallpaper.category] ??
    "bg-primary/20 text-primary border-primary/30";

  return (
    <motion.div
      data-ocid="preview.page"
      className="min-h-screen bg-background flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
    >
      {/* ── Sticky top bar ── */}
      <div className="sticky top-0 z-20 px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4 bg-background/90 backdrop-blur-md border-b border-border">
        <button
          type="button"
          data-ocid="preview.back_button"
          onClick={onBack}
          className={cn(
            "flex items-center gap-1.5",
            "text-muted-foreground hover:text-foreground",
            "transition-colors duration-150 text-sm font-medium",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-0.5",
          )}
          aria-label="Back to gallery"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="h-4 w-px bg-border" aria-hidden="true" />

        <h1 className="text-foreground font-heading font-bold text-sm sm:text-base truncate flex-1">
          {wallpaper.title}
        </h1>

        <Button
          data-ocid="preview.download_button"
          onClick={(e) => onDownload(wallpaper, e)}
          size="sm"
          className={cn(
            "flex-shrink-0 gap-2 font-semibold",
            "bg-primary hover:bg-primary/85 active:bg-primary/75",
            "text-primary-foreground",
            "shadow-glow transition-all duration-150",
          )}
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Download</span>
          <span className="text-primary-foreground/70 hidden sm:inline text-xs font-normal">
            {wallpaper.resolution}
          </span>
        </Button>
      </div>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 gap-8 max-w-4xl mx-auto w-full">
        {/* ── Wallpaper image ── */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
        >
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl",
              "bg-black",
              "shadow-[0_8px_80px_rgba(0,0,0,0.7)]",
              "border border-white/8",
            )}
          >
            <img
              src={wallpaper.fullUrl}
              alt={wallpaper.title}
              className="w-full object-contain max-h-[80vh] block"
              style={{ background: "black" }}
            />

            {/* Resolution badge overlay — top right */}
            <div className="absolute top-3 right-3">
              <span
                className={cn(
                  "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-sm",
                  wallpaper.resolution === "4K"
                    ? "bg-primary/90 text-primary-foreground border-primary/50 shadow-glow"
                    : "bg-black/60 text-white/80 border-white/15",
                )}
              >
                {wallpaper.resolution}
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Info panel ── */}
        <motion.div
          className="w-full glass-panel rounded-2xl px-5 py-6 sm:px-8 sm:py-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            {/* Left: metadata */}
            <div className="flex flex-col gap-4 min-w-0 flex-1">
              {/* Title */}
              <h2 className="text-foreground font-heading font-black text-2xl sm:text-3xl leading-tight">
                {wallpaper.title}
              </h2>

              {/* Pills row */}
              <div className="flex items-center flex-wrap gap-2">
                {/* Category */}
                <span
                  className={cn(
                    "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
                    categoryColor,
                  )}
                >
                  {wallpaper.category}
                </span>

                {/* Resolution */}
                <span
                  className={cn(
                    "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border",
                    wallpaper.resolution === "4K"
                      ? "bg-primary/25 text-primary border-primary/40"
                      : "bg-white/8 text-white/60 border-white/10",
                  )}
                >
                  {wallpaper.resolution}
                </span>

                {/* Device type */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/6 text-white/60 border border-white/10">
                  {wallpaper.deviceType === "desktop" ? (
                    <Monitor className="w-3.5 h-3.5" />
                  ) : (
                    <Smartphone className="w-3.5 h-3.5" />
                  )}
                  <span className="capitalize">{wallpaper.deviceType}</span>
                </span>

                {/* Download count */}
                <span
                  data-ocid="preview.download_count"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/6 text-white/60 border border-white/10"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{formatCount(downloadCount)} downloads</span>
                </span>
              </div>

              {/* Tags */}
              {wallpaper.tags.length > 0 && (
                <div className="flex items-center flex-wrap gap-1.5">
                  <Tag className="w-3 h-3 text-muted-foreground/60 flex-shrink-0" />
                  {wallpaper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-muted-foreground text-xs px-2 py-0.5 rounded-md bg-muted/60 border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right: download CTA */}
            <div className="flex flex-col gap-3 sm:items-end flex-shrink-0">
              <Button
                data-ocid="preview.download_button"
                onClick={(e) => onDownload(wallpaper, e)}
                size="lg"
                className={cn(
                  "gap-2.5 font-semibold w-full sm:w-auto",
                  "bg-primary hover:bg-primary/85 active:bg-primary/75",
                  "text-primary-foreground",
                  "shadow-glow px-8",
                  "transition-all duration-150",
                )}
              >
                <Download className="w-4 h-4" />
                Download {wallpaper.resolution}
              </Button>
              <p className="text-muted-foreground text-xs text-center sm:text-right">
                Free to use · No attribution required
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
