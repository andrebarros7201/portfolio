import "./App.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
