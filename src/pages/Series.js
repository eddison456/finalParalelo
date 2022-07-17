import React from "react";
import Section from "../components/Section";
import { series } from "../data/Data";

const Series = () => {
  return (
    <>
      <Section {...series} />
    </>
  );
};

export default Series;
