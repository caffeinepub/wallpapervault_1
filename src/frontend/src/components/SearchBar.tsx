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
  placeholder = "Search wallpapers, categories, tags…",
  className,
  autoFocus,
}: SearchBarProps) {
  const [localValue, setLocalValue] = useState(value);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [autoFocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch(newValue);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    onSearch(localValue);
  };

  const handleClear = () => {
    setLocalValue("");
    onChange("");
    onSearch("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative flex-1", className)}>
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
        <input
          ref={inputRef}
          data-ocid="header.search_input"
          type="text"
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck="false"
          className={cn(
            "w-full pl-10 pr-20 py-2.5 rounded-xl",
            "bg-secondary/80 border border-border",
            "text-foreground placeholder:text-muted-foreground text-sm",
            "outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
            "transition-all duration-200",
            "backdrop-blur-sm",
          )}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {localValue && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors duration-150"
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
