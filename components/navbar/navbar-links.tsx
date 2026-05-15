"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Live now", href: "/live" },
] as const;

export function NavbarLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-1">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <li key={href}>
              <Link
                href={href}
                className={[
                  "relative px-3 py-1.5 text-sm font-sans transition-colors duration-200",
                  isActive
                    ? "text-text-main"
                    : "text-text-muted hover:text-text-main",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
