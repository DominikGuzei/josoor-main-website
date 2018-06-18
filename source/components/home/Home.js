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
import WhatWeDoSection from '../shared/sections/WhatWeDoSection';
import environment from '../../environment';
import WhatYouCanDoSection from '../shared/sections/WhatYouCanDoSection';
import { BrandHeader } from '../shared/BrandHeader';
import FactStripe from '../shared/sections/FactStripe';
import worldMapDarkPreview from '../../assets/world-map-stripe-dark-preview.jpg'
import worldMapDark from '../../assets/world-map-stripe-dark.png'
import worldMapOrangePreview from '../../assets/world-map-stripe-orange-preview.jpg'
import worldMapOrange from '../../assets/world-map-stripe-orange.png'
import { getAlternateLanguagesTo, getLanguageByParentLocale } from '../../i18n';
import { getRouteToAlternateLanguage } from '../../utils/routing';
import PropTypes from 'prop-types';

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
  whatWeDoHeadline: {
    id: 'home.whatwedo.title',
    defaultMessage: '!!!What We Do',
  },
  whatWeDoDescription1: {
    id: 'home.whatwedo.description1',
    defaultMessage: `!!!home.whatwedo.description1`
  },
  whatWeDoDescription2: {
    id: 'home.whatwedo.description2',
    defaultMessage: `!!!home.whatwedo.description2`
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

          <FactStripe
            className={styles.factStripe}
            text={intl.formatMessage(messages.factIncreaseOfHate)}
            preview={worldMapOrangePreview}
            image={worldMapOrange}
          />

          <div className={styles.societyChallengesSection}>
            <ChallengesSocietySection />
          </div>

          <FactStripe
            className={styles.factStripe}
            text={intl.formatMessage(messages.factDisplaced)}
            preview={worldMapDarkPreview}
            image={worldMapDark}
          />

          <div className={styles.refugeesChallengesSection}>
            <ChallengesRefugeesSection />
          </div>

          <FactStripe
            className={styles.factStripe}
            text={intl.formatMessage(messages.factSupportersTranslation)}
            preview={worldMapOrangePreview}
            image={worldMapOrange}
          />

          <div className={styles.supportersChallengesSection}>
            <ChallengesSupportersSection />
          </div>

          <WhatWeDoSection
            className={styles.whatWeDoSection}
            preview={headerImagePreview}
            image={headerImage}
            headline={intl.formatMessage(messages.whatWeDoHeadline)}
            description={(
              <span>
                {intl.formatMessage(messages.whatWeDoDescription1)}
                <br /><br />
                {intl.formatMessage(messages.whatWeDoDescription2)}
              </span>
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
