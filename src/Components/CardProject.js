import React from 'react'
import { CardAbout, CardProjectContainer } from '../Styles/Components/CardProjectStyle'

function CardProject({ project }) {
  return (
    <CardProjectContainer
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${project.image})`,
      }}
    >
      <p>{project.name}</p>
      <CardAbout>
        <div>
          {' '}
          <p>{project.about}</p>
        </div>
        <button>Visite o site</button>
      </CardAbout>
    </CardProjectContainer>
  )
}

export default CardProject
