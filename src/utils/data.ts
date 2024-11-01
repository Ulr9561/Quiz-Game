import { faArrowTrendUp, faBook, faBullseye, faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { BoardCardProps } from "../components/Dashboard/ui/boardCard";

export const userStats: BoardCardProps[] = [
    {
        title: "Total Points",
        value: 12580,
        icon: faArrowTrendUp,
        color: "text-light-success dark:text-dark-success",
    },
    {
        title: "Quiz Complétés",
        value: 58,
        icon: faBook,
        color: "text-light-primary dark:text-dark-primary",
    },
    {
        title: "Score Moyen",
        value: "85%",
        icon: faBullseye,
        color: "text-light-secondary dark:text-dark-secondary",
    },
    {
        title: "Classement",
        value: "#156",
        icon: faRankingStar,
        color: "text-light-primary dark:text-dark-primary",
    },
];
