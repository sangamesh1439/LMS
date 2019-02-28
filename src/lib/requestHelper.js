import {getItem} from './secureStorage';

const restBaseURL = 'http://localhost:1337'

export const createRequest = ({ path, method = 'GET', body, byPassAuth = false, byPassContentType = false, contentType = 'application/json' }) => {
  let requestParams = {
    method,
    body,
  };
  if (!byPassAuth) {
    const jwtToken = getItem('jwtToken');
    const Authorization = 'Bearer ' + jwtToken;
    const headers = requestParams.headers || {};
    headers['Authorization'] = Authorization;
    requestParams = { ...requestParams, headers };
  }

  if (!byPassContentType) {
    const headers = requestParams.headers || {};
    headers['Content-Type'] = contentType;
    requestParams = { ...requestParams, headers };
  }

  const request = new Request(restBaseURL + path, {
    ...requestParams,
  });
  return request;
};
