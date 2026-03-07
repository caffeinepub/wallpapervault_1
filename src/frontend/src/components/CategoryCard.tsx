import type { Category } from "@/data/wallpapers";
import { WALLPAPERS, getWallpapersByCategory } from "@/data/wallpapers";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface CategoryCardProps {
  category: Category;
  onClick: (name: string) => void;
}

const CATEGORY_ICONS: Record<string, string> = {
  Anime: "⛩️",
  Nature: "🌿",
  Cars: "🏎️",
  Gaming: "🎮",
  AMOLED: "🌑",
};

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  const coverWallpaper = WALLPAPERS.find(
    (w) => w.id === category.coverWallpaperId,
  );
  const count = getWallpapersByCategory(category.name).length;

  const ocidName = category.name.toLowerCase();

  return (
    <motion.button
      type="button"
      data-ocid={`category.${ocidName}.card`}
      className={cn(
        "relative overflow-hidden rounded-2xl cursor-pointer w-full text-left",
        "border border-border",
        "transition-all duration-300",
        "hover:shadow-card-hover hover:-translate-y-1.5",
        "group h-40 sm:h-48",
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(category.name)}
      aria-label={`Browse ${category.name} wallpapers`}
    >
      {/* Background image */}
      {coverWallpaper && (
        <img
          src={coverWallpaper.imageUrl}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}

      {/* Gradient overlay */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-br",
          category.color,
          "group-hover:opacity-90 transition-opacity duration-300",
        )}
      />

      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="flex justify-between items-start">
          <span className="text-2xl">{CATEGORY_ICONS[category.name]}</span>
          <span className="px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm text-white/80 text-xs font-medium border border-white/10">
            {count} walls
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-white font-bold text-lg leading-tight font-heading">
              {category.name}
            </h3>
            <p className="text-white/60 text-xs mt-0.5">
              {category.description}
            </p>
          </div>
          <div className="flex-shrink-0 p-1.5 rounded-full bg-white/10 text-white/70 group-hover:bg-white/20 transition-colors duration-200">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
