"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export function NavbarSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const inInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (e.ctrlKey && e.key.toLowerCase() === "k" && !inInput) {
        e.preventDefault();
        e.stopPropagation();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        inputRef.current?.blur();
      }
    }
    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, []);

  return (
    <div
      className={[
        "flex items-center gap-2.5 rounded-full border px-4 py-2 transition-all duration-200",
        "bg-surface text-sm w-full max-w-xl font-sans",
        isFocused
          ? "border-primary/60 shadow-[0_0_0_3px_rgba(19,220,246,0.08)]"
          : "border-border hover:border-border/80",
      ].join(" ")}
    >
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={[
          "h-3.5 w-3.5 shrink-0 transition-colors duration-200",
          isFocused ? "text-primary" : "text-text-muted",
        ].join(" ")}
      />
      <input
        ref={inputRef}
        id="event-search"
        type="search"
        placeholder="Search sessions, speakers, rooms..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1 bg-transparent text-text-main placeholder:text-text-muted outline-none text-sm font-sans"
        aria-label="Search sessions, speakers and rooms"
      />
      {!value && !isFocused && (
        <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-border px-1.5 py-0.5 text-[10px] font-sans text-text-muted select-none">
          Ctrl K
        </kbd>
      )}
    </div>
  );
}
