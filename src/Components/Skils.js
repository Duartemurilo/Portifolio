import React from 'react'
import { SkilContainer, SkilLeft, SkilRight } from '../Styles/Components/SkilsStyle'
import ImportantDevicesOutlinedIcon from '@material-ui/icons/ImportantDevicesOutlined'

function Skils() {
  return (
    <SkilContainer id="Tecnologias">
      <SkilLeft>
        <ImportantDevicesOutlinedIcon style={{ fontSize: 80 }} />
      </SkilLeft>
      <SkilRight>
        <div style={{ borderRight: '2px solid #e6ecf8', paddingRight: '10px' }}>
          <p style={{ fontSize: 20, fontWeight: 'bold', marginTop: '7vh', color: '#4da9ff' }}>
            Desenvolvedor Front-end{' '}
          </p>
          <p>
            Gosto de ajudar em projetos mas tambem gosto de fazer projetos do zero e gosto de dar vida às minhas
            melhores ideias.
          </p>
        </div>
        <div style={{ borderRight: '2px solid #e6ecf8' }}>
          <p style={{ fontSize: 20, fontWeight: 'bold', color: '#4da9ff', marginTop: '7vh' }}>Linguagens: </p>
          <p>HTML, Javascript, Typescript, CSS</p>
        </div>
        <div style={{}}>
          <p style={{ fontSize: 20, fontWeight: 'bold', color: '#4da9ff', marginTop: '6vh', marginBottom: '5px' }}>
            ferramentas:
          </p>
          <ul>
            <li>React</li>
            <li>Codekit</li>
            <li>Terminal</li>
            <li>Github</li>
          </ul>
        </div>
      </SkilRight>
    </SkilContainer>
  )
}

export default Skils
