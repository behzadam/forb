import { generateFormValues } from '../src/index'
import formData from '../src/formData.json'
// import { FieldType } from '../src/types'

describe('Generate Form Values', () => {
  it('should generate key values form list with default values', () => {
    const data = formData
    const values = generateFormValues(data)
    console.log(values)
  })
})
