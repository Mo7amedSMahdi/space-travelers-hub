import { Routes, Route } from "react-router-dom";
import "./assets/css/global.scss";
import Rocket from "./pages/rockets";

const App = () => (
  <Routes>
    <Route path="/" element={<Rocket />} />
  </Routes>
);

export default App;
