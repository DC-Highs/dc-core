import { calculateElementWeaknesses } from '../src/calculators/calculate-element-weaknesses'

describe('calculateElementWeaknesses', () => {
    it('returns an array of elements that are strong against flame', () => {
        const result = calculateElementWeaknesses("flame")
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBeGreaterThan(0)
    })
})
