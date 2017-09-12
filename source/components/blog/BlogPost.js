import React from 'react';
import { Link } from "react-router";
import Head from "react-helmet";
import { BodyRenderer } from "@phenomic/preset-react-app/lib/client";
import Layout from '../../containers/Layout'
import styles from './BlogPost.scss';

const PostLayout = ({ title, body, image }) => (
  <article>
    <Head>
      <title>{title}</title>
    </Head>
    <h1>{title}</h1>
    <img className={styles.image} src={image} />
    <BodyRenderer>{body}</BodyRenderer>
  </article>
);

export default ({ page }) => {
  return (
    <Layout>
      <div className={styles.root}>
        {page.node && <PostLayout {...page.node} />}
        <footer>
          <Link to="/blog">Go to home</Link>
        </footer>
      </div>
    </Layout>
  );
};
