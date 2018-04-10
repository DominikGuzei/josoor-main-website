import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Head from "react-helmet";
import josoorVerticalLogo from '../../theme/images/josoor-logo-vertical-white.svg';
import styles from './Home.scss';
import { defineMessages, intlShape, FormattedHTMLMessage } from 'react-intl';
import JoinUsButton from '../shared/JoinUsButton';
import ProjectsSection from './home/ProjectsSection';
import JoinUsSection from './home/JoinUsSection';
import ChallengesSocietySection from './home/ChallengesSocietySection';

const messages = defineMessages({
  title: {
    id: 'home.title',
    defaultMessage: '!!!Josoor',
    description: 'Title of landing page'
  },
  headline: {
    id: 'home.headline',
    defaultMessage: '!!!Josoor',
    description: 'Landing page headline'
  },
  subline: {
    id: 'home.subline',
    defaultMessage: '!!!Empowering Refugees & Local Supporters To Unite and Turn Crisis Into Opportunities',
    description: 'Landing page subline'
  },
  factIncreaseOfHate: {
    id: 'home.factIncreaseOfHate',
    defaultMessage: '!!!50% of the biggest host countries experience a sharp increase of hate crimes against refugees',
    description: 'Fact stripe "increase of hate"'
  },
});

export const JOIN_US_ANCHOR_ID = 'join-us-anchor';

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
        </Head>
        <div>
          <div className={styles.header}>
            <img className={styles.logo} src={josoorVerticalLogo} />
            <h1 className={styles.headline}>
              {intl.formatMessage(messages.headline)}
            </h1>
            <div className={styles.pitch}>
              {intl.formatMessage(messages.subline)}
            </div>
            <JoinUsButton />
          </div>

          <ProjectsSection />

          <Grid fluid>
            <Row center="xs" className={styles.factStripeOrange}>
              <Col xs={12} sm={8}>
                {intl.formatMessage(messages.factIncreaseOfHate)}
              </Col>
            </Row>
          </Grid>

          <ChallengesSocietySection />

          {/*<JoinUsSection />*/}
        </div>
      </div>
    );
  }
}
