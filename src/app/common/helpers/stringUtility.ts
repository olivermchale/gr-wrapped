export function camelize(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export function removeNullables(str: string) {
  return str.charAt(str.length - 1) === '?' ? str.slice(0, -1) : str;
}
