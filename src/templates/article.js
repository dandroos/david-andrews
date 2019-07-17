import React from "react";
import SEO from "../components/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Fade from "react-reveal/Fade";
import Layout from "../components/layout";
import { graphql } from "gatsby";

require("prismjs/themes/prism-okaidia.css");

function ArticlePage(props) {
  const post = props.data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      {!props.transitionStatus === "entered" ? null : (
        <Fade delay={process.env.PAGE_TRANSITION_DURATION * 1000}>
          <div className="container">
            <AniLink
              fade
              to="/articles"
              duration={process.env.PAGE_TRANSITION_DURATION}
              className="btn btn-sm btn-primary"
            >
              Back
            </AniLink>
            <h1 className="display-4">{post.frontmatter.title}</h1>
            <div>
              <small
                style={{
                  display: "block",
                  borderTop: "1px dotted #343A40",
                  borderBottom: "1px dotted #343A40"
                }}
              >
                Posted on {post.frontmatter.date} by {post.frontmatter.author}
              </small>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </Fade>
      )}
    </Layout>
  );
}

export const pageQuery = graphql`
  query ArticleIndexQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        author
      }
    }
  }
`;

export default ArticlePage;
