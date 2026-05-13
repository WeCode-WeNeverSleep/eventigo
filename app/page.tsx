import { ModeToggle } from "@/components/theme-toggle";
import QuestionForm from "@/components/question-component/QuestionForm";
import SpeakerComponent from "@/components/SpeakerComponent/SpeakerComponent";

export default function Home() {
  return (
    <>
      <ModeToggle />
        <div className="flex flex-col md:flex-row gap-6">
            <QuestionForm/>
            <SpeakerComponent/>
        </div>
    </>
  );
}
