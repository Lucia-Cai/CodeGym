from sqlite3 import Date
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import codegym_db

class Exercise(BaseModel):
    name: str
    reps: int 
    exercise_ID: int

class WorkoutPlan(BaseModel):
    workout_ID: int
    name: str
    start_date: Date
    end_date: Date

class WorkoutSession(BaseModel):
    session_ID: int
    exercise_ID: int
    weight: float

app = FastAPI()

origins = [ # what we want to be able to access the API
    "http://localhost:3000" # react frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


codegym_db.init_db() # initializing the database


# endpoint workout plans

@app.get("/workoutplans", response_model=List[WorkoutPlan])
def get_workout_plans():
    workouts_list = codegym_db.get_workout_plans() # TODO: replace with actual method name
    workouts = List()
    for workout in workouts_list:
        workouts.append(
            WorkoutPlan(
                end_date=workout.get("end_date"),
                start_date=workout.get("start_date"),
                name=workout.get("name"),
                workout_ID=workout.get("workout_ID")
            )
        )
    return workouts_list

@app.post("/workoutplans", response_model=WorkoutPlan)
def add_exercise(workout_plan: WorkoutPlan):
    codegym_db.add_workout_plan(
        workout_plan.name,
        workout_plan.start_date,
        workout_plan.end_date
    ) # TODO: fix this whith actual method from Lucia
    return workout_plan


# endpoints for exercises

@app.get("workoutplan/{workout_ID}/exercises", response_model=List[Exercise])
def get_exercises(workout_ID: int):
    exercises_list = codegym_db.get_exercises(workout_ID) # TODO: get the exercise for an actual plan when lucia changes it
    exercises = List()
    for exercise in exercises_list:
        exercises.append(
            Exercise(
                name=exercise.get("name"),
                reps=exercise.get("reps"),
                exercise_ID=exercise.get("exercise_ID")
            )
        )
    return exercises

@app.post("/exercises", response_model=Exercise)
def add_exercise(exercise: Exercise):
    codegym_db.add_exercise(exercise.name, exercise.reps, 0) # TODO: take out weight and put workoput id after lucia changes it 
    return exercise


# endpoints for sessions

@app.post("/session", response_model=WorkoutSession)
def add_workout_session(session: WorkoutSession):
    codegym_db.add_session(
        session.exercise_ID,
        session.weight
    ) # TODO: replace with actual method
    return session

@app.get("/sessions/{exercise_ID}", response_model=List[WorkoutSession])
def get_workout_sessions_for_exercise(exercise_ID: int):
    sessions_list = codegym_db.get_workout_sessions(exercise_ID) # TODO: replace with actual method name
    sessions = List()
    for session in sessions_list:
        sessions.append(
            WorkoutSession(
                exercise_ID=session.get("exercise_ID"),
                session_ID=session.get("session_ID"),
                weight=session.get("weight")
            )
        )
    return sessions



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)