import React from "react";
import Layout from '../../containers/Layout';
import Head from "react-helmet";
import styles from './BlogIndex.scss';
import josoorLogo from '../../theme/images/josoor-blog-logo.svg';
import BlogPostsList from "./BlogPostsList";

export default ({ posts }) => (
  <Layout>
    <Head>
      <title>Blog | Josoor Answers</title>
    </Head>
    <div className={styles.blog}>

      <div className={styles.header}>

        <img src={josoorLogo} className={styles.josoorLogo} />

        <div className={styles.introduction}>
          Josoor is an innovative platform for active
          refugees & locals to connect and find the tools to make
          an impact and empower their communities.
        </div>
      </div>
      {<BlogPostsList posts={posts} />}
    </div>
  </Layout>
);
