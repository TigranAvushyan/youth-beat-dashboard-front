import { FC } from 'react'
import styles from './Body.module.css'


export const Body: FC = () => {
    return (
        <div className={styles.container}>
          <h1 className={styles.header}>Аналитика</h1>
        </div>
    )
}