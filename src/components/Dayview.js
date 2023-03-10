import React from 'react'
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone} from "../redux/features/habitSlice";


const Dayview = ({day}) => {
  const today = new Date();
  const todayDay = today.getDay();

  const dispatch = useDispatch();

  const date = new Date(day.yyyy, day.mm, day.dd);
  
  const markToDone = () => {
    if(day.id > todayDay) {
        alert("You cannot change your next days status");
        return;
    }
    dispatch(habitDone(day.id));
  };

  const markToUndone = () => {
    if (day.id > todayDay) {
        alert ("You cannot change your next days status");
        return;
    }
    dispatch(habitUnDone(day.id));
  };

  const markToNone = () => {
    if (day.id > todayDay) {
        alert("You cannot change your next days status");
        return;
    }
    dispatch(habitNone(day.id));
  }

  return (
    <div className='day-container'>
        <div className='d-flex justify-content-between align-items-center'>
           <div>
              <h5>{day.id}</h5>
              <p>
                {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear}
              </p>
           </div>
           <div className='day-container'>
              <i className={day.isDone === true ? "fa-solid fa-circle-check circle-icon active" : "fa-solid fa-circle-check circle-icon"} onClick={markToDone}></i>
              <i className={day.isDone === false ? "fa-solid fa-circle-xmark circle-icon active" : "fa-solid fa-circle-xmark circle-icon"} onClick={markToUndone}></i>
              <i className={day.isDone === "" ? "fa-solid fa-circle-minus circle-icon active" : "fa-solid fa-circle-minus circle-icon"} onClick={markToNone}></i>
           </div>
        </div>
    </div>
  )
}

export default Dayview;
