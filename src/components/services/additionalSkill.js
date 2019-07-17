import React from "react";

import Fade from "react-reveal/Fade";

export default function AdditionalSkill(props) {
  return (
    <Fade>
      <li className="list-group-item">
        <span className="font-weight-bold" style={{
          textTransform: 'uppercase'
        }}>{props.title}</span>
        <br />
        {props.skillsList}
      </li>
    </Fade>
  );
}
