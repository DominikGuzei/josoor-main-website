import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ProgressiveImage from 'react-progressive-image-loading';
import styles from './FactStripe.scss';

export default class FactStripe extends Component {

  render() {
    const { text, image, preview } = this.props;
    return (
      <ProgressiveImage
        preview={preview}
        src={image}
        initialBlur={0}
        transitionTime={0}
        render={(src, style) => (
          <Grid
            fluid
            className={styles.root}
            style={Object.assign(style, { backgroundImage: `url(${src})` })}
          >
            <Row center="xs">
              <Col xs={12} sm={8}>
                {text}
              </Col>
            </Row>
          </Grid>
        )}
      />
    );
  }
}
