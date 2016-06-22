import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Sample from './containers/Sample';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Sample} />
    <Route path="sample" component={Sample} />
  </Route>
);