import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import projectData from "../data/projects";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <aside>
        <About />
      </aside>
      <main>
        <Home />
        <ProjectList projects={projectData} />
      </main>
    </div>
  );
}

export default App;



