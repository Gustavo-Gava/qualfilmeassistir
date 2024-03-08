import { IoEllipse, IoEllipsisHorizontal } from "react-icons/io5";
import { QuizOption } from "./QuizOption";
import { useState } from "react";
import { Button } from "../ui/Button";

const totalQuestionsQuantity = 5;
const actualQuestionIndex = 0;

const questions = [
  {
    text: "Como você está se sentindo hoje?",
    answers: [
      {
        id: "1",
        text: "😄 Feliz",
      },
      {
        id: "2",
        text: "🙂 Neutro",
      },
      {
        id: "3",
        text: "😓 Triste",
      },
    ],
  },
];

export const Quiz = () => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<string>("");

  return (
    <div className="mt-4 flex w-full flex-col gap-2 rounded bg-[#2c2c2c] p-6 text-white shadow-lg md:w-[500px]">
      <header className="flex w-full items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-bold">
          Question {actualQuestionIndex + 1} of {totalQuestionsQuantity}{" "}
          <IoEllipse className="inline" size={6} /> Movie
        </h3>

        <button aria-label="question settings" title="Settings">
          <IoEllipsisHorizontal size={24} />
        </button>
      </header>

      <main>
        <h3 className="mb-2">{questions[actualQuestionIndex]?.text ?? ""}</h3>

        <div className="flex flex-col gap-2">
          {questions[actualQuestionIndex]?.answers.map((answer) => (
            <QuizOption
              key={answer.id}
              onClick={() => setSelectedAnswerId(answer.id)}
              isSelected={selectedAnswerId === answer.id}
            >
              {answer.text}
            </QuizOption>
          ))}
        </div>
      </main>

      <div className="mt-4 flex justify-end">
        <Button
          // onClick={() => handleNextQuestion(selectedAnswerId)}
          disabled={!selectedAnswerId}
        >
          {actualQuestionIndex + 1 === totalQuestionsQuantity
            ? "Finalizar quiz"
            : "Próxima questão"}
        </Button>
      </div>
    </div>
  );
};
