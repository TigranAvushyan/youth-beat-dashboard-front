import { FC, ReactNode } from 'react';
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
          <a>Отчёт</a>
          <a>Внести изменения</a>
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
