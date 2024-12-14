import { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "primary" | "secondary" | "tertiary" | "default";
    size?: "small" | "medium" | "large";
    className?: string;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: "contained" | "text" | "outlined";
}

const Button: React.FC<ButtonProps> = ({ type, children, className, variant, size, color, ...props }) => {
    return (
        <button
            type={type}
            className={cn(
                "flex justify-center items-center focus:outline-none border-none disabled:opacity-55 disabled:pointer-events-none text-light-textPrimary dark:text-dark-textPrimary cursor-pointer p-4 font-grotesk font-bold lg:text-lg text-base outline-none transition-all duration-200 rounded-sm",
                color === "primary" &&
                    "bg-light-primary active:bg-light-primary   hover:bg-light-primary/80 dark:bg-dark-primary dark:hover:bg-light-primary/80 dark:active:bg-dark-primary ",
                color === "secondary" &&
                    "bg-light-secondary hover:bg-light-secondary/80 dark:bg-dark-secondary  dark:hover:bg-dark-secondary/80",
                size === "small" && "text-sm px-3 py-1.5 h-8",
                size === "large" && "text-lg px-5 py-3 h-12 sm:min-w-36",
                size === "medium" && "text-md px-4 py-2 h-10 sm:min-w-28",
                variant === "contained" &&
                    "bg-light-primary hover:bg-light-primary/80 dark:bg-dark-primary dark:hover:bg-light-primary/80",
                variant === "text" &&
                    "text-light-textPrimary dark:text-dark-textPrimary",
                variant === "outlined" &&
                    "bg-transparent border-1 border-light-textPrimary dark:border-dark-textPrimary",
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button
