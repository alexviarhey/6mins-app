import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import StartPage from "./components/start-page/StartPate";
import Steps from "./components/steps/Steps";
import HealthForm from "./components/health-form/HealthForm";
import SixMinWalking from './components/6mins-walking/SixMinWalking';
import Summary from './components/summary/Summary';

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

export enum PassedSteps {
    START,
    STEPS,
    FORM,
    WALKING,
    CALCULATING,
    SUMMARY
}

function App() {
    const [passedStep, setPassedStep] = useState<PassedSteps | null>(null)

    const getRedirectValue = (): string | null => {

        let path = null;

        switch (passedStep) {
            case null:
                return "/"
            case PassedSteps.START:
                path = "/steps"
                break
            case PassedSteps.STEPS:
                path = "/form"
                break
            case PassedSteps.FORM:
                path = "/walking"
                break
            case PassedSteps.WALKING:
                path = "/calculating"
                break
            case PassedSteps.SUMMARY:
                path = null
                break
        }

        return path
    }

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
            <Route path={"/"} element={<StartPage setPassedStep={setPassedStep}/>}/>
            <Route path={"/steps"} element={<Steps setPassedStep={setPassedStep} redirectTo={passedStep === null ? "/" : null}/>}/>
            <Route path={"/form"}
                   element={<HealthForm setPassedStep={setPassedStep} redirectTo={(passedStep && passedStep >= PassedSteps.FORM) ? null : getRedirectValue()} data={data.questionnaire} onSubmit={onHealthFormSubmit}/>}/>
            <Route path="/walking" element={<SixMinWalking setPassedStep={setPassedStep} redirectTo={(passedStep && passedStep >= PassedSteps.WALKING) ? null : getRedirectValue()} distance={data.distance} onSubmit={onSixMinutesSubmit}/>}/>
            <Route path="/summary" element={<Summary setPassedStep={setPassedStep} redirectTo={(passedStep && passedStep >= PassedSteps.SUMMARY) ? null : getRedirectValue()} data={data}/>}/>
            <Route path='*' element={<StartPage setPassedStep={setPassedStep}/>}/>
        </Routes>
    );
}

export default App;
