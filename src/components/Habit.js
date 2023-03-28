import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/features/HabitReducer";
import { useNavigate } from "react-router-dom";


const Habit = ({ habit, habitNumber }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const today = new Date();
  const todayDay = today.getDay();
  let completedCount = 0;
  // counting the number of times habit has been completed
  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      completedCount++;
    }
  }

  const handleDelete = () => {
    dispatch(deleteHabit(habit.id)); // dispatch deleteHabit action with the habit's id
  };

  const setId = () => {
    localStorage.setItem("id", habit.id); // set the item to local storage to retrieve it on other page
    navigate("/weekly");
  };

  return (
    <div className="habit" >
      <div className="habit-left">
        <div>
          <h4>
            {habit.name}
          </h4>
          <div className="percentage-container">
            {/* Calculating the percentage for progress Bar */}
            <div className="percentage-bar" style={{ "--percentage-completed": `${(completedCount / (todayDay + 1)) * 100}%` }}>
              <div className="percentage-bar-text">{Math.round((completedCount / (todayDay + 1)) * 100)}%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="habit-right">
        <div className="week-btn" onClick={setId}>
          Weekly Track
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;
