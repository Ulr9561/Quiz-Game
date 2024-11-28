import {
    faBolt,
    faBullseye,
    faClock,
    faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface QuizHeaderProps {
    currentQuestion: number;
    totalQuestions: number;
    totalTimeLeft: number;
    score: number;
    streak: number;
    multiplier: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
    currentQuestion,
    totalQuestions,
    totalTimeLeft,
    score,
    streak,
    multiplier,
}) => {
    const [isIncreasing, setIsIncreasing] = useState(false);

    useEffect(() => {
        if (score > 0) {
            setIsIncreasing(true);
            const timeout = setTimeout(() => setIsIncreasing(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [score]);

    const getStreakColor = () => {
        if (streak >= 5) return "text-yellow-500";
        if (streak >= 3) return "text-orange-500";
        return "text-light-textPrimary dark:text-dark-textPrimary";
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="sm:grid flex flex-row sm:grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                    className="bg-light-secondary min-w-28 sm:block flex items-center flex-col dark:bg-dark-tertiary rounded-2xl p-4 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <div className="flex items-center justify-between">
                        <FontAwesomeIcon
                            icon={faBullseye}
                            className="text-light-primary w-9 h-9 dark:text-dark-primary"
                        />
                        <div className="sm:block hidden text-xs text-light-textSecondary dark:text-dark-textSecondary">
                            Progression
                        </div>
                    </div>
                    <div className="mt-2 text-2xl font-bold">
                        {currentQuestion}/{totalQuestions}
                    </div>
                </motion.div>

                <motion.div
                    className="bg-light-secondary min-w-28 dark:bg-dark-tertiary sm:block flex items-center flex-col rounded-2xl p-4 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90"
                    animate={{
                        scale: totalTimeLeft <= 10 ? [1, 1.05, 1] : 1,
                        transition: {
                            duration: 0.5,
                            repeat: totalTimeLeft <= 10 ? Infinity : 0,
                        },
                    }}
                >
                    <div className="flex items-center justify-between">
                        <FontAwesomeIcon
                            icon={faClock}
                            className="text-light-primary w-7 h-7 dark:text-dark-primary"
                        />
                        <div className="sm:block hidden text-xs text-light-textSecondary dark:text-dark-textSecondary">
                            Temps
                        </div>
                    </div>
                    <div
                        className={`mt-2 text-2xl font-bold ${
                            totalTimeLeft <= 10
                                ? "text-light-error dark:text-dark-error"
                                : ""
                        }`}
                    >
                        {Math.floor(totalTimeLeft / 60)}:
                        {String(totalTimeLeft % 60).padStart(2, "0")}
                    </div>
                </motion.div>

                {/* Streak */}
                <motion.div className="bg-light-secondary min-w-28 dark:bg-dark-tertiary sm:block flex items-center flex-col rounded-2xl p-4 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
                    <div className="flex items-center justify-between">
                        <FontAwesomeIcon
                            icon={faBolt}
                            className="text-light-primary w-7 h-7 dark:text-dark-primary"
                        />
                        <div className="sm:block hidden text-xs text-light-textSecondary dark:text-dark-textSecondary">
                            Streak
                        </div>
                    </div>
                    <div
                        className={`mt-2 text-2xl font-bold ${getStreakColor()}`}
                    >
                        {streak}x
                        {streak >= 3 && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="inline-block ml-2 text-sm"
                            >
                                🔥
                            </motion.span>
                        )}
                    </div>
                </motion.div>
                <motion.div
                    className="bg-light-secondary min-w-28 dark:bg-dark-tertiary sm:block flex items-center flex-col rounded-2xl p-4 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90"
                    animate={
                        isIncreasing
                            ? {
                                  scale: [1, 1.1, 1],
                                  transition: { duration: 0.3 },
                              }
                            : {}
                    }
                >
                    <div className="flex items-center justify-between">
                        <FontAwesomeIcon
                            icon={faTrophy}
                            className="text-light-primary w-7 h-7 dark:text-dark-primary"
                        />
                        <div className="text-xs sm:block hidden text-light-textSecondary dark:text-dark-textSecondary">
                            Score
                        </div>
                    </div>
                    <div className="mt-2 text-2xl font-bold text-light-primary dark:text-dark-primary">
                        {score}
                        <span className="text-sm ml-1">({multiplier}x)</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default QuizHeader;
