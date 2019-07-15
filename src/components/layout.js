/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
// import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Helmet from "react-helmet";

// import "./layout.css";
import "../css/style.scss";
import "../css/media-queries.css";
// import "../css/style.css"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 90
      }}
    >
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Cabin|Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/e6cbd84bc2.js"></script>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="pt-4 pb-4">{props.children}</main>
      <footer
        className="text-center fixed-bottom bg-dark text-light"
        style={{ fontSize: "10px" }}
      >
        ©{new Date().getFullYear()} David Andrews
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
