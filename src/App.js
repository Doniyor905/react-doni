import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
// import Form from "./components/Form";
import logoIcon from "./image/logoIcon.svg";

function App() {
  return (
    <div className="App container">
      <Nav />
       <Header />
      <Projects />
      <About />

      <footer className="footer">
        <div className="footer__inner">
          <p>YUSUPOV</p>
          <img src={logoIcon} alt="" />
          <p>DONIYOR</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
