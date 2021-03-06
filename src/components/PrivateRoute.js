
import React from 'react';
import { push } from 'gatsby-link';
import { Route } from 'react-router-dom';
import {isLoggedIn} from '../lib/auth';
const PrivateRoute = ({ component, path }) => {
  const isAlreadyLoddedIn = isLoggedIn();
  if (isAlreadyLoddedIn) {
    return <Route path={path} component={component} />;
  } else {
    if (typeof window !== `undefined`) {
      push('/login/');
    }
    return null;
  }
};

export default PrivateRoute;
