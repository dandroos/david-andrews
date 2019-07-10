import React from 'react'

export default function BackgroundOverlay() {

    let path = window.location.pathname;
  
    let styling;
    if(path === '/'){
        styling = {
            position: 'fixed',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(255, 255, 255, .95), rgba(255, 255, 255, .95))',
            zIndex: -8,
            opacity: 0
        }
    }else{
        styling= {
            position: 'fixed',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(255, 255, 255, .95), rgba(255, 255, 255, .95))',
            zIndex: -8,
            opacity: 1
        }
    }

    return (
                 <div style={styling}>
                </div>
    )
}


