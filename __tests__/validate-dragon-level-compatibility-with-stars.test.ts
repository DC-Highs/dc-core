import { validateDragonLevelCompatibilityWithStars } from '../src/tools/validate-dragon-level-compatibility-with-stars'

describe('validateDragonLevelCompatibilityWithStars', () => {
    it('returns true for 0 stars and level 30', () => {
        expect(validateDragonLevelCompatibilityWithStars({ level: 30, stars: 0 })).toBe(true)
    })

    it('returns false if 0 stars and level > 40 without throwing', () => {
        expect(validateDragonLevelCompatibilityWithStars({ level: 45, stars: 0 })).toBe(false)
    })

    it('throws if 0 stars and level > 40 when throwOnError is true', () => {
        expect(() => validateDragonLevelCompatibilityWithStars({ level: 45, stars: 0, throwOnError: true })).toThrow(/level cannot be higher than/)
    })

    it('returns false if stars > 0 but level < minimumToEmpower (7) without throwing', () => {
        expect(validateDragonLevelCompatibilityWithStars({ level: 5, stars: 1 })).toBe(false)
    })

    it('throws if stars > 0 but level < minimumToEmpower (7) when throwOnError is true', () => {
        expect(() => validateDragonLevelCompatibilityWithStars({ level: 5, stars: 1, throwOnError: true })).toThrow(/must be higher than or equal to/)
    })

    it('returns false if stars > max stages without throwing', () => {
        expect(validateDragonLevelCompatibilityWithStars({ level: 70, stars: 99 })).toBe(false)
    })

    it('throws if stars > max stages when throwOnError is true', () => {
        expect(() => validateDragonLevelCompatibilityWithStars({ level: 70, stars: 99, throwOnError: true })).toThrow(/cannot exceed/)
    })

    it('returns false if level is too high for the given stars without throwing', () => {
        expect(validateDragonLevelCompatibilityWithStars({ level: 50, stars: 1 })).toBe(false)
    })

    it('throws if level is too high for the given stars when throwOnError is true', () => {
        expect(() => validateDragonLevelCompatibilityWithStars({ level: 50, stars: 1, throwOnError: true })).toThrow(/cannot be higher than/)
    })

    it('returns true for a valid combination of level and stars', () => {
        expect(validateDragonLevelCompatibilityWithStars({ level: 45, stars: 1 })).toBe(true)
    })
})
