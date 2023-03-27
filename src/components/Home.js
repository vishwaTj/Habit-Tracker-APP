import React, { useState } from "react";
import Habit from "./Habit";
import { useSelector, useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [habitName, setHabitName] = useState("");

  const handleSave = () => {
    const trimmedHabitName = habitName.trim();
    // check if the trimmed habit name is more than 2 characters and only contains alphabets
    const isValid = /^[A-Za-z]{3,}$/.test(trimmedHabitName);
    if (isValid) {
      // Dispatch an action to add a new habit to the Redux store.
      dispatch(addHabit(trimmedHabitName));
      setHabitName("");
    } else {
      alert("Habit name should be more than 2 alphabet and only contain alphabets.");
    }
  };

  // retrieve the habits state from the Redux store
  let habitsState = useSelector((state) => state["habits"]);

  return (
    <div className="main-container">
      <div>
          <form className="input-section">
           <h1>Habit Tracker APP</h1>  
           <div className="input-box"> 
            <input
              type="text"
              minLength="3"
              required
              className="form-control"
              id="habit-input"
              placeholder="Enter A habit"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
            />
           </div> 
          <div> 
           <button className="add-habit-btn btn btn-primary" type="button" onClick={handleSave}>
             <i className="fa-solid fa-plus"></i> Add
           </button>
          </div>            
        </form>
      </div>
       <div className="habits-list">
         {habitsState.map((habit, index) => (
          <Habit habit={habit} habitNumber={index} key={habit.id} />
         ))}
       </div>      
    </div>
  );
};

export default Home;
