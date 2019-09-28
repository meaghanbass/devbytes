import React from "react"
import styled from "styled-components"
import "../styles/global.css"

const Styles = styled.div`
    .navbar {
        // height: 100vh;
        margin-top: 50px;
        color: white;
        position: relative;
        z-index: 0;
    }

    a {
        color: #111;
        font-family: cousine,sfmono-regular,Consolas,Menlo,liberation mono,ubuntu mono,Courier,monospace;
        letter-spacing: -.03em;
        font-size: 14px;
    }
    h2 {
        color: #745fb5;
        font-size: 16px;
        border-bottom: solid 1px rgba(102,119,136,.2);
        margin: 16px 0;
        padding: 0 0 16px;
        font-weight: 400;
        font-family: -apple-system,BlinkMacSystemFont,segoe ui,roboto,oxygen,ubuntu,cantarell,fira sans,droid sans,helvetica neue,sans-serif;
        width: 500px;

    }
`;

export default ({ children }) => (
    <Styles>
        <div className="navbar d-flex justify-content-center">
            <div className="nav">
                {children}
            </div>
        </div>
    </Styles>
)