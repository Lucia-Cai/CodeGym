import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/WorkoutProgress.css';
import {useGetExercises, useWorkoutSessions, getWorkoutSessionsForExercise} from "../axios.js";
import ExerciseItem from '../components/ExerciseItem';

function WorkoutProgress() {
  const navigate = useNavigate();
  const location = useLocation();

const { workout_name, workout_id } = location.state || {}; // Default to an empty object
const exercises = useGetExercises(workout_id);

const [exerciseSessions, setExerciseSessions] = useState({});

useEffect(() => {
  const fetchSessions = async () => {
    const sessionsMap = {};
    for (const exercise of exercises) {
      try {
        const sessions = await getWorkoutSessionsForExercise(exercise.exercise_id);
        sessionsMap[exercise.exercise_id] = sessions.map((session) => ({
          date: session.session_date,
          weight: session.weight,
        }));
      } catch (error) {
        console.error(`Error fetching sessions for exercise ${exercise.exercise_id}:`, error);
      }
    }
    setExerciseSessions(sessionsMap);
  };

  if (exercises.length > 0) {
    fetchSessions();
  }
}, [exercises]);




  
const handleMenuItemClick = () => {
  navigate("/workoutplans");
};

  return (
    <div>
      <div className = "workoutprogress">
      <div className = "leftSide">
      <h1 className = "workoutTitle">{workout_name}</h1>
      <div className = "workoutList">
            {exercises.map((exercise)=>(
                <ExerciseItem 
                id = {exercise.exercise_id}
                name = {exercise.name} 
                rep = {exercise.reps} 
                cur_weight = {exercise.weight}
                data = {exerciseSessions[exercise.exercise_id] || []} 
                />
            ))}

            
        </div>
        </div>
        <div className = "rightSide">
        <button className="workoutPlanButton1" onClick={handleMenuItemClick}>
          Go to Workout Plans
        </button>
      </div>
    </div>
    </div>
  );
}

export default WorkoutProgress;
