import React from 'react';
import './checkbox.scss';
import { Checkbox as CheckboxComponent } from 'antd';

type CheckboxProps = {
    label: string,
    className?: string,
    defaultChecked?: boolean,
    checked: boolean,
    onChange: ((e: boolean) => void),
    value?: string | boolean | number,
}

const Checkbox: React.FC<CheckboxProps> = ({ 
    label,
    className,
    defaultChecked,
    checked,
    onChange,
    value
 }) => {
    return (
        <CheckboxComponent
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={(e) => onChange && onChange(e.target.checked)}
            value={value}
            id={`checkbox-${label}`}
            
        >
            <label htmlFor={`checkbox-${label}`}>{label}</label>
        </CheckboxComponent>
    );
};

export default Checkbox;