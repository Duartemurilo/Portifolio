import React from "react";
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Projects from "../Components/Projects/Projects";
import Skils from "../Components/Skils/Skils";
import WorkTogheter from "../Components/WorkTogether/WorkTogether";

import { HomeContainer } from "../Styles/Pages/HomePageStyle";

function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <About />
      <Skils />
      <Projects />
      <WorkTogheter />
      <Footer />
    </HomeContainer>
  );
}

export default HomePage;
