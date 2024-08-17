import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import MatrixRain from "./routes/MatrixRain";

function App() {
  return (
    <div className="App">
      <MatrixRain />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
