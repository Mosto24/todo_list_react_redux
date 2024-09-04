import { createSlice } from "@reduxjs/toolkit";

let ru = {
    addNewTask: "Добавить новую задачу",
    taskName: "Название задачи",
    taskDescription: "Описание",
    cancel: "Отмена",
    ok: "Ok"
}

let eng = {
    addNewTask: "Add new task",
    taskName: "Task name",
    taskDescription: "Descriprion",
    cancel: "Cancel",
    ok: "Ok"
}

const initalLang = localStorage.getItem('langMode') || 'eng';

const language= createSlice({
    name: "language",
    initialState: {
        language: initalLang,
        ru: ru,
        eng: eng
    },
    reducers: {
        chooseLang: (state, {payload}) => {
            state.language = payload.language
            localStorage.removeItem('langMode');
            localStorage.setItem('langMode', payload.language);
        }
    },
       
})

export const { chooseLang } = language.actions
export default language.reducer