import React from "react";
import {
  BannerContainer,
  ContainerImage,
  ContainerTitle,
} from "../../Styles/Components/BannerStyle";

import perfilPhoto from "../../Images/perfilPhoto.png";

function Banner() {
  return (
    <BannerContainer>
      <ContainerTitle>
        <h1> Desenvolvedor Front-end</h1>
        <h2>Eu faço pojetos com designs simples e amo o que eu faço.</h2>
      </ContainerTitle>
      <ContainerImage style={{ zIndex: 1 }}>
        <img src={perfilPhoto} alt="p" />
      </ContainerImage>
    </BannerContainer>
  );
}

export default Banner;
