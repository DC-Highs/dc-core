import { dragonSettings } from "../settings/dragons"

export type ValidateDragonStarsOptions = {
    throwOnError?: boolean
}

export function validateDragonStars(
    stars: number,
    { throwOnError = false }: ValidateDragonStarsOptions = { throwOnError: false }
): boolean {
    if (!Number.isInteger(stars)) {
        if (throwOnError) {
            throw new Error("The dragon stars must be an integer!")
        }

        return false
    }

    if (stars < dragonSettings.empowerment.starts.minimum) {
        if (throwOnError) {
            throw new Error(`Dragon stars must be at least ${dragonSettings.empowerment.starts.minimum}!`)
        }

        return false
    }

    if (stars > dragonSettings.empowerment.starts.maximum) {
        if (throwOnError) {
            throw new Error(`Dragon stars cannot exceed ${dragonSettings.empowerment.starts.maximum}!`)
        }

        return false
    }

    return true
}