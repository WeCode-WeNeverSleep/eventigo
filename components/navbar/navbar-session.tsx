"use client";

import { NavbarSearch } from "./navbar-search";
import { ModeToggle } from "@/components/theme-toggle";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSyncExternalStore } from "react";

interface NavbarSessionProps {
  eventStartDate?: string;
}

function getDateLabel() {
  return new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function getDayNumber(eventStartDate: string): number {
  const start = new Date(eventStartDate);
  start.setHours(0, 0, 0, 0);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
}

const noop = () => () => { };

export function NavbarSession({ eventStartDate }: NavbarSessionProps) {
  const dateLabel = useSyncExternalStore(noop, getDateLabel, () => "");
  const dayNumber = useSyncExternalStore(
    noop,
    () => (eventStartDate ? getDayNumber(eventStartDate) : null),
    () => null
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-14 items-center gap-4 px-4 sm:px-6">
        <div className="flex flex-1 items-center">
          <NavbarSearch />
        </div>

        <div className="flex items-center gap-2">
          {dateLabel && (
            <div
              className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-sans text-text-muted"
              aria-label={dayNumber ? `Day ${dayNumber} - ${dateLabel}` : dateLabel}
            >
              <FontAwesomeIcon icon={faCalendarDays} className="h-3 w-3" />
              <span>
                {dayNumber !== null ? `Day ${dayNumber} · ` : ""}
                {dateLabel}
              </span>
            </div>
          )}

          <ModeToggle />

          <Link
            href="/dashboard/login"
            id="admin-login-btn"
            className="inline-flex items-center rounded-full bg-primary px-4 py-3 text-sm font-semibold font-sans leading-none text-primary-foreground shadow-[0_0_16px_rgba(19,220,246,0.35)] transition-all duration-300 hover:shadow-[0_0_24px_rgba(19,220,246,0.6)] hover:brightness-110 active:scale-95"
          >
            Admin login
          </Link>
        </div>
      </div>
    </header>
  );
}
