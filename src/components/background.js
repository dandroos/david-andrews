import React from 'react'
import Helmet from "react-helmet";
import Image from "../images/dave-at-computer-bw.jpg"

export default function Background() {

    const transparency = .9;
    return (
        <div id="bg-image" style={{
            position: 'fixed',
            top: 0, left: 0,
            minHeight: '100vh',
            minWidth: '100%',
            background: `url(${Image})`,
            backgroundSize: 'cover',
            zIndex: -10
        }}>
       
            
        </div>
    )
}
