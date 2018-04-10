import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './ProjectsSection.scss';
import { defineMessages, intlShape } from 'react-intl';
import connectLogo from '../../../assets/home/josoor-connect-logo.svg';
import answersLogo from '../../../assets/home/josoor-answers-logo.svg';

const messages = defineMessages({
  headline: {
    id: 'home.projects.title',
    defaultMessage: '!!!Our Projects',
    description: 'Title of projects section on home page'
  },
  connectTitle: {
    id: 'home.projects.connect.title',
    defaultMessage: '!!!connect',
    description: 'Title of connect project section on home page'
  },
  connectIntro: {
    id: 'home.projects.connect.intro',
    defaultMessage: '!!!Where refugees and supporters connect and build strong, active and inclusive communities',
    description: 'Intro of connect project section on home page'
  },
  answersTitle: {
    id: 'home.projects.answers.title',
    defaultMessage: '!!!answers',
    description: 'Title of connect project section on home page'
  },
  answersIntro: {
    id: 'home.projects.answers.intro',
    defaultMessage: '!!!Where refugees and supporters bridge the language barrier and exchange tustworthy information',
    description: 'Intro of answers project section on home page'
  },
  comingSoon: {
    id: 'home.projects.comingSoon',
    defaultMessage: '!!!coming soon',
    description: 'Coming soon label for projects on home page'
  },
});

export default class ProjectsSection extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={12}>
            <h1>{intl.formatMessage(messages.headline)}</h1>
          </Col>
          <Col xs={10} md={12} xl={8}>
            <Row around="xs">
              <Col xs={12} sm={10} md={5} lg={4} className={`${styles.project} ${styles.connect}`}>
                <Row center="xs">
                  <Col xs={8}>
                    <img src={connectLogo} />
                  </Col>
                  <Col xs={12}>
                    <span className={styles.state}>
                      {intl.formatMessage(messages.comingSoon)}
                    </span>
                  </Col>
                  <h2>{intl.formatMessage(messages.connectTitle)}</h2>
                  <Col xs={12} sm={10} className={styles.info}>
                    {intl.formatMessage(messages.connectIntro)}
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={10} md={5} lg={4} className={`${styles.project} ${styles.answers}`}>
                <Row center="xs">
                  <Col xs={8}>
                    <img src={answersLogo} />
                  </Col>
                  <Col xs={12}>
                    <span className={styles.state}>
                      {intl.formatMessage(messages.comingSoon)}
                    </span>
                  </Col>
                  <h2>{intl.formatMessage(messages.answersTitle)}</h2>
                  <Col xs={12} sm={10} className={styles.info}>
                    {intl.formatMessage(messages.answersIntro)}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
