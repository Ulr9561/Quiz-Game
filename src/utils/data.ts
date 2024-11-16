import {
    faArrowTrendUp,
    faBook,
    faBullseye,
    faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { BoardCardProps } from "../components/Dashboard/ui/boardCard";
import { QuizCardProps } from "../components/Dashboard/ui/quizCard";
import { QuestionProps } from "../types";

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

export const quizData: QuizCardProps[] = [
    {
        title: "Introduction à la Programmation",
        description:
            "Découvrez les bases de la programmation et les concepts fondamentaux.",
        category: "Programmation",
        difficulty: "Débutant",
        questionsCount: 10,
        averageScore: 80,
        duration: "10 min",
        onPlay: () => console.log("Playing 'Introduction à la Programmation'"),
        questions: [
            {
                question: "Quelle est la fonction principale de JavaScript?",
                options: [
                    "Écrire du code",
                    "Faire des calculs",
                    "Gérer des données",
                    "Écrire des instructions",
                ],
                answer: 0,
            },
            {
                question:
                    "Quelle est la syntaxe pour déclarer une variable en JavaScript?",
                options: ["var x = 10", "let x = 10", "const x = 10", "x = 10"],
                answer: 1,
            },
            {
                question:
                    "Quelle est la syntaxe pour afficher une valeur en JavaScript?",
                options: [
                    "console.log(x);",
                    "print(x);",
                    "display(x);",
                    "alert(x);",
                ],
                answer: 0,
            },
            {
                question:
                    "Quelle est la syntaxe pour conditionner un code en JavaScript?",
                options: [
                    "if (x > 10) { console.log('x est supérieur à 10'); }",
                    "if (x < 10) { console.log('x est inférieur à 10'); }",
                    "if (x == 10) { console.log('x est égal à 10'); }",
                    "if (x >= 10) { console.log('x est supérieur ou égal à 10'); }",
                ],
                answer: 0,
            },
            {
                question:
                    "Quelle est la syntaxe pour itérer sur une liste en JavaScript?",
                options: [
                    "for (let i = 0; i < 5; i++) { console.log(i); }",
                    "for (let i = 0; i <= 5; i++) { console.log(i); }",
                    "for (let i = 0; i >= 5; i++) { console.log(i); }",
                    "for (let i = 0; i < 5; i++) { console.log(i); }",
                ],
                answer: 0,
            },
            {
                question:
                    "Quelle est la syntaxe pour faire une boucle infinie en JavaScript?",
                options: [
                    "while (true) { console.log('Hello, World!'); }",
                    "for (let i = 0; i < Infinity; i++) { console.log(i); }",
                    "while (false) { console.log('Hello, World!'); }",
                    "for (let i = 0; i < 5; i++) { console.log(i); }",
                ],
                answer: 1,
            },
            {
                question:
                    "Quelle est la syntaxe pour récupérer la valeur d'une variable en JavaScript?",
                options: [
                    "console.log(x);",
                    "print(x);",
                    "display(x);",
                    "alert(x);",
                ],
                answer: 0,
            },
            {
                question:
                    "Quelle est la syntaxe pour déclarer une fonction en JavaScript?",
                options: [
                    "function greet() { console.log('Hello, World!'); }",
                    "function greet(name) { console.log('Hello,'+ name + '!'); }",
                    "function greet(name) { console.log('Hello,'+ name); }",
                    "function greet() { console.log('Hello, World!'); }",
                ],
                answer: 0,
            },
            {
                question:
                    "Quelle est la syntaxe pour appeler une fonction en JavaScript?",
                options: [
                    "console.log(greet());",
                    "greet();",
                    "console.log(greet('World'));",
                    "greet('World');",
                ],
                answer: 1,
            },
            {
                question:
                    "Quelle est la syntaxe pour calculer une somme en JavaScript?",
                options: [
                    "console.log(x + y);",
                    "console.log(x - y);",
                    "console.log(x * y);",
                    "console.log(x / y);",
                ],
                answer: 0,
            },
        ],
    },
    {
        title: "Histoire du Monde",
        description:
            "Testez vos connaissances en histoire mondiale et événements majeurs.",
        category: "Histoire",
        difficulty: "Intermédiaire",
        questionsCount: 15,
        averageScore: 65,
        duration: "15 min",
        onPlay: () => console.log("Playing 'Histoire du Monde'"),
    },
    {
        title: "Maîtriser le JavaScript",
        description: "Un quiz avancé pour les passionnés de JavaScript.",
        category: "Programmation",
        difficulty: "Avancé",
        questionsCount: 20,
        averageScore: 50,
        duration: "20 min",
        onPlay: () => console.log("Playing 'Maîtriser le JavaScript'"),
    },
    {
        title: "Géographie des Continents",
        description: "Connaissez-vous bien les continents et leurs pays?",
        category: "Géographie",
        difficulty: "Débutant",
        questionsCount: 12,
        averageScore: 75,
        duration: "12 min",
        onPlay: () => console.log("Playing 'Géographie des Continents'"),
    },
    {
        title: "Sciences Physiques",
        description: "Un quiz sur les lois et principes de la physique.",
        category: "Science",
        difficulty: "Intermédiaire",
        questionsCount: 15,
        averageScore: 60,
        duration: "15 min",
        onPlay: () => console.log("Playing 'Sciences Physiques'"),
    },
    {
        title: "Culture Pop",
        description:
            "Vérifiez vos connaissances sur la culture populaire actuelle.",
        category: "Divertissement",
        difficulty: "Débutant",
        questionsCount: 10,
        averageScore: 85,
        duration: "8 min",
        onPlay: () => console.log("Playing 'Culture Pop'"),
    },
    {
        title: "Mathématiques Avancées",
        description: "Un quiz difficile pour les experts en mathématiques.",
        category: "Mathématiques",
        difficulty: "Avancé",
        questionsCount: 25,
        averageScore: 40,
        duration: "25 min",
        onPlay: () => console.log("Playing 'Mathématiques Avancées'"),
    },
    {
        title: "Gastronomie Française",
        description:
            "Découvrez des faits intéressants sur la cuisine française.",
        category: "Cuisine",
        difficulty: "Intermédiaire",
        questionsCount: 14,
        averageScore: 70,
        duration: "10 min",
        onPlay: () => console.log("Playing 'Gastronomie Française'"),
    },
    {
        title: "Les Inventions",
        description:
            "Qui a inventé quoi ? Découvrez les inventeurs et leurs inventions.",
        category: "Science",
        difficulty: "Débutant",
        questionsCount: 12,
        averageScore: 78,
        duration: "10 min",
        onPlay: () => console.log("Playing 'Les Inventions'"),
    },
    {
        title: "Économie Mondiale",
        description: "Un quiz avancé sur l'économie et les finances mondiales.",
        category: "Économie",
        difficulty: "Avancé",
        questionsCount: 18,
        averageScore: 55,
        duration: "18 min",
        onPlay: () => console.log("Playing 'Économie Mondiale'"),
    },
    {
        title: "Mythologie Grecque",
        description: "Testez vos connaissances sur les dieux et mythes grecs.",
        category: "Culture",
        difficulty: "Intermédiaire",
        questionsCount: 15,
        averageScore: 68,
        duration: "12 min",
        onPlay: () => console.log("Playing 'Mythologie Grecque'"),
    },
    {
        title: "Art et Peinture",
        description:
            "Reconnaissez-vous les plus grands chefs-d'œuvre de la peinture ?",
        category: "Art",
        difficulty: "Intermédiaire",
        questionsCount: 10,
        averageScore: 72,
        duration: "10 min",
        onPlay: () => console.log("Playing 'Art et Peinture'"),
    },
    {
        title: "Système Solaire",
        description:
            "Un quiz pour en apprendre plus sur les planètes et l'univers.",
        category: "Science",
        difficulty: "Débutant",
        questionsCount: 10,
        averageScore: 82,
        duration: "9 min",
        onPlay: () => console.log("Playing 'Système Solaire'"),
    },
    {
        title: "Langues du Monde",
        description:
            "Connaissez-vous les langues et dialectes autour du monde ?",
        category: "Culture",
        difficulty: "Intermédiaire",
        questionsCount: 15,
        averageScore: 64,
        duration: "12 min",
        onPlay: () => console.log("Playing 'Langues du Monde'"),
    },
    {
        title: "Animaux Insolites",
        description:
            "Un quiz amusant sur les animaux rares et leurs particularités.",
        category: "Nature",
        difficulty: "Débutant",
        questionsCount: 8,
        averageScore: 87,
        duration: "7 min",
        onPlay: () => console.log("Playing 'Animaux Insolites'"),
    },
];

export const sampleQuestions: QuestionProps[] = [
    {
        question: "Quelle est la fonction principale de JavaScript?",
        options: [
            "Écrire du code",
            "Faire des calculs",
            "Gérer des données",
            "Écrire des instructions",
        ],
        answer: 0,
    },
    {
        question:
            "Quelle est la syntaxe pour déclarer une variable en JavaScript?",
        options: ["var x = 10", "let x = 10", "const x = 10", "x = 10"],
        answer: 1,
    },
    {
        question:
            "Quelle est la syntaxe pour afficher une valeur en JavaScript?",
        options: ["console.log(x);", "print(x);", "display(x);", "alert(x);"],
        answer: 0,
    },
    {
        question:
            "Quelle est la syntaxe pour conditionner un code en JavaScript?",
        options: [
            "if (x > 10) { console.log('x est supérieur à 10'); }",
            "if (x < 10) { console.log('x est inférieur à 10'); }",
            "if (x == 10) { console.log('x est égal à 10'); }",
            "if (x >= 10) { console.log('x est supérieur ou égal à 10'); }",
        ],
        answer: 0,
    },
    {
        question:
            "Quelle est la syntaxe pour itérer sur une liste en JavaScript?",
        options: [
            "for (let i = 0; i < 5; i++) { console.log(i); }",
            "for (let i = 0; i <= 5; i++) { console.log(i); }",
            "for (let i = 0; i >= 5; i++) { console.log(i); }",
            "for (let i = 0; i < 5; i++) { console.log(i); }",
        ],
        answer: 0,
    },
    {
        question:
            "Quelle est la syntaxe pour faire une boucle infinie en JavaScript?",
        options: [
            "while (true) { console.log('Hello, World!'); }",
            "for (let i = 0; i < Infinity; i++) { console.log(i); }",
            "while (false) { console.log('Hello, World!'); }",
            "for (let i = 0; i < 5; i++) { console.log(i); }",
        ],
        answer: 1,
    },
    {
        question:
            "Quelle est la syntaxe pour récupérer la valeur d'une variable en JavaScript?",
        options: ["console.log(x);", "print(x);", "display(x);", "alert(x);"],
        answer: 0,
    },
    {
        question:
            "Quelle est la syntaxe pour déclarer une fonction en JavaScript?",
        options: [
            "function greet() { console.log('Hello, World!'); }",
            "function greet(name) { console.log('Hello,'+ name + '!'); }",
            "function greet(name) { console.log('Hello,'+ name); }",
            "function greet() { console.log('Hello, World!'); }",
        ],
        answer: 0,
    },
    {
        question:
            "Quelle est la syntaxe pour appeler une fonction en JavaScript?",
        options: [
            "console.log(greet());",
            "greet();",
            "console.log(greet('World'));",
            "greet('World');",
        ],
        answer: 1,
    },
    {
        question:
            "Quelle est la syntaxe pour calculer une somme en JavaScript?",
        options: [
            "console.log(x + y);",
            "console.log(x - y);",
            "console.log(x * y);",
            "console.log(x / y);",
        ],
        answer: 0,
    },
];
