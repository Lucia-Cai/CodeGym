import sqlite3

def connect():
    return sqlite3.connect("codegym_db.db")

def add_exercise(connection, reps: int, name: str):
    with connection:
        connection.execute(f'INSERT INTO exercises (reps, name) VALUES (?, ?);', (reps, name))