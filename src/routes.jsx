import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import View from "./pages/view";
import Create from "./pages/create";

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/view/:id" element={<View />} />
    </Routes>
  );
}

export default Rutas;
