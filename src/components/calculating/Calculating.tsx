import React, { useEffect } from 'react'
import './calculating.scss';
import CALC_IMG from '../../assets/images/data-report.svg';
import AnimatedWheel from '../animated-wheel/AnimatedWheel';
import BLUE_WHEEL from '../../assets/icons/blue_wheel.svg';
import ORANGE_WHEEL from '../../assets/icons/orange_wheel.svg';
import PINK_WHEEL from '../../assets/icons/pink_wheel.svg';
import YELLOW_WHEEL from '../../assets/icons/shester.svg';
import { useNavigate } from 'react-router-dom';


const Calculating: React.FC = () => {

    const navigate = useNavigate();
    const wheels = [
        { icon: BLUE_WHEEL, className: 'blue-wheel' }, 
        { icon: ORANGE_WHEEL, className: 'orange-wheel' }, 
        { icon: PINK_WHEEL, className: 'pink-wheel' },
        { icon: YELLOW_WHEEL, className: 'yellow-wheel' }
    ];

    useEffect(() => {
        setTimeout(() => {
            navigate('/summary');
        }, 4000)
    }, [])

    return (
        <div className='calculating'>
            {wheels.map((el, i) => <AnimatedWheel key={i} icon={el.icon} className={el.className} />)}
            <div className='calculating-inner'>
                <span className='calculating-inner--title'>Идет анализ</span>
                <img src={CALC_IMG} alt="" className='calculating-inner--illustration' />
            </div>
            
        </div>
    )
}

export default Calculating