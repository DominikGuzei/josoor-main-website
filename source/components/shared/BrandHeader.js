import React from 'react';
import ProgressiveImage from 'react-progressive-image-loading';
import styles from './BrandHeader.scss';
import JoinUsButton from '../shared/JoinUsButton.js';

export const BrandHeader = (props) => (
  <ProgressiveImage
    preview={props.headerImagePreview}
    src={props.headerImage}
    initialBlur={0}
    transitionTime={0}
    render={(src, style) => (
      <div className={styles.header} style={Object.assign(style, { backgroundImage: `url(${src})` })}>
        <img className={styles.logo} src={props.logo} alt="Logo" />
        <h1 className={styles.headline}>{props.headline}</h1>
        {props.hideJoinButton ? null : <JoinUsButton />}
      </div>
    )}
  />
);
