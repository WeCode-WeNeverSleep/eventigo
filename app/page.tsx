import { ModeToggle } from "@/components/theme-toggle";
import QuestionForm from "@/components/question-component/QuestionForm";
export default function Home() {
  return (
    <>
      <ModeToggle />
        <QuestionForm/>
    </>
  );
}
