/*import React from 'react'; 
import ContactLeft from '../assets/about.png';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className = "contact">
      <div className = "leftSide" style={{ backgroundImage: `url(${ContactLeft})` }}></div>  
      <div className = "rightSide">
        <h1> Contact Us 
            <form id = "contact-form" method="POST">
                <label htmlFor="name" >Workout Name</label>
                <input name="name" placeholder = "Enter full name..." type = "text" />
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email..." type="email" />
                <label htmlFor="message">Message</label>
                <textarea
                rows="6"
                placeholder="Enter message..."
                name="message"
                required
          ></textarea>
          <button type="submit"> Send Message</button>

            </form>
        </h1>
      </div>
      
    </div>
  )
}

export default Contact*/ 
import React, { useState } from 'react'; 
import ContactLeft from '../assets/about.png';
import '../styles/AddWorkout.css';

function AddWorkout() {
  const [workoutName, setWorkoutName] = useState('');
  const [exercises, setExercises] = useState([{ name: '', reps: '' }]);

  const handleWorkoutNameChange = (e) => {
    setWorkoutName(e.target.value);
  };

  const handleExerciseChange = (index, e) => {
    const newExercises = [...exercises];
    newExercises[index][e.target.name] = e.target.value;
    setExercises(newExercises);
  };

  const handleAddExercise = () => {
    setExercises([...exercises, { name: '', reps: '' }]);
  };

  const handleRemoveExercise = (index) => {
    const newExercises = exercises.filter((_, i) => i !== index);
    setExercises(newExercises);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., sending the workout data to an API or storing it)
    console.log({ workoutName, exercises });
  };

  return (
    <div className="addWorkout">
      <div className="leftSide" style={{ backgroundImage: `url(${ContactLeft})` }}></div> 
      <div className="rightSide">
        <h1>Workout Form</h1>
        <form id="contact-form" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="workout-name">Workout Name</label>
          <input
            name="workout-name"
            placeholder="Enter workout name..."
            type="text"
            value={workoutName}
            onChange={handleWorkoutNameChange}
            required
          />
          
          <h3>Exercises</h3>
          {exercises.map((exercise, index) => (
            <div key={index} className="exercise-row">
              <input
                name="name"
                placeholder="Exercise name"
                type="text"
                value={exercise.name}
                onChange={(e) => handleExerciseChange(index, e)}
                required
              />
              <input
                name="reps"
                placeholder="Reps"
                type="text"
                value={exercise.reps}
                onChange={(e) => handleExerciseChange(index, e)}
                required
              />
              <button className="remove-button" type="button" onClick={() => handleRemoveExercise(index)}>
                Remove
              </button>
            </div>
          ))}

          <button type="button" onClick={handleAddExercise}>Add Exercise</button>
          <button type="submit">Submit Workout</button>
        </form>
      </div>
    </div>
  );
}

export default AddWorkout;
