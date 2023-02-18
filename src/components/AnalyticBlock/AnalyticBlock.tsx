import { FC, useState, useEffect } from 'react'
import styles from './AnalyticBlock.module.css'

interface Props {
    src: 'bad' | 'good' | 'ok'
    text: string
    status: string
}
export const AnalyticBlock: FC<Props> = ({src, text, status}) => {
    const [statusColor, setStatusColor] = useState('')

    function Color(stat: string) {
        if (stat === 'bad') {
            setStatusColor('red')
        } else if (stat === 'ok') {
             setStatusColor('#8C64D8')
        } else if (stat === 'good') {
            setStatusColor('green')
        } 
    }

    useEffect(() => {
        Color(status)
    }, []);


    return (
            <div className={styles.block} style={{border: `${statusColor} 5px solid`}}>
                <img src={src} className={styles.img} />
                <p className={styles.text}>{text}</p>
             </div>
        
    )
}

