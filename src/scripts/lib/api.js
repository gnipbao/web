import { stringify } from 'qs';
import { session } from 'lib/auth';

export default class Api {
  constructor(root) {
    this.root = root;
  }

  get(endpoint, params, headers = {}) {
    return this.ajax(endpoint, 'get', { headers, params });
  }

  post(endpoint, body, headers = {}) {
    return this.ajax(endpoint, 'post', { headers, body });
  }

  ajax(endpoint, method, data) {
    const { params, headers = {}, body = null } = data;
    const requestUrl = this.url(endpoint, params);
    const requestHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
    };

    if (session.isAuthenticated()) {
      requestHeaders['Authorization'] = session.token();
    }

    return fetch(requestUrl, { method, headers: requestHeaders, body })
      .then(this.processResponse, this.processError);
  }

  url(endpoint, params) {
    const query = this.queryParams(params);
    return `${this.root}/${endpoint}${query}`;
  }

  queryParams(params) {
    return params ? '?' + stringify(params) : '';
  }

  processResponse(response) {
    return new Promise((resolve, reject) => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject({
          status: response.status,
          message: response.statusText
        });
      }
    });
  }

  processError(err) {
    console.error('api error (fetch): ', err);
    return Promise.reject(err);
  }
}
