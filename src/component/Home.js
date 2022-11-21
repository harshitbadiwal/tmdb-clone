import React from "react";
import Navbar from "./navbar/Navbar";

import CssBaseline from "@mui/material/CssBaseline";
import Popular from "./popular/Popular";
import Categories from "./categories/Categories";
import ActionMovies from "./actionMovies/ActionMovies";
import CrimeMovies from "./crime/Crime";
import HorrerMovies from "./horrer/Horrer";
import ScienceMovies from "./science/Science";
import DocumentryMovies from "./documentry/documentry";
import Upcomming from "./upcomming/Upcomming";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Popular />
   

      <Categories />
      <Upcomming />
      <CrimeMovies />
      <HorrerMovies />
      <ScienceMovies />
      <DocumentryMovies />
    </>
  );
};

export default Home;
