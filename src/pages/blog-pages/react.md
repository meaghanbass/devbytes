---
title: "react"
date: "2019-09-22"
---

<h1 style="text-align:center;border-top: solid 1px rgba(102,119,136,.2);padding-top:16px;"></h1>

<style>
    ul {
        background-color: white;
        width: 375px;
        padding: 0;
        box-shadow: 0 6px 8px rgba(102,119,136,.03),0 1px 2px rgba(102,119,136,.3);
        margin: 0 auto;
        margin-top: 50px;
    }
    h4 {
        border-top: solid 1px rgba(102,119,136,.05);
        font-size: 12px;
        padding: 8px 16px;
        font-weight: 400;
        background: #f8f9fa;
        color: #678;
        font-family: -apple-system,BlinkMacSystemFont,segoe ui,roboto,oxygen,ubuntu,cantarell,fira sans,droid sans,helvetica neue,sans-serif;
        margin: 0;
    }
    li {
        padding: 8px;
        padding-left: 36px;
        list-style-type: none;
        border-top: solid 1px rgba(102,119,136,.05) !important;
        font-size: 14px;
    }
    li::before {
        content: '';
        position: relative;
        display: inline-block;
        width: 4px;
        height: 4px;
        background: #678;
        border-radius: 50%;
        right: 16px;
        top: -2px;
    }
    code {
        color: #678;
        letter-spacing: -.03em;
        font-size: 13px;
        line-height: 21px;
    }
</style>

<ul>
<h4>Install</h4>
    <li><code>sudo npm install -g -create-react-app</code></li>
<h4>Create A New App</h4>
    <li><code>sudo npm init react-app my-app</code></li>
    <li><code>cd my-app</code></li>
    <li><code>npm start</code></li>
</ul>

<ul>
<h4>Dependencies</h4>
    <li><code>npm install --save react-router-dom</code></li>
    <li><code>npm install react-bootstrap bootstrap</code></li>
    <li><code>npm install --save styled-components</code></li>
</ul>