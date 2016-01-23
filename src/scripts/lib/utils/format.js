import truncate from 'lodash/truncate';
import unescape from 'lodash/unescape';

export function strip(value) {
  return value && unescape(value).replace('–', '-')
    .replace(/\(.+\)|\[.+\]/g, '');
}

export default function(value, length = 120) {
  return truncate(strip(value), { length });
}
