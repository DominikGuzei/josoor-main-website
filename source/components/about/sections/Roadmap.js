import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames';
import styles from './Roadmap.scss';
import { defineMessages, intlShape } from 'react-intl';

const messages = defineMessages({
  headline: {
    id: 'about.roadmap.title',
    defaultMessage: 'Roadmap',
  },
});

export default class Roadmap extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    return (
      <Grid fluid className={styles.root}>
        <Row center="xs">
          <Col xs={12}>
            <h1>{intl.formatMessage(messages.headline)}</h1>
          </Col>
        </Row>
        <div className={styles.timeline}>
          <Row>
            <Col xsOffset={1} xs={10}
                 smOffset={3} sm={6}
                 mdOffset={4} sm={4}
                 className={classnames([styles.entry, styles.first, styles.done])}>
              <div className={styles.box}>
                <div className={styles.header} />
                <h1 className={styles.title}>Idea</h1>
                <p className={styles.text}>
                  Concept of Josoor developed and research conducted
                </p>
              </div>
            </Col>
            <Col xsOffset={1} xs={10}
                 smOffset={6} sm={5}
                 mdOffset={6} md={4}
                 className={classnames([styles.entry, styles.here])}>
              <div className={styles.box}>
                <div className={styles.header}>
                  We are here!
                </div>
                <h1>Design</h1>
                <p>Sketches, Wireframes, Design</p>
              </div>
            </Col>
            <Col xsOffset={1} xs={10}
                 smOffset={1} sm={5}
                 mdOffset={2} md={4}
                 className={classnames([styles.entry, styles.odd])}>
              <div className={styles.box}>
                <div className={styles.header}>
                  Beta Launch
                </div>
                <h1>Josoor Connect</h1>
                <p>Starting to build communities around the world</p>
              </div>
            </Col>
            <Col xsOffset={1} xs={10}
                 smOffset={6} sm={5}
                 mdOffset={6} md={4}
                 className={classnames([styles.entry])}>
              <div className={styles.box}>
                <div className={styles.header} />
                <h1>Crowdfunding</h1>
                <p>Getting the community’s support to build the next features</p>
              </div>
            </Col>
            <Col xsOffset={1} xs={10}
                 smOffset={1} sm={5}
                 mdOffset={2} md={4}
                 className={classnames([styles.entry, styles.odd])}>
              <div className={styles.box}>
                <div className={styles.header}>
                  Prototype
                </div>
                <h1>Josoor Answers</h1>
                <p>Testing the prototype with members & getting feedback</p>
              </div>
            </Col>
            <Col xsOffset={1} xs={10}
                 smOffset={6} sm={5}
                 mdOffset={6} md={4}
                 className={classnames([styles.entry])}>
              <div className={styles.box}>
                <div className={styles.header}>
                  Beta Launch
                </div>
                <h1>Josoor Answers</h1>
                <p>Launch Josoor Answers BETA to test and collect feedback</p>
              </div>
            </Col>
            <Col xsOffset={1} xs={10}
                 smOffset={3} sm={6}
                 mdOffset={4} sm={4}
                 className={classnames([styles.entry, styles.last])}>
              <div className={styles.box}>
                <div className={styles.header}>
                  Feedback
                </div>
                <h1>Improvements & Enhancements</h1>
                <p>Collect and analyze members’ feedback to improve and enhance Josoor</p>
              </div>
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}
