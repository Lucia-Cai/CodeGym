import axiosInstance from "../axiosInstance";

// Fetch all workout plans
export const getWorkoutPlans = async () => {
  try {
    const response = await axiosInstance.get("/workoutplans");
    return response.data;
  } catch (error) {
    console.error("Error fetching workout plans:", error);
    throw error;
  }
};

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
export const getExercises = async (workoutId) => {
  try {
    const response = await axiosInstance.get(`/workoutplans/${workoutId}/exercises`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    throw error;
  }
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
