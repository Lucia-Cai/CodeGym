import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import AddWorkout from './pages/AddWorkout';
import WorkoutPlans from './pages/WorkOutPlans';
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route  path= "/" exact element={<Home/>}/>
          <Route  path= "/menu" exact element={<Menu/>}/>
          <Route  path= "/about" exact element={<About/>}/>
          <Route  path= "/contact" exact element={<Contact/>}/>
          <Route path="/addworkout" element={<AddWorkout />} />
          <Route path="/workoutplans" element={<WorkoutPlans/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
