import React from 'react';
import SEO from '../components/seo';

import Layout from '../components/layout';

import ContactMethod from '../components/contactMethod';

export default function ContactPage() {
    return (
        <Layout>
            <SEO title="Contact" />
            <div className="container">
                <h1 className="display-4">Contact</h1>
                <p className="lead">If you are interested in hiring me for your next project or you would like to find out more about how I can build bespoke solutions for your business, get in touch!</p>
                <div className="row">
                    <div className="col-sm">
                        <ContactMethod title="Telephone" contact="+34 658 858 572"
                            description="Please feel free to call me between 8am and 6pm (GMT) or send me a message via WhatsApp at any time." icon="fas fa-mobile-alt"
                            link="tel:34658858572" link_text="Call me" link2="https://wa.me/34658858572" link_text2="WhatsApp me" icon2="fab fa-whatsapp"/>
                    </div>
                    <div className="col-sm">
                        <ContactMethod title="Email" contact="dandrewsuk82@gmail.com"
                            description="If you would like a quote, please include as many details about your requirements as you can." icon="far fa-envelope"
                            link="mailto:dandrewsuk82@gmail.com" link_text="Email me" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm">
                    <ContactMethod title="Send me a message" contact=""
                            description="Want to take care of business without leaving the site?  Email me using the form below."
                            showContactForm={true}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
