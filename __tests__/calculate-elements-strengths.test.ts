import { calculateElementsStrengths } from '../src/calculators/calculate-elements-strengths'

describe('calculateElementsStrengths', () => {
    it('returns an array of unique strengths for multiple elements', () => {
        const result = calculateElementsStrengths(["flame", "terra"])
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBeGreaterThan(0)
        // Check for uniqueness
        const uniqueItems = new Set(result)
        expect(uniqueItems.size).toBe(result.length)
    })
})
