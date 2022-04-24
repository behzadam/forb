export function isEquals(target: string, other: string | null): boolean;
export function isEquals(target: number, other: number): boolean;
export function isEquals(target: boolean, other: boolean): boolean;
export function isEquals(target: any, other: any): boolean {
  if (typeof target === 'string' && typeof other === 'string') {
    const areEqual: number = target?.localeCompare(other) ?? -1;
    return areEqual === 0;
  }
  return target === other;
}
