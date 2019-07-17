import React from 'react'

export default function SocialButton(props) {
    return (
        <a className="dropdown-item" href={props.link} target="_blank" rel="noopener noreferrer"><i className={props.icon} style={{
            fontSize: '2rem'
        }}></i> {props.label}
        </a>
    )
}
