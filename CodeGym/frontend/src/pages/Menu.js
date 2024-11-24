import React from 'react';
import MenuItem from '../components/MenuItem';
import { useNavigate } from "react-router-dom";
import '../styles/Menu.css';
import getWorkoutPlans from "../axios.js";


function Menu() {
  const navigate = useNavigate();

  //const handleMenuItemClick = (menuName) => {navigate(`/menu/${menuName}`);};

  const handleMenuTrackProgress = () => {navigate("/workoutprogress")};

  const handleAddWorkoutClick = () => {
    navigate("/addworkout"); 
  };
  const ServiceList = getWorkoutPlans();
  return (
    <div>
      <div className="menu">
        <div className = "leftSide">
        <h1 className="serviceTitle">Our services</h1>
        <div className="serviceList">
            {ServiceList.map((menuItem, key)=>(
                //<button key={key} className = "workoutPlanButton" onClick={() => handleMenuItemClick(menuItem.name)}>
                <button key={key} className = "workoutPlanButton" onClick={handleMenuTrackProgress}>
                <MenuItem 
                key = {key} 
                image={menuItem.image} 
                name ={menuItem.name} 
                description ={menuItem.description}/>
            </button> 
            ))}
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

