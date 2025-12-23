import { validateDragonLevel } from "./validate-dragon-level"
import { validateDragonStars } from "./validate-dragon-stars"
import { dragonSettings } from "../settings/dragons"

export type validateDragonLevelCompatibilityWithStarsOptions = {
    level: number
    stars: number
    throwOnError?: boolean
}

export function validateDragonLevelCompatibilityWithStars({
    level,
    stars,
    throwOnError = false
}: validateDragonLevelCompatibilityWithStarsOptions) {
    validateDragonLevel(level, { throwOnError: throwOnError })
    validateDragonStars(stars, { throwOnError: throwOnError })

    if (stars === 0) {
        if (level > dragonSettings.levels.maximumWithoutEmpowerment) {
            if (throwOnError) {
                throw new Error(`Dragon level cannot be higher than ${dragonSettings.levels.maximumWithoutEmpowerment} when stars are 0.`)
            }
    
            return false
        }
        
        return true
    }

    if (stars > 0 && level < dragonSettings.levels.minimumToEmpower) {
        if (throwOnError) {
            throw new Error(`Dragon level must be higher than or equal to ${dragonSettings.levels.minimumToEmpower} when stars are not 0.`)
        }
        
        return false
    }

    if (stars > dragonSettings.empowerment.stages.length) {
        if (throwOnError) {
            throw new Error("Dragon stars cannot be higher than the maximum number of empowerment stages.")
        }
        
        return false
    }

    const stageIndex = stars - 1
    const dragonMaxLevel = dragonSettings.empowerment.stages[stageIndex].dragonMaximumLevel

    if (level > dragonMaxLevel) {
        if (throwOnError) {
            throw new Error(
                `Dragon level cannot be higher than ${dragonMaxLevel} when stars are ${stars}.`
            )
        }
        
        return false
    }

    return true
}