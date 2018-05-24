import React, { Component } from 'react';
import styles from './BlogPostHeader.scss';
import { ROUTES } from '../../routes';
import LocaleAwareLink from '../shared/LocaleAwareLink';

export default class BlogPostHeader extends Component {

  render() {
    const { post, hasTitleLink } = this.props;
    return (
      <div>
        {hasTitleLink ? (
          <LocaleAwareLink className={styles.title} to={`${ROUTES.BLOG.POST}/${post.slug}/`}>
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
