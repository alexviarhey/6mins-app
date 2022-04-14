export enum FK {
    FIRST,
    SECOND,
    THIRD,
    FOURTH
}

const fkRecommendations = {
    [FK.FIRST]: "Увеличение количества пройденного расстояния каждые 7 дней на 20м в одном занятии, увеличение времени занятия на 10мин",
    [FK.SECOND]: "увеличение количества пройденного расстояния каждые 10 дней на 10м в одном занятии, увеличение времени одного занятия на 5 минут",
    [FK.THIRD]: "увеличение количества пройденного расстояния каждые 10 дней на 4м в одном занятии, увеличение времени одного занятия не более чем на 5 минут под контролем ЧСС во время движения",
    [FK.FOURTH]: "Вам надлежит обратиться к лечащему врачу"
}

export const calculateFK = (distance: string): FK => {
    const dist = parseFloat(distance)

    if (dist > 551) return FK.FIRST
    if ((dist >= 426) && (dist <= 550)) return FK.SECOND
    if ((dist >= 301) && (dist <= 425)) return FK.THIRD

    return FK.FOURTH
}

export const getFkRecommendation = (distance: string): string => {
    const fk = calculateFK(distance)
    return fkRecommendations[fk]
}
