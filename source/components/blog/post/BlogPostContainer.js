import { withPhenomicApi, query } from "@phenomic/preset-react-app/lib/client";
import BlogPost from './BlogPost';
import {
  getParentLocaleOrDefault,
  SUPPORTED_LANGUAGES,
  SUPPORTED_LOCALES
} from '../../../i18n';

let lastUsedLocaleIndex = -1;

export default withPhenomicApi(BlogPost, props => {
  const { location } = props;
  let staticLocale;
  if (lastUsedLocaleIndex === -1) {
    staticLocale = SUPPORTED_LANGUAGES.ENGLISH.parentLocale;
    lastUsedLocaleIndex++
  } else {
    staticLocale = SUPPORTED_LOCALES[lastUsedLocaleIndex++];
  }
  console.log(lastUsedLocaleIndex, '/' + staticLocale);
  const pathname = location ? location.pathname : '/' + staticLocale;
  const inferredLocale = pathname.substring(1, 3);
  const usedLocale = getParentLocaleOrDefault(inferredLocale, SUPPORTED_LANGUAGES.ENGLISH);
  return {
    post: query({
      path: `content/blog/${usedLocale}`,
      id: props.params.splat
    })
  };
});
