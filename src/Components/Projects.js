import React from 'react'
import { ContainerProject, ProjectContanier } from '../Styles/Components/ProjectsStyle'
import CardProject from './CardProject'
import NetflixImage from '../Images/NetfliCloneImage.jpeg'
import SpotifyImage from '../Images/logotipospotify.png'
import IfoodImage from '../Images/IfoodBanner.jpeg'
import NubankImage from '../Images/NubankLogo.png'

function Projects() {
  const projects = [
    {
      name: 'Netflix clone',
      id: 1,
      image: NetflixImage,
      about:
        'Projeto que tem o objetivo de clonar algumas paginas do netflix com o intuito de desenvolver abilidades tecnicas, pricipalmente manipulação de APIs e estilizaçåo .',
    },
    {
      name: 'Spotify clone',
      id: 2,
      image: SpotifyImage,
      about:
        'Como mais um amante da musica e por ser fascinado pela facilidade e qualidade que o spotify nos disponibiliza, tive a ideia de fazer um clone do spotify que tem como de desenvolver abilidades tecnicas, pricipalmente manipulação da API disponibilizada pelo própio spotify.',
    },
    {
      name: 'Ifoood clone',
      id: 3,
      image: IfoodImage,
      about:
        'Projeto que tem o objetivo de clonar o app de smartphone do ifood com a proposta de desenvolver habilidades tecnicas como manipulaçåode APIs, armazenamendo de dados da localStorage,HOOKS e muito mais..',
    },
    {
      name: 'Nubank LandPage ',
      id: 4,
      image: NubankImage,
      about:
        'Projeto que tem o intuito de clonar a landingpage do nubank com o proposito de aprender mais sobre estilização.',
    },
  ]

  return (
    <ProjectContanier>
      <p>Meus Projetos Recentes</p>
      <ContainerProject>
        {projects?.map((project) => {
          return <CardProject key={project.id} project={project} />
        })}
      </ContainerProject>
    </ProjectContanier>
  )
}

export default Projects
