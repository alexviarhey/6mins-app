import React from 'react'
import check from '../../assets/icons/checkmark-pink.svg'
import heart from '../../assets/icons/heart-beat-outlined.svg'
import './summary.scss'
import analitic from '../../assets/images/analitic.svg'
import {FormsData} from "../../App";
import {calculateAllRecommendations} from "../../recomendations/reccomendations";
import {ZONES} from "../../recomendations/zones";

type PropsType = {
    data: FormsData
}

const Summary: React.FC<PropsType> = ({data}) => {

    const res = calculateAllRecommendations(data)

    console.log(res.recommendations)

    return (
        <div className='summary_outer'>
            <div className='summary_container'>
                <div className='summary_container_left'>
                    <div className='summary_container_left--title'>
                        Персональные рекоммендации
                    </div>
                    <div className='summary_container_left_items'>
                        {
                            res.recommendations.map((r, i) => (
                                <div key={i} className='summary_container_left_items_item'>
                                    <img src={check} alt=""/>
                                    <div>{r}</div>
                                </div>
                            ))
                        }
                    </div>
                    {
                        res.zones && <>
                            <div className='summary_container_left--pulse_title'>
                                Пульсовые тренировочные зоны
                            </div>
                            <div className='summary_container_left_zones'>
                                {
                                    res.zones[ZONES.REHABILITATION] && (
                                        <div className='summary_container_left_zones_zone'>
                                            <img src={heart} alt=""/>
                                            <div className='zone pink'>
                                                <div className='zone-value_outer'>
                                                    <div className='zone-value_outer--name'>10-30%</div>
                                                    <div className='zone-value_outer--description'>реабилитационная зона</div>
                                                </div>
                                                <div className='zone--description'>что позволяет?</div>
                                                <div className='zone-description--value'>
                                                    {res.zones[ZONES.REHABILITATION]} уд/мин
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    res.zones[ZONES.RESTORATIVE] && (
                                        <div className='summary_container_left_zones_zone'>
                                            <img src={heart} alt=""/>
                                            <div className='zone blue'>
                                                <div className='zone-value_outer'>
                                                    <div className='zone-value_outer--name'>40-50%</div>
                                                    <div className='zone-value_outer--description'>восстановительная зона</div>
                                                </div>
                                                <div className='zone--description'>что позволяет?</div>
                                                <div className='zone-description--value'>
                                                    {res.zones[ZONES.RESTORATIVE]} уд/мин
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    res.zones[ZONES.PREPARATORY] && (
                                        <div className='summary_container_left_zones_zone'>
                                            <img src={heart} alt=""/>
                                            <div className='zone green'>
                                                <div className='zone-value_outer'>
                                                    <div className='zone-value_outer--name'>50-60%</div>
                                                    <div className='zone-value_outer--description'>подготовительная зона</div>
                                                </div>
                                                <div className='zone--description'>что позволяет?</div>
                                                <div className='zone-description--value'>
                                                    {res.zones[ZONES.PREPARATORY]} уд/мин
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </>
                    }
                </div>
                <div className='summary_container_right'>
                    <img src={analitic} alt=""/>
                </div>
            </div>
        </div>
    )

}

export default Summary