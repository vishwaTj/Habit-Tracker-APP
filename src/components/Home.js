import React, { useState } from "react";
import Habit from "./Habit";
import { useSelector, useDispatch } from "react-redux";
import { addHabit } from "../redux/features/HabitReducer";

const Home = () => {
  
  // state to take down the name of a habit
  const [habit, sethabit] = useState(""); 

  // dispatch to send the action
  const dispatch = useDispatch();


  const SaveHabit = () => {

    const trimmedhabit = habit.trim();
    // Habit length should be greaterthan 2 characters
    const isValid = /^[A-Za-z]{3,}$/.test(trimmedhabit);

    if (isValid) {
      // Dispatch action to Store of Redux
      dispatch(addHabit(trimmedhabit));
      sethabit("");
    } else {
      alert("Habit should have more than 2 characters and only alphabets");
    }
  };

  // Extract the habit state from Redux Store
  let Habits = useSelector((state) => state["habits"]);

  return (
    <div className="main-container">

      {/* ******** input setion component ******** */}
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
              value={habit}
              onChange={(e) => sethabit(e.target.value)}
            />
           </div> 
          <div> 
           <button className="add-habit-btn btn btn-primary" type="button" onClick={SaveHabit}>
             <i className="fa-solid fa-plus"></i> Add
           </button>
          </div>            
        </form>
      </div>

      {/* *****  Day wise update section ******  */}
       <div className="habits-list">
         {Habits.map((habit, index) => (
          <Habit habit={habit} habitNumber={index} key={habit.id} />
         ))}
       </div>      
    </div>
  );
};

export default Home;
