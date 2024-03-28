import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./app-layout";
import About from "./about";
import Art from "./art";
import Header from "./header";
import Home from "./home";

export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="art" element={<Art />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
