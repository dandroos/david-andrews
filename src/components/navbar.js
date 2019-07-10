import React from 'react';
import { TransitionPortal } from "gatsby-plugin-transition-link";
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default function Navbar({title}) {
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
                            <AniLink fade to="/" duration={.85} className="nav-link" activeClassName="active">Home</AniLink>
                        </li>
                        <li className="nav-item">
                            <AniLink fade to="/services" duration={.85} className="nav-link" activeClassName="active">Services</AniLink>
                        </li>
                        <li className="nav-item">
                            <AniLink fade to="/about" duration={.85} className="nav-link" activeClassName="active">About</AniLink>
                        </li>
                        
                        <li className="nav-item">
                            <AniLink fade to="/contact" duration={.85} className="nav-link" activeClassName="active">Contact</AniLink>
                        </li>
                        <li className="nav-item">
                            <AniLink fade to="/articles" duration={.85} className="nav-link" activeClassName="active">Articles</AniLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </TransitionPortal>
    )
}
