import React, { useEffect, useState } from 'react'
import About from '../Components/About'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import Projects from '../Components/Projects'
import Skils from '../Components/Skils'

import { HomeContainer } from '../Styles/Pages/HomePageStyle'

function HomePage() {
  const [whiteBackground, setBackground] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBackground(true)
      } else {
        setBackground(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  return (
    <HomeContainer>
      <Header whiteBackground={whiteBackground} />
      <Banner />
      <About />
      <Skils />
      <Projects />
    </HomeContainer>
  )
}

export default HomePage
