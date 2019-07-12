import React from 'react';
import Image from "../images/dave-at-computer-bw.jpg";
import { Spring } from "react-spring/renderprops";

export default function Background(options) {
    const styles = {
        position: 'fixed',
        top: 0, left: 0,
        minHeight: '100vh',
        minWidth: '100%',
        background: `url(${Image})`,
        backgroundSize: 'cover',
        zIndex: -10,
    }

    let opacity = .085;
    let duration = 200;
    if(window.location.pathname === '/'){
        opacity = 1;
        duration = 500;
    }
    return (
        <Spring
            from={{ opacity: 0}}
            to={{ opacity: opacity}}
            config={{delay: 1000, duration: duration}}
        >
        {props => ( 
        <div id="bg-image" style={{...props, ...styles}}>
        </div>)
        }
        </Spring>
    )
}