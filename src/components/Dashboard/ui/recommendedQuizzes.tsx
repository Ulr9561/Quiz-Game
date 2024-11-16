import { quizData } from "../../../utils/data";
import QuizCard from "./quizCard";

const RecommandedQuizzes: React.FC = () => {
    return (
        <div className="rounded-lg">
            <h2 className="text-xl font-mono font-bold mb-6">
                Quiz recommandés
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {quizData.map((quiz) => (
                    <QuizCard
                        key={quiz.title}
                        title={quiz.title}
                        description={quiz.description}
                        category={quiz.category}
                        difficulty={quiz.difficulty}
                        questionsCount={quiz.questionsCount}
                        averageScore={quiz.averageScore}
                        duration={quiz.duration}
                        onPlay={quiz.onPlay}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecommandedQuizzes;
