import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Layout from "../components/layout";

import FundamentalsCard from "../components/services/fundamentalsCard";
import AdditionalSkillsList from "../components/services/additionalSkillsList";
import UseCaseList from "../components/services/useCaseList";
import QuoteQuestionList from "../components/services/quoteQuestionList";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function ServicesPage(props) {
  return (
    <Layout>
      <SEO title="Services" />
      {!props.transtionStatus === "entered" ? null : (
        <Fade delay={process.env.PAGE_TRANSITION_DURATION * 1000}>
          <div className="container">
            <Slide down>
              <div>
                <h1 className="display-4">Services</h1>
                <p className="lead">How can I help you?</p>
                <Img fluid={props.data.imageOne.childImageSharp.fluid} />
              </div>
              <div>
                <hr />
              </div>
            </Slide>
            <Slide left>
              <div>
                <h2 className="display-5">Websites/Web Apps</h2>
                <p>
                  I have been creating websites since 1998. Back then, what you
                  could achieve was fairly limited and therefore the process was
                  relatively straightforward.
                </p>
                <p>
                  Today, there is so much you can do with the web and so the
                  learning curve has become much steeper. I have studied and
                  gained invaluable knowledge in the fundamental languages...
                </p>
              </div>
            </Slide>
            <FundamentalsCard />
            <Slide left>
              <p className="mt-3 text-center">
                The above is considered the holy trinity for creating web
                content. I am also skilled in the following additional tools:{" "}
              </p>
            </Slide>
            <AdditionalSkillsList />
            <Slide left>
              <div>
                <h4 className="mt-4">
                  "I don't know what most/any of that means....."
                </h4>
                <p>
                  Why would you need to know? It doesn't matter! Put simply,
                  whether you need a very basic portfolio/brochure-style static
                  website or a complex dynamic site such as a social network, I
                  have the knowledge and skills to create it.
                </p>
              </div>
            </Slide>
            <div>
              <hr />
            </div>
            <Slide left>
              <div>
                <h2 className="display-5">Software</h2>
                <p>
                  My skills are not limited to creating online solutions. I can
                  also build bespoke software to run on your PC/Mac.
                </p>
                <p>
                  For example, I can tailor-make software to help you with....
                </p>
                <UseCaseList />
                <p>
                  The potential uses are too many to list here, but hopefully
                  this gives an indication as to how I can make something to
                  help you with the day-to-day running of your business.
                </p>
                <div>
                  <hr />
                </div>
              </div>
            </Slide>

            <Fade>
              <div>
                <h4>"I'm interested, how much do you charge?"</h4>
                <p>
                  This is a difficult question to answer without knowing the
                  details of your project. Please visit the{" "}
                  <AniLink
                    fade
                    to="/contact"
                    duration={process.env.PAGE_TRANSITION_DURATION}
                  >
                    Contact
                  </AniLink>{" "}
                  page and complete the form. Please bear the following in mind
                  when requesting a quote....
                </p>
                <QuoteQuestionList />
                <p>
                  Your answers to these questions will help me to provide you
                  with an accurate quote.
                </p>
              </div>
            </Fade>
          </div>
        </Fade>
      )}
    </Layout>
  );
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "services.jpg" }) {
      ...fluidImage
    }
  }
`;
