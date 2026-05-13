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
                        className="
              w-full
              rounded-full
              border border-[#1B2B45]
              bg-[#07111F]
              px-5 py-3
              text-sm text-white
              placeholder:text-[#5E6B84]
              outline-none
              transition
              focus:border-[#2C4A72]
              focus:ring-1 focus:ring-[#2C4A72]
            "
                    />
                </div>

                <button
                    onClick={handleAddQuestion}
                    className="
            flex items-center gap-2
            rounded-full
            bg-[#E9EDF3]
            px-5 py-3
            text-sm font-medium text-[#111827]
            transition
            hover:bg-white
          "
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