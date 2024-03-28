import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";

export default function App() {
  return (
    <div>
      <h1>This is App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
