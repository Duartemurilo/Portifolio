import React from 'react'
import { HeaderContainer } from '../Styles/Components/HeaderStyle'

function Header() {
  return (
    <HeaderContainer>
      <div>
        <ul>
          <li>
            <a href="#Projetos">Projetos</a>
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
        <button>Contante -me</button>
      </div>
    </HeaderContainer>
  )
}

export default Header
