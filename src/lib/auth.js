import {getItem} from './secureStorage';

export const isLoggedIn = () => {
    let loggedIn = false;
    const jwtToken = getItem('jwtToken');
    if (jwtToken) {
      loggedIn = true;
    }
    return loggedIn;
  };
  