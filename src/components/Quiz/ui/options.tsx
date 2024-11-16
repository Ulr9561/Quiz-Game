import { motion } from "framer-motion";
import Button from "../../Button";

export interface QuizOptionsProps {
    options: string[];
    selectedOption: number | null;
    handleOptionSelect: (index: number) => void;
    disabled: boolean;
    correctAnswer: number | null;
}

const QuizOptions: React.FC<QuizOptionsProps> = ({
    options,
    selectedOption,
    handleOptionSelect,
    disabled,
    correctAnswer,
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const getButtonColor = (index: number) => {
        if (selectedOption === null) {
            return "bg-gray-700 hover:scale-105";
        }

        if (selectedOption === index) {
            return index === correctAnswer
                ? "bg-green-500 scale-105"
                : "bg-red-500 scale-105";
        }

        return "bg-gray-700";
    };

    return (
        <motion.div
            className="grid md:grid-cols-2 grid-cols-1 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {options.map((option, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <Button
                        className={`
                            w-full px-6 py-3
                            text-left text-white
                            rounded-lg shadow-lg
                            font-bold
                            transition-all duration-300 ease-in-out
                            ${getButtonColor(index)}
                            ${disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer"}
                        `}
                        onClick={() => !disabled && handleOptionSelect(index)}
                        disabled={disabled}
                    >
                        {option}
                    </Button>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default QuizOptions;
