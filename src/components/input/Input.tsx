import React from 'react';
import styles from './input.module.scss';

type InputProps = {
    label?: string,
    name?: string,
    type?: string,
    onChange?: () => void
}

const Input: React.FC<InputProps> = ({ 
    label,
    name,
    type='text',
    onChange
}) => {
    
    return (
        <div className={styles.input}>
            <label htmlFor={name} className={styles.inputLabel}>{label}</label>
            <input 
                id={name}
                type={type} 
                className={styles.inputField}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;