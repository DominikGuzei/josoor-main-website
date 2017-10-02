import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";
import { ApolloProvider } from 'react-apollo';
import { setupApolloClient } from './source/api/apolloClient';
import { ThemeProvider } from 'react-css-themr';
import BlogIndexPage from './source/components/blog/BlogIndexPage';
import BlogPostPage from './source/components/blog/BlogPostPage';
import Home from './source/components/pages/Home';
import PageError from './source/components/pages/PageError';
import Impress from './source/components/pages/Impress';
import AdminUsersListContainer from './source/components/admin/users/UsersListContainer';
import LoginContainer from './source/components/auth/LoginContainer';
import FeedContainer from "./source/components/feed/FeedContainer";
import { theme } from './source/theme/polymorph/theme';
import './App.global.scss';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/feed" component={FeedContainer} />
    <Route path="/blog" component={BlogIndexPage} />
    <Route path="/impress" component={Impress} />
    <Route path="/blog/after/:after" component={BlogIndexPage} />
    <Route path="/blog/posts/*" component={BlogPostPage} />
    <Route path="/admin/users" component={AdminUsersListContainer} />
    <Route path="*" component={PageError} />
  </Router>
);

const App = () => (
  <ApolloProvider client={setupApolloClient()}>
    <ThemeProvider theme={theme}>
      {routes}
    </ThemeProvider>
  </ApolloProvider>
);

export default createApp(App);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
