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
  console.log('Generating schema', schema, uid, validation);

  if (!validation?.type) return schema;

  let validator: { [type: string]: any } = (yup as any)[validation.type]();
  validation.conditions.forEach((condition) => {
    const { type, must } = condition;
    if (!validator[type]) {
      return;
    }
    console.log(type, must);
    validator = validator[type](...must);
  });
  // eslint-disable-next-line no-param-reassign
  schema[uid] = validator;
  return schema;
}
