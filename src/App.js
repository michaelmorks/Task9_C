import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import FindQuestions from "./FindQuestions";
import "./App.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || "");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} setUser={setUser} /> : <Navigate to="/login" />} />
        <Route path="/findquestions" element={user ? <FindQuestions /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
