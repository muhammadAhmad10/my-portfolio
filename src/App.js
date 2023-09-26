import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-900 text-light">
      {/* <Header />
      <Home />
      <About /> <hr className="w-90 my-5 mx-auto bg-light" />
      <Skills />
      <hr className="w-90 my-5 mx-auto bg-light" />
      <Projects />
      <hr className="w-90 my-5 mx-auto bg-light" />
      <Contact />
      <Footer /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              {/* <hr className="w-90 mx-auto border-gray-300" /> */}
              <About />
              <hr className="w-90 my-5 mx-auto bg-light" />
              <Skills />
              <hr className="w-90 my-5 mx-auto bg-light" />
              <Projects />
              <hr className="w-90 my-5 mx-auto bg-light" />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/project-details/:title" element={ProjectDetails} />
      </Routes>
      {/* <ProjectDetails /> */}
      {/* <Routes> </Routes> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
