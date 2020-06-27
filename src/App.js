import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Introduction from "./components/Introduction/Introduction";
import Decoration from "./components/Decoration/Decoration";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";
class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Navigation />
        <Introduction />
        <Decoration />
        <About />
        <Skills />
        <Education />
        <Project />
        <Experience />
      </div>
    );
  }
}

export default App;
