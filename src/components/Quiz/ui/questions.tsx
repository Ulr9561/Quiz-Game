export interface QuizQuestionsProps {
    question: string;
    image?: string;
    index: number;
}

const QuizQuestion: React.FC<QuizQuestionsProps> = ({ question, index }) => (
    <div className="p-6 flex items-center justify-center rounded-lg shadow-lg mb-6">
        <h2 className="md:text-2xl text-md font-bold text-light-textPrimary dark:text-dark-textPrimary mb-4">
            {index}. {question}
        </h2>
    </div>
);

export default QuizQuestion;
