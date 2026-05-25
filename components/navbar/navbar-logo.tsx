import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 select-none group"
      aria-label="EventiGO home"
    >
      {/* src: /path/to/eventigo-logo */}
      <img alt="EventiGO" className="h-8 w-8 rounded-full" />

      <div className="flex flex-col leading-none">
        <span className="font-title text-base font-bold tracking-wide text-text-main transition-colors duration-200 group-hover:text-primary">
          EventiGO
        </span>
        <span className="text-[10px] font-sans text-text-muted tracking-widest uppercase">
          v.2026
        </span>
      </div>
    </Link>
  );
}
