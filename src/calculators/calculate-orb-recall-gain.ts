import { validateDragonLevelCompatibilityWithStars } from "../tools/validate-dragon-level-compatibility-with-stars"
import { orbRecallReturnSettings } from "../settings/orb-recall-return"

export type CalculateOrbRecallGainOptions = {
    level: number
    stars?: number
}

export function calculateOrbRecallGain({ level, stars }: CalculateOrbRecallGainOptions) {
    const adjustedStars = stars ?? 0
    const adjustedLevel = Math.min(level, 30)

    validateDragonLevelCompatibilityWithStars({
        level: level,
        stars: adjustedStars,
        throwOnError: true
    })

    let totalOrbs = 0

    for (let levelIndex = 0; levelIndex < adjustedLevel; levelIndex++) {
        const orbsPerLevel = orbRecallReturnSettings.perLevels[levelIndex]
        totalOrbs += orbsPerLevel
    }

    for (let starIndex = 0; starIndex < adjustedStars; starIndex++) {
        const orbsPerStar = orbRecallReturnSettings.perStars[starIndex]
        totalOrbs += orbsPerStar
    }

    return totalOrbs
}