import { notFound } from "next/navigation";
import { getEventById, getLiveSession } from "@/lib/api/event";
import { ScheduleView } from "@/components/schedule/ScheduleView";
import { EmptyState } from "@/components/schedule/EmptyState";

interface PageProps {
    params: { eventId: string };
}

export default async function SchedulePage({ params }: PageProps) {
    const { eventId } = params;

    let event;
    try {
        event = await getEventById(eventId);
    } catch {
        notFound();
    }

    const sessions = event.sessions ?? [];
    const liveSession = getLiveSession(event);

    const dateRange = `${event.startDate.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "short",
        year: "numeric",
    })} – ${event.endDate.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "short",
        year: "numeric",
    })}`;

    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                background: "linear-gradient(135deg, #0b1120 0%, #0d1a2e 60%, #0a1628 100%)",
                color: "#fff",
                fontFamily: "'Inter', system-ui, sans-serif",
            }}
        >
            <header className="flex items-center justify-between px-8 py-5 border-b border-white/[0.05]">
                <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold tracking-widest px-2 py-1 rounded bg-[rgba(15,241,206,0.12)] text-[#0ff1ce]">
            {event.title.toUpperCase().slice(0, 14)}
          </span>
                    {liveSession && (
                        <span className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-widest px-2 py-1 rounded bg-[#e5294a] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              EN DIRECT
            </span>
                    )}
                </div>
                <nav className="flex gap-6">
                    {["PROGRAMME", "SPEAKERS", "LIEU", "INFO"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-[10px] tracking-widest no-underline transition-colors"
                            style={{
                                color: item === "PROGRAMME" ? "#0ff1ce" : "rgba(255,255,255,0.35)",
                                fontWeight: item === "PROGRAMME" ? 600 : 400,
                            }}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </header>

            <main className="max-w-2xl mx-auto w-full px-6 py-8 flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-white mb-1">
                            {event.title}
                        </h1>
                        <div className="flex items-center gap-3 flex-wrap">
                            {event.location && (
                                <span className="flex items-center gap-1 text-xs text-white/35">
                  <PinIcon />
                                    {event.location}
                </span>
                            )}
                            <span className="flex items-center gap-1 text-xs text-white/25">
                <CalendarIcon />
                                {dateRange}
              </span>
                        </div>
                    </div>

                    <div className="flex gap-5 shrink-0">
                        {[
                            {
                                value: new Set(sessions.flatMap((s) => s.speakers.map((sp) => sp.id))).size,
                                label: "SPEAKERS",
                            },
                            { value: sessions.length, label: "SESSIONS" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-right">
                                <div className="text-2xl font-bold tabular-nums tracking-tight text-white">
                                    {stat.value}
                                </div>
                                <div className="text-[9px] tracking-widest text-white/30 mt-0.5">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {sessions.length === 0 ? (
                    <EmptyState
                        icon="calendar"
                        title="Programme non disponible"
                        message="Les sessions de cet événement n'ont pas encore été publiées."
                    />
                ) : (
                    <ScheduleView sessions={sessions} />
                )}
            </main>
        </div>
    );
}

function PinIcon() {
    return (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function CalendarIcon() {
    return (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
    );
}

export async function generateMetadata({ params }: PageProps) {
    try {
        const event = await getEventById(params.eventId);
        return { title: `${event.title} — Programme` };
    } catch {
        return { title: "Programme" };
    }
}