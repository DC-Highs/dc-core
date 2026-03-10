import { calculateAttackDamage } from '../src/calculators/calculate-attack-damage'

describe('calculateAttackDamage', () => {
    it('calculates damage correctly without rank and stars', () => {
        const result = calculateAttackDamage({
            attackPower: 1000,
            dragon: {
                category: 5,
                level: 30,
                rank: 0,
                stars: 0
            }
        })
        expect(result.average).toBeGreaterThan(0)
        expect(result.minimum).toBeLessThanOrEqual(result.maximum)
        expect(result.random).toBeGreaterThanOrEqual(result.minimum)
        expect(result.random).toBeLessThanOrEqual(result.maximum)
    })

    it('calculates damage correctly with rank and stars', () => {
        const result = calculateAttackDamage({
            attackPower: 1200,
            dragon: {
                category: 4,
                level: 40,
                rank: 5,
                stars: 2
            }
        })
        expect(result.average).toBeGreaterThan(1000)
    })
})
