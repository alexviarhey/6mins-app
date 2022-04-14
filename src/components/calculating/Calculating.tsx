import React from 'react'
import './calculating.scss';
import CALC_IMG from '../../assets/images/data-report.svg';
import AnimatedWheel from '../animated-wheel/AnimatedWheel';


const Calculating: React.FC = () => {

    return (
        <div className='calculating'>
            <AnimatedWheel />
            <div className='calculating-inner'>
                <span className='calculating-inner--title'>Идет подсчет</span>
                <img src={CALC_IMG} alt="" className='calculating-inner--illustration' />
            </div>
            
        </div>
    )
}

export default Calculating