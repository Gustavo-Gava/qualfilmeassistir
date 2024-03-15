import { type Dispatch, type SetStateAction } from "react";
import { QuizOption } from "./QuizOption";

interface QuizOptionsWrapperProps {
  question?: Question;

  selectedAnswers: Answer[];
  setSelectedAnswers: Dispatch<SetStateAction<Answer[]>>;
}

interface Question {
  text: string;
  allowMultipleChoices: boolean;

  answers: Answer[];
}

interface Answer {
  id: string;
  label: string;
  value: string;
}

export const QuizOptionsWrapper = ({
  question,
  selectedAnswers,
  setSelectedAnswers,
}: QuizOptionsWrapperProps) => {
  if (!question) return <></>;

  const getIfIsSelected = (answer: Answer) => {
    return !!selectedAnswers.find(
      (selectedAnswer) => answer.value === selectedAnswer.value,
    );
  };

  const handleSelectAnswer = (answer: Answer) => {
    const answerIsSelected = selectedAnswers.find(
      (answerSelected) => answerSelected.value === answer.value,
    );

    if (answerIsSelected) {
      removeAnswer(answer);

      return;
    }

    addAnswer(answer);
  };

  const addAnswer = (answer: Answer) => {
    if (question.allowMultipleChoices) {
      setSelectedAnswers((prevValue) => [...prevValue, answer]);
      return;
    }

    setSelectedAnswers([answer]);
  };

  const removeAnswer = (answer: Answer) => {
    const newSelectedAnswers = selectedAnswers.filter(
      (selectedAnswer) => selectedAnswer.value !== answer.value,
    );
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <div className="flex max-h-80 flex-col gap-2 overflow-y-auto">
      {question.answers.map((answer) => (
        <QuizOption
          key={answer.value}
          onClick={() => handleSelectAnswer(answer)}
          isSelected={getIfIsSelected(answer)}
        >
          {answer.label}
        </QuizOption>
      ))}
    </div>
  );
};
