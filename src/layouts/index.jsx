import React from 'react';
import Helmet from 'react-helmet';
import 'normalize.css/normalize.css';
import '../theme/setup.global.scss';
import '../theme/type.global.scss';
import styles from './index.scss';
import Link from 'gatsby-link';

export default ({children}) => (
  <div className={styles.root}>
    <Helmet title="Josoor Q & A" />
    <div className={styles.topMenu}>
      <div className={styles.itemsLeft}>
        <Link to="/" className={styles.homeLink}>Home</Link>
      </div>
      <div className={styles.itemsRight}>
        <Link to="/blog" className={styles.blogLink}>Blog</Link>
      </div>
    </div>
    <div className={styles.content}>
      {children()}
    </div>
    <div className={styles.footer}>
      <Link to="/impress" className={styles.impressLink}>Impress</Link>
    </div>
  </div>
);
