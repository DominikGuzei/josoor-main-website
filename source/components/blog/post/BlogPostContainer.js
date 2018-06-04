import { withPhenomicApi, query } from "@phenomic/preset-react-app/lib/client";
import BlogPost from './BlogPost';
import { getParentLocaleOrDefault, SUPPORTED_LANGUAGES } from '../../../i18n';

export default withPhenomicApi(BlogPost, props => {
  const { location } = props;
  const pathname = location ? location.pathname : '';
  const inferredLocale = pathname.substring(1, 3);
  const usedLocale = getParentLocaleOrDefault(inferredLocale, SUPPORTED_LANGUAGES.ENGLISH);
  return {
    post: query({
      path: `content/blog/${usedLocale}`,
      id: props.params.splat
    })
  };
});
