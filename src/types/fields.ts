export type FieldValues = Record<string, any>

export enum ConditionState {
  FilledOut = 'Filled Out',
  NotFilledOut = 'Not Filled Out',
  EqualTo = 'Equal To',
  NotEqualTo = 'Not Equal To',
  GreaterThan = 'Greater Than',
  LessThan = 'Less Than',
  Contains = 'Contains',
  DoesNotContain = 'Does Not Contain',
  Or = 'Or',
  And = 'And'
}

export type ConditionIncludes =
  | 'Filled Out'
  | 'Not Filled Out'
  | 'Equal To'
  | 'Not Equal To'
  | 'Greater Than'
  | 'Less Than'
  | 'Contains'
  | 'Does Not Contain'
  | 'Or'
  | 'And'

export type FieldValue =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | boolean[]

export type Conditions = {
  target: string
  state: ConditionIncludes
  value: FieldValue
}

export type FieldType = {
  uid: string
  label: string
  type: string
  value: any
  conditions?: Conditions
  onChange(uid: string, value: string): void
}
