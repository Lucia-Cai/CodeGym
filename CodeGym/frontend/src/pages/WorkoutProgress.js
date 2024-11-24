import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/WorkoutProgress.css';

function WorkoutProgress() {
  const navigate = useNavigate();
  const location = useLocation();

  const { workout_id } = location.state;

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
