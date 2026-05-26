export interface BackendSession {
  id: string;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  eventId: string;
  roomId: string;
  room: { id: string; name: string };
}

export interface BackendSpeaker {
  id: string;
  fullName: string;
  avatarUrl: string | null;
  bio: string;
  links: string[];
  sessions: BackendSession[];
}

export async function fetchSpeakersWithSessions(): Promise<BackendSpeaker[]> {
  const res = await fetch("/api/speakers", {
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch speakers data: ${res.statusText}`);
  }

  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error(
      "Expected JSON response from backend but received HTML template configuration.",
    );
  }

  return res.json();
}
