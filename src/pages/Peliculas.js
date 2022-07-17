import React from "react";
import Section from "../components/Section";
import { peliculas } from "../data/Data";

const Peliculas = () => {
  return (
    <>
      <Section {...peliculas} />
    </>
  );
};

export default Peliculas;
