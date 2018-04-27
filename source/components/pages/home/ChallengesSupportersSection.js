import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './ChallengesSupportersSection.scss';
import { defineMessages, intlShape } from 'react-intl';
import DisclosureBox from '../../shared/DisclosureBox';
import supportersInformationImage from '../../../assets/home/challenges/information-supporters.png';
import supportersConfusionImage from '../../../assets/home/challenges/confusion-supporters.png';
import supportersIsolationImage from '../../../assets/home/challenges/isolation-supporters.png';
import supportersFrustrationImage from '../../../assets/home/challenges/frustration-supporters.png';

const messages = defineMessages({
  challenges: {
    id: 'home.challenges.title',
    defaultMessage: '!!!The Challenges',
  },
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
    defaultMessage: '!!!Many local supporters feel overwhelmed with researching and translating information. It is unclear where to find it and whether it is reliable. 40% of their time, which they could use for much more useful activities, is spent on this frustrating task.',
  },
  confusionTitle: {
    id: 'home.challenges.supporters.confusion.title',
    defaultMessage: '!!!Confusion',
  },
  confusionDescription: {
    id: 'home.challenges.supporters.confusion.description',
    defaultMessage: '!!!With the lack of an overview of initiatives, needs, solutions and information in general, many supporters don’t know where to effectively put their efforts – or even how to help, while other supporters are overwhelmed with all their duties.',
  },
  isolationTitle: {
    id: 'home.challenges.supporters.isolation.title',
    defaultMessage: '!!!Isolation',
  },
  isolationDescription: {
    id: 'home.challenges.supporters.isolation.description',
    defaultMessage: '!!!Many supporters, especially those who are not organised in initiatives, feel alone in their efforts to help. Especially in the current political climate, that leads to feelings of isolation - and even depression.',
  },
  frustrationTitle: {
    id: 'home.challenges.supporters.frustration.title',
    defaultMessage: '!!!Frustration',
  },
  frustrationDescription: {
    id: 'home.challenges.supporters.frustration.description',
    defaultMessage: '!!!The result of all that is frustration. Many people who once got active to support refugees have since quit – oftentimes frustrated and exhausted to the point of burnout.',
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
                    image={<img src={supportersInformationImage} />}
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
                    image={<img src={supportersConfusionImage} />}
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
                    image={<img src={supportersIsolationImage} />}
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
                    image={<img src={supportersFrustrationImage} />}
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
