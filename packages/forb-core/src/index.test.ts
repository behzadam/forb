import fieldMeetsCondition from './index'

describe('fieldMeetsCondition', () => {
  it('should return true if field meets condition', () => {
    const result = fieldMeetsCondition()
    expect(result).toBe(true)
  })
  it('should return false if field meets condition', () => {
    const result = fieldMeetsCondition()
    expect(result).toBe(false)
  })
})
