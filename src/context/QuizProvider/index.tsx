import { type ReactNode, createContext, useContext, useState } from "react";

interface AnswersSelected {
  categories: string[];
  genres: string[];
  ageRange: string[];
  mood: string[];
}

interface Answer {
  text: string;

  optionsSelected: Array<string>;
}

interface QuizProviderProps {
  children: ReactNode;

  closeQuiz: () => void;
}

interface QuizProviderContextProps {
  handleNextQuestion: (answer: Answer) => void;
  handlePrevQuestion: () => void;
  finishQuiz: () => void;
  actualQuestionIndex: number;
}

const QuizProviderContext = createContext({} as QuizProviderContextProps);

export const QuizProvider = ({ children, closeQuiz }: QuizProviderProps) => {
  const [answersSelected, setAnswersSelected] = useState([] as Answer[]);
  const [actualQuestionIndex, setActualQuestionIndex] = useState<number>(0);

  const handleNextQuestion = (answer: Answer) => {
    setAnswersSelected((prevValue) => [...prevValue, answer]);
    setActualQuestionIndex((prevValue) => prevValue + 1);
  };

  const handlePrevQuestion = () => {
    if (actualQuestionIndex === 0) {
      closeQuiz();

      return;
    }

    const answersSelectedCopy = answersSelected;
    answersSelectedCopy.pop();

    setAnswersSelected(answersSelectedCopy);
    setActualQuestionIndex((prevValue) => prevValue - 1);
  };

  const finishQuiz = () => {
    closeQuiz();

    console.log("selected answers: ", answersSelected);
    alert("Seu filme escolhido é: Alvin e os esquilos");
  };

  console.log("Answers Selected: ", answersSelected);

  return (
    <QuizProviderContext.Provider
      value={{
        handleNextQuestion,
        handlePrevQuestion,
        actualQuestionIndex,
        finishQuiz,
      }}
    >
      {children}
    </QuizProviderContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizProviderContext);
