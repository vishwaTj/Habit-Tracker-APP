import React from "react";
import DayView from "./Dayview";
import { useSelector } from "react-redux";

const WeekView = () => {
  // call use selector hook for getting state from reducer
  let habitsState = useSelector((state) => state.habits);

  // getting habit from habits state acording to local storage id and set it on habit
  let habit = {};
  for (let i = 0; i < habitsState.length; i++) {
    if (habitsState[i].id === Number(localStorage.getItem("id"))) {
      habit = habitsState[i];
    }
  }

  return (
    <div className="week-view-container">
      <div className="btn-container">
        <a href="/" className="btn btn-outlined bg-info rounded-0" role="button">
          Back to Home
        </a>
      </div>
      <h1 className="text-center" style={{ textTransform: "capitalize" }}>
        Progress Name:- {habit.name}
      </h1>
      <div className="days-container">
        {habit.weekLog.map((day, index) => (
          <DayView day={day} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WeekView;
