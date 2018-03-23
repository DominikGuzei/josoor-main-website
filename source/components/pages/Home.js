import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Head from "react-helmet";
import howToAskImage from '../../assets/home/ask-illustration.svg';
import josoorVerticalLogo from '../../theme/images/josoor-logo-vertical-white.svg';
import howToAnswerImage from '../../assets/home/answer-illustration.svg';
import howToTranslateImage from '../../assets/home/translate-illustration.svg';
import whyHeader from '../../assets/home/why-header.jpg';
import styles from './Home.scss';
import { defineMessages, intlShape, FormattedHTMLMessage } from 'react-intl';
import JoinUsButton from '../shared/JoinUsButton';
import ProjectsSection from './home/ProjectsSection';
import JoinUsSection from './home/JoinUsSection';

const messages = defineMessages({
  title: {
    id: 'home.title',
    defaultMessage: '!!!Josoor Answers',
    description: 'Title of landing page'
  },
  headline: {
    id: 'home.headline',
    defaultMessage: '!!!Josoor Answers',
    description: 'Landing page headline'
  },
  subline: {
    id: 'home.subline',
    defaultMessage: '!!!The place for refugees and supporters to unite through sharing knowledge and translating information',
    description: 'Landing page subline'
  },
  how: {
    id: 'home.how',
    defaultMessage: '!!!How?',
    description: 'Landing page "how" section headline',
  },
  howToAskHeadline: {
    id: 'home.howToAskHeadline',
    defaultMessage: '!!!Ask',
    description: 'Landing page how to ask headline'
  },
  howToAskDescription: {
    id: 'home.howToAskDescription',
    defaultMessage: '!!!Get the information you need by asking questions in the community!',
    description: 'Landing page how to ask description'
  },
  howToAnswerHeadline: {
    id: 'home.howToAnswerHeadline',
    defaultMessage: '!!!Answer',
    description: 'Landing page how to answer headline'
  },
  howToAnswerDescription: {
    id: 'home.howToAnswerDescription',
    defaultMessage: '!!!Share your knowledge and help fellow members by answering their questions!',
    description: 'Landing page how to answer description'
  },
  howToTranslateHeadline: {
    id: 'home.howToTranslateHeadline',
    defaultMessage: '!!!Translate',
    description: 'Landing page how to translate headline'
  },
  howToTranslateDescription: {
    id: 'home.howToTranslateDescription',
    defaultMessage: '!!!Help the community breach the language barrier by translating information!',
    description: 'Landing page how to translate description'
  },
  why: {
    id: 'home.why',
    defaultMessage: '!!!Why?',
    description: 'Landing page "why" section headline'
  },
  whyText: {
    id: 'home.whyText',
    defaultMessage: '!!!text about why',
    description: 'Landing page "why" section text'
  },
  vision: {
    id: 'home.vision',
    defaultMessage: '!!!Our Vision',
    description: 'Landing page "vision" section headline'
  },
  visionText: {
    id: 'home.visionText',
    defaultMessage: '!!!text about our vision',
    description: 'Landing page "vision" section text'
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
                50% of the biggest host countries experience a sharp increase of hate crimes against refugees
              </Col>
            </Row>
          </Grid>
          <JoinUsSection />
        </div>
      </div>
    );
  }
}
