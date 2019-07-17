import React from "react";

import Zoom from "react-reveal/Zoom";

export default function Fundamental(props) {
  return (
    <Zoom>
      <div className="col-lg">
        <div className="card fundamental-card">
          <div className="card-body text-center">
            <h4
              className="card-title"
              data-toggle="tooltip"
              data-placement="bottom"
              title={props.acronym}
            >
              {props.title}
            </h4>
            <i
              className={props.icon}
              style={{
                display: "block",
                fontSize: "6rem"
              }}
            ></i>
            <small className="card-text">{props.description}</small>
          </div>
        </div>
      </div>
    </Zoom>
  );
}
