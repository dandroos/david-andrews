import React from 'react';
import SEO from '../components/seo';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

import Service from '../components/service';

export default function ServicesPage(props) {
    const descriptions = {
        websites : `<p>I have been creating websites since 1998. Back then, what you could achieve was fairly limited and therefore the process was relatively straightforward.</p> Today, there is so much you can do with the web and so the learning curve has become much steeper.  I have studied and gained invaluable knowledge in the fundamental technologies/languages, including:
        </p>
        
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span class="font-weight-bold">HTML</span><br><small>(Hyper Text Markup Language - The skeleton)</small></li>
            <li class="list-group-item"><span class="font-weight-bold">CSS</span><br><small>(Cascading StyleSheets - The aesthetics)</small></li>
            <li class="list-group-item"><span class="font-weight-bold">JavaScript</span><br><small>(The dynamics)</small></li>
        </ul>
        
        <p class="mt-3">The above are considered the holy trinity for creating web content.  I am also skilled in the following additional tools: </p>
        
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span class="font-weight-bold">Server-side languages:</span><br>PHP, Node, Python</li>
            <li class="list-group-item"><span class="font-weight-bold">Databases:</span><br>MySQL, PostgreSQL, MongoDB</li>
            <li class="list-group-item"><span class="font-weight-bold">Front-end frameworks:</span><br>React, Gatsby, Bootstrap, Materialize</li>
            <li class="list-group-item"><span class="font-weight-bold">Web app frameworks:</span><br>Django, Laravel</li>
            <li class="list-group-item"><span class="font-weight-bold">Other tools:</span><br>Wordpress (content manangement system), SASS (CSS pre-processor), Pug (HTML template generator), NPM (package manager), D3 (data visualisation) and foundation DevOps. </li>
        </ul>
        
        <h4 class="mt-4">"I don't know what most/any of that means....."</h4>
        <p>
            Why would you need to know?  It doesn't matter!  Put simply, whether you need a very basic portfolio/brochure-style static website or a complex dynamic site such as a social network, I have the knowledge and skills to create it.
        </p>
        `,
        software: `<p>My skills are not limited to creating online solutions.  I can also build bespoke software to run on your PC/Mac.</p>
        <p>For example, I can tailor-make software to help you with....</p>
        <ul class="">
            <li><span class="font-weight-bold">Client admin</span> (Software to help you maintain strong relationships with your clients.)</li>
            <li><span class="font-weight-bold">Invoicing</span> (Come away from the Microsoft Word template and step into the light of a fully-automated solution!)</li>
            <li><span class="font-weight-bold">Business analysis</span> (Collate data from all areas of your business to perform detailed analysis, including impressive visualisations.)</li>
        </ul>
        <p>The potential use cases are too many to list here, but hopefully this gives an indication as to how I can make something to help you with the day-to-day running of your business.</p>`

    }
    return (
        <Layout>
            <SEO title="Services" />
            <div className="container">
                <h1 className="display-4">Services</h1>
                <p className="lead">How can I help you?</p>
                <Img fluid={props.data.imageOne.childImageSharp.fluid} />
                <div>
                    <hr/>
                </div>
                <Service service="Websites/Web apps" description={descriptions.websites}/>
                <div>
                    <hr/>
                </div>
                <Service service="Software" description={descriptions.software}/>
                <div>
                    <hr/>
                </div>
                <h4>"I'm interested, how much do you charge?"</h4>
                <p>This is a difficult question to answer without knowing the details of your project.  Please visit the <AniLink fade to="/contact" duration={.85}>Contact
                </AniLink> page and complete the form.  Please include the following details....</p>
                <ul>
                    <li>Is your content static or dynamic? (will you be regularly adding content - such as a blog - or will it be a basic brochure-style site?)</li>
                    <li>Will you need a database? (will you want to store data about products, clients and users?)</li>
                    <li>Do you have graphics/visual elements already prepared? (do you already have logos and branding or will you need me to create that?) </li>
                    <li>Do you already have a domain name and a hosting plan?</li>
                    <li>Do you already have a design in mind?</li>
                </ul>
                <p>In short, please include as many details about your project as you can so that I can provide you with an accurate quote.</p>
            </div>
        </Layout>
    )
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