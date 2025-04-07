import React from "react";
import SignUp from "../components/SignUp/SignUp";
import Features from "../components/Features/Features";
import Filters from "../components/Filters/Filters";
import Quotes from "../components/Quotes/Quotes";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <SignUp />
      <Features />
      <Filters />
      <Quotes />
      <Footer />
    </>
  );
}

export default Home;
