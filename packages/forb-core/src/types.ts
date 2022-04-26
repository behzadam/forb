export enum ConditionsType {
  // shared
  EqualTo = 'EqualTo',
  NotEqualTo = 'NotEqualTo',

  // text fields
  IsNotContaining = 'IsNotContaining',
  Contains = 'Contains',
  IsEmpty = 'IsEmpty',
  IsNotEmpty = 'IsNotEmpty',

  // numeric fields
  GreaterThan = 'GreaterThan',
  GreaterThanOrEquals = 'GreaterThanOrEquals',
  LessThan = 'LessThan',
  LessThanOrEquals = 'LessThanOrEquals',
}

export type Conditions = {
  when: string
  is: string
  value: any
}

export enum ConditionType {
  All = 'All',
  Any = 'Any',
}

export enum ActionsType {
  Show = 'Show',
  Hide = 'Hide',
  JumpTo = 'JumpTo',
}

export type FieldValues = Record<string, any>

export type OptionType = {
  label: string
  value: string
  checked: boolean
  uid: string
}

export type FieldType = {
  uid: string
  label: string
  type: string
  value?: any
  condition?: string
  logic?: {
    if: string
    conditions: Conditions[]
  }
  options?: OptionType[]
  onChange(uid: string, value: string): void
}
