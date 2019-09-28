import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/global.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import BlogButton from "../components/BlogButton"

const Styles = styled.div`
    .home {
        display: flex;
        min-height: 100vh;
    }
    .content-left {
        align-self: center;
    }
    .content-left {
        display: flex;
        flex-direction: column;
    }
    .content-left {
        max-width: 22em;
        margin: 90px;
        font-weight: 300;
        color: #345;
        font-size: 19px;
    }
    .post-content {
        max-width: 20em;
        margin-top: 90px;
        margin-bottom: 90px;
        margin-left: 490px;
        font-weight: 300;
        color: #345;
        font-size: 19px;
    }
    .content-left a,
    .content-right a {
        color: #222;
        text-decoration: none;
        border-bottom: solid 1px#d4d4d4;
        transition: color 250ms linear;
    }
    .links {
        margin-top: 60px;
        margin-left: -13px;
    }
    .links a {
        border: 0;
        margin-right: 20px;
        display: inline-block;
        width: 48px;
        height: 48px;
        line-height: 48px;
        font-size: 32px;
        text-align: center;
    }
    .links a i {
        color: #aaa;
        transition: transform 250ms ease, color 250ms linear;
        transform: scale(0.7);
    }
    .signature {
        color: #ddd;
        margin-top: 0.5em;
        margin-left: -30px;
        font-size: 1.5em;
    }
    a {
        text-decoration: none;
    }
    p {
        margin: 19px 0;
    }
`;

export default ({ data }) => (
    <React.Fragment>
        <Styles>
            <BlogButton />
            <div className="home">
                <div className="content-left">
                    <p>
                        I am a web developer helping make the world more beautiful with
                        JavaScript, React, PHP, and UI design.
                    </p>
                    <p>
                        I am currently breaking things at{" "}
                        <a href="http://globalwebproperties.com/" target="_blank" rel="noopener noreferrer">
                            Global Web Properties
                        </a>
                        ,{" "}
                        <a href="http://prodesigner.co/" target="_blank" rel="noopener noreferrer">
                            ProDesigner
                        </a>
                        ,{" "}
                        <a href="https://nowmediagroup.tv/" target="_blank" rel="noopener noreferrer">
                            Now Media Group
                        </a>
                        , and working on{" "}
                        <a href="https://github.com/meaghanbass" target="_blank" rel="noopener noreferrer">
                            various other projects
                        </a>
                        .
                    </p>
                    <p>
                        <Link to="/Blog">I blog about web development</Link>.
                    </p>
                    <p>
                        <strong>
                            <a href="https://twitter.com/meaghanbass_" target="_blank" rel="noopener noreferrer">
                                You should follow me on Twitter.
                            </a>
                        </strong>{" "}
                        You can write to me through{" "}
                        <a href="mailto:meaghan.bass@gmail.com">meaghan.bass@gmail.com</a>.
                    </p>
                    <div className="links">
                        <a href="https://twitter.com/meaghanbass_" target="_blank" rel="noopener noreferrer">
                            <i className="ion-social-twitter-outline" />
                        </a>
                        <a href="https://github.com/meaghanbass" target="_blank" rel="noopener noreferrer">
                            <i className="ion-social-github-outline" />
                        </a>
                        <a href="https://ph.linkedin.com/in/meaghanbass" target="_blank" rel="noopener noreferrer">
                            <i className="ion-social-linkedin" />
                        </a>
                    </div>
                    <div className="signature">— @meaghanbass_</div>
                </div>
                </div>
        </Styles>
    </React.Fragment>
)
