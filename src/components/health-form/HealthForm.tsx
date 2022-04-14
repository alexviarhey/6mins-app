import React, {useEffect, useState} from 'react'
import apply from '../../assets/images/apply-form.svg'
import {Form, Input, Radio } from 'antd';
import './health-form.scss'
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {QuestionnaireType} from "../../App";
import Button from '../button/button';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import RadioButton from '../radio-button/RadioButton';
import Checkbox from '../checkbox/Checkbox';


type PropsType = {
    data: QuestionnaireType | null
    onSubmit: (data: QuestionnaireType) => void
}

const HealthForm: React.FC<PropsType> = ({data, onSubmit}) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (data) form.setFieldsValue(data)
    }, [])

    const [isCovid, setisCovid] = useState(false);
    const [isLungInjuryDisabled, setIsLungInjuryDisabled] = useState(true)

    const [form] = Form.useForm();

    const initialValues: any = {
        covid: false,
        lungInjury: 0
    }

    const onCovidChange = (e: CheckboxChangeEvent) => {
        const isChecked = e.target.checked
        if (isChecked) {
            setisCovid(true);
            setIsLungInjuryDisabled(false)
            form.setFieldsValue({ activityLevel: 'high' })
            form.setFieldsValue({ covid: true })
        } else {
            setisCovid(false);
            !isLungInjuryDisabled && setIsLungInjuryDisabled(true)
            form.resetFields(['lungInjury', 'activityLevel'])
        }
    }

    const onFinish = (values: QuestionnaireType) => {
        onSubmit(values)
        console.log('Success:', values);
        navigate("/walking")
    }

    return (
        <div className='health-form-outer'>
            <div className='health-form-wrapper'>
                <div className='health-form-wrapper-form'>
                    <div className='health-form-wrapper-form--title'>
                        Анкета о состоянии здоровья
                    </div>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={initialValues}
                    >
                        <Form.Item
                            label="Рост (см)"
                            rules={[{required: true, message: 'Введите рост!'}]}
                            name="height"
                        >
                            <Input type='number' className='health-form-wrapper-form--input'/>
                        </Form.Item>
                        <Form.Item
                            label="Масса тела (кг)"
                            rules={[{required: true, message: 'Введите массу тела!'}]}
                            name="weight"
                        >
                            <Input type='number' className='health-form-wrapper-form--input'/>
                        </Form.Item>
                        <Form.Item
                            label="Возраст (лет)"
                            rules={[{required: true, message: 'Введите возраст!'}]}
                            name="age"
                        >
                            <Input type='number' className='health-form-wrapper-form--input'/>
                        </Form.Item>
                        <Form.Item
                            label="ЧСС в покое (уд/мин)"
                            rules={[{required: true, message: 'Введите ЧСС в покое!'}]}
                            name="heartRate"
                        >
                            <Input type='number' className='health-form-wrapper-form--input'/>
                        </Form.Item>
                        <Form.Item
                            className='covid'
                            name="covid"
                        >
                            <Checkbox 
                                onChange={onCovidChange}
                                checked={isCovid}
                                label={'Перенесенная covid-инфекция'}
                            />
                        </Form.Item>
                        <Form.Item
                            label="% covid-ассоциированного поражения легких"
                            name="lungInjury"
                            rules={[{required: !isLungInjuryDisabled, message: 'Укажите степень поражения!'}]}
                        >
                            <Input disabled={isLungInjuryDisabled} type='number' className='health-form-wrapper-form--input'/>
                        </Form.Item>
                        <Form.Item label="Уровень физической активности до болезни" name="activityLevel">
                            <Radio.Group disabled={isLungInjuryDisabled} value='vertical'>
                                <RadioButton value="high" label='Высокий'/>
                                <div className='description'>
                                    10000 шагов в день или 4 и более занятия физической активностью в неделю
                                </div>
                                <RadioButton value='middle' label='Средний'/>
                                <div className='description'>
                                    От 5000-1000 шагов в день или 2-3 занятия физической активностью в неделю
                                </div>
                                <RadioButton value='low' label='Низкий'/>
                                <div className='description'>
                                    До 2500 шагов в день, без дополнительных занятий физической активностью
                                </div>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item>
                            <Button 
                                name='Продолжить' 
                                type="submit" 
                                icon={faChevronRight}
                                className='submit-button'
                            />
                        </Form.Item>
                    </Form>
                </div>
                <div className='health-form-wrapper-img'>
                    <img src={apply} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default HealthForm