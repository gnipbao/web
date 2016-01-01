import session from 'lib/session';
import Api from 'lib/api';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

if (session.authenticated()) {
  headers['Authorization'] = 'Bearer ' + session.token();
}

export const url = settings.apiRoot;
export default new Api(url, headers);
