import { useState, ReactElement, useEffect } from 'react'
import Field from './Field'
import { FieldValues, FieldType } from '../types'

const checkCondition = (target: any, value: any, state: string): boolean => {
  if (state === 'isEqual') {
    return target === value
  }
  return false
}

const fieldMeetsCondition =
  (formValues: FieldValues) =>
  (field: FieldType): boolean => {
    if (field.conditions) {
      if (Array.isArray(field.conditions)) {
        field.conditions.forEach((condition) => {
          const target = formValues[condition.target]
          return checkCondition(target, condition.value, condition.state)
        })
      } else {
        const target = formValues[field.conditions.target]
        return checkCondition(
          target,
          field.conditions.value,
          field.conditions.state
        )
      }
    }
    return true
  }

type FormProps = {
  formData: any[]
}

const FormGenerator = ({ formData }: FormProps): ReactElement => {
  const [fields, setFields] = useState<any[]>(formData)
  const [values, setValues] = useState<FieldValues>({})

  const fieldChanged = (uid: string, value: string) => {
    setValues((currentValues) => {
      currentValues[uid] = value
      return currentValues
    })

    setFields((currentValues) => {
      console.log('setFields', currentValues)
      return Array.from(currentValues)
    })
  }

  useEffect(() => {
    setValues((currentValues) => {
      const newValues = fields.reduce((obj: FieldValues, field: any) => {
        if (field.component === 'field_group') {
          for (const subField of field.fields) {
            obj[subField.uid] = subField?.value ?? ''
          }
        } else if (field.component === 'checkboxes') {
          for (const subField of field.options) {
            obj[subField.uid] = subField?.checked ?? false
          }
        } else {
          obj[field.uid] = field?.value ?? ''
        }
        return obj
      }, {})
      return Object.assign({}, newValues, currentValues)
    })
  }, [fields])

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    // todo - send data somewhere
  }
  return (
    <form onSubmit={onSubmit}>
      {fields.filter(fieldMeetsCondition(values)).map((field: any) => {
        return (
          <Field
            key={field.uid}
            value={values[field.uid]}
            label={field.label}
            type={field.type}
            uid={field.uid}
            onChange={fieldChanged}
          />
        )
      })}
    </form>
  )
}

export default FormGenerator
