import React from 'react'
import check from '../../assets/icons/checkmark-pink.svg'
import heart from '../../assets/icons/heart-beat-filled.svg'
import './summary.scss'
import analitic from '../../assets/images/analitic.svg'

const Summary = () => {

    return (
        <div className='summary_outer'>
            <div className='summary_container'>
                <div className='summary_container_left'>
                    <div className='summary_container_left--title'>
                        Персональные рекоммендации
                    </div>
                    <div className='summary_container_left_items'>
                        <div className='summary_container_left_items_item'>
                            <img src={check} alt=""/>
                            <div>
                                Повторяйте тест 6-минутной ходьбы, увеличивая количество пройденного расстояния каждые 7
                                дней на 20м в одном занятии и время занятия на 10мин.
                            </div>
                        </div>
                        <div className='summary_container_left_items_item'>
                            <img src={check} alt=""/>
                            <div>
                                Нормализация пищевого рациона за счет белковой составляющей (мясо, рыба, молочные
                                продукты), жиров.
                            </div>
                        </div>
                        <div className='summary_container_left_items_item'>
                            <img src={check} alt=""/>
                            <div>
                                Физическая активность в виде циклических тренировок (терренкур и пешие прогулки),
                                силовые аэробные упражнения средней интенсивности (ЧСС не выше 50% от ЧСС покоя)
                            </div>
                        </div>
                    </div>
                    <div className='summary_container_left--pulse_title'>
                        Пульсовые тренировочные зоны
                    </div>
                    <div className='summary_container_left_zones'>
                        <div className='summary_container_left_zones_zone'>
                            <img src={heart} alt=""/>
                            <div className='zone pink'>
                                <div className='zone-value_outer'>
                                    <div className='zone-value_outer--name'>10-30%</div>
                                    <div className='zone-value_outer--description'>реабилитационная зона</div>
                                </div>
                                <div className='zone--description'>что позволяет?</div>
                                <div className='zone-description--value'>103 - 116 уд/мин</div>
                            </div>
                        </div>
                        <div className='summary_container_left_zones_zone'>
                            <img src={heart} alt=""/>
                            <div className='zone blue'>
                                <div className='zone-value_outer'>
                                    <div className='zone-value_outer--name'>40-50%</div>
                                    <div className='zone-value_outer--description'>восстановительная зона</div>
                                </div>
                                <div className='zone--description'>что позволяет?</div>
                                <div className='zone-description--value'>116 - 123 уд/мин</div>
                            </div>
                        </div>
                        <div className='summary_container_left_zones_zone'>
                            <img src={heart} alt=""/>
                            <div className='zone green'>
                                <div className='zone-value_outer'>
                                    <div className='zone-value_outer--name'>50-60%</div>
                                    <div className='zone-value_outer--description'>подготовительная зона</div>
                                </div>
                                <div className='zone--description'>что позволяет?</div>
                                <div className='zone-description--value'>123 - 136	уд/мин</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='summary_container_right'>
                    <img src={analitic} alt=""/>
                </div>
            </div>
        </div>
    )

}

export default Summary