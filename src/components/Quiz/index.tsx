import React from "react";
import Button from "../Button";

interface DisplayOptionsProps {
    options: string[];
    selectedOption: number | null;
    handleOptionSelect: (index: number) => void;
}

const DisplayOptions: React.FC<DisplayOptionsProps> = ({ options, selectedOption, handleOptionSelect }) => {
    return (
        <div className="w-full grid grid-cols-2 max-w-xl gap-2">
            {options.map(
                (option, index) => (
                    <Button
                        key={option}
                        onClick={() => handleOptionSelect(index)}
                        className={`w-full py-3 px-4 rounded-lg border transition-colors ${
                            selectedOption === index
                                ? "bg-light-primary text-white dark:bg-dark-primary"
                                : "bg-light-tertiary dark:bg-dark-tertiary"
                        }`}
                    >
                        {option}
                    </Button>
                ),
            )}
        </div>
    );
}

export default DisplayOptions;


