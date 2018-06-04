import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";
import { anchorate } from 'anchorate'
import BlogIndexContainer from './source/components/blog/index/BlogIndexContainer';
import BlogPostContainer from './source/components/blog/post/BlogPostContainer';
import Home from './source/components/pages/Home';
import Impress from './source/components/pages/Impress';
import './source/theme/App.global.scss';
import Layout from "./source/components/layout/Layout";
import { ROUTES } from './source/routes';
import Provider from './source/components/Provider';
import { pushLocation, replaceLanguageParts } from './source/utils/routing';
import { SUPPORTED_LOCALES } from './source/i18n';
import environment from './source/environment';

const removeSplatNames = (route) => route.replace(/(?=\*)(\S+)/, '*');

const generateRoute = (path, component) => [
  <Route path={replaceLanguageParts(removeSplatNames(path), '')} component={component} key={0} />
].concat(SUPPORTED_LOCALES.map((lang, index) => (
  <Route path={replaceLanguageParts(removeSplatNames(path), `${lang}/`)} component={component} key={index + 1} />
)));

/**
 * Override browserHistory.push to merge pathname, query and hash of
 * current and next location (e.g: to keep the language query param
 * between pages)
 */
if (browserHistory) browserHistory.push = pushLocation;
const routes = () => (
  <Router history={browserHistory} onUpdate={anchorate}>
    <Route component={Provider}>
      {generateRoute(ROUTES.IMPRESS, Impress)}
      <Route component={Layout}>
        {generateRoute(ROUTES.INDEX, Home)}
        {generateRoute(ROUTES.BLOG.INDEX, BlogIndexContainer)}
        {generateRoute(ROUTES.BLOG.POST, BlogPostContainer)}
        {/*<Route path="/blog/after/:after" component={BlogIndexContainer} />*/}
        {/*<Route path={`${ROUTES.BLOG.POST}/:slug`} component={BlogPostContainer} />*/}
        {/*<Route path="/admin/users" component={AdminUsersListContainer} />*/}
        <Route path="*" component={Home} />
      </Route>
    </Route>
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}

// kill previous website ServiceWorker
if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) registration.unregister();
  });
}

if (typeof window !== "undefined") {
  // Scroll to URL anchors when page was loaded
  window.onload = anchorate;
  // Setup Netlify Identity redirect to admin page
  if (environment.CMS && window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
}
