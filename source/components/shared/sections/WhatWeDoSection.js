import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './WhatWeDoSection.scss';
import ProgressiveImage from 'react-progressive-image-loading';
import classnames from 'classnames';

export default class WhatWeDoSection extends Component {

  render() {
    const {
      preview,
      image,
      className,
      headline,
      description,
    } = this.props;
    return (
      <ProgressiveImage
        preview={preview}
        src={image}
        initialBlur={0}
        transitionTime={0}
        render={(src, style) => (
          <Grid
            fluid
            className={classnames([styles.root, className])}
            style={Object.assign(style, { backgroundImage: `url(${src})` })}
          >
            <Row center="xs">
              <Col xs={12}>
                <h1 className={styles.headline}>{headline}</h1>
              </Col>
              <Col className={styles.description} xs={12} sm={10} md={8}>
                <p>{description}</p>
              </Col>
            </Row>
          </Grid>
        )}
      />

    );
  }
}
