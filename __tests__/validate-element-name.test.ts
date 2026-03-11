import { validateElementName } from '../src/tools/validate-element-name'

describe('validateElementName', () => {
    it('returns true for a valid element (e.g. "terra")', () => {
        expect(validateElementName("terra")).toBe(true)
    })

    it('returns false for an invalid element without throwing', () => {
        expect(validateElementName("invalid_element")).toBe(false)
    })

    it('throws for an invalid element when throwOnError is true', () => {
        expect(() => validateElementName("invalid_element", { throwOnError: true })).toThrow(/Invalid element name/)
    })
})
