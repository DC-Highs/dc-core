import { calculateElementsStrengths } from "./calculate-elements-strengths"
import { calculateElementWeaknesses } from "./calculate-element-weaknesses"
import { calculateElementStrengths } from "./calculate-element-strengths"
import { calculateDragonFeedCost } from "./calculate-dragon-feed-cost"
import { calculateOrbRecallGain } from "./calculate-orb-recall-gain"
import { calculateAttackDamage } from "./calculate-attack-damage"
import { calculateBreedingResults } from "./calculate-breeding-results"

export * from "./calculate-breeding-results"

import { calculateElementResistances } from "./calculate-element-resistances"

export {
    calculateElementResistances,
    calculateOrbRecallGain,
    calculateAttackDamage,
    calculateDragonFeedCost,
    calculateElementsStrengths,
    calculateElementWeaknesses,
    calculateElementStrengths,
    calculateBreedingResults
}