import React from "react";
import { DivLinguagens } from "../../Styles/Components/SkilsStyle";

function CardLanguage() {
  return (
    <div>
      <p id="Title">Linguagens: </p>

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
    </div>
  );
}

export default CardLanguage;
