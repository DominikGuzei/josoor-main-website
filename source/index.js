import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";
import { ApolloProvider } from 'react-apollo';
import { setupApolloClient } from './api/apolloClient';
import { ThemeProvider } from 'react-css-themr';
import BlogIndexPage from './components/blog/BlogIndexPage';
import BlogPostPage from './components/blog/BlogPostPage';
import Home from './components/pages/Home';
import Html from './components/layout/Html';
import PageError from './components/pages/PageError';
import Impress from './components/pages/Impress';
import AdminUsersListContainer from './components/admin/users/UsersListContainer';
import LoginContainer from './components/auth/LoginContainer';
import FeedContainer from "./components/feed/FeedContainer";
import { theme } from './theme/polymorph/theme';

const App = () => (
  <ApolloProvider client={setupApolloClient()}>
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  </ApolloProvider>
);

export default createApp(App, Html);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
