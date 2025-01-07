import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button";
import { QuizCardProps } from "..";
import { useAppDispatch } from "../../../app/hooks";
import { setQuiz } from "../../../app/slices/quiz";
import { useNavigate } from "react-router-dom";
import { setIsQuiz } from "../../../app/slices/navbar";

const QuizCard: React.FC<QuizCardProps> = ({
    title,
    description,
    category,
    difficulty,
    questions,
    questionsCount,
    averageScore,
    duration,
}) => {
    const navigate = useNavigate();
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
    const dispatch = useAppDispatch();

    const getCategoryColor = () => {
        switch (category.toLowerCase()) {
            case "programmation":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
            case "mathématiques":
                return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
            case "sciences":
                return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
            case "culture générale":
                return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
        }
    };

    return (
        <div className="border hover:-translate-y-2 transition-transform duration-200 border-light-border font-mono dark:border-dark-border rounded-lg shadow-md overflow-hidden bg-light-tertiary dark:bg-dark-tertiary max-w-xs">
            <div className="p-4 flex flex-col justify-between">
                <div className="">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {title}
                    </h3>

                    <div className="inline-block mb-2">
                        <span
                            className={`text-xs px-2 py-1 rounded-md ${getCategoryColor()}`}
                        >
                            {category}
                        </span>
                    </div>

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
                    onClick={() => {
                        console.log("Ok but it doesn't matter");
                        dispatch(
                            setQuiz({
                                title,
                                description,
                                category,
                                difficulty,
                                questions,
                                questionsCount,
                                averageScore,
                                duration,
                            }),
                        );
                        dispatch(setIsQuiz(true));
                        navigate("/quiz/" + title);
                    }}
                    className="w-full text-sm py-1.5 rounded-sm transform transition-transform hover:scale-105"
                >
                    Jouer
                </Button>
            </div>
        </div>
    );
};

export default QuizCard;
