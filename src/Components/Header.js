import React from 'react'
import { HeaderContainer } from '../Styles/Components/HeaderStyle'

import useMediaQuery from '@material-ui/core/useMediaQuery'

function Header() {
  const isActive = useMediaQuery('(max-width: 450px)')

  return (
    <>
      {isActive ? (
        <HeaderContainer>
          <button>
            <a href={'https://api.whatsapp.com/send/?phone=%2B5515981078528&text&app_absent=0'}>Contacte-me</a>
          </button>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <div>
            <ul>
              <li>
                <a href="#Projetos">
                  {' '}
                  <p>Projetos</p>
                </a>
              </li>
              <li>
                <a href="#Sobre">Sobre</a>
              </li>
              <li>
                <a href="#Tecnologias">Tecnologias</a>
              </li>
              <li>
                <a href="#web">Trabalhe comigo</a>
              </li>
            </ul>
            <button>
              <a href={'https://api.whatsapp.com/send/?phone=%2B5515981078528&text&app_absent=0'}>Contacte-me</a>
            </button>
          </div>
        </HeaderContainer>
      )}
    </>
  )
}

export default Header
