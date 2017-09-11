import React from "react";
import { Link } from "react-router";

export default ({ posts }) => {

  if (!(posts && posts.node)) return null;
  const node = posts.node;

  return (
    <div>
      <ul>
        {node.list.map(post =>
          <li key={post.id}>
            <Link to={`/blog/posts/${post.id}/`}>{post.title || post.id}</Link>
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
