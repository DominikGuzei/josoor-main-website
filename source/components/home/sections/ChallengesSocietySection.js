import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './ChallengesSocietySection.scss';
import { defineMessages, intlShape } from 'react-intl';
import DisclosureBox from '../../shared/DisclosureBox';
import societyPolarizationImage from '../../../assets/home/challenges/polarization-society.png';
import societyPrejudiceImage from '../../../assets/home/challenges/prejudice-refugees.png';
import societyFearImage from '../../../assets/home/challenges/fear-society.png';
import societyRacismImage from '../../../assets/home/challenges/racism-society.png';
import { globalMessages } from '../../../i18n/global-messages';

const messages = defineMessages({
  headline: {
    id: 'home.challenges.society.headline',
    defaultMessage: '!!!Society',
  },
  polarizationTitle: {
    id: 'home.challenges.society.polarization.title',
    defaultMessage: '!!!Polarization',
  },
  polarizationDescription: {
    id: 'home.challenges.society.polarization.description',
    defaultMessage: '!!!home.challenges.society.polarization.description',
  },
  prejudiceTitle: {
    id: 'home.challenges.society.prejudice.title',
    defaultMessage: '!!!Prejudice',
  },
  prejudiceDescription: {
    id: 'home.challenges.society.prejudice.description',
    defaultMessage: '!!!home.challenges.society.prejudice.description',
  },
  fearTitle: {
    id: 'home.challenges.society.fear.title',
    defaultMessage: '!!!Fear',
  },
  fearDescription: {
    id: 'home.challenges.society.fear.description',
    defaultMessage: '!!!home.challenges.society.fear.description',
  },
  racismTitle: {
    id: 'home.challenges.society.racism.title',
    defaultMessage: '!!!Racism',
  },
  racismDescription: {
    id: 'home.challenges.society.racism.description',
    defaultMessage: '!!!home.challenges.society.racism.description',
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

export default class ChallengesSocietySection extends Component {

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
                  <h3>{intl.formatMessage(messages.polarizationTitle)}</h3>
                )}
                details={() => (
                  <ChallengeDetail
                    image={<img src={societyPolarizationImage} alt="Two people being angry at each other" />}
                    text={intl.formatMessage(messages.polarizationDescription)}
                  />
                )}
              />
              <DisclosureBox
                className={styles.challenge}
                summary={() => (
                  <h3>{intl.formatMessage(messages.prejudiceTitle)}</h3>
                )}
                details={() => (
                  <ChallengeDetail
                    image={<img src={societyPrejudiceImage} alt="Two people gossiping about refugees" />}
                    text={intl.formatMessage(messages.prejudiceDescription)}
                  />
                )}
              />
              <DisclosureBox
                className={styles.challenge}
                summary={() => (
                  <h3>{intl.formatMessage(messages.fearTitle)}</h3>
                )}
                details={() => (
                  <ChallengeDetail
                    image={<img src={societyFearImage} alt="Person looking at a sign that warns about refugees" />}
                    text={intl.formatMessage(messages.fearDescription)}
                  />
                )}
              />
              <DisclosureBox
                className={styles.challenge}
                summary={() => (
                  <h3>{intl.formatMessage(messages.racismTitle)}</h3>
                )}
                details={() => (
                  <ChallengeDetail
                    image={<img src={societyRacismImage} alt="Angry mob shouting and pointing at a group of refugees" />}
                    text={intl.formatMessage(messages.racismDescription)}
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
