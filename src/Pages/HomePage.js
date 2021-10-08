import React from 'react'
import About from '../Components/About'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Projects from '../Components/Projects'
import Skils from '../Components/Skils'
import WorkTogheter from '../Components/WorkTogether'

import { HomeContainer } from '../Styles/Pages/HomePageStyle'

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
  )
}

export default HomePage
