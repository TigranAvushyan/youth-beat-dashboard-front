import { Select } from "antd"
import { FC } from "react"

interface Props {
    options: Array<{id: string, label: string, value: string}>
    handleChange: any
    defaultValue: string
}

export const DropDown: FC<Props> = ({options, handleChange, defaultValue}) => {

    return (
        <>
            <Select options={options} onChange={(id) => handleChange(id)} defaultValue={defaultValue} /> 
        </>
    )
}