import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "../../Forms/ui/radio-group";
import Label from "../../Forms/ui/label";
import { cn } from "../../../utils";

export interface QuizOptionsProps {
    options: string[];
    selectedOption?: number | null;
    handleOptionSelect: (index: number) => void;
    disabled: boolean;
    correctAnswer: number | null;
}

const QuizOptions: React.FC<QuizOptionsProps> = ({
    options,
    selectedOption,
    handleOptionSelect,
    disabled,
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

    return (
        <motion.div
            className="flex flex-col space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {options.map((option, index) => (
                <motion.div
                    key={index}
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <RadioGroup
                        value={selectedOption?.toString()}
                        onValueChange={(value) =>
                            handleOptionSelect(Number(value))
                        }
                        className="w-full"
                    >
                        <div className="flex items-center space-x-4 p-4 border border-light-border dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition">
                            <RadioGroupItem
                                value={index.toString()}
                                className={cn(
                                    "transition-all",
                                    selectedOption === index
                                        ? "bg-light-primary text-white"
                                        : "bg-white text-gray-800",
                                )}
                                disabled={disabled}
                                id={`option-${index}`}
                            />
                            <Label
                                htmlFor={`option-${index}`}
                                className="text-lg font-medium"
                            >
                                {option}
                            </Label>
                        </div>
                    </RadioGroup>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default QuizOptions;
