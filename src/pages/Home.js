import React from "react";
import Section from "../components/Section";
import { infantil, peliculas, series, tv } from "../data/Data";

const Home = () => {
  return (
    <>
      <Section {...tv} />
      <Section {...series} />
      <Section {...peliculas} />
      <Section {...infantil} />
    </>
  );
};

export default Home;
