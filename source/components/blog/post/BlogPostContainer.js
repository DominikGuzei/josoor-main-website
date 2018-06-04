import { withPhenomicApi, query } from "@phenomic/preset-react-app/lib/client";
import BlogPost from './BlogPost';

export default withPhenomicApi(BlogPost, props => {
  console.log(props.params);
  return {
    posts: query({
      path: 'content/blog',
      by: 'slug',
      value: props.params.splat
    })
  };
});
