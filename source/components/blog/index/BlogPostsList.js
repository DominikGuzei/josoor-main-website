import React, { Component } from 'react';
import styles from './BlogPostsList.scss';
import BlogPostHeader from '../BlogPostHeader';
import { ROUTES } from '../../../routes';
import { defineMessages, intlShape } from 'react-intl';
import { Link } from 'react-router';
import { buildRoute } from '../../../utils/routing';


const messages = defineMessages({
  readMore: {
    id: 'blog.readMore',
    defaultMessage: '!!!read more',
  },
});

const byIsPublished = (post) => {
  // Only in production we filter the posts by the `published` flag
  if (process.env.CONTEXT !== 'production') return true;
  return post.published === true;
};

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
          {posts.filter(byIsPublished).map(post =>
            <li className={styles.post} key={post.id}>
              <BlogPostHeader post={post} language={intl.locale} hasTitleLink />
              <Link to={buildRoute(ROUTES.BLOG.POST, { language: intl.locale, id: post.id.substring(3) })}>
                <img className={styles.postImage} src={post.image} alt="Blog post title image" />
              </Link>
              <p className={styles.postTeaser}>
                {post.teaser} …&nbsp;
                <Link to={buildRoute(ROUTES.BLOG.POST, { language: intl.locale, id: post.id.substring(3) })}>
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
