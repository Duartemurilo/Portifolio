import React from "react";

function Link({ href, text }) {
  return (
    <ul>
      <li>
        <a href={href}>
          {" "}
          <p>{text}</p>
        </a>
      </li>
    </ul>
  );
}

export default Link;
