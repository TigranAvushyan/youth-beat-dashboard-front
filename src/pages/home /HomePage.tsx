import { FC, useRef } from 'react';

export const HomePage: FC = () => {
  const ref = useRef(null);
  return <div ref={ref}></div>;
};
