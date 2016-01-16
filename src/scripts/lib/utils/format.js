export function formatTitle(value) {
  return value && value.replace('–', '-')
    .replace(/\&lt;|\&gt;|\(.+\)|\[.+\]/g, '');
}
