import 'isomorphic-fetch';
import { stringify } from 'qs';

export default class Client {
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

    const query = this.queryParams(params);
    const url = `${this.root}/${endpoint}${query}`;

    return fetch(url, { method, body })
      .then(this.processResponse);
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
}
