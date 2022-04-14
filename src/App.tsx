import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import StartPage from "./components/start-page/StartPate";
import Steps from "./components/steps/Steps";
import HealthForm from "./components/health-form/HealthForm";

export enum ActivityLevel {
    HIGH = 'high',
    MIDDLE = 'middle',
    LOW = 'low'
}

export type QuestionnaireType = {
    activityLevel: ActivityLevel
    age: string
    covid: boolean
    heartRate: string
    height: string
    lungInjury: string
    weight: string
}

export type FormsData = {
    questionnaire: QuestionnaireType | null
}

function App() {

    const [data, setData] = useState<FormsData>({
        questionnaire: null
    })

    const onHealthFormSubmit = (data: QuestionnaireType) => {
        setData({
            ...data,
            questionnaire: data
        })
    }

    return (

        <Routes>
            <Route path={"/"} element={<StartPage/>}/>
            <Route path={"/steps"} element={<Steps/>}/>
            <Route path={"/form"} element={<HealthForm data={data.questionnaire} onSubmit={onHealthFormSubmit}/>}/>
        </Routes>
    );
}

export default App;
