import React, { Component } from 'react';
import { Link } from "react-router";
import styles from './BlogPostsList.scss';
import BlogPostHeader from '../BlogPostHeader';
import { ROUTES } from '../../../routes';
import { defineMessages, intlShape } from 'react-intl';

const messages = defineMessages({
  readMore: {
    id: 'blog.readMore',
    defaultMessage: '!!!read more',
    description: 'Blog read more label'
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
            <li className={styles.post} key={post.id}>
              <BlogPostHeader post={post} hasTitleLink />
              <Link to={`${ROUTES.BLOG.POST}/${post.id}/`}>
                <img className={styles.postImage} src={post.image} />
              </Link>
              <p className={styles.postTeaser}>
                {post.teaser} … <Link to={`${ROUTES.BLOG.POST}/${post.id}/`}>
                {intl.formatMessage(messages.readMore)}
              </Link>
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
