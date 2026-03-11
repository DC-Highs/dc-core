import { validateDragonRank } from '../src/tools/validate-dragon-rank'

describe('validateDragonRank', () => {
    it('returns true for rank 0', () => {
        expect(validateDragonRank(0)).toBe(true)
    })

    it('returns true for a valid rank (e.g. 1)', () => {
        expect(validateDragonRank(1)).toBe(true)
    })

    it('returns false for an invalid rank without throwing (e.g. 99)', () => {
        expect(validateDragonRank(99)).toBe(false)
    })

    it('throws for an invalid rank when throwOnError is true (e.g. 99)', () => {
        expect(() => validateDragonRank(99, { throwOnError: true })).toThrow(/Invalid dragon rank/)
    })
})
