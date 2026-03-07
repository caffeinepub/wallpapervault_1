# WallpaperVault

## Current State
- Movie section has 1,500 wallpapers across 9 franchises: Avengers, Spider-Man, Batman, Joker, Avatar, John Wick, Fast & Furious, Transformers, Star Wars.
- No Marvel character-specific wallpapers (Iron Man, Spider-Man individual characters).
- No DC character-specific wallpapers (Superman, Wonder Woman, Flash, etc.).
- No Bollywood movie/actor wallpapers.
- No South Indian (Tamil/Telugu) movie/actor wallpapers.
- All data lives in `src/frontend/src/data/movieWallpapers.ts` with IDs starting at 20000.

## Requested Changes (Diff)

### Add
- **Marvel Universe characters**: Iron Man, Spider-Man, Thor, Captain America, Black Panther, Doctor Strange, Hulk, Hawkeye, Black Widow, Scarlet Witch, Ant-Man, Falcon, War Machine, Guardians of the Galaxy, Deadpool, Wolverine, X-Men — 20+ wallpapers each
- **DC Universe characters**: Batman, Superman, Wonder Woman, The Flash, Aquaman, Green Lantern, Cyborg, Joker, Harley Quinn, Lex Luthor, Shazam, Black Adam, Blue Beetle — 15+ wallpapers each
- **Bollywood movies & actors**: Shah Rukh Khan, Salman Khan, Aamir Khan, Hrithik Roshan, Ranveer Singh, Deepika Padukone, Priyanka Chopra, Alia Bhatt — plus iconic movies: Dilwale, Baahubali, RRR, KGF, Pathaan, Jawan, Animal, Dunki — 15+ each
- **South Indian movies & actors**: Rajinikanth, Kamal Haasan, Vijay, Allu Arjun, Ram Charan, Prabhas, Yash, Jr NTR, Nayanthara, Rashmika — plus movies: Pushpa, KGF 1&2, RRR, Vikram, Beast, Varisu, Leo — 15+ each
- Total new movie wallpapers: ~1000 (IDs 21500–22499 to avoid collisions)

### Modify
- `movieWallpapers.ts`: add new franchise/character definitions and append to exported `MOVIE_WALLPAPERS` array
- Tags must include character name, franchise, "movie", "movies", "4k", "hd", bollywood/south-specific tags

### Remove
- Nothing removed

## Implementation Plan
1. Add image pools for Marvel characters, DC characters, Bollywood, South Indian in `movieWallpapers.ts`
2. Define new franchise/character definitions array (MARVEL_CHARACTERS, DC_CHARACTERS, BOLLYWOOD, SOUTH_INDIAN)
3. Build `buildExtendedMovieWallpapers()` function generating ~1000 wallpapers with IDs 21500+
4. Export merged `MOVIE_WALLPAPERS` combining existing 1500 + new ~1000
5. Ensure all tags are searchable: character names, movie names, "bollywood", "south", "tamil", "telugu", "marvel", "dc", "4k", "hd"
