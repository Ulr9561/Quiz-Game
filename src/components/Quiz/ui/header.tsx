import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface QuizHeaderProps {
    currentQuestion: number;
    totalQuestions: number;
    totalTimeLeft: number;
    score: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
    currentQuestion,
    totalQuestions,
    totalTimeLeft,
    score,
}) => {
    const [isIncreasing, setIsIncreasing] = useState(false);

    useEffect(() => {
        if (score > 0) {
            setIsIncreasing(true);
            const timeout = setTimeout(() => setIsIncreasing(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [score]);

    const scoreVariants = {
        initial: { scale: 1 },
        animate: isIncreasing
            ? {
                  scale: [1, 1.3, 1],
                  color: ["#fff", "#FFD700", "#fff"],
                  transition: { duration: 0.5, ease: "easeInOut" },
              }
            : { scale: 1 },
    };

    const timerVariants = {
        initial: { scale: 1 },
        animate: {
            scale: totalTimeLeft <= 10 ? [1, 1.1, 1] : 1,
            color: totalTimeLeft <= 10 ? ["#fff", "#FF0000"] : "#fff",
            transition: { duration: 0.5, ease: "easeInOut", repeat: Infinity },
        },
    };

    return (
        <div className="w-full max-w-xl font-mono text-center text-white p-4 rounded-lg">
            <div className="flex items-center justify-between">
                <motion.div
                    className="text-lg font-bold bg-light-primary dark:bg-dark-primary px-3 py-1 rounded-full shadow-md"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                >
                    Question {currentQuestion}/{totalQuestions}
                </motion.div>

                <motion.div
                    className="text-lg font-bold bg-green-400 dark:bg-green-700 px-3 py-1 rounded-full shadow-md flex items-center gap-2"
                    variants={timerVariants}
                    initial="initial"
                    animate="animate"
                >
                    ⏰ {Math.floor(totalTimeLeft / 60)}:
                    {String(totalTimeLeft % 60).padStart(2, "0")}
                </motion.div>

                <motion.div
                    className="text-lg font-bold bg-yellow-500 dark:bg-yellow-800 text-black px-3 py-1 rounded-full shadow-md flex items-center gap-2"
                    variants={scoreVariants}
                    initial="initial"
                    animate="animate"
                >
                    🌟 {score}
                </motion.div>
            </div>
        </div>
    );
};

export default QuizHeader;
