import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Editor from 'Containers/editor';

const routes = () => (
  <Router>
    <Route exact path="/" component={Editor} />
  </Router>
);

export default routes;
