import React from 'react';
import { useDispatch } from 'react-redux';
import deleteHabit from "../redux/features/habitSlice";
import {useNavigate} from "react-router-dom";


const Habit = ({habit, habitNumber}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const today = new Date();
  const todayDay = today.getDay();
  let countDone = 0;

  // loop through the Habit's weekLog and count the number of times the habit  was completed
  for (let i = 0 ; i < habit.weekLog.length; i++){
    if(habit.weekLog[i].isDone === true) {
      countDone++;
    }
  }

  const handleDelete = () => {
    dispatch(deleteHabit(habit.id)); // dispatch deleteHabit action with the habt's id
    alert("delete successfully");
  }
  
  const setId = () => {
    localStorage.setItem("id", habit.id); // set the habit's id in local storage
    navigate("/weekly");
  }

  return (
    <div className='habit'>
      <div className='habit-left'>
        <div>
          <h4>
             {habitNumber + 1}.{habit.name}
          </h4>
          <div className='"progress-continer'>
              <div className='progress-bar' style={{"--progress-width": `${(countDone / (todayDay + 1)) * 100}%`}}>
                <div className='progress-bar-text'>{Math.round((countDone / (todayDay + 1)) * 100 )}%</div>
              </div>
          </div>
        </div>
      </div>
      <div className='habit-right'>
        <div className='week-btn' onClick={setId}>
            Weekly Track
        </div>
        <i className='fa-solid fa-trash' onClick={handleDelete}></i>
      </div>  
    </div>
  );
}

export default Habit