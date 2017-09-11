import React from "react";
import Layout from '../containers/Layout';
import Head from "react-helmet";
// import { Link } from "react-router";
import styles from './Home.scss';
import josoorLogo from '../theme/images/josoor-logo-vertical-white.svg';

export default ({ isLoading, posts }) => (
  <Layout>
    <Head>
      <title>Josoor Answers</title>
    </Head>
    <div>
      <div className={styles.header}>
        <img src={josoorLogo} className={styles.josoorLogo} />
        <div className={styles.pitch}>
          Josoor is an innovative platform for active
          refugees & locals to connect and find the tools to make
          an impact and empower their communities.
        </div>
      </div>
      <div className={styles.vision}>
        <h1>Our Vision</h1>
        <p>
          The vision of Josoor, which means “Bridges” in Arabic, is to provide a simple,
          easily accessible social platform to connect everybody involved in the
          “refugee crisis” to build engaging, empowered communities and provide these
          communities with tools to develop solutions to overcome the obstacles they face.
        </p>

        <p>
          Starting with the Q&A platform we are currently testing we will add features
          step by step until the vision becomes reality.
        </p>

      </div>

      <div className={styles.separator} />

      <div className={styles.howItWorks}>

        <h1>How it Will Work</h1>

        <div className={styles.columns}>
          <div>
            <h2>Ask Questions</h2>
            <p>
              Ask questions and get answers from community members who are experts in the topic
            </p>
          </div>
          <div>
            <h2>Share Your Knowledge</h2>
            <p>
              Answer questions on topics you know about to help other members
              find the information they need
            </p>
          </div>
          <div>
            <h2>Connect Refugees & Locals</h2>
            <p>
              Help remove the language barrier & increase exchange by translating
              content from one language to another!
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
