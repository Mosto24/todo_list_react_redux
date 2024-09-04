import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksReducer";
import languageReducer from "./languageReducer";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        languageReducer: languageReducer
    }
})