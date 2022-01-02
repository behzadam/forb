import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full min-h-screen px-1 antialiased text-gray-700 bg-gray-50">
    {props.meta}
    <div className="py-5 text-xl content">{props.children}</div>
  </div>
);

export { Main };
