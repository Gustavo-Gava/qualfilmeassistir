import { IoEllipsisHorizontal } from "react-icons/io5";
import { useState } from "react";
import { Button } from "../ui/Button";
import { useQuizContext } from "~/context/QuizProvider";
import { QuizOptionsWrapper } from "./QuizOptionsWrapper";
import { genresMappedArray } from "~/utils/genresMapped";
import { categoriesMappedArray } from "~/utils/moviesAttributtesMapped";

interface Question {
  text: string;
  type: string;
  allowMultipleChoices: boolean;

  answers: Answer[];
}

interface Answer {
  id: string;
  label: string;
  value: string;
}

const questions = [
  {
    text: "Como você está se sentindo hoje?",
    type: "mood",

    answers: [
      {
        id: "1",
        label: "😄 Feliz",
        value: "HAPPY",
      },
      {
        id: "2",
        label: "🙂 Neutro",
        value: "NEUTRAL",
      },
      {
        id: "3",
        label: "😓 Triste",
        value: "SAD",
      },
    ],
  },
  {
    text: "O que combina com você hoje?",
    type: "",
    answers: [
      {
        id: "4",
        label: "Assistindo um filme sozinho",
        value: "MOVIE_ALONE",
      },
      {
        id: "5",
        label: "Assistindo filme com amigos",
        value: "MOVIE_WITH_FRIENDS",
      },
      {
        id: "6",
        label: "Assistindo filme com namorado/namorada",
        value: "MOVIE_WITH_GIRLFRIEND",
      },
      {
        id: "7",
        label: "Assistindo filme com família",
        value: "MOVIE_WITH_FAMILY",
      },
      {
        id: "8",
        label: "Outros",
        value: "OTHER",
      },
    ],
  },
  {
    text: "Escolha o gênero que você se interessa",
    subtext: "Múltiplas escolhas são permitidas",
    allowMultipleChoices: true,
    type: "genres",
    answers: genresMappedArray,
  },
  {
    text: "Até quanto tempo de lançamento?",
    allowMultipleChoices: false,
    type: "MOVIE_DATE",
    answers: [
      {
        id: "16",
        label: "Até 3 anos do lançamento",
        value: "3",
      },
      {
        id: "17",
        label: "Até 5 anos do lançamento",
        value: "5",
      },
      {
        id: "18",
        label: "Até 10 anos do lançamento",
        value: "10",
      },
      {
        id: "19",
        label: "Até 20 anos do lançamento",
        value: "20",
      },
      {
        id: "20",
        label: "Não importa",
        value: "ALL",
      },
    ],
  },
  {
    text: "Qual faixa etária?",
    allowMultipleChoices: false,
    type: "AGE_RANGE",

    answers: [
      {
        id: "432",
        label: "Todas faixas etárias",
        value: "ALL_AGE_RANGE",
      },
      {
        id: "4332",
        label: "Somente L",
        value: "L",
      },
      {
        id: "4352",
        label: "Até +12",
        value: "PLUS_12",
      },
      {
        id: "4352",
        label: "Até +14",
        value: "PLUS_14",
      },
      {
        id: "4352",
        label: "Até +16",
        value: "PLUS_16",
      },
    ],
  },
  {
    text: "Selecione outras categorias que você deseja",
    allowMultipleChoices: true,
    type: "MOVIE_TOPICS",

    answers: categoriesMappedArray,
  },
  {
    text: "Disponível em quais plataformas de streaming?",
    allowMultipleChoices: true,
    type: "STREAMING_PLATFORMS",

    answers: [
      {
        id: "234",
        label: "Indiferente",
        value: "ALL",
      },
      {
        id: "8312",
        label: "Max (HBO Max)",
        value: "MAX",
      },
      {
        id: "9123",
        label: "Netflix",
        value: "NETFLIX",
      },
      {
        id: "930249",
        label: "Prime Video",
        value: "PRIME_VIDEO",
      },
      {
        id: "231",
        label: "Star+",
        value: "STAR_PLUS",
      },
      {
        id: "2134",
        label: "Disney+",
        value: "DISNEY_PLUS",
      },
      {
        id: "32145",
        label: "Paramount+",
        value: "PARAMOUNT_PLUS",
      },
      {
        id: "3129",
        label: "Apple TV",
        value: "APPLE_TV",
      },
    ],
  },
] as Question[];

export const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([] as Answer[]);
  const {
    actualQuestionIndex,
    handleNextQuestion,
    handlePrevQuestion,
    finishQuiz,
  } = useQuizContext();

  const totalQuestionsQuantity = questions.length;

  const handleNextQuestionClick = () => {
    if (actualQuestionIndex + 1 === totalQuestionsQuantity) {
      finishQuiz();

      return;
    }

    const questionAnswered = {
      text: questions[actualQuestionIndex]?.text ?? "",
      type: questions[actualQuestionIndex]?.type,

      optionsSelected: selectedAnswers,
    };

    handleNextQuestion(questionAnswered);
  };

  return (
    <div className="mt-4 flex w-full flex-col gap-2 rounded bg-[#2c2c2c] p-6 text-white shadow-lg md:w-[500px]">
      <header className="flex w-full items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-bold">
          Questão {actualQuestionIndex + 1} de {totalQuestionsQuantity}{" "}
          {/* <IoEllipse className="inline" size={6} /> Filmes */}
        </h3>

        <button aria-label="question settings" title="Settings">
          <IoEllipsisHorizontal size={24} />
        </button>
      </header>

      <main>
        <h3 className="mb-2">{questions[actualQuestionIndex]?.text ?? ""}</h3>

        <QuizOptionsWrapper
          question={questions[actualQuestionIndex]}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
        />
      </main>

      <div className="mt-4 flex justify-between">
        <Button
          inverse
          size="sm"
          onClick={handlePrevQuestion}
          aria-label="arrow to go back to prev question"
        >
          {"<-"}
        </Button>

        <Button
          onClick={handleNextQuestionClick}
          disabled={selectedAnswers.length <= 0}
        >
          {actualQuestionIndex + 1 === totalQuestionsQuantity
            ? "Finalizar quiz"
            : "Próxima questão"}
        </Button>
      </div>
    </div>
  );
};
