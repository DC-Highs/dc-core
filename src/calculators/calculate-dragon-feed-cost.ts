import { validateDragonLevel } from "../tools/validate-dragon-level"
import { feedCostSettings } from "../settings/feed-costs"

export type CalculateDragonFeedCostOptions = {
    initialLevel: number
    finalLevel: number
}

export function calculateDragonFeedCost({ initialLevel, finalLevel }: CalculateDragonFeedCostOptions) {
    [initialLevel, finalLevel].forEach(level => validateDragonLevel(level, { throwOnError: true }))

    if (initialLevel > finalLevel) {
        throw new Error("Initial dragon level cannot be higher than final dragon level.")
    }

    if (initialLevel === finalLevel) {
        return 0
    }

    let cost = 0

    for (let i = 0; i < finalLevel; i++) {
        const costPerLevel = feedCostSettings[i].total
        cost += costPerLevel
    }

    return cost
}
