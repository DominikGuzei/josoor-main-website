import { pick, merge, isString } from 'lodash';
import { browserHistory } from 'react-router';

export const mergeLocations = (current, next) => (
  merge(pick(current, ['pathname', 'query', 'hash']), next)
);

let originalPush;

export const pushLocation = (location) => {
  if (!originalPush) originalPush = browserHistory.push;
  let newLocation = location;
  if (isString(newLocation)) newLocation = { pathname: newLocation };
  originalPush(mergeLocations(browserHistory.getCurrentLocation(), newLocation));
};
