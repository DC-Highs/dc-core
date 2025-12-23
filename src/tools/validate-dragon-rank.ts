import { dragonSettings } from "../settings/dragons"

export type ValidateDragonRankOptions = {
    throwOnError?: boolean
}

export function validateDragonRank(
    rank: number,
    { throwOnError = false }: ValidateDragonRankOptions = { throwOnError: false }
): boolean {
    const dragonRanks = Object.values(dragonSettings.ranks).map(dragonRank => dragonRank.index)
    
    if (rank !== 0 && !dragonRanks.includes(rank)) {
        if (throwOnError) {
            throw new Error(`Invalid dragon rank. Available ranks: ${dragonRanks.join(", ")}`)
        }
    
        return false
    }

    return true
}