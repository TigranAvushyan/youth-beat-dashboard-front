import axios from "axios"
import { FC, ReactNode, useEffect, useState } from "react"
import { DropDown } from "../DropDown/DropDown"
import styles from './Map.module.css'

interface Props {
    children: ReactNode
    options: Array<{id: string, label: string, value: string}>
    filters: Array<{id: string, label: string, value: string}>
}


export const Map: FC<Props> = ({children, options, filters}) => {

    const [values, setValues] = useState({region: 1, filter: 1})

    const getRegionStats = async () => {
        console.log('keke')
    }

    const getRegion = (id: number) => {
        setValues((prevValues) => ({...prevValues, region: id}))
        getRegionStats()
    }

    const getFilters = (id: number) => {
        setValues((prevValues) => ({...prevValues, filter: id}))
        getRegionStats()
    }


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.filter}>
                    {options &&
                    <DropDown options={options} handleChange={getRegion} defaultValue='Регион' /> }
                    {filters &&
                    <DropDown options={filters} handleChange={getFilters} defaultValue='Признаки' /> }
                </div>
            </div>
            <div className={styles.mapContainer}>
                {children}
            </div>
        </div>
    )
}