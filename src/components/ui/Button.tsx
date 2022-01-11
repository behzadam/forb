import React from 'react';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;
const classes =
  'text-white bg-indigo-600 focus:ring-4 focus:ring-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center';
const Button = (props: ButtonProps) => {
  return <button className={classes} {...props}></button>;
};

export default Button;
