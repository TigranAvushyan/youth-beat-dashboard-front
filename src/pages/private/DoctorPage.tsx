import { FC } from 'react';
import { NavItem } from './types';

interface Props {
  navItem: NavItem[];
}
export const DoctorPage: FC<Props> = ({ navItem }) => {
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
      DoctorPage
    </div>
  );
};
