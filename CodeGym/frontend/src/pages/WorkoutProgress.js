import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/WorkoutProgress.css';
import {useGetExercises} from "../axios.js";
import ExerciseItem from '../components/ExerciseItem';

function WorkoutProgress() {
  const navigate = useNavigate();
  const location = useLocation();

const { workout_id } = location.state || {}; // Default to an empty object


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
                <ExerciseItem 
                name = {exercise.name} 
                rep = {exercise.reps} 
                cur_weight = {exercise.weight}
                data = {exercise.data}
                />
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
