import {FormsData} from "../App";
import {calculateFK, FK, getFkRecommendation} from "./functional-class";
import {getIMTRecommendations} from "./imt";
import {getActivityRecommendation} from "./activity";
import {getZones, ZONES, ZonesValues} from "./zones";

export const calculateAllRecommendations = ({questionnaire, distance}: FormsData): {
    recommendations: string[],
    zones: ZonesValues | null
} => {

    const res: {
        recommendations: string[],
        zones: ZonesValues | null

    } = {recommendations: [], zones: null}

    if (distance && questionnaire) {

        //Get FK rec
        const fk = calculateFK(distance)
        const fkRec = getFkRecommendation(distance)

        res.recommendations.push(fkRec)

        //IF FK -> 4 return ONLY FK 4 recommendation
        if (fk === FK.FOURTH) {
            return res
        }

        //Get IMT rec
        res.recommendations.push(
            getIMTRecommendations(questionnaire.height, questionnaire.weight)
        )

        //If covid -> Get activity rec
        if (questionnaire.covid) {
            console.log('Hi')
            res.recommendations.push(
                getActivityRecommendation(questionnaire.activityLevel, questionnaire.lungInjury)
            )
        }

        const zones = getZones(questionnaire.age, questionnaire.heartRate)

        if (fk === FK.THIRD) {
            delete zones[ZONES.RESTORATIVE]
            delete zones[ZONES.PREPARATORY]
        }

        if (fk === FK.SECOND) {
            delete zones[ZONES.PREPARATORY]
        }

        res.zones = zones

        return res
    }

    return res
}