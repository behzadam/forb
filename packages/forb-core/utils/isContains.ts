export function isContains(target: string[], other: string[]): boolean;
export function isContains(target: string, other: string): boolean;
export function isContains(target: string, other: string | null): boolean;
export function isContains(target: any, other: any): boolean {
  if (typeof target === 'string' && typeof other === 'string') {
    return target.includes(other);
  }
  if (Array.isArray(target) && Array.isArray(other)) {
    return target.some((item: string) => other.includes(item));
  }
  return false;
}
