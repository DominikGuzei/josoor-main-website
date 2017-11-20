import React, { Component } from 'react';
import Head from "react-helmet";
import howToAskImage from '../../theme/images/home/ask-illustration.svg';
import howToAnswerImage from '../../theme/images/home/answer-illustration.svg';
import howToTranslateImage from '../../theme/images/home/translate-illustration.svg';
import whyHeader from '../../theme/images/home/why-header.jpg';
import styles from './Home.scss';
import { defineMessages, intlShape, FormattedHTMLMessage } from 'react-intl';

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
            <h1 className={styles.headline}>
              {intl.formatMessage(messages.headline)}
            </h1>
            <div className={styles.pitch}>
              {intl.formatMessage(messages.subline)}
            </div>
          </div>

          <div className={styles.how}>
            <h2>{intl.formatMessage(messages.how)}</h2>

            <div className={styles.interactions}>
              <div className={styles.howToAsk}>
                <img src={howToAskImage} />
                <h3>{intl.formatMessage(messages.howToAskHeadline)}</h3>
                <div className={styles.separator} />
                <p>{intl.formatMessage(messages.howToAskDescription)}</p>
              </div>
              <div className={styles.howToAnswer}>
                <img src={howToAnswerImage} />
                <h3>{intl.formatMessage(messages.howToAnswerHeadline)}</h3>
                <div className={styles.separator} />
                <p>{intl.formatMessage(messages.howToAnswerDescription)}</p>
              </div>
              <div className={styles.howToTranslate}>
                <img src={howToTranslateImage} />
                <h3>{intl.formatMessage(messages.howToTranslateHeadline)}</h3>
                <div className={styles.separator} />
                <p>{intl.formatMessage(messages.howToTranslateDescription)}</p>
              </div>
            </div>
          </div>

          <div className={styles.why}>
            <img src={whyHeader}/>
            <div className={styles.content}>
              <h2>{intl.formatMessage(messages.why)}</h2>
              <div className={styles.separator} />
              <FormattedHTMLMessage {...messages.whyText} />
            </div>
          </div>

          <div className={styles.vision}>
            <h1>{intl.formatMessage(messages.vision)}</h1>
            <FormattedHTMLMessage {...messages.visionText} />
          </div>
        </div>
      </div>
    );
  }
}
