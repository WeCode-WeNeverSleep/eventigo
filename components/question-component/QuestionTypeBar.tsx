type QuestionTypeBarProps = {
  question: string;
  setQuestion: (value: string) => void;
  handleAddQuestion: () => void;
};

export default function QuestionTypeBar({
  question,
  setQuestion,
  handleAddQuestion,
}: QuestionTypeBarProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question..."
            className=" w-full rounded-full border border-border bg-background
            px-5 py-3 text-sm text-text-main placeholder:text-text-muted outline-none transition focus:border-primary/60 focus:ring-1 focus:ring-primary duration-150 "
          />
        </div>

        <button
          onClick={handleAddQuestion}
          className=" flex items-center gap-2 rounded-full bg-[#E9EDF3] px-5 py-3 text-sm font-medium text-[#111827] transition hover:border hover:border-primary duration-150 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
          Send
        </button>
      </div>
    </div>
  );
}

