import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/global.css"

const Styles = styled.div`
    .btn-round {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: linear-gradient(5deg, #745fb5, #9066b8);
        display: block;
        position: fixed;
        top: 90px;
        left: 90px;
    }

    .btn-round a {
        border: 0;
        margin-right: 20px;
        display: inline-block;
        width: 48px;
        height: 48px;
        line-height: 48px;
        font-size: 32px;
        text-align: center;
    }

    .btn-round i {
        fill: white;
        color: white;
        transition: transform 250ms ease, color 250ms linear;
    }

`

export default () => (
    <React.Fragment>
        <Styles>
            <div className="btn-round">
                <Link to="/blog">
                    <i className="material-icons">arrow_back</i>
                </Link>
            </div>
        </Styles>
    </React.Fragment>
)
