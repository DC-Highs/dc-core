import * as calculators from '../src/calculators/index'

describe('calculators/index.ts', () => {
    it('exports all calculator functions', () => {
        expect(calculators.calculateAttackDamage).toBeDefined()
        expect(calculators.calculateDragonFeedCost).toBeDefined()
        expect(calculators.calculateElementResistances).toBeDefined()
        expect(calculators.calculateElementsStrengths).toBeDefined()
        expect(calculators.calculateElementWeaknesses).toBeDefined()
        expect(calculators.calculateElementStrengths).toBeDefined()
        expect(calculators.calculateOrbRecallGain).toBeDefined()
        expect(calculators.calculateBreedingResults).toBeDefined()
    })
})
