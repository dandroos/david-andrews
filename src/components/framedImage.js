import React, { Component } from 'react'

export default class FramedImage extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={{
                position: 'relative'
            }}>
                <img src={this.props.src} className="img-fluid" alt={this.props.alt} style={{
                    padding: '.5rem',
                    paddingBottom: '1.5rem',
                    borderRadius: '.25rem',
                    background: 'white',
                    boxShadow: '0 0 .5rem'
                }}/>
                <small style={{
                    position: 'absolute',
                    bottom: 4,
                    left: '50%',
                    transform: 'translate(-50%)'

                }}>{this.props.caption}</small>
            </div>
        )
    }
}
