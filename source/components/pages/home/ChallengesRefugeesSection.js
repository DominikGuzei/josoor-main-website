import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './ChallengesRefugeesSection.scss';
import { defineMessages, intlShape } from 'react-intl';
import DisclosureBox from '../../shared/DisclosureBox';
import refugeesInformationImage from '../../../assets/home/challenges/information-refugees.png';
import refugeesSocialImage from '../../../assets/home/challenges/social-refugees.png';
import refugeesInclusionImage from '../../../assets/home/challenges/inculsion-refugees.png';
import refugeesLanguageImage from '../../../assets/home/challenges/language-refugees.png';

const messages = defineMessages({
  challenges: {
    id: 'home.challenges.title',
    defaultMessage: '!!!The Challenges',
  },
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
    defaultMessage: '!!!Accessing information about bureaucracy, legal questions and other subjects vital to refugees is a challenge even for locals. Finding and understanding this information without speaking the local language is difficult at least and oftentimes impossible.',
  },
  socialTitle: {
    id: 'home.challenges.refugees.social.title',
    defaultMessage: '!!!Social',
  },
  socialDescription: {
    id: 'home.challenges.refugees.social.description',
    defaultMessage: '!!!Building a social life in a new place is hard. Much more so when you don’t have a job yet and no money to attend costly events and activities. Yet a healthy social life is the prerequisite not only for integration, but mental sanity and wellbeing.',
  },
  inclusionTitle: {
    id: 'home.challenges.refugees.inclusion.title',
    defaultMessage: '!!!Inclusion',
  },
  inclusionDescription: {
    id: 'home.challenges.refugees.inclusion.description',
    defaultMessage: '!!!Instead of being included in solutions, refugees are put into the roles of passive recipients of help and goodwill. Their own skills, talents and knowledge is disregarded instead of used and fostered.',
  },
  languageTitle: {
    id: 'home.challenges.refugees.language.title',
    defaultMessage: '!!!Language',
  },
  languageDescription: {
    id: 'home.challenges.refugees.language.description',
    defaultMessage: '!!!Getting settled in a new country is never easy. Doing so without speaking the local language however can turn the smallest tasks into major challenges and insurmountable obstacles.',
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
            <h1>{intl.formatMessage(messages.challenges)}</h1>
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
                    image={<img src={refugeesInformationImage} />}
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
                    image={<img src={refugeesSocialImage} />}
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
                    image={<img src={refugeesInclusionImage} />}
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
                    image={<img src={refugeesLanguageImage} />}
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
