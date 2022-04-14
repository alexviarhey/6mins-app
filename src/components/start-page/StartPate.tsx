import React from 'react';
import './start-page.styles.scss'
import healthCheckup from '../../assets/images/Health-checkup.svg'
import {useNavigate} from "react-router-dom";
import AnimatedCircle from '../animated-circle/AnimatedCircle';
import Button from '../button/button';

const StartPage = () => {

    const navigate = useNavigate()

    const circles = [
        'green-circle', 
        'orange-circle',
        'violet-circle',
        'blue-circle',
        'dark-blue-circle',
        'red-circle',
        'aqua-circle',
        'yellow-circle'
    ];

    return (
        <div className='start-page-outer'>
            {circles.map(el => <AnimatedCircle className={el} key={el} />)}
            <div className='start-page-container'>
                <div className='start-page-container__title'>
                    Оценка функционального состояния
                    кардиореспираторной системы
                </div>
                <div className='start-page-container__subtitle'>
                    Программа определяет функциональное состояние кардиореспираторной системы, уровень физического
                    здоровья
                    и возможный (допустимый, рекомендуемый) уровень физической активности (двигательный режим) с учетом
                    этапа реабилитации.
                </div>
                <Button 
                    name='Узнать больше' 
                    onClick={() => navigate("/steps")} 
                    className={'button'}
                />
                <img src={healthCheckup} alt='' />
            </div>
        </div>
    )
}

export default StartPage