import { Session } from "@/types/sessions";

export function formatTime(date: Date): string {
    return date.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

export function toDateKey(date: Date): string {
    return date.toISOString().slice(0, 10);
}

export function formatDayLabel(dateKey: string): string {
    return new Date(dateKey).toLocaleDateString("fr-FR", {
        weekday: "short",
        day: "numeric",
        month: "short",
    });
}

export function groupSessionsByDay(
    sessions: Session[]
): Record<string, Session[]> {
    const grouped: Record<string, Session[]> = {};

    for (const session of sessions) {
        const key = toDateKey(session.startTime);
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(session);
    }

    for (const key in grouped) {
        grouped[key].sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
    }

    return grouped;
}