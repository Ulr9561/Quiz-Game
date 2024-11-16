import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRedo, faStar } from "@fortawesome/free-solid-svg-icons";

export interface Quiz {
    id: number;
    title: string;
    score: number;
    date: string;
    category: string;
    duration: string;
    attempts: number;
}

const recentQuizzes: Quiz[] = [
    {
        id: 1,
        title: "Histoire de France",
        score: 85,
        date: "2024-03-15",
        category: "Histoire",
        duration: "15 min",
        attempts: 3,
    },
    {
        id: 2,
        title: "Géographie Mondiale",
        score: 92,
        date: "2024-03-14",
        category: "Géographie",
        duration: "20 min",
        attempts: 2,
    },
    {
        id: 3,
        title: "Sciences",
        score: 78,
        date: "2024-03-13",
        category: "Sciences",
        duration: "25 min",
        attempts: 4,
    },
];

const RecentActivities: React.FC = () => {
    return (
        <>
            <h2 className="text-xl font-mono font-bold mb-6">Derniers Quiz</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {recentQuizzes.map((quiz) => (
                    <div
                        key={quiz.id}
                        className="p-4 bg-light-tertiary dark:bg-dark-background rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors cursor-pointer"
                    >
                        <div className="mb-3">
                            <p className="font-bold text-lg text-light-textPrimary dark:text-dark-textPrimary">
                                {quiz.title}
                            </p>
                            <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                                {quiz.category} • {quiz.date}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                            <span className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="mr-2"
                                />
                                {quiz.duration}
                            </span>
                            <span className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                <FontAwesomeIcon
                                    icon={faRedo}
                                    className="mr-2"
                                />
                                {quiz.attempts} tentatives
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div
                                className={`px-3 py-1 rounded-full ${
                                    quiz.score >= 90
                                        ? "bg-light-success/20 text-light-success"
                                        : quiz.score >= 75
                                          ? "bg-yellow-500/20 text-yellow-600"
                                          : "bg-light-error/20 text-light-error"
                                }`}
                            >
                                {quiz.score}%
                            </div>
                            <div className="flex items-center text-yellow-500">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        className={`${i < Math.round(quiz.score / 20) ? "text-yellow-500" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RecentActivities;
