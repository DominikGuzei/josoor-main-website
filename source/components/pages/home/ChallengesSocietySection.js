import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './ChallengesSocietySection.scss';
import { defineMessages, intlShape } from 'react-intl';
import DisclosureBox from '../../shared/DisclosureBox';
import societyPolarizationImage from '../../../assets/home/challenges/polarization-society.png';
import societyPrejudiceImage from '../../../assets/home/challenges/prejudice-refugees.png';
import societyFearImage from '../../../assets/home/challenges/fear-society.png';
import societyRacismImage from '../../../assets/home/challenges/racism-society.png';

const messages = defineMessages({
  challenges: {
    id: 'home.challenges.title',
    defaultMessage: '!!!The Challenges',
  },
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
    defaultMessage: '!!!Societies worldwide are becoming increasingly polarized. Division between political opponents are growing - and are paricularly strong regarding the topic of refugees.',
  },
  prejudiceTitle: {
    id: 'home.challenges.society.prejudice.title',
    defaultMessage: '!!!Prejudice',
  },
  prejudiceDescription: {
    id: 'home.challenges.society.prejudice.description',
    defaultMessage: '!!!Prejudices against both refugees and the people supporting them have reached new levels in recent years. Generalisations, accusations and lies spread faster and easier than ever.',
  },
  fearTitle: {
    id: 'home.challenges.society.fear.title',
    defaultMessage: '!!!Fear',
  },
  fearDescription: {
    id: 'home.challenges.society.fear.description',
    defaultMessage: '!!!Labelled lazy social spongers stealing your tax money, cheap work force stealing your jobs and terrorists coming to kill you –populist parties and tabloid papers find many ways to fuel the fear of refugees for their own benefits.',
  },
  racismTitle: {
    id: 'home.challenges.society.racism.title',
    defaultMessage: '!!!Racism',
  },
  racismDescription: {
    id: 'home.challenges.society.racism.description',
    defaultMessage: '!!!Blatant racism and xenophobia towards refugees as well as hatred against people supporting them is the result of all this. Initially mostly visible in verbal attacks, many countries now notice sharp increases of different forms of hate crimes.',
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
      <Grid fluid>
        <Row center="xs">
          <Col xs={11} sm={10} md={9} lg={8} >
            <h1>{intl.formatMessage(messages.challenges)}</h1>
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
                    image={<img src={societyPolarizationImage} />}
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
                    image={<img src={societyPrejudiceImage} />}
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
                    image={<img src={societyFearImage} />}
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
                    image={<img src={societyRacismImage} />}
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
