import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch } from "../app/hooks";
import { setIsQuiz } from "../app/slices/navbar";
import { sampleQuestions } from "../utils/data";
import QuizResults from "./QuizResults";
import { useQuiz } from "../hooks/useQuiz";
import QuizHeader from "../components/Quiz/ui/header";
import image from "../assets/desert.webp";
import QuizQuestion from "../components/Quiz/ui/questions";
import QuizOptions from "../components/Quiz/ui/options";
import usePreventReload from "../hooks/usePreventReload";

const QuizGame = () => {
    const {
        currentQuestionIndex,
        isOptionDisabled,
        direction,
        score,
        totalTimeLeft,
        selectedOption,
        handleAnswerSelect,
        handleRestart,
        isQuizOver,
    } = useQuiz();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setIsQuiz(true));
        console.log("Index: " + currentQuestionIndex);
        console.log("Direction: " + direction);
        console.log("Score: " + score);
        console.log("Time left: " + totalTimeLeft);
        console.log("Selected option: " + selectedOption);
        console.log("Quiz over: " + isQuizOver);
    }, [
        currentQuestionIndex,
        direction,
        dispatch,
        isQuizOver,
        score,
        selectedOption,
        totalTimeLeft,
    ]);
    const progressVariants = {
        initial: { width: "100%" },
        animate: {
            width: "0%",
            transition: { duration: 180000, ease: "linear" },
        },
    };
    const handleUnload = () => {
        console.log(
            "L'utilisateur a tenté de quitter ou de recharger la page !",
        );
    };

    usePreventReload(handleUnload);

    if (isQuizOver) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <QuizResults
                    score={score}
                    totalQuestions={sampleQuestions.length}
                    onRestart={handleRestart}
                />
            </motion.div>
        );
    }
    return (
        <div className="bg-light-background min-h-screen h-full font-mono dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary flex flex-col items-center overflow-hidden">
            <div className="fixed top-0 left-0 right-0 bg-light-background dark:bg-dark-background p-4">
                <div className="max-w-xl mx-auto">
                    <div className="relative w-full h-2 bg-light-tertiary dark:bg-dark-tertiary rounded-full overflow-hidden">
                        <motion.div
                            className="absolute left-0 top-0 h-full bg-light-primary dark:bg-dark-primary"
                            variants={progressVariants}
                            initial="initial"
                            animate="animate"
                        />
                    </div>
                </div>
            </div>
            <div className="shadow-lg p-4">
                <QuizHeader
                    currentQuestion={currentQuestionIndex + 1}
                    totalQuestions={sampleQuestions.length}
                    totalTimeLeft={totalTimeLeft}
                    score={score}
                />

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentQuestionIndex}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        className="w-full max-w-xl"
                    >
                        <QuizQuestion
                            question={
                                sampleQuestions[currentQuestionIndex].question
                            }
                            image={image}
                        />
                        <QuizOptions
                            options={
                                sampleQuestions[currentQuestionIndex].options
                            }
                            selectedOption={selectedOption}
                            handleOptionSelect={handleAnswerSelect}
                            disabled={isOptionDisabled}
                            correctAnswer={
                                sampleQuestions[currentQuestionIndex].answer
                            }
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default QuizGame;

