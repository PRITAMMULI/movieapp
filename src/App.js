import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import "./Component/GenralComponent/Global.css";
import ProjectState from "./Component/GenralComponent/Context/ProjectState";
import Allmovies from "./Component/Home/Allmovies";
import Favourite from "./Component/Home/Favourite";
function App() {
  return (
    <>
      <div className="container">
        <Router>
          <ProjectState>
            <Routes>
              <Route exact path="/favourite" element={<Favourite />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/allmovies" element={<Allmovies />} />
            </Routes>
          </ProjectState>
        </Router>
      </div>
    </>
  );
}

export default App;
