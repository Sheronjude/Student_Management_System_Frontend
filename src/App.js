import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import Home from "./Home";
import StudentsView from "./component/student/StudentsView";
import { Route, Router, Routes } from "react-router-dom";
import NavBar from "./component/common/NavBar";
import AddStudent from "./component/student/AddStudent";

function App() {
  return (
    <main className="container mt-5">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/student-details" element={<StudentsView />}></Route>
        <Route path="/add-students" element={<AddStudent/>}></Route>
      </Routes>
    </main>
  );
}

export default App;
