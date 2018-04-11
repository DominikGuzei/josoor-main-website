import React from "react";
import { withPhenomicApi, query } from "@phenomic/preset-react-app/lib/client";
import BlogIndex from './BlogIndex';

export default withPhenomicApi(BlogIndex, props => ({
  posts: query({
    path: "posts",
    after: props.params.after
  })
}));
