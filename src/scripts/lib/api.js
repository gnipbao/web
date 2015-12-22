import { stringify } from 'qs';

export default class Api {
  constructor(root) {
    this.root = root;
  }

  get(endpoint, params) {
    return this.ajax(endpoint, 'get', { params });
  }

  post(endpoint, body) {
    return this.ajax(endpoint, 'post', { body });
  }

  ajax(endpoint, method, data) {
    const { params, body = null } = data;
    const requestUrl = this.url(endpoint, params);

    return fetch(requestUrl, { method, body })
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
