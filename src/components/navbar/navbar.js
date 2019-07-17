/* eslint-disable */

import React from "react";
import { TransitionPortal } from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import $ from "jquery";
import SocialLinks from "./socialLinks";

export default function Navbar({ title }) {
  function handleClick(e) {
    $("#navbarNav").collapse("hide");
  }

  const transitionDuration = process.env.PAGE_TRANSITION_DURATION;

  return (
    <TransitionPortal>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <AniLink
          fade
          to="/"
          className="navbar-brand"
          duration={transitionDuration}
        >
          <div className="d-flex flex-row align-items-end">
            <span className="">{title}</span>
            <span
              className="navbar-text d-none d-md-block"
              style={{
                paddingLeft: "1rem",
                textTransform: "uppercase",
                fontSize: ".75rem",
                letterSpacing: ".15rem"
              }}
            >
              Developer
            </span>
          </div>
        </AniLink>

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <AniLink
                fade
                to="/"
                duration={transitionDuration}
                className="nav-link hover-effect"
                activeClassName="active"
                onClick={handleClick}
              >
                Home
              </AniLink>
            </li>
            <li className="nav-item">
              <AniLink
                fade
                to="/services"
                duration={transitionDuration}
                className="nav-link hover-effect"
                activeClassName="active"
                onClick={handleClick}
              >
                Services
              </AniLink>
            </li>
            <li className="nav-item">
              <AniLink
                fade
                to="/about"
                duration={transitionDuration}
                className="nav-link hover-effect"
                activeClassName="active"
                onClick={handleClick}
              >
                About
              </AniLink>
            </li>

            <li className="nav-item">
              <AniLink
                fade
                to="/contact"
                duration={transitionDuration}
                className="nav-link hover-effect"
                activeClassName="active"
                onClick={handleClick}
              >
                Contact
              </AniLink>
            </li>
            <li className="nav-item">
              <AniLink
                fade
                to="/articles"
                duration={transitionDuration}
                className="nav-link hover-effect"
                activeClassName="active"
                onClick={handleClick}
              >
                Articles
              </AniLink>
            </li>
            <li className="nav-item dropdown hover-effect">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                My Links
              </a>
              <SocialLinks />
            </li>
          </ul>
        </div>
      </nav>
    </TransitionPortal>
  );
}
