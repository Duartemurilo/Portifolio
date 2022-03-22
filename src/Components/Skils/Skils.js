import React from "react";
import {
  ResumeFrontEnd,
  SkilContainer,
  SkilLeft,
  SkilRight,
} from "../../Styles/Components/SkilsStyle";
import ImportantDevicesOutlinedIcon from "@material-ui/icons/ImportantDevicesOutlined";
import CardLanguage from "./CardLanguage";
import CardTools from "./CardTools";
import ReactIcon from "../../Images/react.png";
import GitHubIcon from "../../Images/github.png";
import TerminalIcon from "../../Images/terminal.png";
import VsCodeIcon from "../../Images/vscode.png";

function Skils() {
  return (
    <SkilContainer id="Tecnologias">
      <SkilLeft>
        <ImportantDevicesOutlinedIcon style={{ fontSize: 80 }} />
      </SkilLeft>
      <SkilRight>
        <ResumeFrontEnd>
          <p id="Title">Desenvolvedor Front-end </p>
          <p>
            Gosto de usar a tecnologia para dar vida a minhas melhores ideias.
          </p>
        </ResumeFrontEnd>
        <ResumeFrontEnd style={{ borderRight: "2px solid #e6ecf8" }}>
          <CardLanguage />
        </ResumeFrontEnd>
        <ResumeFrontEnd>
          <p id="Title">Ferramentas:</p>
          <CardTools image={ReactIcon} name="React" />
          <CardTools image={VsCodeIcon} name="VS Code" />
          <CardTools image={TerminalIcon} name="Terminal" />
          <CardTools image={GitHubIcon} name="GitHub" />
        </ResumeFrontEnd>
      </SkilRight>
    </SkilContainer>
  );
}

export default Skils;
