import sqlite3

def db_connect():
    conn = sqlite3.connect("codegym_db.db")
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = db_connect()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS exercises (
            exercise_id INTEGER PRIMARY KEY AUTOINCREMENT,
            exercise_name TEXT NOT NULL,
            reps INTEGER NOT NULL,
            weight INTEGER NOT NULL
        )
    ''')
    conn.commit()
    conn.close()


def add_exercise(exercise_name: str, reps: int, weight: int):
    conn = db_connect()
    conn.execute(f'INSERT INTO exercises (exercise_name, reps, weight) VALUES (?, ?, ?);', (exercise_name, reps, weight))
    conn.commit()
    conn.close()

def get_exercises():
    conn = db_connect()
    cursor = conn.execute("SELECT * FROM exercises")
    exercises = cursor.fetchall()
    conn.close()
    return[dict(row) for row in exercises]




# Initialize the database
init_db()

# Add a workout
add_exercise("Push Ups", 15, 0)  # Example: Push-ups with no weight

# Retrieve workouts
exercises = get_exercises()
for exercise in exercises:
    print(exercise)
