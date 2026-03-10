import { calculateElementStrengths } from '../src/calculators/calculate-element-strengths'

describe('calculateElementStrengths', () => {
    it('returns an array of strengths for flame', () => {
        const result = calculateElementStrengths("flame")
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBeGreaterThan(0)
    })
})
