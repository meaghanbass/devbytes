import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"

const Styles = styled.div`
    .post-container {
        columns: 2;
        background-color: #fff;
        padding: 20px 20px;
        box-shadow: 0 6px 8px rgba(102,119,136,.03),0 1px 2px rgba(102,119,136,.3);
    }

    .header {
        margin-top:90px;
    }

    .post-title {
        text-align: center;
        font-weight: 200;
        // margin: 0;
        color: #345;
    }

`;

export default ({ data }) => {
    return (
        <React.Fragment>
            <Styles>

                <div className="header">
                    <h1 className="post-title">devbytes.co</h1>
                </div>
            
                <Layout>
                    <div>
                        <h2>Blog Posts</h2>

                        <div className="post-container">
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <div key={node.id}>
                                <Link to={node.fields.slug}>
                                    <p>
                                        {node.frontmatter.title}{" "}
                                    </p>
                                </Link>

                            </div>
                        ))}
                        </div>
                    </div>
                </Layout>
            </Styles>
        </React.Fragment>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
        totalCount
        edges {
            node {
            id
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
            }
            fields {
                slug
            }
            excerpt
            }
        }
        }
    }
`