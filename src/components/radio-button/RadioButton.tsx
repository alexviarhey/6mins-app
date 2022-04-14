import { Radio } from 'antd';
import React from 'react';
import styles from './radio-button.module.scss';

type RadioButtonProps = {
    value: string,
    label: string
}

const RadioButton: React.FC<RadioButtonProps> = ({ value, label }) => {
    return (
        <Radio className={styles.radio} checked={true} value={value}>{label}</Radio>
    );
};

export default RadioButton;