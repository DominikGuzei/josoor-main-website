import React from "react";
import Layout from '../layout/Layout';
import Head from "react-helmet";
// import { Link } from "react-router";
import styles from './Impress.scss';
import josoorLogo from '../../theme/images/josoor-logo-vertical-colored.svg';

export default () => (
  <Layout>
    <Head>
      <title>Impress | Josoor Answers</title>
    </Head>
    <div className={styles.impress}>

      <img src={josoorLogo} className={styles.josoorLogo} />

      <div className={styles.text}>

        <h1>Impress</h1>

        <p>
          Copyright © 2016 Josoor. All rights reserved.<br/>
          Josoor – Verein zur Vernetzung von Flüchtlingen und Unterstützungsinitiativen<br/>
          Wipplingerstraße 20/18, 1010 Wien<br/>
          +43 1 532 12 43 – <a href="mailto:info@josoor.eu">info@josoor.eu</a><br/>
          DVR Nr.: 4016208 – ZVR Nr.: 560373607 VAT Nr.: ATU71261323<br/>
        </p>
      </div>
    </div>
  </Layout>
);
