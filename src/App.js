import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Mission from "./components/mission/Mission";
import Rocket from "./components/rocket/Rocket";
import Profile from "./components/profile/Profile";
import Navbar from "./components/header/Navbar";
import "./assets/css/global.scss";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  </Provider>
);

export default App;
