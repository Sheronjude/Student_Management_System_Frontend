import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import Home from "./Home";
import StudentsView from "./component/student/StudentsView";
import { Route, Router, Routes } from "react-router-dom";
import NavBar from "./component/common/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/student-details" element={<StudentsView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
