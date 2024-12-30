
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Quiz, QuizContextType } from "../../types";
import { RootState } from "../store";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


const quizConfig = {
    key: "quiz",
    storage,
};


const initialState: QuizContextType = {
    quiz: null,
    score: 0,
    streak: 0,
    xp: 0,
    currentLevel: 0,
    timeLeft: 0,
    currentQuestionIndex: 0,
    selectedOption: null,
    isQuizOver: false,
    direction: 0,
    questions: 0
};

const quizSlice = createSlice({
    name: "quizSlice",
    initialState,
    reducers: {
        setQuiz: (state, action: PayloadAction<Quiz>) => {
            state.quiz = action.payload;
        },
        updateScore(state, action: PayloadAction<number>) {
            state.score = action.payload;
        },
    },
});

const quizReducer = persistReducer(quizConfig, quizSlice.reducer);

export default quizReducer;
export const { setQuiz, updateScore } = quizSlice.actions;
export const selectQuiz = (state: RootState) => state.quizReducer.quiz;
