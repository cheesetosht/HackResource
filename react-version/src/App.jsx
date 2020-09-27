import React from "react";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import "./style.scss";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Tabs />
      <Footer />
    </>
  );
}

export default App;
