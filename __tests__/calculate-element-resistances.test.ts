import { calculateElementResistances } from '../src/calculators/calculate-element-resistances'

describe('calculateElementResistances', () => {
    it('returns an array of resistances/weaknesses for flame', () => {
        const result = calculateElementResistances("flame")
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBeGreaterThan(0)
    })
})
