import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Quiz } from "../../types";

export type BoardCardProps = {
    title: string;
    value: string | number;
    color?: string;
    icon: IconDefinition;
};

export type QuizCardProps = Quiz;
