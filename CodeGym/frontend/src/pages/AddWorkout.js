import React from 'react'; 
import ContactLeft from '../assets/about.png';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className = "contact">
      <div className = "leftSide" style={{ backgroundImage: `url(${ContactLeft})` }}></div>  
      <div className = "rightSide">
        <h1> Contact Us 
            <form id = "contact-form" method="POST">
                <label htmlFor="name" >Workout Name</label>
                <input name="name" placeholder = "Enter full name..." type = "text" />
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email..." type="email" />
                <label htmlFor="message">Message</label>
                <textarea
                rows="6"
                placeholder="Enter message..."
                name="message"
                required
          ></textarea>
          <button type="submit"> Send Message</button>

            </form>
        </h1>
      </div>
      
    </div>
  )
}

export default Contact