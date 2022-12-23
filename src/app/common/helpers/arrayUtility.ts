export function mode(arr: any) {
  let counts = arr.reduce((a: any, c: any) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});
  let maxCount = Math.max(...Object.values<any>(counts));
  let mostFrequent = Object.keys(counts).filter((k) => counts[k] === maxCount);
  return mostFrequent;
}
