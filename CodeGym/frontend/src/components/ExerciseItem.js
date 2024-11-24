// import React from 'react'
// import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from "recharts"




// function ExerciseItem({id, name, rep, cur_weight, data}) {
//   return (
//     <div className = "exerciseItem">
//     <div>
//         <h1>{name}</h1>
//         <p>{id}</p>
//         <p>Reps: {rep}</p>
//         <p>Current Weight: {cur_weight}</p>
//     </div>
//     <div>
//         <LineChart width={300} height={300} data={data} margin={{top:5, right:20, bottom:5, left:0 }}>
//             <Line type="monotone" dataKey="value" stroke="#8884d8" />
//             <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//         </LineChart>
//     </div>
//     </div>
//   )
// }

// export default ExerciseItem




import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { getWorkoutSessionsForExercise } from "../axios"; // Function to fetch workout session data

function ExerciseItem({ id, name, rep, cur_weight }) {
  const [chartData, setChartData] = useState([]);

  // Fetch workout session data for this exercise
  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const sessions = await getWorkoutSessionsForExercise(id); // Fetch sessions for the exercise
        const formattedData = sessions.map(session => ({
          date: new Date(session.date), // Convert date to JavaScript Date object
          weight: session.weight, // Session weight
        }));

        // Sort the data by date (ascending order)
        formattedData.sort((a, b) => a.date - b.date);

        setChartData(formattedData);        
      } catch (error) {
        console.error("Error fetching workout session data:", error);
      }
    };

    fetchSessions();
  }, [id]); // Only fetch sessions when the exercise ID changes

  return (
    <div className="exerciseItem">
      <div>
        <h1>{name}</h1>
        <p>Reps: {rep}</p>
        <p>Current Weight: {cur_weight}</p>
      </div>

      <div>
        {/* LineChart displaying workout progress over time */}
        <LineChart width={300} height={300} data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="weight" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" tickFormatter={(date) => date.toLocaleDateString()} />
          <YAxis />
          <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
          <Legend />
        </LineChart>
      </div>
    </div>
  );
}

export default ExerciseItem;
