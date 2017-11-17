import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";
import BlogIndexContainer from './source/components/blog/index/BlogIndexContainer';
import BlogPostContainer from './source/components/blog/post/BlogPostContainer';
import Home from './source/components/pages/Home';
import Impress from './source/components/pages/Impress';
// import AdminUsersListContainer from './source/components/admin/users/UsersListContainer';
import LoginContainer from './source/components/auth/LoginContainer';
import SignupContainer from './source/components/auth/SignupContainer';
import FeedContainer from "./source/components/feed/FeedContainer";
import './source/theme/App.global.scss';
import Layout from "./source/components/layout/Layout";
import { ROUTES } from './source/routes';

const routes = () => (
  <Router history={browserHistory}>
    <Route path={ROUTES.IMPRESS} component={Impress} />
    <Route component={Layout}>
      <Route path={ROUTES.INDEX} component={Home} />
      <Route path={ROUTES.LOGIN} component={LoginContainer} />
      <Route path={ROUTES.SIGNUP} component={SignupContainer} />
      <Route path={ROUTES.FEED} component={FeedContainer} />
      <Route path={ROUTES.BLOG.INDEX} component={BlogIndexContainer} />
      {/*<Route path="/blog/after/:after" component={BlogIndexContainer} />*/}
      <Route path={`${ROUTES.BLOG.POST}/*`} component={BlogPostContainer} />
      {/*<Route path="/admin/users" component={AdminUsersListContainer} />*/}
      <Route path="*" component={Home} />
    </Route>
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
