import React from "react";
import { Routes, Route } from "react-router-dom";
import Mission from "./components/mission/Mission";
import Rocket from "./components/rocket/Rocket";
import Profile from "./components/profile/Profile";
import Navbar from "./components/header/Navbar";

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </div>
);

export default App;
