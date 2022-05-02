export type Condition =
  | 'EqualTo'
  | 'NotEqualTo'
  | 'NotEqualTo'
  | 'IsNotContaining'
  | 'Contains'
  | 'IsEmpty'
  | 'IsNotEmpty'
  | 'GreaterThan'
  | 'GreaterThanOrEquals'
  | 'LessThan'
  | 'LessThanOrEquals'

export type If = 'All' | 'Any'
export type Then = 'Show' | 'Hide' | 'JumpTo'

export type FieldValue = number | string | boolean | null | undefined

export type Meet = [
  condition: Condition,
  target: FieldValue,
  other: FieldValue,
  result: boolean
]

export type Action = (meet: Meet) => boolean
export type ActionMap = Record<Condition, Action>

export type Conditions = {
  when: string
  is: string
  value: any
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
