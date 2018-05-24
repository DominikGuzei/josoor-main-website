import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './JoinUsSection.scss';
import { defineMessages, intlShape } from 'react-intl';
import FormField from 'react-polymorph/lib/components/FormField';
import FormFieldSkin from 'react-polymorph/lib/skins/simple/FormFieldSkin';
import Input from 'react-polymorph/lib/components/Input';
import InputSkin from 'react-polymorph/lib/skins/simple/InputSkin';
import { JOIN_US_ANCHOR_ID } from '../Home';

const messages = defineMessages({
  headline: {
    id: 'home.join.title',
    defaultMessage: '!!!Join the Josoor Community',
  },
  newsletterId: {
    id: 'home.join.newsletter.id',
    defaultMessage: 'mailchimp form builder id value',
  },
  newsletterHt: {
    id: 'home.join.newsletter.ht',
    defaultMessage: 'mailchimp form builder ht value',
  },
  firstName: {
    id: 'home.join.newsletter.firstName',
    defaultMessage: '!!!First Name *',
  },
  email: {
    id: 'home.join.newsletter.email',
    defaultMessage: '!!!Email Address *',
  },
  submitLabel: {
    id: 'home.join.newsletter.submitLabel',
    defaultMessage: '!!!Subscribe to our Newsletter',
  },
});

export default class JoinUsSection extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  state = {
    firstName: "",
    lastName: "",
    email: "",
  };

  render() {
    const { intl } = this.context;
    return (
      <Grid fluid className={styles.root} id={JOIN_US_ANCHOR_ID}>
        <Row center="xs">
          <Col xs={11} sm={10} md={9} lg={8} >
            <h1 className={styles.headline}>
              {intl.formatMessage(messages.headline)}
            </h1>
          </Col>
          <Col xs={11} sm={8} md={7} lg={5} >
            <form action="https://josoor.us13.list-manage.com/subscribe/post" method="POST">
              <input type="hidden" name="u" value="1d1f83e7b3f782bd9569573df" />
              <input type="hidden" name="id" value={intl.formatMessage(messages.newsletterId)} />
              <input type="hidden" name="ht" value={intl.formatMessage(messages.newsletterHt)} />
              <input type="hidden" name="mc_signupsource" value="hosted" />


              <Row center="xs" start="sm">
                <Col xs={12}>
                  <FormField
                    className={styles.formField}
                    label={intl.formatMessage(messages.email)}
                    skin={FormFieldSkin}
                    render={() => (
                      <Input
                        skin={InputSkin}
                        onChange={(email) => this.setState({ email })}
                        value={this.state.email}
                        type="email"
                        autoCapitalize="off"
                        autoCorrect="off"
                        name="MERGE0"
                        id="MERGE0"
                        autoComplete="email"
                      />
                    )}
                  />
                </Col>
                <Col xs={12}>
                  <FormField
                    className={styles.formField}
                    label={intl.formatMessage(messages.firstName)}
                    skin={FormFieldSkin}
                    render={() => (
                      <Input
                        skin={InputSkin}
                        onChange={(firstName) => this.setState({ firstName })}
                        value={this.state.firstName}
                        type="text"
                        name="MERGE1"
                        id="MERGE1"
                        autoComplete="given-name"
                      />
                    )}
                  />
                </Col>
              </Row>

              <Row center="xs" start="sm">
                <Col xs={12}>
                  <input
                    className={styles.submitButton}
                    type="submit"
                    name="submit"
                    value={intl.formatMessage(messages.submitLabel)}
                  />
                </Col>
              </Row>

            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
