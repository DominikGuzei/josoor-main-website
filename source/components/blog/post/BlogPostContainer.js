import { createContainer, query } from "@phenomic/preset-react-app/lib/client";
import BlogPost from './BlogPost';

export default createContainer(BlogPost, props => ({
  page: query({
    path: 'posts',
    by: 'slug',
    value: props.params.slug,
  })
}));
