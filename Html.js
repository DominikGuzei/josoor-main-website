import React from "react";
import Head from "react-helmet";
import { omit } from 'lodash';

export default ({ App, render }) => {
  // if needed, you can know if you are in development or in static rendering
  // const isDev = process.env.PHENOMIC_ENV === "development"
  const { Main, State, Script, Style } = render(<App />);
  const helmet = Head.renderStatic();
  // Remove 'data-react-helmet' attributes from meta tags because this breaks crawlers (like Facebook!)
  const cleanedMetaTags = helmet.meta.toComponent().map((meta) => React.cloneElement(meta, {
    'data-react-helmet': undefined
  }));
  return (
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {cleanedMetaTags}
        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        <Style />
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        <Main />
        <State />
        <Script />
      </body>
    </html>
  );
};
