import React, { Component } from 'react';
import styles from './BlogPostsList.scss';
import BlogPostHeader from '../BlogPostHeader';
import { ROUTES } from '../../../routes';
import { defineMessages, intlShape } from 'react-intl';
import LocaleAwareLink from '../../shared/LocaleAwareLink';

const messages = defineMessages({
  readMore: {
    id: 'blog.readMore',
    defaultMessage: '!!!read more',
  },
});

export default class BlogPostsList extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { posts } = this.props;
    const { intl } = this.context;
    return (
      <div className={styles.root}>
        <ul className={styles.postsList}>
          {posts.map(post =>
            <li className={styles.post} key={post.slug}>
              <BlogPostHeader post={post} hasTitleLink />
              <LocaleAwareLink to={`${ROUTES.BLOG.POST}/${post.slug}/`}>
                <img className={styles.postImage} src={post.image} alt="Blog post title image" />
              </LocaleAwareLink>
              <p className={styles.postTeaser}>
                {post.teaser} … <LocaleAwareLink to={`${ROUTES.BLOG.POST}/${post.slug}/`}>
                {intl.formatMessage(messages.readMore)}
              </LocaleAwareLink>
              </p>
            </li>
          )}
        </ul>
        {/*<div>*/}
          {/*{node.hasPreviousPage &&*/}
          {/*<Link to={node.previousPageIsFirst ? ROUTES.BLOG.INDEX : `/blog/after/${node.previous}/`}>*/}
            {/*Newer posts*/}
          {/*</Link>}*/}
          {/*{" "}*/}
          {/*{node.hasNextPage && <Link to={`/blog/after/${node.next}/`}>Older posts</Link>}*/}
        {/*</div>*/}
      </div>
    );
  }
}
