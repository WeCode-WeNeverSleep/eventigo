import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faTowerBroadcast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SessionHeroCard() {
  return (
    <section className="min-h-120 relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-primary/50 via-background/70 to-primary/30 p-15 md:p-15 shadow-2xl">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="flex flex-col min-h-100 justify-between relative z-10">
        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-text-muted">
          <span className="rounded-full bg-live px-3 py-1 font-medium text-text-main">
            Live Now
          </span>

          <span>S-024</span>
          <span>Track A</span>
          <span>Frontend</span>
        </div>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          Building Modern SaaS with React & Tailwind
        </h1>

        <p className="max-w-3xl font-title text-md text-text-muted leading-7 md:text-md">
          A working tour of the patterns we use to ship multi-tenant SaaS
          products with React 19 and Tailwind v4. We'll cover token-driven
          theming, component composition, server functions for data, and the
          deployment story that ties it together. Bring questions — the second
          half is a live Q&A.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-text-muted">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faClock} className="text-primary" />
            09:00 - 12:00
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot} className="text-primary" />
            Main Room
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faTowerBroadcast} className="text-primary" />
            Streaming on stage A
          </div>
        </div>
      </div>
    </section>
  );
}
