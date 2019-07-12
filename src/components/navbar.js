import React from 'react';
import { TransitionPortal } from "gatsby-plugin-transition-link";
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import $ from 'jquery';
import SocialBar from './socialBar';
export default function Navbar({ title }) {

    function handleClick(e) {

        $('#navbarNav').collapse('hide');
    }

    return (

        <TransitionPortal>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <AniLink fade to="/" duration={.85} className="navbar-brand">
                    {title}
                </AniLink>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <AniLink fade to="/" duration={.85} className="nav-link" activeClassName="active" onClick={handleClick}>Home</AniLink>
                        </li>
                        <li className="nav-item">
                            <AniLink fade to="/services" duration={.85} className="nav-link" activeClassName="active" onClick={handleClick}>Services</AniLink>
                        </li>
                        <li className="nav-item">
                            <AniLink fade to="/about" duration={.85} className="nav-link" activeClassName="active" onClick={handleClick}>About</AniLink>
                        </li>

                        <li className="nav-item">
                            <AniLink fade to="/contact" duration={.85} className="nav-link" activeClassName="active" onClick={handleClick}>Contact</AniLink>
                        </li>
                        <li className="nav-item">
                            <AniLink fade to="/articles" duration={.85} className="nav-link" activeClassName="active" onClick={handleClick}>Articles</AniLink>
                        </li>
                        <li className="nav-item dropdown">
                            {
                                // eslint-disable-next-line
                            }<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Links
                            </a>
                            <SocialBar />
                        </li>
                    </ul>
                </div>
            </nav>
        </TransitionPortal>
    )
}
