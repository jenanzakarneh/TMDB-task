import React from "react";
import SearchSection from "../components/searchSection/SearchSection";
import Header from "../components/Header/Header";
import Popular from "../components/popularSection/Popular";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <SearchSection />
      <Popular />
      <Footer />
    </div>
  );
};

export default Home;
