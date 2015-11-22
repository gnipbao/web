import 'isomorphic-fetch';
import Qs from 'qs';

export default class ApiClient {
  constructor(root) {
    this.root = root;
  }

  get(endpoint, params = {}) {
    return this.ajax(endpoint, 'get', { params });
  }

  post(endpoint, data) {
    return this.ajax(endpoint, 'post', { data });
  }

  ajax(endpoint, method, options) {
    const { params, data: data = null } = options;

    const query = this.queryParams(params);
    const url = `${this.root}/${endpoint}${query}`;

    return fetch(url, { method: method, body: data })
      .then(this.processResponse);
  }

  queryParams(params) {
    return params ? '?' + Qs.stringify(params) : '';
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
}
