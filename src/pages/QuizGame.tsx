import { AnimatePresence, motion } from "framer-motion";
import QuizResults from "./QuizResults";
import { useQuiz } from "../hooks/useQuiz";
import QuizQuestion from "../components/Quiz/ui/questions";
import QuizOptions from "../components/Quiz/ui/options";
import { useEffect } from "react";
import { usePreventBack, usePreventReload } from "../hooks/usePreventReload";

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
    } = useQuiz();

    useEffect(() => {
        console.log("Current State:", {
            quiz,
            currentQuestionIndex,
            direction,
            score,
            timeLeft,
            selectedOption,
            isQuizOver,
        });
    }, [
        quiz,
        currentQuestionIndex,
        direction,
        score,
        timeLeft,
        selectedOption,
        isQuizOver,
    ]);

    if (!quiz) return null;
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
