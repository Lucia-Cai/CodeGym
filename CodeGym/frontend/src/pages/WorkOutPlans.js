import React, { useState } from 'react';
import '../styles/WorkOutPlans.css';

function WorkOutPlans() {
  // Predefined list of exercises (autopopulated from another form in a real use case)
  const predefinedExercises = [
    'Bench Press',
    'Squats',
    'Deadlift',
    'Pull-ups',
    'Shoulder Press',
  ];

  // State to manage the form inputs
  const [formData, setFormData] = useState(
    predefinedExercises.map((exercise) => ({
      name: exercise,
      reps: '',
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
