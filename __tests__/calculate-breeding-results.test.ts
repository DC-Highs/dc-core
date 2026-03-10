import { calculateBreedingResults, CalculateBreedingResultsConfigOptions } from '../src/calculators/calculate-breeding-results'

describe('calculateBreedingResults', () => {
    const mockConfig: CalculateBreedingResultsConfigOptions = {
        incompatibilities: [
            { element_one: "terra", element_two: "metal" }
        ],
        breeding: [
            {
                element_one: "terra", element_two: "flame",
                dragon_id_1: 101, empower_1: 0,
                dragon_id_2: 102, empower_2: 1,
                dragon_id_3: 0, empower_3: 0
            },
            {
                element_one: "water", element_two: "metal",
                dragon_id_1: 201, empower_1: 0,
                dragon_id_2: 0, empower_2: 0,
                dragon_id_3: 0, empower_3: 0
            }
        ],
        soulmates: [
            { parent_1_id: 1, parent_2_id: 2, dragon_id: 999, chance: 10, level_parents: 15 }
        ],
        specialBreeding: [
            {
                condition1: { id: [1, 5] },
                condition2: { id: [2, 6] },
                result: 888
            }
        ],
        sanctuaryUnlockedDragons: [102]
    }

    it('should calculate special breeding results', () => {
        const results = calculateBreedingResults({
            parent1: { id: 1, elements: ["terra"], level: 10 },
            parent2: { id: 2, elements: ["flame"], level: 10 },
            config: mockConfig
        })

        const specialResult = results.find(r => r.dragonId === 888)
        expect(specialResult).toBeDefined()
        expect(specialResult?.sources).toContain('special')
    })

    it('should calculate soulmate breeding results if levels match', () => {
        const results = calculateBreedingResults({
            parent1: { id: 1, elements: ["terra"], level: 20 },
            parent2: { id: 2, elements: ["flame"], level: 20 },
            config: mockConfig
        })

        const soulmateResult = results.find(r => r.dragonId === 999)
        expect(soulmateResult).toBeDefined()
        expect(soulmateResult?.sources).toContain('soulmate')
        expect(soulmateResult?.chance).toBe(10)
    })

    it('should not include soulmate breeding if levels are too low', () => {
        const results = calculateBreedingResults({
            parent1: { id: 1, elements: ["terra"], level: 10 },
            parent2: { id: 2, elements: ["flame"], level: 10 },
            config: mockConfig
        })

        const soulmateResult = results.find(r => r.dragonId === 999)
        expect(soulmateResult).toBeUndefined()
    })

    it('should not breed incompatible elements', () => {
        const results = calculateBreedingResults({
            parent1: { id: 3, elements: ["terra"], level: 10 },
            parent2: { id: 4, elements: ["metal"], level: 10 },
            config: mockConfig
        })

        expect(results.length).toBe(0)
    })

    it('should return regular breeding results', () => {
        const results = calculateBreedingResults({
            parent1: { id: 3, elements: ["terra"], level: 10 },
            parent2: { id: 4, elements: ["flame"], level: 10 },
            config: mockConfig
        })

        const regularResult1 = results.find(r => r.dragonId === 101)
        expect(regularResult1).toBeDefined()
        expect(regularResult1?.sources).toContain('regular')
        expect(regularResult1?.requiredEmpower).toBe(0)

        const regularResult2 = results.find(r => r.dragonId === 102)
        expect(regularResult2).toBeDefined()
        expect(regularResult2?.sources).toContain('sanctuary')
        expect(regularResult2?.requiredEmpower).toBe(1)
    })

    it('should merge results when the same dragon is produced by multiple sources', () => {
        const mergedConfig = {
            ...mockConfig,
            soulmates: [
                { parent_1_id: 1, parent_2_id: 2, dragon_id: 101, chance: 50, level_parents: 15 } // Match regular dragon id 101
            ]
        }
        
        const results = calculateBreedingResults({
            parent1: { id: 1, elements: ["terra"], level: 20 },
            parent2: { id: 2, elements: ["flame"], level: 20 },
            config: mergedConfig
        })

        const mergedResult = results.find(r => r.dragonId === 101)
        expect(mergedResult).toBeDefined()
        expect(mergedResult?.sources).toContain('regular')
        expect(mergedResult?.sources).toContain('soulmate')
        expect(mergedResult?.chance).toBe(50)
        expect(mergedResult?.requiredEmpower).toBe(0)
    })
})
