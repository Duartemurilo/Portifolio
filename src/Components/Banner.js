import React from 'react'
import { BannerContainer, ContainerImage, ContainerTitle } from '../Styles/Components/BannerStyle'
import perfilPhoto from '../Images/imageedit_2_5937815503.png'

function Banner() {
  return (
    <BannerContainer>
      <ContainerTitle>
        <h1> Desenvolvedor Front-end</h1>
        <h2>Eu faço pojetos com designs simples e eu amo o que eu faço.</h2>
      </ContainerTitle>
      <ContainerImage>
        {' '}
        <img src={perfilPhoto} alt="p" />
      </ContainerImage>
    </BannerContainer>
  )
}

export default Banner
