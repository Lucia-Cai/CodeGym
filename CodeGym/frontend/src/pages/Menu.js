import React from 'react';
import {ServiceList} from '../helpers/ServiceList';
import MenuItem from '../components/MenuItem';
import { useNavigate } from "react-router-dom";
import '../styles/Menu.css';
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';

function Menu() {
  const navigate = useNavigate();
  const handleAddWorkoutClick = () => {
    navigate("/addworkout"); 
  };
  return (
    <div>
      <div className="menu">
        <div className = "leftSide">
        <hi className="serviceTitle">Our services</hi>
        <div className="serviceList">
            {ServiceList.map((menuItem, key)=>{
                return (
                <MenuItem 
                key = {key} 
                image={menuItem.image} 
                name ={menuItem.name} 
                description ={menuItem.description}/>
            )})}
        </div>
        </div>
      <div className = "rightSide">
        <form id = "addworkout" onSubmit={(e) => e.preventDefault()}>
            <button type="submit" onClick={handleAddWorkoutClick}> Add new Workout </button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Menu

