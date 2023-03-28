import { FC } from 'react';
import { ClientPage } from './ClientPage';
import { DoctorPage } from './DoctorPage';
import { NavItem } from './types';

type ROLE = 'client' | 'doctor' | 'doter';

const clientNavItem: NavItem[] = [
  { link: '/page', title: 'client page' },
  { link: '/home', title: 'client home' },
];

const doctorNavItem: NavItem[] = [
  { link: '/page', title: 'doctor page' },
  { link: '/home', title: 'doctor home' },
  { link: '/alaysis', title: 'alaysis home' },
];

export const PrivatePage: FC = () => {
  const role: ROLE = (localStorage.getItem('role') as ROLE) || 'doctor';
  switch (role) {
    case 'client':
      return <ClientPage navItem={clientNavItem} />;
    case 'doctor':
      return <DoctorPage navItem={doctorNavItem} />;
  }

  return null;
};
