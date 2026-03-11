import { validateDragonRarity } from '../src/tools/validate-dragon-rarity'

describe('validateDragonRarity', () => {
    it('returns true for valid rarity (e.g. "H")', () => {
        expect(validateDragonRarity("h", { useLowerCase: true })).toBe(true)
        expect(validateDragonRarity("H")).toBe(true)
    })

    it('returns false for invalid rarity without throwing', () => {
        expect(validateDragonRarity("INVALID")).toBe(false)
    })

    it('throws for invalid rarity when throwOnError is true', () => {
        expect(() => validateDragonRarity("INVALID", { throwOnError: true })).toThrow(/Invalid dragon rarity/)
    })
})
