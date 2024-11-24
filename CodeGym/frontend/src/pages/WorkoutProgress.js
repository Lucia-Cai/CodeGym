import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/WorkoutProgress.css';
import {useGetExercises} from "../axios.js";
import MenuItem from '../components/MenuItem';

function WorkoutProgress() {
  const navigate = useNavigate();
  const location = useLocation();

  const { workout_id } = location.state;

  const exercises = useGetExercises(workout_id);

  const handleMenuItemClick = () => {
    navigate("/workoutplans");
  };

  return (
    <div>
      <h1>TESTTTTT</h1>
      <div>
      <div>
            {exercises.map((exercise)=>(
                <MenuItem 
                name = {exercise.name} 
                description ={`reps: ${exercise.reps}`}/>
            ))}
        </div>
        <button className="workoutPlanButton" onClick={handleMenuItemClick}>
          Go to Workout Plans
        </button>
      </div>
    </div>
  );
}

export default WorkoutProgress;
