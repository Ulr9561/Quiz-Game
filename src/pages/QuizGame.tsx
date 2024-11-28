import { AnimatePresence, motion } from "framer-motion";
import { sampleQuestions } from "../utils/data";
import QuizResults from "./QuizResults";
import { useQuiz } from "../hooks/useQuiz";
import QuizHeader from "../components/Quiz/ui/header";
import QuizQuestion from "../components/Quiz/ui/questions";
import QuizOptions from "../components/Quiz/ui/options";
import image from "../assets/desert.webp";
import usePreventReload from "../hooks/usePreventReload";

const QuizGame = () => {
    const {
        handleAnswer,
        quiz,
        quizManager,
        restartQuiz,
        direction
    } = useQuiz();


    // useEffect(() => {
    //     console.log("Index: " + currentQuestionIndex);
    //     console.log("Direction: " + direction);
    //     console.log("Score: " + score);
    //     console.log("Time left: " + totalTimeLeft);
    //     console.log("Selected option: " + selectedOption);
    //     console.log("Quiz over: " + isQuizOver);
    // }, [
    //     currentQuestionIndex,
    //     direction,
    //     dispatch,
    //     isQuizOver,
    //     score,
    //     selectedOption,
    //     totalTimeLeft,
    // ]);


    const progressVariants = {
        initial: { width: "100%" },
        animate: {
            width: "0%",
            transition: { duration: quiz?.duration || 60 * 1000, ease: "linear" },
        },
    };

    const handleUnload = () => {
        console.log("Unloading");
    };

    usePreventReload(handleUnload);

    if (quizManager?.isQuizOver()) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen w-full flex items-center justify-center"
            >
                <QuizResults
                    score={quizManager.getScore()}
                    totalQuestions={sampleQuestions.length}
                    onRestart={restartQuiz}
                />
            </motion.div>
        );
    }

    const currentQuestion = sampleQuestions[quizManager?.getCurrentQuestionIndex() || 0];

    return (
        <div className="relative min-h-screen font-grotesk w-full bg-light-background dark:bg-dark-background overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-light-primary/5 to-light-background dark:from-dark-primary/5 dark:to-dark-background" />

            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-light-primary dark:bg-dark-primary z-50"
                variants={progressVariants}
                initial="initial"
                animate="animate"
            />

            <div className="relative z-10 h-screen flex flex-col">
                <div className="p-6">
                    <QuizHeader
                        currentQuestion={
                            quiz
                                ? quiz.questions.indexOf(currentQuestion!) + 1
                                : 0
                        }
                        totalQuestions={quiz ? quiz.questions.length : 10}
                        totalTimeLeft={quizManager?.quiz.duration || 0}
                        score={quizManager?.getScore() || 0}
                        streak={8}
                        multiplier={8}
                    />
                </div>

                <div className="flex-grow flex items-center justify-center px-4">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={quizManager?.getCurrentQuestionIndex()}
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
                            <div className="bg-light-tertiary dark:bg-dark-tertiary rounded-3xl overflow-hidden backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90 mb-8">
                                <QuizQuestion
                                    question={currentQuestion.question}
                                    image={image}
                                />
                            </div>

                            <div className="relative">
                                <QuizOptions
                                    options={currentQuestion.options}
                                    selectedOption={1}
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
