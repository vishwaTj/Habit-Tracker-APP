import { combineReducers } from "redux";
import habitReducer from "./features/HabitReducer";

const rootReducer = combineReducers({
  habits: habitReducer,
});

export default rootReducer;
