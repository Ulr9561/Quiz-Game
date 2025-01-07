import React from "react";
import { cn } from "../../../utils";

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-10 font-grotesk w-full rounded-sm border border-light-border dark:border-dark-border",
                "bg-light-background dark:bg-dark-tertiary",
                "px-3 py-2 text-sm ring-offset-white",
                "text-light-textPrimary dark:text-dark-textPrimary",
                type === "file" && "file:border-0 file:bg-transparent file:text-sm file:font-medium",
                "placeholder:text-light-textSecondary dark:placeholder:text-dark-textSecondary placeholder:font-normal",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary dark:focus-visible:ring-dark-primary",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

export default Input;
