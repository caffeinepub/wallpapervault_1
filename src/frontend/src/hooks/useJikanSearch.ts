import type { Wallpaper } from "@/data/wallpapers";
import { useCallback, useRef, useState } from "react";

interface JikanAnime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      large_image_url: string;
      image_url: string;
    };
  };
  genres?: { name: string }[];
  score?: number;
}

interface UseJikanSearchResult {
  jikanResults: Wallpaper[];
  isLoading: boolean;
  error: string | null;
  search: (query: string) => void;
  clear: () => void;
}

function jikanAnimeToWallpaper(anime: JikanAnime): Wallpaper {
  const tags = [
    anime.title.toLowerCase(),
    "anime",
    "myanimelist",
    ...(anime.genres?.map((g) => g.name.toLowerCase()) ?? []),
  ];

  return {
    id: 8000000 + anime.mal_id,
    title: anime.title,
    category: "Anime",
    resolution: "HD",
    deviceType: "desktop",
    imageUrl: anime.images.jpg.large_image_url || anime.images.jpg.image_url,
    fullUrl: anime.images.jpg.large_image_url || anime.images.jpg.image_url,
    tags,
    isTrending: (anime.score ?? 0) >= 8,
  };
}

export function useJikanSearch(): UseJikanSearchResult {
  const [jikanResults, setJikanResults] = useState<Wallpaper[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const lastQueryRef = useRef<string>("");

  const search = useCallback(async (query: string) => {
    const trimmed = query.trim();

    if (!trimmed) {
      setJikanResults([]);
      setIsLoading(false);
      setError(null);
      return;
    }

    // Debounce: skip if same query
    if (trimmed === lastQueryRef.current) return;
    lastQueryRef.current = trimmed;

    // Cancel any in-flight request
    if (abortRef.current) {
      abortRef.current.abort();
    }
    const controller = new AbortController();
    abortRef.current = controller;

    setIsLoading(true);
    setError(null);

    try {
      const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(trimmed)}&limit=24&sfw=true`;
      const res = await fetch(url, { signal: controller.signal });

      if (!res.ok) {
        throw new Error(`Jikan API error: ${res.status}`);
      }

      const data = await res.json();

      if (!data.data || !Array.isArray(data.data)) {
        setJikanResults([]);
        return;
      }

      const wallpapers = (data.data as JikanAnime[])
        .filter(
          (a) => a.images?.jpg?.large_image_url || a.images?.jpg?.image_url,
        )
        .map(jikanAnimeToWallpaper);

      setJikanResults(wallpapers);
    } catch (err) {
      if ((err as Error).name === "AbortError") return; // Cancelled, ignore
      console.error("Jikan fetch failed:", err);
      setError("Could not load MyAnimeList results.");
      setJikanResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clear = useCallback(() => {
    if (abortRef.current) abortRef.current.abort();
    lastQueryRef.current = "";
    setJikanResults([]);
    setIsLoading(false);
    setError(null);
  }, []);

  return { jikanResults, isLoading, error, search, clear };
}
