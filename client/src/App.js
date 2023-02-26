import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar.js";
import { Banner } from "./components/Banner.js";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Copyrights } from "./components/Copyrights.js";
import { Skills } from "./components/Skills.js";
import Particles from "./components/Particles.js";


let response = fetch("/c", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});
let response2 = fetch("/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});


function App() {
  return (
    <div className="App">
      <Particles />
      <NavBar />
      
      <Banner />
      <Skills />
      <Experience />
      <Contact />
      <Copyrights />
    </div>
  );
}

export default App;
