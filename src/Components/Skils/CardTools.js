import React from "react";
import { DivTools } from "../../Styles/Components/SkilsStyle";

function CardTools({ image, name }) {
  return (
    <div>
      <DivTools>
        <img src={image} alt="icon" />

        <p>{name}</p>
      </DivTools>
    </div>
  );
}

export default CardTools;
