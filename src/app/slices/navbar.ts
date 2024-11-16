import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavbarProps } from "../../types";
import { RootState } from "../store";

const initialState: NavbarProps = {
    isAuthenticated: false,
    links: [],
    isQuiz: false,
}
const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        setIsQuiz: (state, action: PayloadAction<boolean>) => {
            state.isQuiz = action.payload;
        }
    }
});

export default navbarSlice.reducer;
export const { setIsQuiz } = navbarSlice.actions;
export const selectIsQuiz = (state: RootState) => state.navbarReducer.isQuiz;
