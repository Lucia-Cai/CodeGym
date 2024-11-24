import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/WorkoutProgress.css';
import {useGetExercises} from "../axios.js";
import MenuItem from '../components/MenuItem';
import '../styles/WorkoutProgress.css';

function WorkoutProgress() {
  const navigate = useNavigate();
  const location = useLocation();

  const { workout_name, workout_id } = location.state;

  const exercises = useGetExercises(workout_id);

  const handleMenuItemClick = () => {
    navigate("/workoutplans");
  };

  return (
    <div>
      <div>
      <h1 className = "workoutTitle">{workout_name}</h1>
      <div>
      <div className = "workoutList">
            {exercises.map((exercise)=>(
                <MenuItem 
                name = {exercise.name} 
                description ={`reps: ${exercise.reps}`}/>
            ))}
        </div>
        <button className="workoutPlanButton1" onClick={handleMenuItemClick}>
          Go to Workout Plans
        </button>
      </div>
    </div>
    </div>
  );
}

export default WorkoutProgress;
