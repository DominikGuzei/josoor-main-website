import React, { Component } from 'react';
import styles from './BlogPostHeader.scss';
import { ROUTES } from '../../routes';
import LocaleAwareLink from '../shared/LocaleAwareLink';
import { buildRoute } from '../../utils/routing';

export default class BlogPostHeader extends Component {

  render() {
    const { post, hasTitleLink } = this.props;
    return (
      <div>
        {hasTitleLink ? (
          <LocaleAwareLink className={styles.title} to={buildRoute(ROUTES.BLOG.POST, { slug: post.slug })}>
            {post.title}
          </LocaleAwareLink>
        ) : (
          <div className={styles.title}>{post.title}</div>
        )}
        <p className={styles.subtitle}>{post.subtitle}</p>
        <div className={styles.meta}>
          <p className={styles.author}>{post.author}</p>
          <p className={styles.date}>{post.date}</p>
        </div>
        <div className={styles.separator} />
      </div>
    );
  }
}
