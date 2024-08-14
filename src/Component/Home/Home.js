import React from "react";
import Navbar from "../GenralComponent/Navbar";
import Movies from "./Movies";
import Topmovies from "./Topmovies";

function Home() {
  return (
    <>
      <Navbar />

      <Movies />
      <Topmovies />
    </>
  );
}

export default Home;
