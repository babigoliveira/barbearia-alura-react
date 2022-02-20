import React from "react";
import ReactDOM from "react-dom";

import "./reset.css";
import "./index.css";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

ReactDOM.render(
  <React.StrictMode>
    <ProductsPage />
  </React.StrictMode>,
  document.getElementById("root")
);
