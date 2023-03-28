import { FC } from 'react';
import { NavItem } from './types';

interface Props {
  navItem: NavItem[];
}
export const ClientPage: FC<Props> = ({ navItem }) => {
  return (
    <div>
      <div>
        {navItem.map((i) => (
          // может быть сайдбаром
          <a style={{ color: 'black' }} key={i.link} href={i.link}>
            {i.title}
          </a>
        ))}
      </div>
      ClientPage
    </div>
  );
};
