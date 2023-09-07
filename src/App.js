import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Home />
      {/* <hr className="w-90 mx-auto border-gray-300" /> */}
      <About /> <hr className="w-90 my-5 mx-auto border-gray-300" />
      <Skills />
      <hr className="w-90 my-5 mx-auto border-gray-300" />
      <Projects />
      <hr className="w-90 my-5 mx-auto border-gray-300" />
      <Contact />
      <Footer />
      {/* <Routes> </Routes> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
