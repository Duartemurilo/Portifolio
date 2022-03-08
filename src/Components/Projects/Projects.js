import React from "react";
import {
  ContainerProject,
  ProjectContanier,
} from "../../Styles/Components/ProjectsStyle";
import CardProject from "../CardProject";
import { projects } from "./project";

function Projects() {
  return (
    <ProjectContanier id="Projetos">
      <p>Meus Projetos Recentes</p>
      <ContainerProject>
        {projects?.map((project) => {
          return <CardProject key={project.id} project={project} />;
        })}
      </ContainerProject>
    </ProjectContanier>
  );
}

export default Projects;
