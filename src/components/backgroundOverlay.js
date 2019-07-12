import React from 'react'

export default function BackgroundOverlay() {

    let styling = {
        position: 'fixed',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(255, 255, 255, .95), rgba(255, 255, 255, .95))',
            zIndex: -8,
    };

    return (
                <div style={styling}>
                </div>
    )
}


