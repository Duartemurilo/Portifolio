import React from 'react'
import {
  ContainerWorkTogether,
  WorkTogetherLeft,
  WorkTogetherMidlle,
  WorkTogetherRight,
} from '../Styles/Components/WorkTogetherStyles'

function WorkTogheter() {
  return (
    <ContainerWorkTogether id="trabalhe">
      <WorkTogetherLeft>
        <h1>Começar um projeto</h1>
      </WorkTogetherLeft>
      <WorkTogetherMidlle>
        {' '}
        <p>Interesado em trabalhar comigo? </p>
        <p>Vamos coversar </p>
      </WorkTogetherMidlle>
      <WorkTogetherRight>
        <button>
          {' '}
          <a href="https://api.whatsapp.com/send/?phone=%2B5515981078528&text&app_absent=0">
            {' '}
            Vamos trabalhar juntos!!
          </a>
        </button>
      </WorkTogetherRight>
    </ContainerWorkTogether>
  )
}

export default WorkTogheter
