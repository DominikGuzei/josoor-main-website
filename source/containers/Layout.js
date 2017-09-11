import React from "react";
import Head from "react-helmet";
import { Link } from "react-router";
import styles from './Layout.scss';

export default ({ children }) => (
  <div>
    <Head>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className={styles.topMenu}>
      <div className={styles.itemsLeft}>
        <Link to="/" className={styles.homeLink}>Home</Link>
      </div>
      <div className={styles.itemsRight}>
        <Link to="/blog" className={styles.blogLink}>Blog</Link>
      </div>
    </div>
    <div className={styles.content}>
      {children}
    </div>
    <footer className={styles.footer}>
      <Link to="/impress" className={styles.impressLink}>Impress</Link>
    </footer>
  </div>
);
