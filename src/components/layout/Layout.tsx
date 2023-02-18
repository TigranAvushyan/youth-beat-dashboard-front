import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom'
import styles from './Layout.module.css';
import logo from '../../assets/logo.png';
import beaver from '../../assets/beaver.png';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt='logo' />
        <div>
          <Link to='/'>Статистика</Link>
          <Link to='/analytics'>Аналитика</Link>
        </div>
        <div className={styles.user}>
          <p>Крутой Бобёр</p>
          <div>
            <img className={styles.avatar} src={beaver} alt='beaver' />
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
