import React from "react";
import { withPhenomicApi, query } from "@phenomic/preset-react-app/lib/client";
import BlogIndex from './BlogIndex';
import { getParentLocaleOrDefault, SUPPORTED_LANGUAGES } from '../../../i18n';

export default withPhenomicApi(BlogIndex, props => {
  if (!props.location) return query({});
  const { pathname } = props.location;
  const inferredLocale = pathname.substring(1, 3);
  const usedLocale = getParentLocaleOrDefault(inferredLocale, SUPPORTED_LANGUAGES.ENGLISH);
  return {
    posts: query({
      path: 'content/blog',
      by: 'language',
      value: usedLocale,
      after: props.params.after
    })
  };
});
