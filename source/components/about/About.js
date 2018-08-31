import React, { Component } from 'react';
import Head from "react-helmet";
import { defineMessages, intlShape } from 'react-intl';
import headerImagePreview from '../../assets/home/header-preview.jpg';
import headerImage from '../../assets/home/header.jpg';
import styles from './About.scss';
import JoinUsSection from '../shared/JoinUsSection';
import environment from '../../environment';
import ProgressiveImage from 'react-progressive-image-loading';
import JoinUsButton from '../shared/JoinUsButton';
import { globalMessages } from '../../i18n/global-messages';
import Roadmap from './sections/Roadmap';

const messages = defineMessages({
  title: {
    id: 'about.title',
    defaultMessage: 'About us',
  },
  headline: {
    id: 'about.headline',
    defaultMessage: 'About Us',
  },
  visionHeadline: {
    id: 'about.vision.headline',
    defaultMessage: 'Vision',
  },
  visionText: {
    id: 'about.vision.text',
    defaultMessage: 'A world where refugees feel at home wherever they are',
  },
  missionHeadline: {
    id: 'about.mission.headline',
    defaultMessage: 'Mission',
  },
  missionText: {
    id: 'about.mission.text',
    defaultMessage: 'To unite refugees & supporters in a social network which empowers them to create solutions to their challenges and realise their full potential',
  },
});

export default class About extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    return (
      <div>
        <Head>
          <title>{intl.formatMessage(messages.title)}</title>
          <meta name="description" content={intl.formatMessage(globalMessages.josoorPitch)} />
          <meta property="og:url" content={`${environment.BASE_URL}/${intl.locale}/answers/`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={intl.formatMessage(messages.title)} />
          <meta property="og:description" content={intl.formatMessage(globalMessages.josoorPitch)} />
          <meta property="og:image" content={environment.BASE_URL + '/images/fb-home-share.png' } />
          <meta property="og:image:width" content="680" />
          <meta property="og:image:height" content="554" />
        </Head>

        <div>
          <ProgressiveImage
            preview={headerImagePreview}
            src={headerImage}
            initialBlur={0}
            transitionTime={0}
            render={(src, style) => (
              <div className={styles.header} style={Object.assign(style, { backgroundImage: `url(${src})` })}>
                <h1 className={styles.headline}>{intl.formatMessage(messages.headline)}</h1>
                <p className={styles.pitch}>{intl.formatMessage(globalMessages.josoorPitch)}</p>
                <JoinUsButton />
              </div>
            )}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.vision}>
            <h2>{intl.formatMessage(messages.visionHeadline)}</h2>
            <p>{intl.formatMessage(messages.visionText)}</p>
          </div>
          <div className={styles.mission}>
            <h2>{intl.formatMessage(messages.missionHeadline)}</h2>
            <p>{intl.formatMessage(messages.missionText)}</p>
          </div>
        </div>

        <Roadmap />

        <div className={styles.joinUsSection}>
          <JoinUsSection />
        </div>
      </div>
    );
  }
}
