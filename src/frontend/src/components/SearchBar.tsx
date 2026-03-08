import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = "Search wallpapers, anime, movies…",
  className,
  autoFocus,
}: SearchBarProps) {
  const [localValue, setLocalValue] = useState(value);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync external value changes (e.g. clearing search from parent)
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(timer);
    }
  }, [autoFocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);

    // Cancel any pending debounced search
    if (debounceRef.current) clearTimeout(debounceRef.current);

    // Debounce: wait 500ms after last keystroke before running search
    // This prevents the page from hanging while user is still typing
    debounceRef.current = setTimeout(() => {
      onSearch(newValue);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Immediate search on Enter / Go button — cancel pending debounce
    if (debounceRef.current) clearTimeout(debounceRef.current);
    onSearch(localValue);
  };

  const handleClear = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setLocalValue("");
    onChange("");
    onSearch("");
    inputRef.current?.focus();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className={cn("relative flex-1", className)}>
      <div className="relative flex items-center">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10 flex-shrink-0" />
        <input
          ref={inputRef}
          data-ocid="header.search_input"
          type="text"
          inputMode="search"
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck="false"
          className={cn(
            "w-full pl-9 pr-16 py-2.5 rounded-xl",
            "bg-secondary/80 border border-border",
            "text-foreground placeholder:text-muted-foreground text-sm",
            "outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
            "transition-all duration-200",
            "backdrop-blur-sm",
            // Prevent iOS zoom on focus (font-size >= 16px)
            "text-base sm:text-sm",
          )}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {localValue && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors duration-150 touch-manipulation"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="submit"
            data-ocid="header.search_button"
            className={cn(
              "px-2.5 py-1 rounded-lg text-xs font-semibold",
              "bg-primary/20 text-primary hover:bg-primary/30",
              "transition-colors duration-150",
              "border border-primary/20",
              "touch-manipulation",
            )}
            aria-label="Search"
          >
            Go
          </button>
        </div>
      </div>
    </form>
  );
}
