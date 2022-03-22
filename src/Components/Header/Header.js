import React from "react";
import { HeaderContainer } from "../../Styles/Components/HeaderStyle";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "./links";

function Header() {
  const isActive = useMediaQuery("(max-width: 450px)");

  return (
    <>
      {isActive ? (
        <HeaderContainer>
          <button>
            <a
              href={
                "https://api.whatsapp.com/send/?phone=%2B5515981078528&text&app_absent=0"
              }
            >
              Contacte
            </a>
          </button>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <div>
            <Link href="#Projetos" text="Projetos" />
            <Link href='#Sobre"' text="Trabalhe comigo" />
            <Link href="#Tecnologias" text="Tecnologias" />
            <button>
              <a
                href={
                  "https://api.whatsapp.com/send/?phone=%2B5515981078528&text&app_absent=0"
                }
              >
                Contacte-me
              </a>
            </button>
          </div>
        </HeaderContainer>
      )}
    </>
  );
}

export default Header;
