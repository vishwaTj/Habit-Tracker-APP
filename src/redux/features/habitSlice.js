
import { createSlice } from "@reduxjs/toolkit";
let id = 1;

export const habitSlice = createSlice({
     name:"habits",
     initialState: [],
     reducers: {
        addHabit: (state, action) => {
            const today = new Date();
            let day = today.getDate()  -today.getDay();
            const month = today.getMonth();
            const year = today.getFullYear();
            const Habit = {
                id : id++,
                name: action.payload
            };
            const tempHabits = [...state, action];
            return tempHabits; 
        },

        deleteHabit: (state, action) => {
            const tempHabits = state.filter ((habit) => habit.id !== action.payload);
            return tempHabits;
        },
        habitDone: (state, action) => {
            let tempHabits = state;
            for( let i = 0; i< tempHabits.length;  i++) {
                if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
                    tempHabits[i].weekLog[action.payload].isDone = true;
                }
            }
            return tempHabits;
        },
        habitUnDone: (state, action) => {
            let tempHabits = state;
            for (let i = 0; i < tempHabits.length; i++) {
                if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
                    tempHabits[i].weekLog[action.payload].isDone = false;
                }
            }
            return tempHabits;
        },
        habitNone: (state, action) => {
            let tempHabits = state;
            for (let i = 0; i < tempHabits.length; i++) {
                if(tempHabits[i].id === Number(localStorage.getItem("id"))) {
                    tempHabits[i].weekLog[action.payload].isDone = "";
                }
            }
            return tempHabits;
        },
     },
});

export const { addHabit, deleteHabit, habitDone, habitUnDone, habitNone } = habitSlice.actions;

export default habitSlice.reducer;