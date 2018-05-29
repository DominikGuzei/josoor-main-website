import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Head from "react-helmet";
import josoorVerticalLogo from '../../theme/images/josoor-logo-vertical-white.svg';
import styles from './Home.scss';
import { defineMessages, intlShape } from 'react-intl';
import JoinUsButton from '../shared/JoinUsButton';
import ProjectsSection from './home/ProjectsSection';
import JoinUsSection from './home/JoinUsSection';
import ChallengesSocietySection from './home/ChallengesSocietySection';
import ChallengesRefugeesSection from './home/ChallengesRefugeesSection';
import ChallengesSupportersSection from './home/ChallengesSupportersSection';
import WhatWeDoSection from './home/WhatWeDoSection';
import environment from '../../environment';

const messages = defineMessages({
  title: {
    id: 'home.title',
    defaultMessage: '!!!Josoor',
  },
  headline: {
    id: 'home.headline',
    defaultMessage: '!!!Josoor',
  },
  pitch: {
    id: 'home.pitch',
    defaultMessage: '!!!home.pitch',
  },
  factIncreaseOfHate: {
    id: 'home.factIncreaseOfHate',
    defaultMessage: '!!!home.factIncreaseOfHate',
  },
  factDisplaced: {
    id: 'home.factDisplaced',
    defaultMessage: '!!!home.factDisplaced',
  },
  factSupportersTranslation: {
    id: 'home.factSupportersTranslation',
    defaultMessage: '!!!home.factSupportersTranslation',
  },
});

export const JOIN_US_ANCHOR_ID = 'join-us';

export default class Home extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { isLoading, posts } = this.props;
    const { intl } = this.context;
    return (
      <div>
        <Head>
          <title>{intl.formatMessage(messages.title)}</title>
          <meta name="description" content={intl.formatMessage(messages.pitch)} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.josoor.net" />
          <meta property="og:title" content={intl.formatMessage(messages.title)} />
          <meta property="og:description" content={intl.formatMessage(messages.pitch)} />
          <meta property="og:image" content={environment.URL + '/images/fb-home-share.png'} />
        </Head>
        <div>
          <div className={styles.header}>
            <img className={styles.logo} src={josoorVerticalLogo} alt="Josoor Logo" />
            <h1 className={styles.headline}>
              {intl.formatMessage(messages.headline)}
            </h1>
            <div className={styles.pitch}>
              {intl.formatMessage(messages.pitch)}
            </div>
            <JoinUsButton />
          </div>

          <div className={styles.projectsSection}>
            <ProjectsSection />
          </div>

          <Grid fluid className={styles.factStripeOrange}>
            <Row center="xs">
              <Col xs={12} sm={8}>
                {intl.formatMessage(messages.factIncreaseOfHate)}
              </Col>
            </Row>
          </Grid>

          <div className={styles.societyChallengesSection}>
            <ChallengesSocietySection />
          </div>

          <Grid fluid className={styles.factStripeDark}>
            <Row center="xs">
              <Col xs={12} sm={8}>
                {intl.formatMessage(messages.factDisplaced)}
              </Col>
            </Row>
          </Grid>

          <div className={styles.refugeesChallengesSection}>
            <ChallengesRefugeesSection />
          </div>

          <Grid fluid className={styles.factStripeOrange}>
            <Row center="xs">
              <Col xs={12} sm={8}>
                {intl.formatMessage(messages.factSupportersTranslation)}
              </Col>
            </Row>
          </Grid>

          <div className={styles.supportersChallengesSection}>
            <ChallengesSupportersSection />
          </div>

          <div className={styles.whatWeDoSection}>
            <WhatWeDoSection />
          </div>

          <div className={styles.joinUsSection}>
            <JoinUsSection />
          </div>
        </div>
      </div>
    );
  }
}
