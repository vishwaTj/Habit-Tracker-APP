import React, {useState} from 'react';
import Habit from "./Habit";
import {useSelector, useDispatch} from "react-redux";
import {addHabit} from "../redux/features/habitSlice";

const Home = () => {
  const dispatch = useDispatch(); //?
  const [habitName, setHabitName] = useState("");

  const handleSave = () => {
    const trimmedHabitName = habitName.trim();
    //check if the trimmed habit name is more than 2 characters and only contains alphabets
    const isValid = /^[A-Za-z]$/.text(trimmedHabitName);
    if(isValid) {
        // Dispatch an action to add new habit to the Redux store.
        dispatch(addHabit(trimmedHabitName));
        alert("Your habit added successfully");
        setHabitName("");
    } else {
        alert("Habit name should be more than 2 alphabet and only contain alphabets");
    }
  };

  //retrieve the habits state from Redux store
  let habitState = useSelector((state) => state["habits"]);

  return (
    <div className='container habits-container my-3'>
      <div className='container d-flex justify-content-center my-3'>
       <div>
          <h3 className='text-center mb-4'>Progress Pilot</h3>
          <form className='add-habit-form'>
            <div className='form-group'>
              <div className='input-group'>
                <input
                  type="text"
                  minLength="3"
                  required
                  className='form-control col-8'
                  id="habit-input"
                  placeholder='Enter a habit with more than 2 characters'
                  value={habitName}
                  onChange={(e)=> setHabitName(e.target.value)}
                />
                <button className='add-habit-btn btn btn-primary' type="button" onClick={handleSave}>
                  <i className='fa-solid fa-plus'></i> Add
                </button>
              </div>
            </div>
          </form>
       </div>
      </div>
      <div className='habits-list'>
        {habitState.map((habit,index) => (
          <Habit habit={habit} habitNumber={index} key={habit.id} />
        ))}
      </div>

      </div>
  );
};

export default Home;
