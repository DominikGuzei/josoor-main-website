import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './ProjectsSection.scss';
import { defineMessages, intlShape } from 'react-intl';
import connectLogo from '../../../assets/home/josoor-connect-logo.svg';
import answersLogo from '../../../assets/home/josoor-answers-logo.svg';
import { ROUTES } from '../../../routes';
import LocaleAwareLink from '../../shared/LocaleAwareLink';

const messages = defineMessages({
  headline: {
    id: 'home.projects.title',
    defaultMessage: 'Our Projects',
  },
  connectTitle: {
    id: 'home.projects.connect.title',
    defaultMessage: '!!!connect',
  },
  connectIntro: {
    id: 'home.projects.connect.intro',
    defaultMessage: '!!!home.projects.connect.intro',
  },
  answersTitle: {
    id: 'home.projects.answers.title',
    defaultMessage: '!!!answers',
  },
  answersIntro: {
    id: 'home.projects.answers.intro',
    defaultMessage: '!!!home.projects.answers.intro',
  },
  comingSoon: {
    id: 'home.projects.comingSoon',
    defaultMessage: 'coming soon',
  },
  learnMore: {
    id: 'home.projects.learnMore',
    defaultMessage: 'Learn more',
  },
});

export default class ProjectsSection extends Component {

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
          <Col xs={10} md={12} xl={8}>
            <Row around="xs">
              <Col xs={12} sm={10} md={5} lg={4} className={`${styles.project} ${styles.answers}`}>
                <Row center="xs">
                  <Col xs={8}>
                    <LocaleAwareLink to={ROUTES.ANSWERS}>
                      <img src={answersLogo} alt="Josoor Answers logo" />
                    </LocaleAwareLink>
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
                  <LocaleAwareLink className={styles.learnMoreButton} to={ROUTES.ANSWERS}>
                    {intl.formatMessage(messages.learnMore)}
                  </LocaleAwareLink>
                </Row>
              </Col>
              <Col xs={12} sm={10} md={5} lg={4} className={`${styles.project} ${styles.connect}`}>
                <Row center="xs">
                  <Col xs={8}>
                    <img src={connectLogo} alt="Josoor Connect logo" />
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
                  <LocaleAwareLink className={styles.learnMoreButton} to={ROUTES.CONNECT}>
                    {intl.formatMessage(messages.learnMore)}
                  </LocaleAwareLink>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
