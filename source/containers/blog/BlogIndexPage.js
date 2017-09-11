import React from "react";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";
import BlogIndex from '../../components/blog/BlogIndex';

export default createContainer(BlogIndex, props => ({
  posts: query({
    path: "posts",
    limit: 2,
    after: props.params.after
  })
}));
