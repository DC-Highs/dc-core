import { calculateOrbRecallGain } from '../src/calculators/calculate-orb-recall-gain'

describe('calculateOrbRecallGain', () => {
    it('throws for level 0', () => {
        expect(() => calculateOrbRecallGain({ level: 0 })).toThrow()
    })

    it('returns recall gain for level 20', () => {
        const result = calculateOrbRecallGain({ level: 20 })
        expect(result).toBeGreaterThan(0)
    })

    it('returns recall gain for level 30 with stars', () => {
        const result = calculateOrbRecallGain({ level: 30, stars: 3 })
        expect(result).toBeGreaterThan(0)
    })
})
