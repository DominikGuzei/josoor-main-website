import React, { Component } from 'react';
import Head from "react-helmet";
import { defineMessages, intlShape } from 'react-intl';
import headerImagePreview from '../../assets/connect/connect-header-preview.jpg';
import headerImage from '../../assets/connect/connect-header.jpg';
import headerLogo from '../../assets/connect/josoor-connect-logo.svg';
import styles from './Connect.scss';
import JoinUsSection from '../shared/JoinUsSection';
import environment from '../../environment';
import WhatYouCanDoSection from '../shared/sections/WhatYouCanDoSection';
import { BrandHeader } from '../shared/BrandHeader';

const messages = defineMessages({
  title: {
    id: 'connect.title',
    defaultMessage: 'Connect: Inclusive Communities for Refugees & Supporters',
  },
  headline: {
    id: 'connect.headline',
    defaultMessage: 'Connect',
  },
  pitch: {
    id: 'connect.pitch',
    defaultMessage: 'Where refugees & local supporters connect to build strong, active and inclusive communities',
  },
});

export default class Connect extends Component {

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
          <meta property="og:url" content={`${environment.BASE_URL}/${intl.locale}/connect/`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={intl.formatMessage(messages.title)} />
          <meta property="og:description" content={intl.formatMessage(messages.pitch)} />
          <meta property="og:image" content={environment.BASE_URL + '/images/connect-title-image.jpg'} />
          <meta property="og:image:width" content="680" />
          <meta property="og:image:height" content="554" />
        </Head>
        <div>
          <BrandHeader
            headerImagePreview={headerImagePreview}
            headerImage={headerImage}
            logo={headerLogo}
            headline={intl.formatMessage(messages.pitch)}
            hideJoinButton
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
