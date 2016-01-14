import { stringify } from 'qs';
import parseLinkHeader from 'parse-link-header';
import fetch from 'isomorphic-fetch';

export default class Api {
  constructor(root, getHeaders = () => {}) {
    this.root = root;
    this.getHeaders = getHeaders;
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
      ...this.getHeaders(),
      ...headers
    };

    console.log(`fetching ${requestUrl}, headers: `, requestHeaders);

    return fetch(requestUrl, {
      mode: 'cors',
      method,
      headers: requestHeaders,
      body: body && JSON.stringify(body)
    }).then(
      ::this.processResponse,
      ::this.processError
    );
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
        const linkHeader = response.headers.get('Link');
        const links = parseLinkHeader(linkHeader);

        response.json().then(json => resolve({ json, links }));
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
