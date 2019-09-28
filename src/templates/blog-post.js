import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import "../styles/global.css"
import BlogButton from "../components/BlogButton"

const Styles = styled.div`
    .post-layout {
        padding: 90px 0;
        font-family: -apple-system,BlinkMacSystemFont,segoe ui,roboto,oxygen,ubuntu,cantarell,fira sans,droid sans,helvetica neue,sans-serif;
    }
    .post-title {
        text-align: center;
        font-weight: 200;
        margin: 0;
        color: #345;
    }
    .post-text {
        margin-top: 30px;
    }
`;

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        
        <React.Fragment>
            <Styles>
                <BlogButton />
                <div className="post-layout">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="post-title">{post.frontmatter.title}</h1>
                        <div  className="post-text">
                            <div dangerouslySetInnerHTML={{ __html: post.html }} />
                        </div>
                    </div>
                </div>
            </Styles>
        </React.Fragment>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`