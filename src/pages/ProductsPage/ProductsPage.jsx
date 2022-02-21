import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";

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
