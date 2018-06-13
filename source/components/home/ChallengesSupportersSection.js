import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './ChallengesSupportersSection.scss';
import { defineMessages, intlShape } from 'react-intl';
import DisclosureBox from '../shared/DisclosureBox';
import supportersInformationImage from '../../assets/home/challenges/information-supporters.png';
import supportersConfusionImage from '../../assets/home/challenges/confusion-supporters.png';
import supportersIsolationImage from '../../assets/home/challenges/isolation-supporters.png';
import supportersFrustrationImage from '../../assets/home/challenges/frustration-supporters.png';
import { globalMessages } from '../../i18n/global-messages';

const messages = defineMessages({
  headline: {
    id: 'home.challenges.supporters.headline',
    defaultMessage: '!!!Local Supporters',
  },
  informationTitle: {
    id: 'home.challenges.supporters.information.title',
    defaultMessage: '!!!Information',
  },
  informationDescription: {
    id: 'home.challenges.supporters.information.description',
    defaultMessage: '!!!Local supporters description',
  },
  confusionTitle: {
    id: 'home.challenges.supporters.confusion.title',
    defaultMessage: '!!!Confusion',
  },
  confusionDescription: {
    id: 'home.challenges.supporters.confusion.description',
    defaultMessage: '!!!home.challenges.supporters.confusion.description',
  },
  isolationTitle: {
    id: 'home.challenges.supporters.isolation.title',
    defaultMessage: '!!!Isolation',
  },
  isolationDescription: {
    id: 'home.challenges.supporters.isolation.description',
    defaultMessage: '!!!home.challenges.supporters.isolation.description',
  },
  frustrationTitle: {
    id: 'home.challenges.supporters.frustration.title',
    defaultMessage: '!!!Frustration',
  },
  frustrationDescription: {
    id: 'home.challenges.supporters.frustration.description',
    defaultMessage: '!!!home.challenges.supporters.frustration.description',
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

export default class ChallengesSupportersSection extends Component {

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
                    image={<img src={supportersInformationImage} alt="Person looking overwhelmed by confusing information"  />}
                    text={intl.formatMessage(messages.informationDescription)}
                  />
                )}
              />
              <DisclosureBox
                className={styles.challenge}
                summary={() => (
                  <h3>{intl.formatMessage(messages.confusionTitle)}</h3>
                )}
                details={() => (
                  <ChallengeDetail
                    image={<img src={supportersConfusionImage} alt="Person looking confused"  />}
                    text={intl.formatMessage(messages.confusionDescription)}
                  />
                )}
              />
              <DisclosureBox
                className={styles.challenge}
                summary={() => (
                  <h3>{intl.formatMessage(messages.isolationTitle)}</h3>
                )}
                details={() => (
                  <ChallengeDetail
                    image={<img src={supportersIsolationImage} alt="Person looking at two others" />}
                    text={intl.formatMessage(messages.isolationDescription)}
                  />
                )}
              />
              <DisclosureBox
                className={styles.challenge}
                summary={() => (
                  <h3>{intl.formatMessage(messages.frustrationTitle)}</h3>
                )}
                details={() => (
                  <ChallengeDetail
                    image={<img src={supportersFrustrationImage} alt="Person looking frustrated" />}
                    text={intl.formatMessage(messages.frustrationDescription)}
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
