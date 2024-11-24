import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/WorkoutProgress.css';
import {useGetExercises} from "../axios.js";
import ExerciseItem from '../components/ExerciseItem';


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



function WorkoutProgress() {
  const navigate = useNavigate();
  const location = useLocation();

const { workout_name, workout_id } = location.state || {}; // Default to an empty object


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
                data = {data}
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
