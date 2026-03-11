import { validateDragonStars } from '../src/tools/validate-dragon-stars'

describe('validateDragonStars', () => {
    it('returns true for valid stars (e.g. 1)', () => {
        expect(validateDragonStars(1)).toBe(true)
    })

    it('returns false for non-integer stars without throwing', () => {
        expect(validateDragonStars(1.5)).toBe(false)
    })

    it('throws for non-integer stars when throwOnError is true', () => {
        expect(() => validateDragonStars(1.5, { throwOnError: true })).toThrow(/integer/)
    })

    it('returns false for stars too low without throwing (-1)', () => {
        expect(validateDragonStars(-1)).toBe(false)
    })

    it('throws for stars too low when throwOnError is true (-1)', () => {
        expect(() => validateDragonStars(-1, { throwOnError: true })).toThrow(/at least/)
    })

    it('returns false for stars too high without throwing (99)', () => {
        expect(validateDragonStars(99)).toBe(false)
    })

    it('throws for stars too high when throwOnError is true (99)', () => {
        expect(() => validateDragonStars(99, { throwOnError: true })).toThrow(/cannot exceed/)
    })
})
