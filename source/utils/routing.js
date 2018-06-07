import { pick, merge, isString } from 'lodash';
import { browserHistory } from 'react-router';
import Route from 'route-parser';

export const mergeLocations = (current, next) => (
  merge(pick(current, ['pathname', 'query']), next)
);

let originalPush;
if (browserHistory) originalPush = browserHistory.push;

export const pushLocation = (location) => {
  let newLocation = location;
  if (isString(newLocation)) newLocation = { pathname: newLocation };
  originalPush(mergeLocations(browserHistory.getCurrentLocation(), newLocation));
};

export const parseRoute = (pattern, route) => new Route(pattern).match(route);

export const buildRoute = (pattern, params) => new Route(pattern).reverse(params);

export const replaceLanguageParts = (path, replacement) => (
  path.replace('(:language/)', replacement).replace('(:language(/))', replacement)
);
