import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import StartPage from "./components/start-page/StartPate";
import Steps from "./components/steps/Steps";
import HealthForm from "./components/health-form/HealthForm";
import SixMinWalking from "./components/6mins-walking/SixMinWalking";
import Summary from "./components/summary/Summary";

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
    distance: string | null
}

enum PassesSteps {
    START,
    STEPS,
    FORM,
    WALKING
}

function App() {

    const [passedStep, setPassedStep] = useState<PassesSteps | null>(null)

    const [data, setData] = useState<FormsData>({
        questionnaire: null,
        distance: null
    })

    const onHealthFormSubmit = (payload: QuestionnaireType) => {
        setData({
            ...data,
            questionnaire: payload
        })
    }

    const onSixMinutesSubmit = (distance: string) => {
        setData({
            ...data,
            distance
        })
    }

    return (

        <Routes>
            <Route path="/" element={<StartPage/>}/>
            <Route path="/steps" element={<Steps/>}/>
            <Route path="/form" element={<HealthForm data={data.questionnaire} onSubmit={onHealthFormSubmit}/>}/>
            <Route path="/walking" element={<SixMinWalking distance={data.distance} onSubmit={onSixMinutesSubmit}/>}/>
            <Route path="/summary" element={<Summary/>}/>
        </Routes>
    );
}

export default App;
