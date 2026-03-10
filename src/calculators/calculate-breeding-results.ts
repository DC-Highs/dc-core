export type CalculateBreedingResultsParentConfig = {
    id: number
    elements: string[]
    level: number
    empowerLevel?: number
}

export type CalculateBreedingResultsConfigOptions = {
    breeding: Array<{
        element_one: string
        element_two: string
        dragon_id_1: number
        empower_1: number
        dragon_id_2: number
        empower_2: number
        dragon_id_3: number
        empower_3: number
        dragon_id_4?: number
        empower_4?: number
        dragon_id_5?: number
        empower_5?: number
        dragon_id_6?: number
        empower_6?: number
        dragon_id_7?: number
        empower_7?: number
    }>
    incompatibilities?: Array<{
        element_one: string
        element_two: string
    }>
    soulmates?: Array<{
        parent_1_id: number
        parent_2_id: number
        dragon_id: number
        chance: number
        level_parents: number
    }>
    specialBreeding?: Array<{
        condition1: { id: number[] }
        condition2: { id: number[] }
        result: number
    }>
    sanctuaryUnlockedDragons?: number[]
}

export type CalculateBreedingResultsOptions = {
    parent1: CalculateBreedingResultsParentConfig
    parent2: CalculateBreedingResultsParentConfig
    config: CalculateBreedingResultsConfigOptions
}

export type BreedingSource = "soulmate" | "special" | "sanctuary" | "regular"

export type BreedingResultItem = {
    dragonId: number
    sources: BreedingSource[]
    requiredEmpower?: number
    chance?: number
}

export function calculateBreedingResults({
    parent1,
    parent2,
    config
}: CalculateBreedingResultsOptions): BreedingResultItem[] {
    const resultsMap = new Map<number, BreedingResultItem>()

    function addResult(dragonId: number, source: BreedingSource, empower?: number, chance?: number) {
        if (!dragonId) return

        const existing = resultsMap.get(dragonId)

        if (existing) {
            if (!existing.sources.includes(source)) {
                existing.sources.push(source)
            }
            if (empower !== undefined) {
                existing.requiredEmpower = existing.requiredEmpower !== undefined ? Math.min(existing.requiredEmpower, empower) : empower
            }
            if (chance !== undefined) {
                existing.chance = Math.max(existing.chance || 0, chance)
            }
        } else {
            resultsMap.set(dragonId, {
                dragonId,
                sources: [source],
                requiredEmpower: empower,
                chance
            })
        }
    }

    if (config.specialBreeding) {
        for (const special of config.specialBreeding) {
            const matchesP1Cond1 = special.condition1.id.includes(parent1.id)
            const matchesP2Cond2 = special.condition2.id.includes(parent2.id)
            
            const matchesP1Cond2 = special.condition2.id.includes(parent1.id)
            const matchesP2Cond1 = special.condition1.id.includes(parent2.id)

            if ((matchesP1Cond1 && matchesP2Cond2) || (matchesP1Cond2 && matchesP2Cond1)) {
                addResult(special.result, "special")
            }
        }
    }

    if (config.soulmates) {
        for (const soulmate of config.soulmates) {
            const matches = (soulmate.parent_1_id === parent1.id && soulmate.parent_2_id === parent2.id) ||
                            (soulmate.parent_1_id === parent2.id && soulmate.parent_2_id === parent1.id)
            const levelsMatch = parent1.level >= soulmate.level_parents && parent2.level >= soulmate.level_parents

            if (matches && levelsMatch) {
                addResult(soulmate.dragon_id, "soulmate", undefined, soulmate.chance)
            }
        }
    }

    const incompatibilities = config.incompatibilities || []

    const isIncompatible = (e1: string, e2: string) => {
        return incompatibilities.some(inc => 
            (inc.element_one === e1 && inc.element_two === e2) ||
            (inc.element_one === e2 && inc.element_two === e1)
        )
    }

    for (const e1 of parent1.elements) {
        for (const e2 of parent2.elements) {
            if (isIncompatible(e1, e2)) {
                continue
            }

            const breedingRule = config.breeding.find(b => 
                (b.element_one === e1 && b.element_two === e2) ||
                (b.element_one === e2 && b.element_two === e1)
            )

            if (breedingRule) {
                const pairs = [
                    { id: breedingRule.dragon_id_1, emp: breedingRule.empower_1 },
                    { id: breedingRule.dragon_id_2, emp: breedingRule.empower_2 },
                    { id: breedingRule.dragon_id_3, emp: breedingRule.empower_3 },
                    { id: breedingRule.dragon_id_4, emp: breedingRule.empower_4 },
                    { id: breedingRule.dragon_id_5, emp: breedingRule.empower_5 },
                    { id: breedingRule.dragon_id_6, emp: breedingRule.empower_6 },
                    { id: breedingRule.dragon_id_7, emp: breedingRule.empower_7 },
                ]

                for (const pair of pairs) {
                    if (pair.id) {
                        const isSanctuary = config.sanctuaryUnlockedDragons?.includes(pair.id)
                        addResult(pair.id, isSanctuary ? "sanctuary" : "regular", pair.emp || 0)
                    }
                }
            }
        }
    }

    return Array.from(resultsMap.values())
}
