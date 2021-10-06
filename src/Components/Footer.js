import React from 'react'
import { ContainerSocialMedia, DivIcons, FooterContainer, TextFooter } from '../Styles/Components/FooterStyle'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'

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
          <a href="https://www.instagram.com/muriloduarte700">
            {' '}
            <InstagramIcon style={{ fontSize: '40' }} />{' '}
          </a>
        </DivIcons>
        <DivIcons>
          <a href="https://github.com/Duartemurilo">
            {' '}
            <GitHubIcon style={{ fontSize: '40' }} />{' '}
          </a>
        </DivIcons>
      </ContainerSocialMedia>
    </FooterContainer>
  )
}

export default Footer
