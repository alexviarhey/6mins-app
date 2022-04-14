import React from 'react';
import './start-page.styles.scss'
import healthCheckup from '../../assets/images/Health-checkup.svg'
import {useNavigate} from "react-router-dom";

const StartPage = () => {

    const navigate = useNavigate()

    return (
        <div className='start-page-outer'>
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
                <button onClick={() => navigate("/steps")}>
                    Узнать больше
                </button>
                <img src={healthCheckup}/>
            </div>
        </div>
    )
}

export default StartPage