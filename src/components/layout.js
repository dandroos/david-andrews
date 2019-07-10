/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Helmet from "react-helmet";
import Background from "./background";
import BackgroundOverlay from "./backgroundOverlay";

import "../css/media-queries.css"



  // const Layout = (props) => {
    const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    
        <div style={{ 
          minHeight: '100vh',
          paddingTop: 90
        }}>
          <Background />
          <BackgroundOverlay />
          <Helmet>
            <script src="https://kit.fontawesome.com/e6cbd84bc2.js"></script>
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main className="pt-4 pb-4">{children}</main>
          
          <footer className="text-center fixed-bottom" style={{ background: 'white', fontSize: '10px'}}>
            ©{new Date().getFullYear()} David Andrews
          </footer>
        </div>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
