import React, { Component } from 'react'

export default class Principle extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="">
                <h3 className="display-6">{this.props.title}</h3>
                <p class="">{this.props.description}</p>
            </div>
        )
    }
}
