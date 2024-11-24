import sqlite3

def db_connect():
    conn = sqlite3.connect("codegym_DB.db")
    conn.row_factory = sqlite3.Row
    return conn

# def init_db():
#     conn = db_connect()
#     conn.execute('''
#         CREATE TABLE IF NOT EXISTS workout_plan (
#             workout_id INTEGER PRIMARY KEY AUTOINCREMENT, 
#             start_date TEXT NOT NULL,
#             end_date TEXT NOT NULL
#         )
#     ''')

#     conn.execute('''
#         CREATE TABLE IF NOT EXISTS exercises (
#             exercise_id INTEGER PRIMARY KEY AUTOINCREMENT,
#             exercise_name TEXT NOT NULL,
#             reps INTEGER NOT NULL,
#             FOREIGN KEY (workout_id) REFERENCES workout_plan (workout_id)
#         )
#     ''')

#     conn.execute('''
#         CREATE TABLE IF NOT EXISTS workout_sessions (
#             session_id INTEGER PRIMARY KEY AUTOINCREMENT,
#             session_date TEXT NOT NULL,
#             weight INTEGER NOT NULL,
#             FOREIGN KEY (exercise_id) REFERENCES exercises (exercise_id)
#         )
#     ''')
#     conn.commit()
#     conn.close()




def add_workout_plan(start_date: str, end_date: str, name: str):
    conn = db_connect()
    cursor = conn.cursor()
    cursor.execute('''INSERT INTO workout_plan (start_date, end_date, workout_plan_name) VALUES (?, ?, ?)''', 
                   (start_date, end_date, name))
    conn.commit()
    workout_id = cursor.lastrowid  # Access the last inserted row's ID from the cursor
    conn.close()
    return workout_id


def add_exercise(workout_id: int, exercise_name: str, reps: int):
    conn = db_connect()
    cursor = conn.cursor()
    conn.execute('''INSERT INTO exercises (exercise_name, reps, workout_id) VALUES (?, ?, ?);''', (exercise_name, reps, workout_id))
    conn.commit()
    exercise_id = cursor.lastrowid
    conn.close()
    return exercise_id


def add_session(date: str, weight: int, exercise_id: int):
    conn = db_connect()
    cursor = conn.cursor()
    conn.execute('''INSERT INTO workout_session (session_date, weight, exercise_id) VALUES (?, ?, ?);''', (date, weight, exercise_id))
    conn.commit()
    session_id = cursor.lastrowid
    conn.close()
    return session_id


def get_exercises(workout_id: int):
    conn = db_connect()
    cursor = conn.execute('''SELECT * FROM exercises WHERE workout_id=?''', (workout_id,))
    exercises = cursor.fetchall()
    conn.close()
    if (len(exercises) == 0):
        return []
    return[dict(row) for row in exercises]


def get_sessions(exercise_id: int):
    conn = db_connect()
    cursor = conn.execute('''SELECT * FROM workout_sessions WHERE exercise_id=?''', (exercise_id,))
    exercises = cursor.fetchall()
    conn.close()
    return[dict(row) for row in exercises]


def get_workout_plans():
    conn = db_connect()
    cursor = conn.execute('''SELECT * FROM workout_plan''')
    exercises = cursor.fetchall()
    conn.close()
    if (len(exercises) == 0):
        return []
    return[dict(row) for row in exercises]
