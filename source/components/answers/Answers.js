import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Head from "react-helmet";
import { defineMessages, intlShape } from 'react-intl';
import headerImagePreview from '../../assets/answers/header-preview.jpg';
import headerImage from '../../assets/answers/header.jpg';
import whatWeDo from '../../assets/answers/what-we-do.jpg';
import whatWeDoPreview from '../../assets/answers/what-we-do-preview.jpg';
import headerLogo from '../../assets/answers/josoor-answers-logo.svg';
import styles from './Answers.scss';
import JoinUsSection from '../shared/JoinUsSection';
import environment from '../../environment';
import WhatYouCanDoSection from '../shared/sections/WhatYouCanDoSection';
import { BrandHeader } from '../shared/BrandHeader';
import FeaturesSection from './sections/FeaturesSection';
import FactStripe from '../shared/sections/FactStripe';
import worldMapOrangePreview from '../../assets/world-map-stripe-orange-preview.jpg'
import worldMapOrange from '../../assets/world-map-stripe-orange.png'
import WhatWeDoSection from '../shared/sections/WhatWeDoSection';

const messages = defineMessages({
  title: {
    id: 'answers.title',
    defaultMessage: '!!!Josoor Answers',
  },
  headline: {
    id: 'answers.headline',
    defaultMessage: '!!!Josoor',
  },
  pitch: {
    id: 'answers.pitch',
    defaultMessage: '!!!home.pitch',
  },
  accessToInformation: {
    id: 'answers.stripe.accessToInformation',
    defaultMessage: 'answers.stripe.accessToInformation',
  },
  whatWeDoHeadline: {
    id: 'answers.whatwedo.title',
    defaultMessage: '!!!What We Do',
  },
  whatWeDoDescription: {
    id: 'answers.whatwedo.description',
    defaultMessage: `!!!answers.whatwedo.description`
  },
});

export default class Answers extends Component {

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
          <meta property="og:url" content={`${environment.BASE_URL}/${intl.locale}/answers/`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={intl.formatMessage(messages.title)} />
          <meta property="og:description" content={intl.formatMessage(messages.pitch)} />
          <meta property="og:image" content={environment.BASE_URL + '/images/josoor-answers-main-image-updated.jpg'} />
          <meta property="og:image:width" content="680" />
          <meta property="og:image:height" content="554" />
        </Head>
        <div>
          <BrandHeader
            headerImagePreview={headerImagePreview}
            headerImage={headerImage}
            logo={headerLogo}
            headline={intl.formatMessage(messages.pitch)}
          />

          <section className={styles.featuresSection}>
            <FeaturesSection />
          </section>

          <FactStripe
            text={intl.formatMessage(messages.accessToInformation)}
            preview={worldMapOrangePreview}
            image={worldMapOrange}
          />

          <WhatWeDoSection
            className={styles.whatWeDoSection}
            preview={whatWeDoPreview}
            image={whatWeDo}
            headline={intl.formatMessage(messages.whatWeDoHeadline)}
            description={intl.formatMessage(messages.whatWeDoDescription)}
          />

          <WhatYouCanDoSection
            shareUrl={`${environment.BASE_URL}/${intl.locale}/answers/`}
          />

          <div className={styles.joinUsSection}>
            <JoinUsSection />
          </div>
        </div>
      </div>
    );
  }
}
