import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import RobotTaxi from "@/pages/RobotTaxi";
import Robot from "@/pages/Robot";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robot-taxi" element={<RobotTaxi />} />
        <Route path="/robot" element={<Robot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
