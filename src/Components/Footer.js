import React from 'react'
import { ContainerSocialMedia, DivIcons, FooterContainer, TextFooter } from '../Styles/Components/FooterStyle'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'

import GitHubIcon from '@material-ui/icons/GitHub'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'

function Footer() {
  return (
    <FooterContainer>
      <TextFooter>
        <p>Vivendo e aprendendo </p>
        <p>um dia de cada vez..</p>
      </TextFooter>
      <ContainerSocialMedia>
        <DivIcons>
          <a href="https://www.linkedin.com/in/duartemurilo/">
            {' '}
            <LinkedInIcon style={{ fontSize: '40' }} />{' '}
          </a>
        </DivIcons>
        <DivIcons>
          <a href="mailto:duartemurilom@gmail.com">
            {' '}
            <EmailIcon style={{ fontSize: '40' }} />{' '}
          </a>
        </DivIcons>

        <DivIcons>
          <a href="https://github.com/Duartemurilo">
            {' '}
            <GitHubIcon style={{ fontSize: '40' }} />{' '}
          </a>
        </DivIcons>
        <DivIcons>
          <a href="https://api.whatsapp.com/send/?phone=%2B5515981078528&text&app_absent=0">
            {' '}
            <WhatsAppIcon style={{ fontSize: '40' }} />
          </a>
        </DivIcons>
      </ContainerSocialMedia>
    </FooterContainer>
  )
}

export default Footer
