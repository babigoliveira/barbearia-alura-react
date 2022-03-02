import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Location from "../../components/Location/Location";
import Benefits from "../../components/Benefits/Benefits";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <About />
        <Location />
        <Benefits />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
