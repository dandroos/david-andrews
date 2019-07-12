import React, { Component } from 'react'

export default class Principle extends Component {
    
    render() {
        return (
            <div className="">
                <h3 className="display-6">{this.props.title}</h3>
                <p className="">{this.props.description}</p>
            </div>
        )
    }
}
