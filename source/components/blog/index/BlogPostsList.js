import React from "react";
import { Link } from "react-router";
import styles from './BlogPostsList.scss';
import BlogPostHeader from '../BlogPostHeader';

export default ({ posts }) => {

  if (!(posts && posts.node)) return null;
  const node = posts.node;

  return (
    <div className={styles.root}>
      <ul className={styles.postsList}>
        {node.list.map(post =>
          <li className={styles.post} key={post.id}>
            <BlogPostHeader post={post} hasTitleLink />
            <Link to={`/blog/posts/${post.id}/`}>
              <img className={styles.postImage} src={post.image} />
            </Link>
            <p className={styles.postTeaser}>
              {post.teaser} … <Link to={`/blog/posts/${post.id}/`}>Read more</Link>
            </p>
          </li>
        )}
      </ul>
      <div>
        {node.hasPreviousPage &&
        <Link to={node.previousPageIsFirst ? `/blog` : `/blog/after/${posts.node.previous}/`}>
          Newer posts
        </Link>}
        {" "}
        {node.hasNextPage && <Link to={`/blog/after/${posts.node.next}/`}>Older posts</Link>}
      </div>
    </div>
  );
};
