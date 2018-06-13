import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Head from "react-helmet";
import { defineMessages, intlShape } from 'react-intl';
import headerImagePreview from '../../assets/answers/header-preview.jpg';
import headerImage from '../../assets/answers/header.jpg';
import headerLogo from '../../assets/shared/josoor-answers-logo.svg';
import styles from '../home/Home.scss';
import JoinUsSection from '../shared/JoinUsSection';
import environment from '../../environment';
import WhatYouCanDoSection from '../home/WhatYouCanDoSection';
import { BrandHeader } from '../shared/BrandHeader';

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
          <meta property="og:url" content={`${environment.BASE_URL}/${intl.locale}`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={intl.formatMessage(messages.title)} />
          <meta property="og:description" content={intl.formatMessage(messages.pitch)} />
          <meta property="og:image" content={environment.BASE_URL + '/images/fb-home-share.png'} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Head>
        <div>
          <BrandHeader
            headerImagePreview={headerImagePreview}
            headerImage={headerImage}
            logo={headerLogo}
            headline={intl.formatMessage(messages.headline)}
            pitch={intl.formatMessage(messages.pitch)}
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
