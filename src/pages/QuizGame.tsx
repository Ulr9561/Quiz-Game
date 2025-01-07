import { AnimatePresence, motion } from "framer-motion";
import QuizResults from "./QuizResults";
import { useQuiz } from "../hooks/useQuiz";
import QuizQuestion from "../components/Quiz/ui/questions";
import QuizOptions from "../components/Quiz/ui/options";
import { usePreventBack, usePreventReload } from "../hooks/usePreventReload";
import QuizHeader from "../components/Quiz/ui/header";
import { useEffect } from "react";

const QuizGame = () => {
    const {
        handleAnswer,
        quiz,
        score,
        selectedOption,
        timeLeft,
        currentQuestionIndex,
        restartQuiz,
        questions,
        direction,
        isQuizOver,
        streak,
    } = useQuiz();

    useEffect(() => {
        console.log("Current state", {
            quiz,
            score,
            selectedOption,
            timeLeft,
            currentQuestionIndex,
            restartQuiz,
            questions,
            direction,
            isQuizOver,
            streak,
        });
    }, [
        quiz,
        score,
        selectedOption,
        timeLeft,
        currentQuestionIndex,
        restartQuiz,
        questions,
        direction,
        isQuizOver,
        streak,
    ]);

    
    const onunload = () => {
        console.log("Attempting to unload");
    };

    const onback = () => {
        console.log("Navigation arrière détectée !");
        if (window.confirm("Êtes-vous sûr de vouloir quitter cette page ?")) {
            window.history.back();
            console.log("Back to history");
        } else {
            window.history.pushState(null, "", window.location.href);
            console.log("Pushing to history");
        }
    };

    usePreventReload(onunload);
    usePreventBack(onback);

    if (!quiz) return null;
    if (isQuizOver) {
        const totalTimeSpent = quiz.duration - timeLeft;
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen w-full"
            >
                <QuizResults
                    solvedQuestions={questions}
                    score={score}
                    totalQuestions={quiz.questions.length}
                    onRestart={restartQuiz}
                    timeSpent={totalTimeSpent}
                />
            </motion.div>
        );
    }

    const currentQuestion = quiz.questions[currentQuestionIndex];

    return (
        <div className="relative font-grotesk w-full bg-light-background dark:bg-dark-background overflow-hidden">
            <QuizHeader
                currentQuestion={
                    currentQuestionIndex + 1
                }
                totalQuestions={quiz.questions.length}
                totalTimeLeft={timeLeft}
                score={score}
                streak={streak}
                multiplier={8}
            />
            <div className="relative z-10 flex flex-col">
                <div className="flex-grow flex items-center justify-center px-4 pt-10">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentQuestionIndex}
                            initial={{
                                opacity: 0,
                                x: 300,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{
                                opacity: 0,
                                x: -300,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                            className="w-full max-w-4xl"
                        >
                            <div className="rounded-3xl overflow-hidden backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90 mb-8">
                                <QuizQuestion
                                    question={currentQuestion.question}
                                    index={currentQuestionIndex + 1}
                                />
                            </div>

                            <div className="relative">
                                <QuizOptions
                                    options={currentQuestion.options}
                                    selectedOption={selectedOption}
                                    handleOptionSelect={handleAnswer}
                                    disabled={false}
                                    correctAnswer={currentQuestion.answer}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default QuizGame;
