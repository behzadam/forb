import { renderHook } from '@testing-library/react-hooks';

import { formData } from './FormData';
import useFormGenerator from './useFormGenerator';

describe('useFormGenerator', () => {
  test(`Default value of will be zero`, () => {
    const { result } = renderHook(() => useFormGenerator(formData));
    const size = result.current.fields.length;
    expect(size).toBeGreaterThan(0);
  });
});
