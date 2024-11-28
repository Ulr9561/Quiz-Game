import { Question, Quiz } from "../types";

export class QuizManager {
    quiz: Quiz;
    private currentQuestionIndex: number;
    private score: number;
    constructor(quiz: Quiz) {
        this.quiz = quiz;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    getCurrentQuestion(): Question {
        return this.quiz.questions[this.currentQuestionIndex];
    }

    getCurrentQuestionIndex(): number {
        return this.currentQuestionIndex;
    }

    validateAnswer(optionIndex: number): boolean {
        const isCorrect =
            optionIndex ===
            this.quiz.questions[this.currentQuestionIndex].answer;
        if (isCorrect) {
            this.score += 10;
        }
        this.currentQuestionIndex++;
        return isCorrect;
    }

    getScore() {
        return this.score;
    }

    isQuizOver() {
        return this.currentQuestionIndex >= this.quiz.questions.length;
    }

    restartQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
}
