import { Menu } from "antd"
import { Header } from "antd/es/layout/layout"
import { FC, ReactNode } from "react"
import styles from './Layout.module.css'

interface Props {
  children: ReactNode 
}

export const Layout: FC<Props> = ({children}) => {
    return (
        <>
        <div className={styles.container}>
            <img className={styles.logo} src="./src/components/layout/assets/logo.png" alt="logo" />
            <div>
                <a>Отчёт</a>
                <a>Внести изменения</a>
            </div>
            <div className={styles.user}>
                <p>Крутой Бобёр</p>
                <div><img className={styles.avatar} src="./src/components/layout/assets/beaver.png" alt="beaver" /></div>
            </div>
        </div>
        {children}
        </>
    )
}

