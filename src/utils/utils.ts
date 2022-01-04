export const isEmpty = (value: any) => {
  return (
    value === null ||
    value === undefined ||
    value === '' ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
};

export const isContains = (target: string, dest: string) => {
  return target.includes(dest);
};

// todo: should replace with lodash or another lib
export const isEqual = (target: string, dest: string) => {
  return target === dest;
};

// todo: should handle other formats
export const isGreaterThan = (target: string, dest: string) => {
  return target > dest;
};

// todo: should handle other formats
export const isGreaterThanOrEquals = (target: string, dest: string) => {
  return target >= dest;
};

// todo: should handle other formats
export const isLessThan = (target: string, dest: string) => {
  return target < dest;
};

// todo: should handle other formats
export const isLessThanOrEquals = (target: string, dest: string) => {
  return target <= dest;
};
