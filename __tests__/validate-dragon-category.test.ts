import { validateDragonCategory } from '../src/tools/validate-dragon-category'

describe('validateDragonCategory', () => {
    it('returns true for a valid category (e.g. 5)', () => {
        expect(validateDragonCategory(5)).toBe(true)
    })

    it('returns false for an invalid category without throwing (e.g. 999)', () => {
        expect(validateDragonCategory(999)).toBe(false)
    })

    it('throws for an invalid category when throwOnError is true (e.g. 999)', () => {
        expect(() => validateDragonCategory(999, { throwOnError: true })).toThrow(/Invalid dragon category/)
    })
})
