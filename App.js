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
import { pushLocation } from './source/utils/routing';

/**
 * Override browserHistory.push to merge pathname, query and hash of
 * current and next location (e.g: to keep the language query param
 * between pages)
 */
if (browserHistory) browserHistory.push = pushLocation;

const routes = () => (
  <Router history={browserHistory} onUpdate={anchorate}>
    <Route component={Provider}>
      <Route path={ROUTES.IMPRESS} component={Impress} />
      <Route component={Layout}>
        <Route path={ROUTES.INDEX} component={Home} />
        <Route path={ROUTES.BLOG.INDEX} component={BlogIndexContainer} />
        {/*<Route path="/blog/after/:after" component={BlogIndexContainer} />*/}
        <Route path={`${ROUTES.BLOG.POST}/:slug`} component={BlogPostContainer} />
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
}
