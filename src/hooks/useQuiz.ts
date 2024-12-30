import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { selectQuiz } from "../app/slices/quiz";
import correctSFX from "../assets/sfx/correct-156911.mp3";
import wrongSFX from "../assets/sfx/error-5-199276.mp3";
import { useNavigate } from "react-router-dom";
import systemProgression from "../utils/system_progress.json";

export const useQuiz = () => {
    const quiz = useAppSelector(selectQuiz);
    const navigate = useNavigate();

    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState(0);
    const [streak, setStreak] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [timeLeft, setTimeLeft] = useState(quiz?.duration || 800000);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isQuizOver, setIsQuizOver] = useState(false);
    const [direction, setDirection] = useState(0);

    const pointsConfig = systemProgression.points;
    const xpPerPoint = systemProgression.progression.xp_per_point;

    const difficulties: Record<string, "easy" | "medium" | "hard"> = {
        "Débutant": "easy",
        "Intermédiaire": "medium",
        "Avancé": "hard",
    }

    useEffect(() => {
        if (timeLeft === 0) {
            setIsQuizOver(true);
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => Math.max(prev - 1, 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, isQuizOver]);

    useEffect(() => {
        if (!quiz) {
            navigate("/categories", { replace: true });
            return;
        }
    }, [quiz, navigate]);

    const calculatePoints = (
        isCorrect: boolean,
        timeSpent: number,
        difficulty: "easy" | "medium" | "hard",
    ) => {
        let points = isCorrect
            ? pointsConfig.correct_answer
            : pointsConfig.incorrect_answer;

        if (isCorrect && timeSpent <= 10) {
            points += pointsConfig.speed_bonus;
        }

        points *= pointsConfig.difficulty_multiplier[difficulty] || 1;

        if (isCorrect && streak > 0) {
            points += streak * pointsConfig.streak_bonus;
        }

        return points;
    };

    const handleAnswer = (optionIndex: number) => {
        if (isQuizOver || !quiz) return;

        const currentQuestion = quiz.questions[currentQuestionIndex];
        const isCorrect = currentQuestion.answer === optionIndex;
        setQuestions((prevState) => {
            return isCorrect ? prevState + 1 : prevState;
        });
        const audio = new Audio(isCorrect ? correctSFX : wrongSFX);
        audio.play();

        setSelectedOption(optionIndex);

        const timeSpent = quiz.duration - timeLeft;
        const difficulty = difficulties[quiz.difficulty] || "easy";
        const earnedPoints = calculatePoints(isCorrect, timeSpent, difficulty);

        setScore((prevScore) => prevScore + earnedPoints);

        setStreak((prevStreak) => (isCorrect ? prevStreak + 1 : 0));

        const earnedXp = Math.floor(earnedPoints * xpPerPoint);
        setXp((prevXp) => {
            const newXp = prevXp + earnedXp;

            const nextLevel = systemProgression.progression.levels.find(
                (level) => level.level === currentLevel + 1,
            );
            if (nextLevel && newXp >= nextLevel.required_xp) {
                setCurrentLevel((prevLevel) => prevLevel + 1);
            }

            return newXp;
        });

        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < quiz.questions.length) {
            setCurrentQuestionIndex(nextIndex);
            setSelectedOption(null);
        } else {
            setIsQuizOver(true);
        }
    };

    const restartQuiz = () => {
        setScore(0);
        setStreak(0);
        setXp(0);
        setCurrentLevel(1);
        setCurrentQuestionIndex(0);
        setTimeLeft(quiz?.duration || 800000);
        setSelectedOption(null);
        setIsQuizOver(false);
        setDirection(0);
    };

    return {
        quiz,
        score,
        streak,
        xp,
        currentLevel,
        timeLeft,
        currentQuestionIndex,
        selectedOption,
        isQuizOver,
        handleAnswer,
        restartQuiz,
        direction,
        questions
    };
};
