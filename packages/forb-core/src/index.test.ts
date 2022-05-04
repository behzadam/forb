import { fieldMeetsCondition } from './index'
import { formData } from './formData'

describe('fieldMeetsCondition', () => {
  it('should return true if field meets condition', () => {
    const result = formData.filter(fieldMeetsCondition)
    expect(false).toBe(true)
  })
  it('should return false if field meets condition', () => {
    expect(true).toBe(false)
  })
})
