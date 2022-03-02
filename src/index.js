import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/produtos" element={<ProductsPage />} />
      <Route path="/contato" element={<ContactPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
