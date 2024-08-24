import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import MatrixRain from "./routes/MatrixRain";
import ProjectDetails from "./Components/Projects/ProjectDetails";

function App() {
  return (
    <div className="App">
      <MatrixRain />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
