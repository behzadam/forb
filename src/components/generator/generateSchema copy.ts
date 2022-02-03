import * as yup from 'yup';

type Config = {
  uid: any;
  validation: {
    type: string;
    conditions: [{ type: string; must: [] }];
  };
};

type Schema = { [uid: string]: any };

export function generateSchema1(schema: Schema, { uid, validation }: Config) {
  if (!validation?.type) return schema;
  let validator: { [type: string]: any } = (yup as any)[validation.type]();
  validation.conditions.forEach((condition) => {
    const { type, must } = condition;
    validator = validator[type](...must);
    console.log(validator, must);
  });
  return {
    ...schema,
    [uid]: validator,
  };
}
