import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './DisclosureBox.scss';

export default class DisclosureBox extends Component {

  static propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    summary: PropTypes.func.isRequired,
    details: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isOpen: false,
  };

  state = {
    isOpen: this.props.isOpen,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render () {
    const { summary, details, className } = this.props;
    return (
      <div
        className={classnames([
          className,
          styles.box,
          this.state.isOpen ? styles.isOpen : null,
        ])}
      >
        <div
          className={styles.summary}
          onClick={this.toggle}
        >
          {summary()}
        </div>
        <div className={styles.details}>
          {details()}
        </div>
      </div>
    )
  }

}
