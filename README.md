# CodeGym – Workout Tracker App

Plan your workouts, set goals, and see your progress in real time with dynamic dashboards.  
Built in 24 hours at **McHacks Hackathon**, winning the **Beginner Prize**.

---

## ✨ Features
- **Workout logging:** track exercises, sets, reps, and weights
- **Goal setting:** set weekly/monthly targets and track completion
- **Dynamic dashboards:** visual progress charts with Recharts
- **Persistent storage:** all data stored locally in SQLite
- **Fast, responsive UI:** built with React + Tailwind

---

## 🧱 Tech Stack
**Frontend:** React, JavaScript, Tailwind, Recharts  
**Backend:** Python (FastAPI)  
**Database:** SQLite  
**APIs:** RESTful API between frontend and backend

---

## 🚀 Getting Started

### 1) Clone
```bash
git clone https://github.com/<your-username>/codegym.git
cd codegym
```
## 2) Frontend
```bash
cd ../frontend
npm install
npm run dev
```
### 3) Backend
```bash
cd backend
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
