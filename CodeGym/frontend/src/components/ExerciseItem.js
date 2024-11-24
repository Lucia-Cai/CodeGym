import React from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from "recharts"




function ExerciseItem({id, name, rep, cur_weight, data}) {
  return (
    <div className = "exerciseItem">
    <div>
        <h1>{name}</h1>
        <p>{id}</p>
        <p>Reps: {rep}</p>
        <p>Current Weight: {cur_weight}</p>
    </div>
    <div>
        <LineChart width={300} height={300} data={data} margin={{top:5, right:20, bottom:5, left:0 }}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    </div>
    </div>
  )
}

export default ExerciseItem
