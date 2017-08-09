import React from 'react';
import styles from './blog.scss';
import josoorLogo from '../theme/images/josoor-blog-logo.svg';

export default () => (
  <div className={styles.blog}>

    <img src={josoorLogo} className={styles.josoorLogo} />

    <div className={styles.introduction}>
      Josoor is an innovative platform for active
      refugees & locals to connect and find the tools to make
      an impact and empower their communities.
    </div>
  </div>
);
