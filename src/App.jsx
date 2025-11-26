import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SellCar from "./pages/SellCar";
import FloatingButtons from "./components/FloatingButton"; // <-- import

export default function App() {
  return (
    <BrowserRouter>
      
      {/* Floating Buttons visible on all pages */}
      <FloatingButtons />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell-car" element={<SellCar />} />
      </Routes>
      
    </BrowserRouter>
  );
}
