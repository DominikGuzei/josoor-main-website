import React from "react";
import Head from "react-helmet";
import styles from './BlogIndex.scss';
import BlogPostsList from "./BlogPostsList";

export default ({ posts }) => (
  <div>
    <Head>
      <title>Blog | Josoor Answers</title>
    </Head>
    <div className={styles.blog}>

      <div className={styles.header}>
        <h1 className={styles.headline}>
          The Josoor Blog
        </h1>
        <div className={styles.pitch}>
          News, Articles & Events from the Josoor Community
        </div>
      </div>

      {<BlogPostsList posts={posts} />}

    </div>
  </div>
);
