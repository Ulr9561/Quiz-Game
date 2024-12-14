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
    xp: number;
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check screen size and update isMobile state
        const checkMobileView = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Check initial screen size
        checkMobileView();

        // Add event listener to check screen size on resize
        window.addEventListener("resize", checkMobileView);

        // Cleanup event listener
        return () => window.removeEventListener("resize", checkMobileView);
    }, []);

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

    if (isMobile) {
        return (
            <header className="container mx-auto h-auto bg-light-primary dark:bg-dark-primary text-light-textPrimary dark:text-dark-textPrimary px-4 py-3">
                <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faBullseye}
                                className="text-lg dark:text-dark-success text-light-success"
                            />
                            <span className="text-sm font-semibold">
                                Q {currentQuestion}/{totalQuestions}
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faClock}
                                className="text-lg text-light-success dark:text-dark-success"
                            />
                            <span className="text-sm font-semibold">
                                {formatTime(totalTimeLeft)}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={
                                isIncreasing ? { scale: 1.2 } : { scale: 1 }
                            }
                            transition={{ duration: 0.3 }}
                            className="flex items-center space-x-2"
                        >
                            <FontAwesomeIcon
                                icon={faTrophy}
                                className="text-lg text-light-success dark:text-dark-success"
                            />
                            <span className="text-sm font-semibold">
                                Score: {score}
                            </span>
                        </motion.div>
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faBolt}
                                className="text-lg text-light-success dark:text-dark-success"
                            />
                            <span className="text-sm font-semibold">
                                Streak: {streak}x
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faBolt}
                                className="text-lg text-light-success dark:text-dark-success"
                            />
                            <span className="text-sm font-semibold">
                                Multiplier: {multiplier}x
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className="container mx-auto h-20 bg-light-primary dark:bg-dark-primary text-light-textPrimary dark:text-dark-textPrimary flex items-center justify-between px-4">
            <div className="flex items-center space-x-4">
                <FontAwesomeIcon
                    icon={faBullseye}
                    className="text-lg dark:text-dark-success text-light-success"
                />
                <span className="text-lg font-semibold ">
                    Question {currentQuestion} / {totalQuestions}
                </span>
            </div>

            <div className="flex items-center space-x-4">
                <FontAwesomeIcon
                    icon={faClock}
                    className="text-lg text-light-success dark:text-dark-success"
                />
                <span className="text-lg font-semibold">
                    {formatTime(totalTimeLeft)}
                </span>
            </div>

            <div className="flex items-center space-x-4">
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
