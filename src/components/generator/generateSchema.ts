import * as yup from 'yup';

type Config = {
  uid: any;
  validation: {
    type: string;
    conditions: [{ type: string; must: [] }];
  };
};

type Schema = { [uid: string]: any };

export function generateSchema(schema: Schema, { uid, validation }: Config) {
  if (!validation?.type) return schema;
  let validator: { [type: string]: any } = (yup as any)[validation.type]();
  validation.conditions.forEach((condition) => {
    const { type, must } = condition;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...must);
  });
  return {
    ...schema,
    [uid]: validator,
  };
}
