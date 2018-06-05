import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './BlogPostHeader.scss';
import { ROUTES } from '../../routes';
import { buildRoute } from '../../utils/routing';

export default class BlogPostHeader extends Component {

  render() {
    const { post, hasTitleLink, language } = this.props;
    return (
      <div>
        {hasTitleLink ? (
          <Link className={styles.title} to={buildRoute(ROUTES.BLOG.POST, { language, id: post.id.substring(3) })}>
            {post.headline}
          </Link>
        ) : (
          <h1 className={styles.title}>{post.headline}</h1>
        )}
        <p className={styles.subtitle}>{post.subtitle}</p>
        <div className={styles.meta}>
          <p className={styles.author}>{post.author}</p>
          <p className={styles.date}>{post.readable_date}</p>
        </div>
        <div className={styles.separator} />
      </div>
    );
  }
}
