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

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <header className="font-grotesk h-[80px] px-4 py-2 bg-light-primary dark:bg-dark-primary text-light-textPrimary dark:text-dark-textPrimary flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-start">
                <FontAwesomeIcon
                    icon={faBullseye}
                    className="text-lg dark:text-dark-success text-light-success"
                />
                <span className="text-lg font-semibold">
                    Question {currentQuestion} / {totalQuestions}
                </span>
            </div>

            <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-start">
                <FontAwesomeIcon
                    icon={faClock}
                    className="text-lg text-light-success dark:text-dark-success"
                />
                <span className="text-lg font-semibold">
                    {formatTime(totalTimeLeft)}
                </span>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto justify-between md:justify-start">
                <motion.div
                    initial={{ scale: 1 }}
                    animate={isIncreasing ? { scale: 1.2 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center space-x-2"
                >
                    <FontAwesomeIcon
                        icon={faTrophy}
                        className="text-lg text-light-success dark:text-dark-success"
                    />
                    <span className="text-lg font-semibold">
                        Score: {score}
                    </span>
                </motion.div>

                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon
                        icon={faBolt}
                        className="text-lg text-light-success dark:text-dark-success"
                    />
                    <span className="text-lg font-semibold">
                        Streak: {streak}x
                    </span>
                </div>

                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon
                        icon={faBolt}
                        className="text-lg text-light-success dark:text-dark-success"
                    />
                    <span className="text-lg font-semibold">
                        Multiplier: {multiplier}x
                    </span>
                </div>
            </div>
        </header>
    );
};

export default QuizHeader;
