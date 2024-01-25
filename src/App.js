import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Courses from "./Pages/Courses";
import Career from "./Pages/Career";
import Experience from "./Pages/Experience";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/Experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
