import { dragonSettings } from "../settings/dragons"

export type ValidateDragonLevelOptions = {
    throwOnError?: boolean
}

export function validateDragonCategory(
    category: number,
    { throwOnError = false }: ValidateDragonLevelOptions = { throwOnError: false }
): boolean {
    const dragonCategories = Object.values(dragonSettings.categories)

    if (!dragonCategories.includes(category)) {
        if (throwOnError) {
            throw new Error(`Invalid dragon category: ${category}. Expected values: ${dragonCategories.join(", ")}`)
        }

        return false
    }

    return true
}