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
    defaultMessage: 'e79d59e0b8',
  },
  newsletterHt: {
    id: 'home.join.newsletter.ht',
    defaultMessage: 'eb6c990a85b64055f7aa2ebfffe9cc7c1c33641d:MTUyNzAwMDI4NS40OTQz',
  },
  firstName: {
    id: 'home.join.newsletter.firstName',
    defaultMessage: '!!!First Name *',
  },
  lastName: {
    id: 'home.join.newsletter.lastName',
    defaultMessage: '!!!Last Name *',
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
                <Col xs={12} sm={6}>
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
                      />
                    )}
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <FormField
                    className={styles.formField}
                    label={intl.formatMessage(messages.lastName)}
                    skin={FormFieldSkin}
                    render={() => (
                      <Input
                        skin={InputSkin}
                        label={intl.formatMessage(messages.lastName)}
                        onChange={(lastName) => this.setState({ lastName })}
                        value={this.state.lastName}
                        type="text"
                        name="MERGE2"
                        id="MERGE2"
                      />
                    )}
                  />
                </Col>
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
