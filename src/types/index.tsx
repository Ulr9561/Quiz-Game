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

export type QuestionProps = Question;

export interface Question {
    question: string;
    options: string[];
    answer: number;
}

export interface Quiz {
    title: string;
    description: string;
    category: string;
    difficulty: "Débutant" | "Intermédiaire" | "Avancé";
    questionsCount: number;
    averageScore: number;
    duration: number;
    questions: QuestionProps[];
}

export interface User {
    name: string;
    email: string;
    username: string;
    avatar: string;
    quizzesCreated?: Quiz[];
    totalScore: number;
    total_points: number;
    quizzes_completed?: number;
    exp: number;
    rank: number;
    achievements: [];
    friends: User[];
    notifications: Notification[];
    recentActivities: QuizStat[];
    progress: number;
    leaderboardPosition: number;
}

interface QuizStat {
    quiz: Quiz;
    attempts: number;
    score: number;
    date: Date;
    solve_time: string;
}
