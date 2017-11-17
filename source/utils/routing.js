import { pick, merge, isString } from 'lodash';
import { browserHistory } from 'react-router';

export const mergeLocations = (current, next) => (
  merge(pick(current, ['pathname', 'query', 'hash']), next)
);

/**
 * Override browserHistory.push to merge pathname, query and hash of
 * current and next location (e.g: to keep the language query param
 * between pages)
 */
const originalPush = browserHistory.push;

export const pushLocation = (location) => {
  let newLocation = location;
  if (isString(newLocation)) newLocation = { pathname: newLocation };
  originalPush(mergeLocations(browserHistory.getCurrentLocation(), newLocation));
};

browserHistory.push = pushLocation;
