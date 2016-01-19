import * as session from 'lib/session';
import API from 'lib/api';

function getHeaders() {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  if (session.authenticated()) {
    headers['Authorization'] = 'Bearer ' + session.token();
  }

  return headers;
}

export const url = settings.apiRoot;
export default new API(url, getHeaders);
