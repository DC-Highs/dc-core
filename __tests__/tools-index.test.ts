import * as tools from '../src/tools/index'

describe('tools/index.ts', () => {
    it('exports all tools', () => {
        expect(tools.validateDragonLevelCompatibilityWithStars).toBeDefined()
        expect(tools.validateDragonCategory).toBeDefined()
        expect(tools.getMusicKeyNameFromTag).toBeDefined()
        expect(tools.validateDragonRarity).toBeDefined()
        expect(tools.validateDragonStars).toBeDefined()
        expect(tools.validateElementName).toBeDefined()
        expect(tools.validateDragonLevel).toBeDefined()
        expect(tools.validateDragonRank).toBeDefined()
        expect(tools.DragonStaticFileUrlParser).toBeDefined()
    })
})
