import React, { Component } from 'react';
import ContactForm from './form';

export default class ContactMethod extends Component {
    render() {
        let secondBtn;
        if(this.props.link2){
            secondBtn = <a href={this.props.link2} className="btn btn-primary" style={{ marginLeft: 5 }}><i className={this.props.icon2} style={iconStyle}></i>{this.props.link_text2}</a>
        }
        if(this.props.showContactForm){
            return (
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.description}</p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            )
            
        }else{
            return (
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{this.props.contact}</h6>
                            <p className="card-text">{this.props.description}</p>
                            <a href={this.props.link} className="btn btn-primary"><i className={this.props.icon} style={iconStyle}></i>{this.props.link_text}</a>
                            { secondBtn }
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const iconStyle = {
    paddingRight: 5
}

