import { ReactNode } from 'react';

import { formData } from '../components/generator/FormData';
import FormGenerator from '../components/generator/FormGenerator';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 antialiased text-gray-700">
    {props.meta}
    Hello Forb 2
    <FormGenerator formData={formData} />
  </div>
);

export { Main };
