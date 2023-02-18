import { FC } from 'react'
import { AnalyticBlock } from '../AnalyticBlock/AnalyticBlock'
import { DropDown } from '../DropDown/DropDown'
import styles from './Analytics.module.css'

export const Analytics: FC = () => {
    const array = [
        {
            'text': 'В регионе Рязанская область за 2021 было проведено 44 форумов. В то же время в регионах России в среднем было проведено по 25 форумов.\nДанный показатель для региона Рязанская область превышает норму!!!',
            'plot': "http://78.140.241.174:8100/media/plots_folder/forums.html", 
            'status': 'bad',
        },
        {
            'text': 'kekich',
            'plot': 'path_to_plot', 
            'status': 'good',
        },
        {
            'text': 'kekich',
            'plot': 'path_to_plot', 
            'status': 'ok',
        },

    ]
    return (
        <div className={styles.container}>
                <h1 className={styles.header}>Аналитика</h1>
                <div className={styles.drop}>
                    <DropDown />
                </div>  
                <div className={styles.blocks}>
                    {array && array.map((e) => (
                        //@ts-ignore
                        <AnalyticBlock status={e.status} text={e.text} src={e.plot} />
                    ))}
                </div>
        </div>
    )
}