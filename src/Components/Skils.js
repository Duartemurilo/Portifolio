import React from 'react'
import { DivLinguagens, ResumeFrontEnd, SkilContainer, SkilLeft, SkilRight } from '../Styles/Components/SkilsStyle'
import ImportantDevicesOutlinedIcon from '@material-ui/icons/ImportantDevicesOutlined'

function Skils() {
  return (
    <SkilContainer id="Tecnologias">
      <SkilLeft>
        <ImportantDevicesOutlinedIcon style={{ fontSize: 80 }} />
      </SkilLeft>
      <SkilRight>
        <ResumeFrontEnd>
          <p style={{ fontSize: 20, fontWeight: 'bold', marginTop: '7vh', color: '#4da9ff' }}>
            Desenvolvedor Front-end{' '}
          </p>
          <p>
            Gosto de ajudar em projetos , mas também gosto de fazer projetos do zero e gosto de dar vida às minhas
            melhores ideias.
          </p>
        </ResumeFrontEnd>
        <ResumeFrontEnd style={{ borderRight: '2px solid #e6ecf8' }}>
          <p style={{ fontSize: 20, fontWeight: 'bold', color: '#4da9ff', marginTop: '6vh', marginBottom: '5px' }}>
            Linguagens:{' '}
          </p>

          <DivLinguagens>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              alt="Js icon"
            />
            <p>Javascript</p>
          </DivLinguagens>
          <DivLinguagens>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
              alt="Js icon"
            />
            <p>Typescript</p>
          </DivLinguagens>
          <DivLinguagens>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              alt="Js icon"
            />
            <p>HTML</p>
          </DivLinguagens>
          <DivLinguagens>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              alt="Js icon"
            />
            <p>CSS</p>
          </DivLinguagens>
        </ResumeFrontEnd>
        <ResumeFrontEnd>
          <p style={{ fontSize: 20, fontWeight: 'bold', color: '#4da9ff', marginTop: '6vh', marginBottom: '5px' }}>
            ferramentas:
          </p>
          <ul>
            <li>React</li>
            <li>VS Code</li>
            <li>Terminal</li>
            <li>Github</li>
          </ul>
        </ResumeFrontEnd>
      </SkilRight>
    </SkilContainer>
  )
}

export default Skils
