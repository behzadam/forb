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

export type FieldValue = number | string | boolean | any[] | null | undefined
export type FieldTargetWithOther = [
  target: keyof FieldValue,
  other?: keyof FieldValue
]

export type Action<T> = (t: T) => boolean
export type ActionMap<T> = Record<Condition, Action<T>>

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
    if: If
    conditions: Conditions[]
  }
  options?: OptionType[]
  onChange(uid: string, value: string): void
}
