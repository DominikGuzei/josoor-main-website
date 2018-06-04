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
          <LocaleAwareLink className={styles.title} to={buildRoute(ROUTES.BLOG.POST, { id: post.id.substring(3) })}>
            {post.headline}
          </LocaleAwareLink>
        ) : (
          <h1 className={styles.title}>{post.headline}</h1>
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
