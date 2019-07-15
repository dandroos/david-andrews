import React from "react"
import SEO from '../components/seo';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from "../components/layout";
import Principle from "../components/principle";

const AboutPage = (props) => (
  <Layout>
    <SEO title="About" />
      <div className="container">
        <h1 className="display-4">About</h1>
        <p className="lead">Before you decide to hire me for your project, you probably want to know a little bit more about who I am....</p>
        <div className="row">
          <div className="mb-3 col-sm">
          <Img fluid ={props.data.imageOne.childImageSharp.fluid } alt="Dave at the computer" />
          </div>
        </div>
        <p>
          I am originally from England but now I live in <a href="https://en.wikipedia.org/wiki/Fuerteventura" target="_blank" rel="noopener noreferrer">Fuerteventura</a>, one of the Canary Islands.  I am kind of a <a href="https://en.wikipedia.org/wiki/Digital_nomad" target="_blank" rel="noopener noreferrer">digital nomad</a>!
        </p>
        <p>
          I learned to code over a period of a few years of intense studying, lots of trial and error, eureka moments and mule-like stubborness! Writing code may not be everyone's cup of tea, but I find it a very meditative and creative process.  The learning journey never ends, which I love!
        </p>
        <p>
          When I'm not sitting/standing in front of my computer (which doesn't leave much time!), I volunteer at my local dog rescue shelter.  I enjoy showing them love and taking them for walks.  My favourite breed of dog is called a bardino (AKA <a href="https://en.wikipedia.org/wiki/Perro_Majorero" target="_blank" rel="noopener noreferrer">perro majorero</a>), which is native to Fuerteventura.  It is my ambition to live in a home full of them one day!
        </p>
        <div className="mb-3 row">
          <div className="col-sm">
          <Img fluid ={props.data.imageTwo.childImageSharp.fluid} alt="Dave with Bungle the Bardino" />
          </div>
          <div className="col-sm">
          <Img fluid ={props.data.imageThree.childImageSharp.fluid} alt="Dave with Franky the Bardino" />
          </div>
        </div>
        <p>
          I also enjoy improving my Spanish (hablo un poco pero lo intento!), playing my piano and riding my bike around the beautiful mountainous landscape here.
        </p>
        <div className="row">
          <div className="mb-3 col-sm">
          <Img fluid ={props.data.imageFour.childImageSharp.fluid} alt="Dave's bike in Fuerteventura" />
          </div>
        </div>
        <div>
          <hr />
          </div>
          <div className="mb-6">
            <h2 className="display-5">My development principles</h2>
            <p className="lead">As a professional developer, I keep the following principles in mind at all times...</p>
              <ul className="list-group">
                <li className="list-group-item">
                  <Principle title="Keep It Simple, Stupid! (K.I.S.S.)" description="With the ever-growing market of development technologies, there is a temptation for even experienced developers to use a sledgehammer to crack a walnut. They all have advantages/disadvantages in certain situations. I use the tech I know best and only deviate from that when there is a more suitable choice.  I prefer tried and true technology over 'the latest thing'!"/>
                </li>
                <li className="list-group-item">
                  <Principle title="Maintainable and Scaleable" description="When writing code for an application of any size, it can be very easy to become disorganised. By keeping my code tidy, modular and clearly-labelled maintainence is a hassle-free affair.  Clean code and architecture is also important to ensure your tech solution can grow alongside your business."/>
                </li>
                <li className="list-group-item">
                  <Principle title="Communication is Key" description="Although I work quickly and efficiently, I do not make false promises to my clients and quote unrealistic deadlines. Unfortunately, the market for developers is swamped by those who will promise you 'Rome in one day'.  They will quote prices that may seem cheap but come back to bite when you potentially need someone to fix the mess they've left behind!   "/>
                </li>
                <li className="list-group-item">
                  <Principle title="Did I mention communication?" description="I am aware of the reputation that computer nerds(!) have in terms of communication skills and approachability!  I am keen to set your mind at rest by saying that I don't expect my clients to know the ins and outs of what I do and would never make them feel silly for it.  I like to think that I have a friendly, open and approachable manner. I am available to contact 24 hours a day, 7 days a week but please only wake me up if you have an emergency!"/>
                </li>
              </ul>
          </div>
      </div>
  </Layout>
)

export default AboutPage

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
    imageOne: file(relativePath: { eq: "dave-at-computer-colour.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "dave-with-bungle.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "dave-with-franky-mirrored.jpg" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "bike.jpg" }) {
      ...fluidImage
    }
  }
`