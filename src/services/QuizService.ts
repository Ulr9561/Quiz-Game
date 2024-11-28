import { Quiz } from "../types";
class QuizService {
    async getQuizzes(): Promise<Quiz[]> {
        try {
            const response = await fetch("http://localhost:8000/api/quizzes", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            const quizzes = await response.json();
            return quizzes;
        } catch (error) {
            console.error(
                "Erreur lors de la récupération des quizzes :",
                error,
            );

            throw error;
        }
    }
}
export default new QuizService();
