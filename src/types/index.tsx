import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

export type NavLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
    isActive?: boolean;
}

export interface FeatureCardProps {
    icon: IconDefinition;
    title: string;
    description: string;
}

export type NavbarProps = {
    isAuthenticated: boolean;
    links: NavLinkProps[];
    isQuiz?: boolean;
};

export interface QuestionProps {
    question: string;
    options: string[];
    answer: number;
}
