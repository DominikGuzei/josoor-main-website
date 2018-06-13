import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './ChallengesRefugeesSection.scss';
import { defineMessages, intlShape } from 'react-intl';
import DisclosureBox from '../shared/DisclosureBox';
import refugeesInformationImage from '../../assets/home/challenges/information-refugees.png';
import refugeesSocialImage from '../../assets/home/challenges/social-refugees.png';
import refugeesInclusionImage from '../../assets/home/challenges/inculsion-refugees.png';
import refugeesLanguageImage from '../../assets/home/challenges/language-refugees.png';
import { globalMessages } from '../../i18n/global-messages';

const messages = defineMessages({
  headline: {
    id: 'home.challenges.refugees.headline',
    defaultMessage: '!!!Refugees',
  },
  informationTitle: {
    id: 'home.challenges.refugees.information.title',
    defaultMessage: '!!!Information',
  },
  informationDescription: {
    id: 'home.challenges.refugees.information.description',
    defaultMessage: '!!!home.challenges.refugees.information.description',
  },
  socialTitle: {
    id: 'home.challenges.refugees.social.title',
    defaultMessage: '!!!Social',
  },
  socialDescription: {
    id: 'home.challenges.refugees.social.description',
    defaultMessage: '!!!home.challenges.refugees.social.description',
  },
  inclusionTitle: {
    id: 'home.challenges.refugees.inclusion.title',
    defaultMessage: '!!!Inclusion',
  },
  inclusionDescription: {
    id: 'home.challenges.refugees.inclusion.description',
    defaultMessage: '!!!home.challenges.refugees.inclusion.description',
  },
  languageTitle: {
    id: 'home.challenges.refugees.language.title',
    defaultMessage: '!!!Language',
  },
  languageDescription: {
    id: 'home.challenges.refugees.language.description',
    defaultMessage: '!!!home.challenges.refugees.language.description',
  },
});

const ChallengeDetail = ({ image, text }) => (
  <Row middle="xs">
    <Col xs={12} md={3}>
      {image}
    </Col>
    <Col xs={12} md={9}>
      <p>{text}</p>
    </Col>
  </Row>
);

export default class ChallengesRefugeesSection extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    return (
      <Grid fluid className={styles.root}>
        <Row center="xs">
          <Col xs={11} sm={10} md={9} lg={8} >
            <h1>{intl.formatMessage(globalMessages.challengesTitle)}</h1>
            <h2>{intl.formatMessage(messages.headline)}</h2>
            <Row center="xs" start="md">
              <DisclosureBox
                className={styles.challenge}
                isOpen
                summary={() => (
                  <h3>{intl.formatMessage(messages.informationTitle)}</h3>
                )}
                details={() => (
                  <ChallengeDetail
                    image={<img src={refugeesInformationImage} alt="Image symbolizing locked information" />}
                    text={intl.formatMessage(messages.informationDescription)}
                  />
                )}
              />
              <DisclosureBox
                className={styles.challenge}
                summary={() => (
                  <h3>{intl.formatMessage(messages.socialTitle)}</h3>
                )}
                details={() => (
                  <ChallengeDetail
                    image={<img src={refugeesSocialImage} alt="Group of people hugging each other and smiling" />}
                    text={intl.formatMessage(messages.socialDescription)}
                  />
                )}
              />
              <DisclosureBox
                className={styles.challenge}
                summary={() => (
                  <h3>{intl.formatMessage(messages.inclusionTitle)}</h3>
                )}
                details={() => (
                  <ChallengeDetail
                    image={<img src={refugeesInclusionImage} alt="A group on the left side and an excluded person on the right" />}
                    text={intl.formatMessage(messages.inclusionDescription)}
                  />
                )}
              />
              <DisclosureBox
                className={styles.challenge}
                summary={() => (
                  <h3>{intl.formatMessage(messages.languageTitle)}</h3>
                )}
                details={() => (
                  <ChallengeDetail
                    image={<img src={refugeesLanguageImage} alt="Image showing bubbles saying 'hello' in multiple languages" />}
                    text={intl.formatMessage(messages.languageDescription)}
                  />
                )}
              />
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
