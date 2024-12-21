import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { quizData } from "../utils/data";
import QuizCard from "../components/Dashboard/ui/quizCard";
import { QuizCardProps } from "../components/Dashboard";

const Categories: React.FC = () => {
    const groupedQuizData = quizData.reduce<{ [key: string]: QuizCardProps[] }>(
        (acc, quiz) => {
            if (!acc[quiz.category]) acc[quiz.category] = [];
            acc[quiz.category].push(quiz);
            return acc;
        },
        {},
    );

    const [openCategories, setOpenCategories] = useState<{
        [key: string]: boolean;
    }>({});

    const toggleCategory = (category: string) => {
        setOpenCategories((prevState) => ({
            ...prevState,
            [category]: !prevState[category],
        }));
    };

    return (
        <div className="relative font-grotesk flex flex-col gap-8 w-full px-6 py-8 bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary">
            <h2 className="text-3xl font-semibold">Quiz par catégories</h2>

            {Object.keys(groupedQuizData).map((category) => (
                <div key={category} className="flex flex-col gap-4">
                    <div
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => toggleCategory(category)}
                    >
                        <FontAwesomeIcon
                            icon={
                                openCategories[category]
                                    ? faChevronUp
                                    : faChevronDown
                            }
                            className="text-light-primary dark:text-dark-primary"
                        />
                        <span className="text-2xl font-bold">{category}</span>
                        <div className="flex-grow h-[1px] bg-light-border dark:bg-dark-border ml-2"></div>
                    </div>

                    {openCategories[category] && (
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {groupedQuizData[category].map(
                                (quiz: QuizCardProps) => (
                                    <QuizCard
                                        key={quiz.title}
                                        title={quiz.title}
                                        duration={quiz.duration}
                                        category={quiz.category}
                                        description={quiz.description}
                                        difficulty={quiz.difficulty}
                                        questionsCount={quiz.questionsCount}
                                        averageScore={quiz.averageScore}
                                        questions={quiz.questions}
                                    />
                                ),
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Categories;
