import { combineReducers } from "redux";
import habitReducer from "./features/habitSlice";

const rootReducer = combineReducers({
   habits: habitReducer
})


export default rootReducer;