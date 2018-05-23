import React, { Component } from 'react';
import Head from "react-helmet";
import { browserHistory } from 'react-router';
import environment from '../../environment';

export default class Admin extends Component {

  componentWillMount() {
    if (!environment.CMS) {
      if (browserHistory) browserHistory.push({ pathname: '/' });
    }
  }

  render() {
    return environment.CMS ? (
      <div>
        <Head>
          <title>CMS Admin</title>
          <link rel="stylesheet" href="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.css" />
          <script src="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.js" />
        </Head>
      </div>
    ) : null;
  };
}
