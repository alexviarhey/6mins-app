import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

type PropsType = {
    name?: string
    label?: string
    value?: string
}

export const CustomInput: React.FC<PropsType> = ({ name, value, label }) => {
    return (
        <div>
            <div></div>
            <Input />
        </div>
    )
}
