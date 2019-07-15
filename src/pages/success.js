import React from "react";
import SEO from "../components/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout";

export default function SuccessPage() {
    return (
        <Layout>
            <SEO title="Message Sent" />
            <div className="container">
                <h1 className="display-4">Contact</h1>
                <p className="lead">
                    Thank you for your message. I will respond as soon as
                    possible.
                </p>
                <AniLink fade to="/contact" className="btn btn-primary">
                    Back to site
                </AniLink>
            </div>
        </Layout>
    );
}
