import { dragonSettings } from "../settings/dragons"

export type ValidateDragonLevelOptions = {
    throwOnError: boolean
}

export function validateDragonLevel(
    level: number, 
    { throwOnError = false }: ValidateDragonLevelOptions = { throwOnError: false }
): boolean {
    if (!Number.isInteger(level)) {
        if (throwOnError) {
            throw new Error("The dragon level must be an integer!")
        }

        return false
    }

    if (level < dragonSettings.levels.minimum) {
        if (throwOnError) {
            throw new Error(`The dragon cannot have a level lower than ${dragonSettings.levels.minimum}!`)
        }

        return false
    }

    if (level > dragonSettings.levels.maximum) {
        if (throwOnError) {
            throw new Error(`The dragon cannot have a level higher than ${dragonSettings.levels.maximum}!`)
        }

        return false
    }

    return true
}