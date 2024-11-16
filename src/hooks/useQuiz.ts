import { useState, useEffect, useCallback } from "react";
import { sampleQuestions } from "../utils/data";

export const useQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [totalTimeLeft, setTotalTimeLeft] = useState(180);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isOptionDisabled, setIsOptionDisabled] = useState(false);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTotalTimeLeft((prev) => {
                if (prev > 0) return prev - 1;
                clearInterval(timer);
                return 0;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [totalTimeLeft]);

    const handleAnswerSelect = useCallback(
        (optionIndex: number) => {
            if (isOptionDisabled) return;
            setIsOptionDisabled(true);
            setSelectedOption(optionIndex);

            if (optionIndex === sampleQuestions[currentQuestionIndex].answer) {
                setScore((prevScore) => prevScore + 1);
                setIsCorrect(true);
            } else {
                setIsCorrect(false);
            }

            setTimeout(() => {
                setSelectedOption(null);
                setIsOptionDisabled(false);
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            }, 2000);
        },
        [currentQuestionIndex, isOptionDisabled],
    );

    const handleRestart = () => {
        setDirection(-1);
        setCurrentQuestionIndex(0);
        setScore(0);
        setTotalTimeLeft(180);
        setSelectedOption(null);
    };

    return {
        currentQuestion: sampleQuestions[currentQuestionIndex],
        currentQuestionIndex,
        totalQuestions: sampleQuestions.length,
        score,
        totalTimeLeft,
        direction,
        selectedOption,
        isOptionDisabled,
        handleAnswerSelect,
        handleRestart,
        isCorrect,
        isQuizOver: currentQuestionIndex >= sampleQuestions.length || totalTimeLeft  === 0,
    };
};
