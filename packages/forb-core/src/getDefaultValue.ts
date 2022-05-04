import { FieldType } from './types'

export const getDefaultValue = (field: FieldType): string | string[] => {
  // for: checkboxes
  const defaultSelectedList: string[] = []
  // for: input, select, options
  let defaultSelected = field.value ?? ''
  field?.options?.forEach(option => {
    if (option.checked) {
      if (field.type === 'checkboxes') {
        defaultSelectedList.push(option.value)
      } else {
        defaultSelected = option.value
      }
    }
  })
  return defaultSelected || defaultSelectedList
}
