import classNames from 'classnames';
import React from 'react';
import WHEEL from '../../assets/icons/shester.svg';
import './animated-wheel.scss';

type AnimatedWheelProps = {
    icon?: string
    className?: string
}

const AnimatedWheel: React.FC<AnimatedWheelProps> = ({ 
    icon=WHEEL,
    className
}) => {
    return (
        <img src={icon} alt="" className={classNames(className, 'wheel')} />
    )
}

export default AnimatedWheel;