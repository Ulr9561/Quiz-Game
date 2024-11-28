import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { endQuiz, selectQuiz, updateScore } from "../app/slices/quiz";
import correctSFX from "../assets/sfx/correct-156911.mp3";
import wrongSFX from "../assets/sfx/error-5-199276.mp3";
import { QuizManager } from "../services/QuizManager";

export const useQuiz = () => {
    const dispatch = useAppDispatch();
    const quiz = useAppSelector(selectQuiz);

    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [direction, setDirection] = useState(0);

    const quizManager = useMemo(() => {
        return quiz ? new QuizManager(quiz) : null;
    }, [quiz]);

    const currentQuestion = quizManager?.getCurrentQuestion();


    const handleAnswer = (optionIndex: number) => {
        if (!quizManager) return;

        const correct = quizManager.validateAnswer(optionIndex);
        setIsCorrect(correct);

        dispatch(updateScore(quizManager.getScore()));

        if (quizManager.isQuizOver()) {
            dispatch(endQuiz());
        }
    };

    const restartQuiz = () => {
        if (!quizManager) return;

        quizManager.restartQuiz();
        setIsCorrect(null);
        dispatch(updateScore(0));
        setDirection(-1);
    };

    return {
        quizManager,
        quiz : quiz ? quiz : null,
        currentQuestion,
        isCorrect,
        handleAnswer,
        restartQuiz,
        direction
    };
};
