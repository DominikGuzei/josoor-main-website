import React, { Component } from "react";
import { intlShape } from 'react-intl';
import classnames from 'classnames';
import styles from './MobileMenu.scss';
import { ROUTES } from '../../../routes';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import JoinUsButton from '../../shared/JoinUsButton';
import PropTypes from 'prop-types';
import MobileSelectTheme from './LanguageSelect/LanguageSelectMobile.scss';
import LocaleAwareLink from '../../shared/LocaleAwareLink';

export default class MobileMenu extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
    router: PropTypes.object.isRequired,
  };

  state = {
    isOpen: false,
  };

  _removeRouteListener = null;

  componentWillUnmount() {
    this._removeCloseListeners();
  }

  render() {
    const { intl } = this.context;
    const { className, linkTitles } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={classnames([
        styles.mobileMenu,
        className,
        isOpen ? styles.isOpen : null,
      ])}>
        <LanguageSelect selectTheme={MobileSelectTheme} />
        <button
          className={styles.menuIcon}
          onClick={this._toggleMenu}
        />
        <div className={styles.menuOverlay}>
          <button
            className={styles.closeIcon}
            onClick={this._toggleMenu}
          />
          <div className={styles.menuItems}>
            <LocaleAwareLink to={ROUTES.BLOG.INDEX} className={styles.blogLink}>
              {intl.formatMessage(linkTitles.blogLink)}
            </LocaleAwareLink>
            <JoinUsButton className={styles.joinUsButton} />
          </div>
        </div>
      </div>
    );
  }

  _addCloseListeners = () => {
    window.addEventListener('resize', this._closeMenu);
    this._removeRouteListener = this.context.router.listen(this._closeMenu);
  };

  _removeCloseListeners = () => {
    window.removeEventListener('resize', this._closeMenu);
    if (this._removeRouteListener) this._removeRouteListener();
  };

  _toggleMenu = () => {
    this.state.isOpen ? this._closeMenu() : this._openMenu();
  };

  _openMenu = () => {
    this.setState({ isOpen: true });
    this._addCloseListeners();
  };

  _closeMenu = () => {
    this.setState({ isOpen: false });
    this._removeCloseListeners();
  };
}
