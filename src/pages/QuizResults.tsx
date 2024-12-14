import { useAppSelector } from "../app/hooks";
import { selectQuiz } from "../app/slices/quiz";
import Button from "../components/Button";

interface QuizResultsProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
    timeSpent: number;
    solvedQuestions: number;
}

const QuizResults: React.FC<QuizResultsProps> = ({
    score,
    totalQuestions,
    solvedQuestions,
    onRestart,
    timeSpent,
}) => {
    const quiz = useAppSelector(selectQuiz);

    const successRate = Math.round((solvedQuestions / totalQuestions) * 100);
    const formattedTime = `${Math.floor(timeSpent / 60)}:${
        timeSpent % 60 < 10 ? "0" : ""
    }${timeSpent % 60}`;

    return (
        <div className="container mx-auto font-mono flex flex-col justify-center items-center text-white py-12">
            <h1 className="text-center text-3xl font-bold mb-8">
                Résultats du quiz :{" "}
                <span className="text-light-primary dark:text-dark-primary">
                    {quiz?.title}
                </span>
            </h1>

            <div className="w-full mx-12 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <p className="text-xl font-semibold">
                        <span className="text-light-primary dark:text-dark-primary">
                            Points obtenus :
                        </span>{" "}
                        {score} points
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-xl font-semibold">
                        <span className="text-light-primary dark:text-dark-primary">
                            Pourcentage de réussite :
                        </span>{" "}
                        {successRate}%
                    </p>
                </div>
                {timeSpent > 0 && (
                    <div className="mb-4">
                        <p className="text-xl font-semibold">
                            <span className="text-light-primary dark:text-dark-primary">
                                Temps écoulé :
                            </span>{" "}
                            {formattedTime}
                        </p>
                    </div>
                )}
            </div>

            <Button
                onClick={onRestart}
                color="primary"
                className="mt-8 bg-primary text-white px-6 py-2 rounded-lg"
            >
                Recommencer le quiz
            </Button>
        </div>
    );
};

export default QuizResults;
