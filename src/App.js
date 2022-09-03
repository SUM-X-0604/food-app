import React from "react";
import Categories from "./components/Categories";
import Food from "./components/Food";
import HeadingCards from "./components/HeadingCards";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadingCards />
      <Food />
      <Categories />
    </div>
  );
}

export default App;
