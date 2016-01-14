export default function(...keys) {
  return keys.reduce((obj, key) =>
    (key ? { ...obj, [key]: key } : obj), {});
}
