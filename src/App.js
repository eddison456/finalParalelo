import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Infantil from "./pages/Infantil";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/infantil" element={<Infantil />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
