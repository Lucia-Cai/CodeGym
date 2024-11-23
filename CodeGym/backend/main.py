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

class WorkoutSessions(BaseException):
    exercise_ID: int
    sessions: List[WorkoutSession]

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

@app.get("/exercises/{workout_ID}", response_model=Exercise) # to get am exercise
def get_exercise(workout_ID: int):
    exercises_list = codegym_db.get_exercises() # get the exercise for an actual plan when lucia changes it
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

@app.post("/exercise", response_model=Exercise)
def add_exercise(exercise: Exercise):
    codegym_db.add_exercise(exercise.name, exercise.reps, 0) # take out weight and put workoput id after lucia changes it 
    return exercise

@app.post("/session", response_model=WorkoutSession)
def add_exercise(session: WorkoutSession):
    # codegym_db.add_session() add this
    return session

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)