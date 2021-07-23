import React from "react";
import About from "../components/about/About";
import Hero from "../components/heroSection/Hero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import BaseLayout from "../layout/BaseLayout";
import BasePage from "../layout/BasePage";

const index = () => {
  return (
    <BaseLayout>
      <BasePage>
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      </BasePage>
    </BaseLayout>
  );
};

export default index;
