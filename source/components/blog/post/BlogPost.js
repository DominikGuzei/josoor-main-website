import React, { Component } from 'react';
import { Link } from "react-router";
import styles from './BlogPost.scss';
import BlogPostHeader from '../BlogPostHeader';
import { BodyRenderer } from "@phenomic/preset-react-app/lib/client";
import { ROUTES } from '../../../routes';

export default class BlogPost extends Component {

  render() {
    const { page } = this.props;
    if (!page || !page.node) return null;
    const post = page.node;
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.blogHeader} />
          <div className={styles.imageBox}>
            <img className={styles.image} src={post.image} />
          </div>

        </div>
        <div className={styles.content}>
          <BlogPostHeader post={post} hasTitleLink={false} />
          <BodyRenderer>{post.body}</BodyRenderer>
          <footer>
            <Link to={ROUTES.BLOG.INDEX}>Go to home</Link>
          </footer>
        </div>
      </div>
    );
  }
}
