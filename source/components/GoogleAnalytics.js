import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleAnalytics from 'react-ga';

export default class Provider extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { router } = this.context;
    GoogleAnalytics.initialize('UA-78308702-2');
    GoogleAnalytics.ga('set', 'anonymizeIp', true);
    router.listen(({ pathname }) => (
      setTimeout(() => (
        GoogleAnalytics.pageview(pathname, null, document.title)
      ), 200)
    ));
    GoogleAnalytics.pageview(location.pathname, null, document.title);
  }

  render() {
    return null;
  }
}
