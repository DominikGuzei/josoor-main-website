import React from "react";
import Head from "react-helmet";
import './Html.global.scss';

export default props => {
  const helmet = Head.renderStatic();
  return (
    <html {...helmet.htmlAttributes.toComponent()}>
    <head>
      {helmet.base.toComponent()}
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {helmet.style.toComponent()}
      {helmet.script.toComponent()}
      {helmet.noscript.toComponent()}
    </head>
    <body {...helmet.bodyAttributes.toComponent()}>
    {props.body}
    {props.state}
    {props.script}
    </body>
    </html>
  );
};
