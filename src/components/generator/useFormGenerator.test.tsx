import { act, renderHook } from '@testing-library/react-hooks';

import useFormGenerator from './useFormGenerator';

let formData: any[] = [];
beforeAll(() => {
  formData = [{ uid: 'f61233e8-565e', value: 1 }];
});

describe('useFormGenerator', () => {
  test(`should sets fields state`, () => {
    const { result } = renderHook(() => useFormGenerator(formData));
    expect(result.current.fields.length).toBeGreaterThan(0);
  });

  test(`should initials key/value object list`, () => {
    const { result } = renderHook(() => useFormGenerator(formData));
    const { uid } = result.current.fields[0];
    expect(result.current.formValues).toHaveProperty(uid);
  });

  test(`should update form value by uid`, () => {
    const { result } = renderHook(() => useFormGenerator(formData));
    const firstItem = formData[0];
    const value = 2;

    act(() => {
      result.current.fieldChanged(firstItem.uid, value);
    });

    expect(result.current.formValues).toEqual(
      expect.objectContaining({
        [firstItem.uid]: value,
      })
    );
  });
});
