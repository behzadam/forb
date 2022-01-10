import { addOrRemove } from './addOrRemove';

describe('addOrRemove', () => {
  test('should add an item from the array', () => {
    const result = addOrRemove([1, 2], 3);
    expect(result).toStrictEqual([1, 2, 3]);
  });
  test('should remove an item from the array', () => {
    const result = addOrRemove([1, 2, 3], 3);
    expect(result).toStrictEqual([1, 2]);
  });
});
