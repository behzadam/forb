export function isEmpty(val: any) {
  return val == null || !(Object.keys(val) || val).length;
}
