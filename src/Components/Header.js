import React from 'react'
import { HeaderContainer } from '../Styles/Components/HeaderStyle'

function Header() {
  return (
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
          <a href={'https://api.whatsapp.com/send/?phone=%2B5515981078528&text&app_absent=0'}>Contante -me</a>
        </button>
      </div>
    </HeaderContainer>
  )
}

export default Header
