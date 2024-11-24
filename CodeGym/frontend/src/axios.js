import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance.js";
import axios from "axios";
import WorkOut from "./assets/workout.png"; // Import your image or use a static URL

export const useWorkoutPlans = () => {
    const [plans, setPlans] = useState([]);
  
    useEffect(() => {
      const fetchWorkoutPlans = async () => {
        try {
          const response = await axios.get('http://localhost:8000/workoutplans');
          const transformedPlans = response.data.map((plan) => ({
            name: plan.workout_plan_name,
            workout_id: plan.workout_id,
            image: WorkOut,  // or use an actual URL
            description: `Workout plan from ${plan.start_date} to ${plan.end_date}`,
          }));
          setPlans(transformedPlans);
        } catch (error) {
          console.error("Error fetching workout plans:", error);
        }
      };
  
      fetchWorkoutPlans();
    }, []);
  
    return plans;
  };



// Fetch all workout plans
// export const getWorkoutPlans = async () => {
//   try {
//     const response = await axiosInstance.get("/workoutplans");
//     const processedData = response.data.map((item) => ({
//         name: item.workout_plan_name.toUpperCase(), // Example processing: convert name to uppercase
//         description: item.start_date
//     }));
//     return processedData.data;
//   } catch (error) {
//     console.error("Error fetching workout plans:", error);
//     throw error;
//   }
// };

// Add a new workout plan
export const addWorkoutPlan = async (workoutPlan) => {
  try {
    const response = await axiosInstance.post("/workoutplans", workoutPlan);
    return response.data;
  } catch (error) {
    console.error("Error adding workout plan:", error);
    throw error;
  }
};

// Fetch exercises for a specific workout plan


// Fetch all exercises
export const useGetExercises = (workout_id) => {
    const [plans, setPlans] = useState([]);
  
    useEffect(() => {
      const fetchExercises = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/workoutplans/${workout_id}/exercises`);
          const transformedExercises = response.data.map((exercise) => ({
            name: exercise.name,
            reps: exercise.reps,
            exercise_id: exercise.exercise_id,
            workout_id: exercise.workout_id
          }));
          setPlans(transformedExercises);
        } catch (error) {
          console.error("Error fetching workout plans:", error);
        }
      };
      fetchExercises();
    }, [workout_id]);
  
    return plans;
  };

// Add a new exercise
export const addExercise = async (exercise) => {
  try {
    const response = await axiosInstance.post("/exercises", exercise);
    return response.data;
  } catch (error) {
    console.error("Error adding exercise:", error);
    throw error;
  }
};

// Add a new workout session
export const addWorkoutSession = async (session) => {
  try {
    const response = await axiosInstance.post("/sessions", session);
    return response.data;
  } catch (error) {
    console.error("Error adding workout session:", error);
    throw error;
  }
};

// Fetch sessions for a specific exercise
export const getWorkoutSessionsForExercise = async (exerciseId) => {
  try {
    const response = await axiosInstance.get(`/exercises/${exerciseId}/sessions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching workout sessions:", error);
    throw error;
  }
};

