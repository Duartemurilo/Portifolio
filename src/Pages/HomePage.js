import React from 'react'
import About from '../Components/Abaout'
import Banner from '../Components/Banner'
import Header from '../Components/Header'

import { HomeContainer } from '../Styles/Pages/HomePageStyle'

function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <About />
    </HomeContainer>
  )
}

export default HomePage
