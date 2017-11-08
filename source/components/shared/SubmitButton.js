// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-polymorph/lib/components/Button';

export default class SubmitButton extends Button {

  static propTypes = Object.assign({}, Button.propTypes, {
    spinner: PropTypes.element,
    isSubmitting: PropTypes.bool,
  });

  prepareSkinProps(props) {
    return Object.assign({}, super.prepareSkinProps(props), {
      label: props.isSubmitting ? props.spinner : props.label,
    });
  }

}
