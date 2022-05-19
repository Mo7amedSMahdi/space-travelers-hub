import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Mission from './components/mission/Mission';
import Profile from './components/profile/Profile';
import Navbar from './components/header/Navbar';
import { Routes, Route } from "react-router-dom";
import "./assets/css/global.scss";
import Rocket from "./pages/rockets";

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
