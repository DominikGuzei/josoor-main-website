import React, { Component } from 'react';
import { Link } from "react-router";
import styles from './BlogPostsList.scss';
import BlogPostHeader from '../BlogPostHeader';
import { ROUTES } from '../../../routes';

class BlogPostsList extends Component {

  render() {
    const { node,  posts } = this.props;
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
                {post.teaser} … <Link to={`${ROUTES.BLOG.POST}/${post.id}/`}>Read more</Link>
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
