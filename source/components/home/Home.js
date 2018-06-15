import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Head from "react-helmet";
import { defineMessages, intlShape } from 'react-intl';
import ProgressiveImage from 'react-progressive-image-loading';
import headerImagePreview from '../../assets/home/header-preview.jpg';
import headerImage from '../../assets/home/header.jpg';
import josoorVerticalLogo from '../../theme/images/josoor-logo-vertical-white.svg';
import styles from './Home.scss';
import ProjectsSection from './sections/ProjectsSection';
import JoinUsSection from '../shared/JoinUsSection';
import ChallengesSocietySection from './sections/ChallengesSocietySection';
import ChallengesRefugeesSection from './sections/ChallengesRefugeesSection';
import ChallengesSupportersSection from './sections/ChallengesSupportersSection';
import WhatWeDoSection from './sections/WhatWeDoSection';
import environment from '../../environment';
import WhatYouCanDoSection from '../shared/sections/WhatYouCanDoSection';
import { BrandHeader } from '../shared/BrandHeader';

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
          <meta property="og:url" content={`${environment.BASE_URL}/${intl.locale}`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={intl.formatMessage(messages.title)} />
          <meta property="og:description" content={intl.formatMessage(messages.pitch)} />
          <meta property="og:image" content={environment.BASE_URL + '/images/fb-home-share.png'} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          {!environment.isProductionContext() && (
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          )}
        </Head>
        <div>
          <BrandHeader
            headerImagePreview={headerImagePreview}
            headerImage={headerImage}
            logo={josoorVerticalLogo}
            headline={intl.formatMessage(messages.headline)}
            pitch={intl.formatMessage(messages.pitch)}
          />

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

          <ProgressiveImage
            preview={headerImagePreview}
            src={headerImage}
            initialBlur={0}
            transitionTime={0}
            render={(src, style) => (
              <div
                className={styles.whatWeDoSection}
                style={Object.assign(style, { backgroundImage: `url(${src})` })}
              >
                <WhatWeDoSection />
              </div>
            )}
          />

          <WhatYouCanDoSection shareUrl={`${environment.BASE_URL}/${intl.locale}/`} />

          <div className={styles.joinUsSection}>
            <JoinUsSection />
          </div>
        </div>
      </div>
    );
  }
}
