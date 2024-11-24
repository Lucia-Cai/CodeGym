import React from 'react';
import About1 from '../assets/about.png';
import '../styles/About.css';

function About() {
  return (
    <div className = " about">
       <div 
       className="aboutTop"
       style={{ backgroundImage: `url(${About1})`}}> </div> 
       <div className = "aboutBottom">
        <h1>ABOUT US</h1>
        <p>Welcome to CodeGym, the ultimate fitness companion for students balancing the demands of studying and staying active. As students ourselves, we understand how challenging it can be to juggle 
            academics and a healthy lifestyle. That is why we created CodeGym—a platform where you can easily input your workouts, track your progress, and stay motivated on your fitness journey. Whether you’re hitting personal bests or starting small, CodeGym is here to help you build consistency and crush your goals, one rep at a time!</p>
       </div>
      
    </div>
  )
}

export default About
