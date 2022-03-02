import React from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";

const ProductsPage = () => {
  return (
    <>
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
