# WallpaperVault

## Current State

WallpaperVault is a full-stack wallpaper browsing and download site with:
- 7 categories: Anime, Nature, Cars, Gaming, AMOLED, Space, Minimal
- ~2500+ wallpapers across all categories (including 2000 anime wallpapers from animeWallpapers.ts)
- Wallpaper type: `{ id, title, category, resolution, deviceType, imageUrl, fullUrl, tags, isTrending }`
- Category type: `{ name, color, accentColor, coverWallpaperId, description }`
- WALLPAPERS array and CATEGORIES array exported from `data/wallpapers.ts`
- `getWallpapersByCategory`, `getTrendingWallpapers`, `searchWallpapers` helper functions
- CategoryPage component has an icon map (`CATEGORY_ICONS`) for rendering emoji per category

## Requested Changes (Diff)

### Add
- New `movieWallpapers.ts` data file with 1500 movie wallpapers (HD and 4K) covering 9 franchises: Avengers, Spider-Man, Batman, Joker, Avatar, John Wick, Fast & Furious, Transformers, Star Wars (~167 wallpapers per franchise)
- "Movies" as a new category in the `CATEGORIES` array with appropriate color/accent
- "Movies" added to the `Wallpaper.category` union type

### Modify
- `wallpapers.ts`: import and spread `MOVIE_WALLPAPERS` into the `WALLPAPERS` array; add Movies to CATEGORIES
- `App.tsx` `CATEGORY_ICONS` map: add `Movies: "🎬"` entry
- Footer wallpaper/category count will automatically reflect new totals

### Remove
- Nothing removed

## Implementation Plan

1. Create `src/frontend/src/data/movieWallpapers.ts` with 1500 `Wallpaper` objects
   - IDs starting from 10000 to avoid collisions
   - 9 franchises × ~167 entries, mix of HD and 4K, desktop and mobile
   - Each entry has relevant tags (franchise name, character names, etc.)
   - Use Unsplash image URLs with relevant search queries per franchise
   - ~5 entries per franchise set as `isTrending: true`

2. Update `src/frontend/src/data/wallpapers.ts`
   - Add "Movies" to the `Wallpaper.category` union type
   - Import `MOVIE_WALLPAPERS` from `./movieWallpapers`
   - Spread `MOVIE_WALLPAPERS` into the `WALLPAPERS` array
   - Add Movies category object to `CATEGORIES` array with cinematic red/gold gradient

3. Update `src/frontend/src/App.tsx`
   - Add `Movies: "🎬"` to the `CATEGORY_ICONS` record in `CategoryPage`
