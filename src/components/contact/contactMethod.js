import React from "react";

import ContactForm from "./form";

export default function ContactMethod(props) {
  let secondBtn;
  if (props.link2) {
    secondBtn = (
      <a
        href={props.link2}
        className="btn btn-primary"
        style={{ marginLeft: 5 }}
      >
        <i className={props.icon2} style={iconStyle}></i>
        {props.link_text2}
      </a>
    );
  }
  if (props.showContactForm) {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.contact}
            </h6>
            <p className="card-text">{props.description}</p>
            <a href={props.link} className="btn btn-primary">
              <i className={props.icon} style={iconStyle}></i>
              {props.link_text}
            </a>
            {secondBtn}
          </div>
        </div>
      </div>
    );
  }
}

const iconStyle = {
  paddingRight: 5
};