import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from '../assets/banner.png';
import '../styles/Home.css'; 

function Home() {
  return (
    <div >
        <div className = "home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className = "headerContainer" >
                <h1>CodeGym</h1>
                <p>Push to Gym, Pull Results, Commit to Greatness</p>
                <Link to = "/menu">
                <button>
                    Start your journey now! 
                </button>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Home
