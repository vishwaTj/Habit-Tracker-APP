import React from "react";
import DayCard from "./DayCard";
import { useSelector } from "react-redux";

const WeekView = () => {
  // Extract the habit state from Redux Store
  let Habits = useSelector((state) => state.habits);

  // Retrieving a single habit from local storage based on id
  let habit = {};
  for (let i = 0; i < Habits.length; i++) {
    if (Habits[i].id === Number(localStorage.getItem("id"))) {
      habit = Habits[i];
    }
  }

  return (
    <div className="week-view-container">
      <div className="Habit-heading">
        <h1 className="text-center">
          Habit :- {habit.name}
        </h1>
      </div>  
      <div className="btn-container">
        <a href="/" >
          Home Page
        </a>
      </div>
      <div className="days-container">
        {habit.weekLog.map((day, index) => (
          <DayCard day={day} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WeekView;
