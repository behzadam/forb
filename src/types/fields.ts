export type FieldValues = Record<string, any>

export enum Condition {
  IsEmpty = 'Is Empty',
  IsNotEmpty = 'Is Not Empty',
  Contains = 'Contains',
  IsNotContaining = 'Is Not Containing',
  Or = '|',
  And = '&',
  EqualTo = '=',
  NotEqualTo = '<>',
  GreaterThan = '>',
  GreaterThanOrEquals = '>=',
  LessThan = '<',
  LessThanOrEquals = '<='
}

export enum Action {
  Show = 'Show',
  Hide = 'Hide',
  JumpTo = 'Jump To'
}

export type ActionsState = 'Show' | 'Hide' | 'Jump To'

export type FieldValueType =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | boolean[]

export type Conditions = {
  target: string
  state: string
  value: FieldValueType
}

export type FieldType = {
  uid: string
  label: string
  type: string
  value: FieldValueType
  conditions?: Conditions
  onChange(uid: string, value: string): void
}
