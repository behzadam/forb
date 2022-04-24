export const addOrRemove = (arr: any[], item: any): any[] => {
  return arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];
};
