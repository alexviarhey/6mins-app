import React from 'react';
import WHEEL from '../../assets/icons/shester.svg';
import './animated-wheel.scss';

const AnimatedWheel: React.FC = () => {
    return (
        <img src={WHEEL} alt="" className='wheel' />
    )
}

export default AnimatedWheel;