import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Infantil from "./pages/Infantil";
import Peliculas from "./pages/Peliculas";
import Series from "./pages/Series";
import Tv from "./pages/Tv";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/series" element={<Series />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/infantil" element={<Infantil />} />
          <Route path="/signup" element={<p>signup</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
