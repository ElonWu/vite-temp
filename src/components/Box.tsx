import type { FC } from 'react';

const Box: FC<{ className?: string }> = ({ className = '', ...props }) => {
  return (
    <div
      className={'Box rounded-md p-4 bg-back-1 shadow-md border' + className}
      {...props}
    />
  );
};

export default Box;
