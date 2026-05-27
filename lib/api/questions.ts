export type Question = {
  id: string;
  content: string;
  authorName: string | null;
  sessionId: string;
  createdAt: string;
  upvotes: number;
};

export async function getQuestionsBySession(
  sessionId: string
): Promise<Question[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const res = await fetch(`${baseUrl}/sessions/${sessionId}/questions`);

  if (!res.ok) {
    throw new Error(`Failed to fetch questions: ${res.status}`);
  }

  return res.json();
}