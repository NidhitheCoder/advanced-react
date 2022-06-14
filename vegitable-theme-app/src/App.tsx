import * as React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listpage from "./pages/Listpage";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/list" element={<Listpage />} />
    </Routes>
  </BrowserRouter>
);
