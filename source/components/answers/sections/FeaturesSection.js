import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { defineMessages, intlShape } from 'react-intl';
import ProgressiveImage from 'react-progressive-image-loading';
import styles from './FeaturesSection.scss';
import featuresPreview from '../../../assets/answers/features-preview.jpg';
import featuresImage from '../../../assets/answers/features.jpg';
import featuresPreviewArabic from '../../../assets/answers/features-ar-preview.jpg';
import featuresImageArabic from '../../../assets/answers/features-ar.jpg';
import searchIcon from '../../../assets/answers/search-icon.svg';
import askIcon from '../../../assets/answers/ask-icon.svg';
import answerIcon from '../../../assets/answers/answer-icon.svg';
import reviewIcon from '../../../assets/answers/review-icon.svg';
import translateIcon from '../../../assets/answers/translate-icon.svg';
import { SUPPORTED_LANGUAGES } from '../../../i18n';

const messages = defineMessages({
  title: {
    id: 'answers.features.title',
    defaultMessage: 'answers.features.title',
  },
  headline: {
    id: 'answers.features.headline',
    defaultMessage: 'answers.features.headline',
  },
  searchTitle: {
    id: 'answers.features.search.title',
    defaultMessage: 'answers.features.search.title',
  },
  searchDescription: {
    id: 'answers.features.search.description',
    defaultMessage: 'answers.features.search.description',
  },
  askTitle: {
    id: 'answers.features.ask.title',
    defaultMessage: 'answers.features.ask.title',
  },
  askDescription: {
    id: 'answers.features.ask.description',
    defaultMessage: 'answers.features.ask.description',
  },
  answerTitle: {
    id: 'answers.features.answer.title',
    defaultMessage: 'answers.features.answer.title',
  },
  answerDescription: {
    id: 'answers.features.answer.description',
    defaultMessage: 'answers.features.answer.description',
  },
  reviewTitle: {
    id: 'answers.features.review.title',
    defaultMessage: 'answers.features.review.title',
  },
  reviewDescription: {
    id: 'answers.features.review.description',
    defaultMessage: 'answers.features.review.description',
  },
  translateTitle: {
    id: 'answers.features.translate.title',
    defaultMessage: 'answers.features.translate.title',
  },
  translateDescription: {
    id: 'answers.features.translate.description',
    defaultMessage: 'answers.features.translate.description',
  },
});

const renderFeature = (title, description, icon) => (
  <Col className={styles.feature} xs={10} sm={6} md={4}>
    <img className={styles.icon} src={icon} />
    <div className={styles.text}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </Col>
);

export default class FeaturesSection extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { isLoading, posts } = this.props;
    const { intl } = this.context;
    const isArabic = intl.locale === SUPPORTED_LANGUAGES.ARABIC.parentLocale;
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={12}>
            <h1 className={styles.title}>{intl.formatMessage(messages.title)}</h1>
            <h2 className={styles.headline}>{intl.formatMessage(messages.headline)}</h2>
          </Col>
          <Col xs={12} sm={10} md={8} lg={6}>
            <ProgressiveImage
              preview={isArabic ? featuresPreviewArabic : featuresPreview}
              src={isArabic ? featuresImageArabic : featuresImage}
              initialBlur={0}
              transitionTime={0}
              render={(src, style) => (
                <img className={styles.image} src={src} />
              )}
            />
          </Col>
          <Col className={styles.features} xs={12} sm={10} md={8}>
            <Row center="xs">
              {renderFeature(
                intl.formatMessage(messages.searchTitle),
                intl.formatMessage(messages.searchDescription),
                searchIcon
              )}
              {renderFeature(
                intl.formatMessage(messages.askTitle),
                intl.formatMessage(messages.askDescription),
                askIcon
              )}
              {renderFeature(
                intl.formatMessage(messages.answerTitle),
                intl.formatMessage(messages.answerDescription),
                answerIcon
              )}
              {renderFeature(
                intl.formatMessage(messages.reviewTitle),
                intl.formatMessage(messages.reviewDescription),
                reviewIcon
              )}
              {renderFeature(
                intl.formatMessage(messages.translateTitle),
                intl.formatMessage(messages.translateDescription),
                translateIcon
              )}
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
