import React, {useEffect, useState} from 'react'
import apply from '../../assets/images/apply-form.svg'
import {Form, Input, Button, Radio, Checkbox} from 'antd';
import './health-form.scss'
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {QuestionnaireType} from "../../App";
import {useNavigate} from "react-router-dom";

type PropsType = {
    data: QuestionnaireType | null
    onSubmit: (data: QuestionnaireType) => void
}

const HealthForm: React.FC<PropsType> = ({data, onSubmit}) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (data) form.setFieldsValue(data)
    }, [])

    const [isLungInjuryDisabled, setIsLungInjuryDisabled] = useState(true)

    const [form] = Form.useForm();

    const initialValues: any = {
        covid: false,
        lungInjury: 0
    }

    const onCovidChange = (e: CheckboxChangeEvent) => {
        const isChecked = e.target.checked
        if (isChecked) {
            setIsLungInjuryDisabled(false)
            form.setFieldsValue({ activityLevel: 'high' })
            form.setFieldsValue({ covid: true })
        } else {
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
                            <Input type='number'/>
                        </Form.Item>
                        <Form.Item
                            label="Масса тела (кг)"
                            rules={[{required: true, message: 'Введите массу тела!'}]}
                            name="weight"
                        >
                            <Input type='number'/>
                        </Form.Item>
                        <Form.Item
                            label="Возраст (лет)"
                            rules={[{required: true, message: 'Введите возраст!'}]}
                            name="age"
                        >
                            <Input type='number'/>
                        </Form.Item>
                        <Form.Item
                            label="ЧСС в покое (уд/мин)"
                            rules={[{required: true, message: 'Введите ЧСС в покое!'}]}
                            name="heartRate"
                        >
                            <Input type='number'/>
                        </Form.Item>
                        <Form.Item
                            className='covid'
                            label="Перенесенная covid-инфекция"
                            name="covid"
                        >
                            <Checkbox onChange={onCovidChange}/>
                        </Form.Item>
                        <Form.Item
                            label="Степень covid-ассоциированного поражения легки, (%)"
                            name="lungInjury"
                            rules={[{required: !isLungInjuryDisabled, message: 'Укажите степень поражения!'}]}
                        >
                            <Input disabled={isLungInjuryDisabled} type='number'/>
                        </Form.Item>
                        <Form.Item label="Уровень физической активности до болезни" name="activityLevel">
                            <Radio.Group disabled={isLungInjuryDisabled} value='vertical'>
                                <Radio value="high">Высокий</Radio>
                                <div className='description'>
                                    10000 шагов в день или 4 и более занятия физической активностью в неделю
                                </div>
                                <Radio value='middle'>Средний</Radio>
                                <div className='description'>
                                    От 5000-1000 шагов в день или 2-3 занятия физической активностью в неделю
                                </div>
                                <Radio value='low'>Низкий</Radio>
                                <div className='description'>
                                    До 2500 шагов в день, без дополнительных занятий физической активностью
                                </div>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit"> Продолжить</Button>
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