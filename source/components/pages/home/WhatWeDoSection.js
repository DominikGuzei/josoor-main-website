import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './WhatWeDoSection.scss';
import { defineMessages, intlShape } from 'react-intl';

const messages = defineMessages({
  headline: {
    id: 'home.whatwedo.title',
    defaultMessage: '!!!What We Do',
  },
  description1: {
    id: 'home.whatwedo.description1',
    defaultMessage: `!!!description1`
  },
  description2: {
    id: 'home.whatwedo.description2',
    defaultMessage: `!!!description2`
  },
});

export default class WhatWeDoSection extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    return (
      <Grid fluid className={styles.root}>
        <Row center="xs">
          <Col xs={12}>
            <h1 className={styles.headline}>
              {intl.formatMessage(messages.headline)}
            </h1>
          </Col>
          <Col className={styles.description} xs={12} sm={10} md={8}>
            <p>
              {intl.formatMessage(messages.description1)}
            </p>
            <p>
              {intl.formatMessage(messages.description2)}
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
