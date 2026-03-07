import { Button } from "@/components/ui/button";
import type { Wallpaper } from "@/data/wallpapers";
import { cn } from "@/lib/utils";
import { Download, Monitor, Smartphone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect } from "react";

interface LightboxProps {
  wallpaper: Wallpaper | null;
  onClose: () => void;
  onDownload: (wallpaper: Wallpaper, e: React.MouseEvent) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  Anime: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Nature: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Cars: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Gaming: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  AMOLED: "bg-slate-500/20 text-slate-300 border-slate-500/30",
};

export function Lightbox({ wallpaper, onClose, onDownload }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (wallpaper) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [wallpaper, handleKeyDown]);

  return (
    <AnimatePresence>
      {wallpaper && (
        <motion.div
          data-ocid="lightbox.dialog"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/96 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Content column */}
          <motion.div
            className="relative z-10 w-full max-w-4xl flex flex-col gap-3"
            initial={{ scale: 0.94, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 12 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Image ── */}
            <div className="relative overflow-hidden rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.9)] border border-white/8">
              <img
                src={wallpaper.fullUrl}
                alt={wallpaper.title}
                className="w-full object-contain max-h-[70vh] bg-black block"
              />

              {/* Close button — floats top-right inside the image frame */}
              <button
                type="button"
                data-ocid="lightbox.close_button"
                onClick={onClose}
                className={cn(
                  "absolute top-3 right-3 z-20",
                  "p-2 rounded-full",
                  "bg-black/50 hover:bg-black/70",
                  "text-white/80 hover:text-white",
                  "backdrop-blur-sm border border-white/10",
                  "transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                )}
                aria-label="Close lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Frosted-glass info panel ── */}
            <div
              className={cn(
                "rounded-2xl border border-white/8",
                "bg-white/[0.04] backdrop-blur-xl",
                "px-4 py-3.5 sm:px-5 sm:py-4",
                "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4",
              )}
            >
              {/* Left: title + meta */}
              <div className="flex flex-col gap-2 min-w-0">
                <h2 className="text-white text-lg sm:text-xl font-bold font-heading leading-tight truncate">
                  {wallpaper.title}
                </h2>

                <div className="flex items-center flex-wrap gap-2">
                  {/* Category pill */}
                  <span
                    className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border",
                      CATEGORY_COLORS[wallpaper.category] ??
                        "bg-primary/20 text-primary border-primary/30",
                    )}
                  >
                    {wallpaper.category}
                  </span>

                  {/* Resolution pill */}
                  <span
                    className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border",
                      wallpaper.resolution === "4K"
                        ? "bg-primary/25 text-primary border-primary/40"
                        : "bg-white/8 text-white/60 border-white/10",
                    )}
                  >
                    {wallpaper.resolution}
                  </span>

                  {/* Device type */}
                  <span className="inline-flex items-center gap-1 text-white/45 text-xs">
                    {wallpaper.deviceType === "desktop" ? (
                      <Monitor className="w-3.5 h-3.5" />
                    ) : (
                      <Smartphone className="w-3.5 h-3.5" />
                    )}
                    <span className="capitalize">{wallpaper.deviceType}</span>
                  </span>

                  {/* Tags */}
                  <span className="text-white/30 text-xs hidden sm:inline">
                    {wallpaper.tags.slice(0, 3).join(" · ")}
                  </span>
                </div>
              </div>

              {/* Right: CTA */}
              <Button
                data-ocid="lightbox.download_button"
                onClick={(e) => onDownload(wallpaper, e)}
                size="lg"
                className={cn(
                  "flex-shrink-0 gap-2.5 font-semibold",
                  "bg-primary hover:bg-primary/85 active:bg-primary/75",
                  "text-primary-foreground",
                  "shadow-glow px-6",
                  "transition-all duration-150",
                  "w-full sm:w-auto",
                )}
              >
                <Download className="w-4 h-4" />
                Download {wallpaper.resolution}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
