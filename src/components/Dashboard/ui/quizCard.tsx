import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import Button from "../../Button";
import { QuestionProps } from "../../../types";

export interface QuizCardProps {
    title: string;
    description: string;
    category: string;
    difficulty: "Débutant" | "Intermédiaire" | "Avancé";
    questionsCount: number;
    averageScore: number;
    duration: string;
    onPlay: () => void;
    questions?: QuestionProps[];
}

const QuizCard: React.FC<QuizCardProps> = ({
    title,
    description,
    category,
    difficulty,
    questionsCount,
    averageScore,
    duration,
    onPlay,
}) => {
    const getDifficultyColor = () => {
        switch (difficulty) {
            case "Débutant":
                return "text-green-500";
            case "Intermédiaire":
                return "text-yellow-500";
            case "Avancé":
                return "text-red-500";
            default:
                return "text-gray-500";
        }
    };

    return (
        <div className="border border-light-border font-mono dark:border-dark-border rounded-lg shadow-md overflow-hidden bg-light-background dark:bg-dark-background max-w-xs">
            <div className="bg-light-textSecondary dark:bg-dark-textSecondary h-32 flex items-center justify-center">
                <FontAwesomeIcon
                    icon={faImage}
                    className="text-light-textSecondary dark:text-dark-textSecondary"
                />
            </div>
            <div className="p-4 flex flex-col justify-between">
                <div className="">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                        {category}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-xs mb-2">
                        {description}
                    </p>

                    <div className="flex justify-between items-center mb-2">
                        <span
                            className={`font-semibold text-sm ${getDifficultyColor()}`}
                        >
                            {difficulty}
                        </span>
                        <span className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                            <FontAwesomeIcon icon={faClock} className="mr-1" />
                            {duration}
                        </span>
                    </div>

                    <div className="flex justify-between items-center text-xs mb-3">
                        <span className="flex items-center text-gray-500 dark:text-gray-400">
                            <FontAwesomeIcon icon={faStar} className="mr-1" />
                            {averageScore}%
                        </span>
                        <span className="flex items-center text-gray-500 dark:text-gray-400">
                            <FontAwesomeIcon icon={faTrophy} className="mr-1" />
                            {questionsCount} Questions
                        </span>
                    </div>
                </div>
                <Button
                    color="primary"
                    onClick={onPlay}
                    className="w-full text-sm py-1.5 rounded-sm transform transition-transform hover:scale-105"
                >
                    Jouer
                </Button>
            </div>
        </div>
    );
};

export default QuizCard;
