import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactMethod from "../components/contact/contactMethod";

export default function ContactPage(props) {
  return (
    <Layout>
      <SEO title="Contact" />
      {!props.transitionStatus === "entered" ? null : (
        <Fade delay={process.env.PAGE_TRANSITION_DURATION * 1000}>
          <div className="container">
            <Slide down>
              <div>
                <h1 className="display-4">Contact</h1>
                <p className="lead">
                  If you are interested in hiring me for your next project or
                  you would like to find out more about how I can build bespoke
                  solutions for your business, get in touch!
                </p>
              </div>
            </Slide>
            <Slide left>
              <div className="row">
                <div className="col-sm">
                  <ContactMethod
                    title="Telephone"
                    contact="+34 658 858 572"
                    description="Please feel free to call me between 8am and 6pm (GMT) or send me a message via WhatsApp at any time."
                    icon="fas fa-mobile-alt"
                    link="tel:34658858572"
                    link_text="Call me"
                    link2="https://wa.me/34658858572"
                    link_text2="WhatsApp me"
                    icon2="fab fa-whatsapp"
                  />
                </div>
                <div className="col-sm">
                  <ContactMethod
                    title="Email"
                    contact="dandrewsuk82@gmail.com"
                    description="If you would like a quote, please include as many details about your requirements as you can."
                    icon="far fa-envelope"
                    link="mailto:dandrewsuk82@gmail.com"
                    link_text="Email me"
                  />
                </div>
              </div>
            </Slide>
            <Slide left>
              <div className="row mt-3">
                <div className="col-sm">
                  <ContactMethod
                    title="Send me a message"
                    contact=""
                    description="Want to take care of business without leaving the site?  Email me using the form below."
                    showContactForm={true}
                  />
                </div>
              </div>
            </Slide>
          </div>
        </Fade>
      )}
    </Layout>
  );
}
