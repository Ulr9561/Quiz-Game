
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Quiz } from "../../types";
import { RootState } from "../store";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

interface QuizState {
    quiz: Quiz | null;
    isQuizStarted: boolean;
    score: number;
}

const quizConfig = {
    key: "quiz",
    storage,
};


const initialState: QuizState = {
    quiz: null,
    isQuizStarted: false,
    score: 0,
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
        endQuiz(state) {
            state.isQuizStarted = false;
        },
    },
});

const quizReducer = persistReducer(quizConfig, quizSlice.reducer);

export default quizReducer;
export const { setQuiz, updateScore, endQuiz } = quizSlice.actions;
export const selectQuiz = (state: RootState) => state.quizReducer.quiz;
