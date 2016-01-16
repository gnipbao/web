import unescape from 'lodash/unescape';

export function strip(value) {
  return value && unescape(value).replace('–', '-')
    .replace(/\(.+\)|\[.+\]/g, '');
}
