import React from 'react';
import SEO from '../components/seo';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/layout';
import { graphql } from 'gatsby';

function ArticlesPage({data}) {

    return (
        <Layout>
            <SEO title="Articles" />
            <div className="container">
                <h1 className="display-4">Articles</h1>
                <p className="lead">Here is where I publish tutorials, ramblings and rants!</p>
                <div>
                    <hr/>
                </div>
                {data.allMarkdownRemark.edges.map(post => (
                    <div key={post.node.id}>
                        <h3 className="display-5">{post.node.frontmatter.title}</h3>
                        <small>Posted on { post.node.frontmatter.date } by { post.node.frontmatter.author }</small>
                        <p>{ post.node.excerpt }</p>
                        <AniLink fade to={post.node.frontmatter.path} className="btn btn-primary">Read more</AniLink>
                        <div>
                            <hr/>
                        </div>
                        {/* <div dangerouslySetInnerHTML={{ __html: post.node.html}}/> */}
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
        query ArticlesIndexQuery {
            allMarkdownRemark {
                edges {
                node {
                    frontmatter {
                    path
                    title
                    date
                    author
                    }
                    id
                    excerpt
                }
                }
            }
        }
    `

export default ArticlesPage;