import { motion } from "framer-motion";

export interface QuizQuestionsProps {
    question: string;
    image?: string;
}

const QuizQuestion: React.FC<QuizQuestionsProps> = ({ question, image }) => (
    <div className="bg-gradient-to-r from-purple-800 to-blue-800 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
            {question}
        </h2>
        {image && (
            <motion.img
                src={image}
                alt="Question media"
                className="w-full h-56 object-cover rounded shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
            />
        )}
    </div>
);

export default QuizQuestion;
