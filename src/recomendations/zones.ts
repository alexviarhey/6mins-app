export enum ZONES {
    REHABILITATION,
    RESTORATIVE,
    PREPARATORY
}

export  type ZonesValues = {
    [key: string]: string
}


export const getZones = (age: string, pulse: string): ZonesValues => {
    const p = parseInt(pulse);
    const a = parseInt(age);
    const ch = Math.round(208 - (0.7 * a))

    return {
        [ZONES.REHABILITATION]: `${Math.round((ch - p) / 10 + p)} - ${Math.round((ch - p) * 3 / 10 + p)}`,
        [ZONES.RESTORATIVE]: `${Math.round((ch - p) * 4 / 10 + p)} - ${Math.round((ch - p) * 5 / 10 + p)}`,
        [ZONES.PREPARATORY]: `${Math.round((ch - p) * 5 / 10 + p)} - ${Math.round((ch - p) * 6 / 10 + p)}`,
    }
}

