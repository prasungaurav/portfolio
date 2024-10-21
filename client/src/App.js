import './App.css';
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import AboutMe from "./AboutMe.jsx";
import Skill from "./Skill.jsx";
import Contact from "./Contact.jsx";
import Achivements from "./Achivements.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <AboutMe/>
      <Skill/>
      <Achivements/>
      <Contact/>
    </div>
  );
}

export default App;
