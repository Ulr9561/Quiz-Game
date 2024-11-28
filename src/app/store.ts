import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./slices/navbar";
import quizReducer from "./slices/quiz";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
    navbarReducer,
    quizReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/REHYDRATE", "persist/PERSIST"],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
