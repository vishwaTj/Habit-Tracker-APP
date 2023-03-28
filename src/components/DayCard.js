import React from "react";
import { useDispatch } from "react-redux";
import { habitCompleted, habitUnChecked } from "../redux/features/HabitReducer";

const DayCard = ({ day }) => { 
  const today = new Date();
  const todayDay = today.getDay();
  const dispatch = useDispatch();

  const date = new Date(day.yyyy, day.mm, day.dd);

  const markDone = () => {
    if (day.id > todayDay) {
      alert("You cannot change your next days status");
      return;
    }
    dispatch(habitCompleted(day.id));
  };

  const MarkUncheck = () => {
    if (day.id > todayDay) {
      alert("You cannot change your next days status");
      return;
    }
    dispatch(habitUnChecked(day.id));
  };

  return (
    <div className="day-container">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5>{day.day}</h5>
          <p>
            {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
          </p>
        </div>
        <div className="day-container">
          <i className={day.isDone === true ? "fa-solid fa-square-check active" : "fa-solid fa-square-check"} onClick={markDone}></i>
          <i className={day.isDone === false ? "fa-solid fa-square-xmark active" : "fa-solid fa-square-xmark"} onClick={MarkUncheck}></i>
        </div>
      </div>
    </div>
    
  );
};

export default DayCard;
