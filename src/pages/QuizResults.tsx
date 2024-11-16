import Button from "../components/Button";

interface QuizResultsProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
    score,
    totalQuestions,
    onRestart,
}) => {
    return (
        <div className="h-screen font-mono flex flex-col items-center justify-center text-white">
            <div className="max-w-md w-full bg-black bg-opacity-75 p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-6">🎉 Quiz Terminé !</h1>
                <p className="text-2xl font-semibold mb-8">
                    Score : <span className="text-yellow-400">{score}</span> /{" "}
                    {totalQuestions}
                </p>
                <Button
                    onClick={onRestart}
                    className="py-3 px-6 flex items-center  bg-green-500 text-white rounded-lg shadow-md hover:bg-green-400"
                >
                    Rejouer
                </Button>
            </div>
        </div>
    );
};

export default QuizResults;
