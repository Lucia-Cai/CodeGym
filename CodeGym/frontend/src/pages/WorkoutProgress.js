import React from 'react';
import ExerciseItem from '../components/ExerciseItem';
import { useNavigate } from 'react-router-dom';
import '../styles/WorkoutProgress.css';

function WorkoutProgress() {
  const navigate = useNavigate();

  const handleMenuItemClick = () => {
    navigate("/workoutplans");
  };

  return (
    <div>
      <h1>TESTTTTT</h1>
      <div>
        <button className="workoutPlanButton" onClick={handleMenuItemClick}>
          Go to Workout Plans
        </button>
      </div>
    </div>
  );
}

export default WorkoutProgress;
