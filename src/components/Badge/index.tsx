import React from "react";
import { cn } from "../../utils";

type BadgeProps = {
    content?: string | number;
    className?: string;
    color?: "red" | "green" | "blue" | "gray" | "yellow" | "purple";
    size?: "small" | "medium" | "large";
    isPill?: boolean;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
};

const Badge: React.FC<BadgeProps> = ({
    content,
    className = "",
    color = "green",
    size = "small",
    isPill = true,
    position = "top-right",
}) => {
    const badgeClasses = cn(
        "absolute inline-flex items-center justify-center transform",
        {
            "bg-red-500": color === "red",
            "bg-green-500": color === "green",
            "bg-blue-500": color === "blue",
            "bg-gray-500": color === "gray",
            "bg-yellow-500": color === "yellow",
            "bg-purple-500": color === "purple",
        },
        {
            "w-2.5 h-2.5": size === "small" && !content,
            "w-4 h-4": size === "medium" && !content,
            "w-6 h-6": size === "large" && !content,
            "text-xs px-2 py-0.5": size === "small" && content,
            "text-sm px-3 py-1": size === "medium" && content,
            "text-md px-4 py-1.5": size === "large" && content,
        },
        isPill && content ? "rounded-full" : "rounded-full",
        {
            "top-0 right-0 translate-x-1/2 -translate-y-1/2":
                position === "top-right",
            "top-0 left-0 -translate-x-1/2 -translate-y-1/2":
                position === "top-left",
            "bottom-0 right-0 translate-x-1/2 translate-y-1/2":
                position === "bottom-right",
            "bottom-0 left-0 -translate-x-1/2 translate-y-1/2":
                position === "bottom-left",
        },
        className,
    );

    return <span className={badgeClasses}>{content && content}</span>;
};

export default Badge;
