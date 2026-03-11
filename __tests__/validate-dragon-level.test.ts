import { validateDragonLevel } from '../src/tools/validate-dragon-level'

describe('validateDragonLevel', () => {
    it('returns true for a valid level (e.g. 30)', () => {
        expect(validateDragonLevel(30)).toBe(true)
    })

    it('returns false for a non-integer level without throwing', () => {
        expect(validateDragonLevel(30.5)).toBe(false)
    })

    it('throws for a non-integer level when throwOnError is true', () => {
        expect(() => validateDragonLevel(30.5, { throwOnError: true })).toThrow(/integer/)
    })

    it('returns false for a level too low without throwing (-5)', () => {
        expect(validateDragonLevel(-5)).toBe(false)
    })

    it('throws for a level too low when throwOnError is true (-5)', () => {
        expect(() => validateDragonLevel(-5, { throwOnError: true })).toThrow(/level lower than/)
    })

    it('returns false for a level too high without throwing (999)', () => {
        expect(validateDragonLevel(999)).toBe(false)
    })

    it('throws for a level too high when throwOnError is true (999)', () => {
        expect(() => validateDragonLevel(999, { throwOnError: true })).toThrow(/level higher than/)
    })
})
