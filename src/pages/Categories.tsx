import { quizData } from "../utils/data";
import QuizCard from "../components/Dashboard/ui/quizCard";
import { QuizCardProps } from "../components/Dashboard";
import CategoriesSidebar from "../components/Categories";

const Categories: React.FC = () => {
    return (
        <div className="relative font-grotesk flex gap-4 w-full px-6 py-8 bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary">
            <CategoriesSidebar />
            <div className="flex flex-col gap-8 w-full">
                <h2 className="text-3xl font-semibold">Quiz par catégories</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {quizData.map((quiz: QuizCardProps) => (
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
