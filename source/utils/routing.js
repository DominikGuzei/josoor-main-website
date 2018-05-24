import { pick, merge, isString } from 'lodash';
import { browserHistory } from 'react-router';
import Route from 'route-parser';

export const mergeLocations = (current, next) => (
  merge(pick(current, ['pathname', 'query', 'hash']), next)
);

let originalPush;
if (browserHistory) originalPush = browserHistory.push;

export const pushLocation = (location) => {
  let newLocation = location;
  if (isString(newLocation)) newLocation = { pathname: newLocation };
  originalPush(mergeLocations(browserHistory.getCurrentLocation(), newLocation));
};

export const parseRoute = (pattern, route) => new Route(pattern).match(route);

export const replaceLanguageParts = (path, replacement) => (
  path.replace('(:lang/)', replacement).replace('(:lang(/))', replacement)
);
