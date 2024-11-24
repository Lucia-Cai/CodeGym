import React from 'react'

function ExerciseItem({name, rep, cur_weight, graph}) {
  return (
    <div className = "exerciseItem">
        

      <div>
        <h1>{name}</h1>
        <p>{rep}</p>
        <p>{cur_weight}</p>
      </div>
    </div>
  )
}

export default MenuItem
