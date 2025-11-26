import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SellCar from "./pages/SellCar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell-car" element={<SellCar />} />
      </Routes>
    </BrowserRouter>
  );
}
