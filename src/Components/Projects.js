import React from 'react'
import { ContainerProject, ProjectContanier } from '../Styles/Components/ProjectsStyle'
import CardProject from './CardProject'
import NetflixImage from '../Images/NetfliCloneImage.jpeg'
import SpotifyImage from '../Images/spotify-ai-technology.jpeg'
import IfoodImage from '../Images/IfoodBanner.jpeg'
import NubankImage from '../Images/NubankLogo.png'

function Projects() {
  const projects = [
    {
      name: 'Netflix Clone',
      id: 1,
      image: NetflixImage,
      link: 'https://clonenetflixmd.surge.sh/',
      about:
        'Projeto que tem o objetivo de clonar algumas paginas do netflix com o intuito de desenvolver abilidades tecnicas, pricipalmente manipulação de APIs e estilizaçåo .',
    },
    {
      name: 'Spotify Clone',
      id: 2,
      image: SpotifyImage,
      link: 'https://spotify-clone-md.surge.sh/',

      about:
        'Como mais um amante da musica e por ser fascinado pela facilidade e qualidade que o spotify nos disponibiliza, tive a ideia de fazer um clone do spotify que tem como de desenvolver abilidades tecnicas, pricipalmente manipulação da API disponibilizada pelo própio spotify.',
    },
    {
      name: 'Ifood mobile Clone ',
      id: 3,
      image: IfoodImage,
      link: 'https://ifood-clonemd.surge.sh/',
      about:
        'Projeto que tem o objetivo de clonar o app de smartphone do ifood com a proposta de desenvolver habilidades tecnicas como manipulaçåode APIs, armazenamendo de dados da localStorage,HOOKS e muito mais..',
    },
    {
      name: 'Nubank LandingPage ',
      id: 4,
      image: NubankImage,
      link: 'https://nubank-landingpage-clone-md.surge.sh/',
      about:
        'Projeto que tem o intuito de clonar a landingpage do nubank com o proposito de aprender mais sobre estilização.',
    },
  ]

  return (
    <ProjectContanier id="Projetos">
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
