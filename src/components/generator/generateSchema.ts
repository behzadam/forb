import * as yup from 'yup';

type Schema = { [uid: string]: any };
type Config = { uid: string; validationType: string; validations: string[] };

export function generateSchema(
  schema: Schema,
  { uid, validationType, validations = [] }: Config
) {
  if (!(yup as any)[validationType]) {
    return schema;
  }
  let validator: { [type: string]: any } = (yup as any)[validationType]();
  validations.forEach((validation) => {
    if (Array.isArray(validation)) {
      validation?.forEach(() => {
        const functionName = validation[0];
        const validationParams = [...validation.slice(1)];
        validator = validator[functionName](...validationParams);
      });
    }
  });
  return {
    ...schema,
    [uid]: validator,
  };
}
