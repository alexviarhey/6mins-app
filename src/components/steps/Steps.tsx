import React, { useEffect } from 'react'
import './steps.styles.scss'
import heart from '../../assets/icons/heart-beat-filled.svg'
import shoe from '../../assets/icons/shoe-icon.svg'
import columns from '../../assets/icons/columns-icon.svg'
import questions from '../../assets/images/question-img.svg'
import caution from '../../assets/images/caution.svg'
import { useNavigate } from "react-router-dom";
import Button from '../button/button'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { PassedSteps } from '../../App'

type PropsType = {
    redirectTo: string | null
    setPassedStep: (value: PassedSteps) => void
}

const Steps: React.FC<PropsType> = ({ redirectTo, setPassedStep }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if(redirectTo) {
            navigate(redirectTo)
        }
    }, [])


    const next = () => {
        setPassedStep(PassedSteps.STEPS)
        navigate('/form')
    }

    return (
        <div className='steps_outer'>
            <div className='technique_outer'>
                <div className='technique_outer_left'>
                    <div className='technique_outer_left--title'>Методика оценки</div>
                    <div className='technique_outer_left--description'>
                        <img src={heart} alt=""/>
                        <div>
                            Критерием оценки функционального состояния является реакция сердечно-сосудистой системы
                            (ССС) и дыхательной системы (ДС) на физическую нагрузку.
                        </div>
                    </div>
                    <div className='technique_outer_left--requirements-title'>
                        Для этого требуется:
                    </div>
                    <div className='technique_outer_left--requirements-items'>
                        <div className='technique_outer_left--requirements-items--item'>
                            <img src={shoe} alt=""/>
                            <div>
                                Заполнить краткую анкету о состоянии здоровья
                            </div>
                        </div>
                        <div className='technique_outer_left--requirements-items--item'>
                            <img src={columns} alt=""/>
                            <div>
                                Пройти нагрузочный тест (6 минутная ходьба)
                            </div>
                        </div>
                    </div>
                    <Button 
                        onClick={next} 
                        name={'Продолжить'}
                        icon={faChevronRight}
                        className={'next-button'}
                    />
                </div>
                <div className='technique_outer_right'>
                    <img src={questions} alt=""/>
                </div>
            </div>
            <div className='restrictions_outer'>
                <div className='restrictions_outer-left'>
                    <img src={caution} alt=""/>
                </div>
                <div className='restrictions_outer-right'>
                    <div className='restrictions_outer-right--title'>
                        Ограничения к проведению нагрузочного тестирования
                    </div>
                    <div className='restrictions_outer-right--item'>
                        <span/>
                        <div>нестабильная стенокардия</div>
                    </div>
                    <div className='restrictions_outer-right--item'>
                        <span/>
                        <div>инфаркт миокарда в течении предыдущего месяца</div>
                    </div>
                    <div className='restrictions_outer-right--item'>
                        <span/>
                        <div>исходная ЧСС менее 50 в мин или более 120 в мин</div>
                    </div>
                    <div className='restrictions_outer-right--item'>
                        <span/>
                        <div>систолическое АД более 180 мм рт.ст.</div>
                    </div>
                    <div className='restrictions_outer-right--item'>
                        <span/>
                        <div>диастолическое АД более 120 мм рт.ст.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps