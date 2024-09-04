import { createSlice } from "@reduxjs/toolkit";

let initalState = JSON.parse(localStorage.getItem('item')) || [];

const tasks = createSlice({
    name: "tasks",
    initialState: {
        tasksArray: initalState,
    },
    reducers: {
        addTask: (state, {payload}) => {
            state.tasksArray.push({
                id: payload.id,
                name: payload.name,
                text: payload.text
            });
            localStorage.setItem('item', JSON.stringify(state.tasksArray));
        },
        deleteTask: (state, {payload}) => {
            state.tasksArray = state.tasksArray.filter(i => i.id !== payload.id);
            localStorage.removeItem('item');
            localStorage.setItem('item', JSON.stringify(state.tasksArray));
        },
        redactTask: (state, {payload}) => {
            state.tasksArray = state.tasksArray.map(i => {
                console.log(i);
                if (i.id == payload.id) {
                    i.name = payload.name
                    i.text = payload.text
                }
                 return i
            });
            localStorage.removeItem('item');
            localStorage.setItem('item', JSON.stringify(state.tasksArray));
        }
    },
       
})

export const { addTask, deleteTask, redactTask } = tasks.actions
export default tasks.reducer