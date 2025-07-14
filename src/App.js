
import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import CoreCompetencies from './components/CoreCompetencies';
import Footer from './components/Footer';
import Connect from './components/Connect';
import Contact from './components/Contact';


function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Nav/>
       <Hero/>
    <About/>
    <CoreCompetencies/>
    <Experience/>
    <Education/>
    <Certifications/>
    <Achievements/>
    <Connect/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
