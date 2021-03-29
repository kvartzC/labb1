export function isNullOrWhitespace(x) {
  return typeof x === 'undefined' || x == null ? 
    true : x.replace(/\s/g, '').length < 1;
}
