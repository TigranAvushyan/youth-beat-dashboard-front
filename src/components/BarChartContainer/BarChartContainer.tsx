import { FC } from 'react'
import styles from './BarChartContainer.module.css'
import { Checkbox } from 'antd'

export const BarChartContainer: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.checkboxes}>
                <Checkbox>Выбрать худшие показатели</Checkbox>
            </div>
            <div className={styles.chart}>
                Тут чарт
            </div>
            
        </div>
    )
}