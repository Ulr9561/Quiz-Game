import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./slices/navbar"

const rootReducer = combineReducers({
    navbarReducer,
});
export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
