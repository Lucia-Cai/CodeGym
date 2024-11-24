import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/WorkOutPlans.css';
import { addWorkoutSession } from "../axios.js";

function WorkOutPlans() {

  const location = useLocation();

  // Predefined list of exercises (autopopulated from another form in a real use case)
  const predefinedExercises = location.state?.exercise_list || []; // Default to an empty object

  // State to manage the form inputs
  const [formData, setFormData] = useState(
    predefinedExercises.map((exercise) => ({
      name: exercise.name,
      exercise_id: exercise.exercise_id,
      session_date: "2000-01-01", //TODO: change this to actual data
      weight: '',
    }))
  );

  // Handle input change for reps and weights
  const handleInputChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Session Data:', formData);
    formData.forEach(exercise => {
      addWorkoutSession({
        "exercise_id": exercise.exercise_id,
        "weight": exercise.weight,
        "session_date": exercise.session_date
      });
      
    });
    alert('Workout session added successfully!');
    // You can send this data to the backend or perform other actions here.
  };

  return (
    <div className="workout-plans">
      <h1>Add Workout Session</h1>
      <form onSubmit={handleSubmit}>
        {formData.map((exercise, index) => (
          <div className="exercise-row" key={index}>
            <h3>{exercise.name}</h3>
            <label>
              Weight (kg):
              <input
                type="number"
                value={exercise.weight}
                onChange={(e) => handleInputChange(index, 'weight', e.target.value)}
                required
              />
            </label>
          </div>
        ))}
        <button type="submit">Add Session</button>
      </form>
    </div>
  );
}

export default WorkOutPlans;
