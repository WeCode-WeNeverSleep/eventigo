"use client";

import { useState } from "react";
import QuestionTypeBar from "./QuestionTypeBar";

type Question = {
    id: string;
    userName: string;
    content: string;
    createdAt: string;
};

const formatTimeAgo = (dateString: string) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";

    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diff < 10) return "now";
    if (diff < 60) return ` ${diff} sec ago`;
    if (diff < 3600) return ` ${Math.floor(diff / 60)} min`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} h`;
    return ` ${Math.floor(diff / 86400)} j`;
};

export default function QuestionForm() {
    const [question, setQuestion] = useState("");
    const [questions, setQuestions] = useState<Question[]>([]);

    const handleAddQuestion = () => {
        if (question.trim() === "") return;

        const newQuestion: Question = {
            id: crypto.randomUUID(),
            userName: "Anonymous",
            content: question,
            createdAt: new Date().toISOString(),
        };

        setQuestions([newQuestion, ...questions]);
        setQuestion("");
    };

    const handleDeleteQuestion = (id: string) => {
        setQuestions(questions.filter((q) => q.id !== id));
    };

    return (
        <div
            className="
        w-full
        max-w-3xl
        rounded-[28px]
        border border-[#132238]
        bg-[#07101D]
        p-8
        shadow-[0_0_40px_rgba(0,0,0,0.35)]
      "
        >
            {/* HEADER */}
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#00C2FF]">
                        Live Q&A
                    </p>

                    <h1 className="mt-2 text-3xl font-semibold text-white">
                        Ask the speaker
                    </h1>

                    <p className="mt-2 text-sm text-[#718096]">
                        Most-liked questions float to the top.
                    </p>
                </div>

                <div className="pt-2 text-[11px] uppercase tracking-[0.35em] text-[#718096]">
                    {questions.length} Questions
                </div>
            </div>

            {/* INPUT */}
            <div className="mt-8">
                <QuestionTypeBar
                    question={question}
                    setQuestion={setQuestion}
                    handleAddQuestion={handleAddQuestion}
                />
            </div>

            {/* LIST */}
            <div className="mt-8 space-y-4">
                {questions.map((question) => (
                    <div
                        key={question.id}
                        className="
              flex items-start justify-between
              rounded-3xl
              border border-[#122033]
              bg-[#040B16]
              p-6
              gap-4
            "
                    >
                        {/* LEFT */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                                <p className="text-white font-medium">
                                    {question.userName}
                                </p>

                                <span className="text-xs text-gray-400">
                  {formatTimeAgo(question.createdAt)}
                </span>
                            </div>

                            <p className="text-gray-200">
                                {question.content}
                            </p>
                        </div>

                        {/* DELETE */}
                        <button
                            onClick={() => handleDeleteQuestion(question.id)}
                            className="
                rounded-full
                border border-red-500/30
                bg-red-500/10
                px-4 py-2
                text-sm text-red-400
                transition
                hover:bg-red-500/20
              "
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}