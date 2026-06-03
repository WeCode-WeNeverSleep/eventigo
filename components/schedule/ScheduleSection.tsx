"use client";

import { useMemo, useState } from "react";
import { Calendar } from "lucide-react";
import type { Session } from "@/types/sessions";
import { ScheduleEventCard } from "@/components/schedule/ScheduleEventCard";

interface ScheduleSectionProps {
  groupedSessions: Record<string, Session[]>;
}

export function ScheduleSection({
  groupedSessions,
}: ScheduleSectionProps) {
  const dates = useMemo(() => Object.keys(groupedSessions), [groupedSessions]);

  const [selectedDate, setSelectedDate] = useState<string>(
    dates[0] || ""
  );

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-4xl font-bold">
        Schedule
      </h2>

      <div className="grid gap-8 lg:grid-cols-[250px_1fr]">

        <div className="space-y-3">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`w-full rounded-xl border p-4 text-left transition
                ${
                  selectedDate === date
                    ? "border-primary bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }
              `}
            >
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                })}
              </div>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {groupedSessions[selectedDate]?.map((session) => (
            <ScheduleEventCard
              key={session.id}
              session={session}
            />
          ))}
        </div>
      </div>
    </section>
  );
}