import React, { Component } from 'react';
import Head from "react-helmet";
import howToAskImage from '../../theme/images/home/ask-illustration.svg';
import howToAnswerImage from '../../theme/images/home/answer-illustration.svg';
import howToTranslateImage from '../../theme/images/home/translate-illustration.svg';
import whyHeader from '../../theme/images/home/why-header.jpg';
import styles from './Home.scss';
import { defineMessages, intlShape } from 'react-intl';

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
    description: 'Landing page how section headline'
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
            <img src={whyHeader} alt="Three people looking at a smartphone"/>
            <h2>Why?</h2>
            <div className={styles.separator} />
            <p>
              Both refugees and locals use tools to exchange information online. However, in
              all those currently available, they remain in two separated groups due to the
              language barrier, while the knowledge that is being exchanged within those two
              groups is mostly badly organised and oftentimes lost altogether.
            </p>
          </div>

          <div className={styles.vision}>
            <h1>Our Vision</h1>
            <p>
              The vision of Josoor, which means “Bridges” in Arabic, is to provide an easily
              accessible social network to connect everybody involved in the “refugee crisis”
              to enable the creation of empowered communities and provide them with the tools
              to help facilitate the inclusion of refugees into local societies.
            </p>

            <p>
              Starting with Josoor Answers, we will keep adding features to keep up with the
              Josoor Community’s changing needs and wishes.
            </p>

          </div>
        </div>
      </div>
    );
  }
}
