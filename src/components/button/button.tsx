import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
    name: string,
    icon?: IconDefinition,
    onClick?: () => void,
    type?: "button" | "submit" | "reset",
    className?: string
}

const Button: React.FC<ButtonProps> = ({ 
    name, 
    icon,
    onClick,
    type='button',
    className
}) => {
    return (
        <button 
            className={classnames(className, styles.button)} 
            onClick={() => onClick && onClick()}
            type={type}
        >
            <span style={{ textAlign: 'center' }}>{name}</span>
            {icon && <FontAwesomeIcon icon={icon} />}
        </button>
    );
};

export default Button;