import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";
import BlogIndexPage from './containers/blog/BlogIndexPage';
import BlogPostPage from './containers/blog/BlogPostPage';
import Home from './components/Home';
import Html from './containers/Html';
import PageError from './components/PageError';
import Impress from './components/Impress';

const routes = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/blog" component={BlogIndexPage} />
    <Route path="/impress" component={Impress} />
    <Route path="/blog/after/:after" component={BlogIndexPage} />
    <Route path="/blog/posts/*" component={BlogPostPage} />
    <Route path="*" component={PageError} />
  </Router>;

export default createApp(routes, Html);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
