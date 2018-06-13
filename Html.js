import React from "react";
import Head from "react-helmet";
import { omit } from 'lodash';
import environment from './source/environment';

export default ({ App, render }) => {
  // if needed, you can know if you are in development or in static rendering
  // const isDev = process.env.PHENOMIC_ENV === "development"
  const { Main, State, Script, Style, assets } = render(<App />);
  const helmet = Head.renderStatic();
  return (
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.meta.toComponent()}
        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        {environment.isStaticBuild() ? (
          <style
            // @idea use https://github.com/addyosmani/critical
            dangerouslySetInnerHTML={{
              __html: Object.keys(assets)
                .reduce((acc, name) => acc.concat(assets[name]), [])
                .filter(asset => asset.endsWith(".css"))
                .map(css =>
                  // @todo try to get /dist/ from config somehow
                  require("fs").readFileSync("./dist/" + css, { encoding: "utf8" })
                )
                .join("")
                .replace(/\n/, "")
            }}
          />
        ) : (
          <Style />
        )}

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
