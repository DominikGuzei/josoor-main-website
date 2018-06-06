import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './WhatYouCanDoSection.scss';
import { defineMessages, intlShape } from 'react-intl';
import environment from '../../../environment';
import FacebookButton from '../../shared/FacebookButton';
import { getLanguageByParentLocale, SUPPORTED_LANGUAGES, SUPPORTED_LOCALES } from '../../../i18n';

const messages = defineMessages({
  headline: {
    id: 'home.what_you_can_do.title',
    defaultMessage: '!!!What You Can Do',
  },
  description: {
    id: 'home.what_you_can_do.description',
    defaultMessage: `!!!home.what_you_can_do.description`
  },
});

export default class WhatYouCanDoSection extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    const locale = getLanguageByParentLocale(intl.locale).locale;

    let paypalLocale = locale;
    // Seems like Paypal doesnt support arabic donate buttons
    if (locale === SUPPORTED_LANGUAGES.ARABIC.locale) {
      paypalLocale = SUPPORTED_LANGUAGES.ENGLISH.locale;
    }
    return (
      <Grid fluid className={styles.root}>
        <Row center="xs">
          <Col xs={12}>
            <h1 className={styles.headline}>
              {intl.formatMessage(messages.headline)}
            </h1>
          </Col>
          <Col className={styles.description} xs={12} sm={8} md={6}>
            <p>
              {intl.formatMessage(messages.description)}
            </p>
          </Col>
          <Col className={styles.description} xs={12} sm={10} md={8}>

            <div className={styles.facebookShare}>
              <FacebookButton
                locale={locale}
                url={`${environment.URL}/${intl.locale}`}
                layout="button_count"
                share={true}
              />
            </div>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="CBJ9AFPJX8UGN" />
              <input
                type="image"
                src={`https://www.paypalobjects.com/${paypalLocale}/i/btn/btn_donateCC_LG.gif`}
                border="0"
                name="submit"
              />
            </form>

            <p className={styles.bankDetails}>
              Josoor<br />
              Erste Bank<br />
              IBAN: AT03 2011 1828 1446 5000<br />
              BIC/SWIFT: GIBAATWWXXX<br />
            </p>

          </Col>
        </Row>
      </Grid>
    );
  }
}

/*
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="CBJ9AFPJX8UGN">
<input type="image" src="https://www.paypalobjects.com/de_DE/AT/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="Jetzt einfach, schnell und sicher online bezahlen – mit PayPal.">
<img alt="" border="0" src="https://www.paypalobjects.com/de_DE/i/scr/pixel.gif" width="1" height="1">
</form>

 */
