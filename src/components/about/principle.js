import React from "react";
import Fade from 'react-reveal/Fade';

export default function Principle(props) {
  return (
    <Fade>
      <div>
        <h3 className="display-6">{props.title}</h3>
        <p className="">{props.description}</p>
      </div>
    </Fade>
  );
}
