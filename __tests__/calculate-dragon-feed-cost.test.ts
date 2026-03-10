import { calculateDragonFeedCost } from '../src/calculators/calculate-dragon-feed-cost'

describe('calculateDragonFeedCost', () => {
    it('returns 0 if initialLevel equals finalLevel', () => {
        expect(calculateDragonFeedCost({ initialLevel: 10, finalLevel: 10 })).toBe(0)
    })

    it('throws error if initialLevel > finalLevel', () => {
        expect(() => calculateDragonFeedCost({ initialLevel: 15, finalLevel: 10 }))
            .toThrow("Initial dragon level cannot be higher than final dragon level.")
    })

    it('calculates the cost correctly for level 1 to 5', () => {
        const cost = calculateDragonFeedCost({ initialLevel: 1, finalLevel: 5 })
        expect(cost).toBeGreaterThan(0)
    })
})
