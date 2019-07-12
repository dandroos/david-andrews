import React, { Component } from 'react'

export default class Service extends Component {

    render() {
        return (
            <div>
                <h2 className="display-5">{this.props.service}</h2>
                <div dangerouslySetInnerHTML={{__html: this.props.description }}></div>
            </div>
        )
    }
}
