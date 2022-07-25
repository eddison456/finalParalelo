import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Infantil from "./pages/Infantil";
import { JuegoProvider } from "./context/juegoContext";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <JuegoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/infantil" element={<Infantil />} />
          </Routes>
        </JuegoProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
