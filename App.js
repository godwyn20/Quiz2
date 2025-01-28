import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import ProductScreen from "./screens/productscreen";
import UserScreen from "./screens/userscreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/user/:id" element={<UserScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
