import React, {useEffect} from "react";
import checkSquare from '../../assets/icons/check-square.svg'
import {Form, Input} from "antd";
import todo from '../../assets/images/to-do.svg'
import './six-min-walking.scss'
import {useNavigate} from "react-router-dom";
import Button from "../button/button";

type PropsType = {
    distance: string | null
    onSubmit: (value: string) => void
}

const SixMinWalking: React.FC<PropsType> = ({distance, onSubmit}) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (distance) form.setFieldsValue({distance})
    }, [])

    const [form] = Form.useForm();

    const onFinish = (values: { distance: string }) => {
        onSubmit(values.distance)
        console.log('Success:', values);
        navigate("/summary")
    }

    return (
        <Form
            form={form}
            onFinish={onFinish}
        >
            <div className='walking_outer'>
                <div className='walking_top'>
                    <div className='walking_top_container'>
                        <div className='walking_top_container-left'>
                            <div className='walking_top_container-left--title'>Этапы проведения нагрузочного теста</div>
                            <div className='walking_top_container-left-items'>
                                <div className='walking_top_container-left-items-item'>
                                    <img src={checkSquare} alt=""/>
                                    <div>
                                        Тест 6-минутной ходьбы проводится в утренние часы после легкого завтрака. За 3-4
                                        часа до
                                        проведения тестирования не принимать кардиологических препаратов. Не курить по
                                        меньшей
                                        мере 2 часа до теста.
                                    </div>
                                </div>
                                <div className='walking_top_container-left-items-item'>
                                <img src={checkSquare} alt=""/>
                                <div>
                                    Выберите место с заранее известным метражом (например длина комнатв вдоль одной из
                                    стен,
                                    по
                                    коридору)
                                </div>
                            </div>
                            <div className='walking_top_container-left-items-item'>
                                <img src={checkSquare} alt=""/>
                                <div>
                                    Затем, в течении 6 минут выполнения теста ( ходьба по коридору, вдоль стены по
                                    комнате
                                    туда
                                    и обратно необходимо пройти как можно большее расстояние.
                                    <span>
                                    <br/>
                                    ! Нельзя бегать или перемещаться перебежками  
                                    ! При появлении отдышки или слабости, необходимо замедлить темп ходьбы, остановиться
                                    и отдохнуть, а затем продолжить ходьбу
                                </span>
                                </div>
                            </div>
                            <div className='walking_top_container-left-items-item'>
                                <img src={checkSquare} alt=""/>
                                <div>
                                    По истечении 6 минут следует остановиться и подсчитать ЧСС ( пульс ) и измерить АД,
                                    подсчитать пройденное расстояние с точностью до 1 метра
                                </div>
                            </div>
                            <div className='walking_top_container-left-items-item'>
                                <img src={checkSquare} alt=""/>
                                <div>
                                    Затем присесть и отдохнуть в течении 10 минут при этом еще раз подсчитав ЧСС и
                                    измерив
                                    АД на
                                    4, 6 и 10-й минутах отдыха
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='walking_top_container-right'>
                            <img src={todo} alt=""/>
                        </div>
                    </div>
                </div>
                <div className='walking_bottom'>
                    <div className='walking_bottom_container'>
                        <div className='walking_bottom_container_distance'>
                            <Form.Item
                                label="Пройденное расстояние (м)"
                                rules={[{required: true, message: ''}]}
                                name="distance"
                            >
                                <Input type='number'/>
                            </Form.Item>
                        </div>
                        <div className='walking_bottom_container_tables'>
                            <div className='walking_bottom_container_tables--data'>
                                <table>
                                    <tr>
                                        <th className='th-first'/>
                                        <th>В покое сидя</th>
                                        <th>Сразу после теста 6-ти минуты</th>
                                        <th>До 4-й минуты</th>
                                        <th>До 6-й минуты</th>
                                        <th>До 10-й минуты</th>
                                    </tr>
                                    <tr>
                                        <td>ЧСС</td>
                                        <td contentEditable='true'/>
                                        <td contentEditable='true'/>
                                        <td contentEditable='true'/>
                                        <td contentEditable='true'/>
                                        <td contentEditable='true'/>
                                    </tr>
                                    <tr>
                                        <td>АД</td>
                                        <td contentEditable='true'/>
                                        <td>-</td>
                                        <td>-</td>
                                        <td contentEditable='true'/>
                                        <td contentEditable='true'/>
                                    </tr>
                                    <tr>
                                        <td>SpO2 (указывать при наличии данных)</td>
                                        <td contentEditable='true'/>
                                        <td>-</td>
                                        <td>-</td>
                                        <td contentEditable='true'/>
                                        <td contentEditable='true'/>
                                    </tr>
                                    <tr>
                                        <td>Отдышка (по шкале Борга)</td>
                                        <td contentEditable='true'/>
                                        <td contentEditable='true'/>
                                        <td contentEditable='true'/>
                                        <td contentEditable='true'/>
                                        <td contentEditable='true'/>
                                    </tr>
                                </table>
                            </div>
                            <div>
                                <div className='borg_outer'>
                                    <div className='borg_outer--title'>
                                        <b>Шкала Борга</b> для оценки пациентом переносимости физических нагрузок.
                                    </div>
                                    <div className='borg_outer--description'>
                                        Необходимо выбрать одно из чисел, отражающее степень одышки, которую вы
                                        испытываете после выполнения теста 6-минутной ходьбы.
                                    </div>
                                    <div className='borg_outer-items'>
                                        <div><b>0</b> — состояние покоя</div>
                                        <div><b>1</b> — очень легко</div>
                                        <div><b>2</b> — легко</div>
                                        <div><b>3</b> — умеренная нагрузка</div>
                                        <div><b>4</b> — довольно тяжело</div>
                                        <div><b>5-6</b> — тяжело</div>
                                        <div><b>7-8</b> — очень тяжело</div>
                                        <div><b>9</b> — очень-очень тяжело</div>
                                        <div><b>10</b> — максимальная нагрузка</div>
                                    </div>
                                </div>
                                <div>
                                    <Form.Item>
                                        <Button 
                                            name="Завершить" 
                                            type="submit"
                                            className="finish-button" 
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Form>

    )
}

export default SixMinWalking