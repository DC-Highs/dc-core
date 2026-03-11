import { DragonStaticFileUrlParser } from '../src/tools/dragon-static-file-url-parser'

describe('DragonStaticFileUrlParser', () => {
    const validUrl = "https://basic-static.some.url/1230_dragon_name_skin1_1@2x.png"
    const noPrefixUrl = "https://invalid.url/no_prefix/1230_name_1@2x.png"

    it('gets platform prefix correctly', () => {
        expect(DragonStaticFileUrlParser.getPlatformPrefix(validUrl)).toBe("basic")
        expect(DragonStaticFileUrlParser.getPlatformPrefix(noPrefixUrl)).toBeNull()
    })

    it('gets image name correctly', () => {
        expect(DragonStaticFileUrlParser.getImageName(validUrl)).toBe("1230_dragon_name")
        expect(DragonStaticFileUrlParser.getImageName("invalid")).toBeNull()
    })

    it('gets id correctly', () => {
        expect(DragonStaticFileUrlParser.getId(validUrl)).toBe(1230)
        expect(DragonStaticFileUrlParser.getId("invalid")).toBeNull()
    })

    it('gets phase correctly', () => {
        expect(DragonStaticFileUrlParser.getPhase(validUrl)).toBe(1)
        expect(DragonStaticFileUrlParser.getPhase("invalid")).toBeNull()
        expect(DragonStaticFileUrlParser.getPhase("https://basic-static/1230_HD_tweened_dxt5.zip")).toBe(1230) // from the regex logic
    })

    it('gets skin correctly', () => {
        expect(DragonStaticFileUrlParser.getSkin(validUrl)).toBe("_skin1")
        expect(DragonStaticFileUrlParser.getSkin("no_skin_here")).toBeNull()
    })

    it('gets image quality correctly', () => {
        expect(DragonStaticFileUrlParser.getImageQuality(validUrl)).toBe("@2x")
        expect(DragonStaticFileUrlParser.getImageQuality("no_quality")).toBe("") // Default
    })

    it('parses from sprite correctly', () => {
        const parsed = DragonStaticFileUrlParser.parseFromSprite(validUrl)
        expect(parsed.id).toBe(1230)
        expect(parsed.imageName).toBe("1230_dragon_name")
        expect(parsed.skin).toBe("_skin1")
    })

    it('parses from thumbnail correctly', () => {
        const parsed = DragonStaticFileUrlParser.parseFromThumbnail(validUrl)
        expect(parsed.id).toBe(1230)
    })

    it('parses from flash animation correctly', () => {
        const parsed = DragonStaticFileUrlParser.parseFromFlashAnimation(validUrl)
        expect(parsed.id).toBe(1230)
    })

    it('parses from spine animation correctly', () => {
        const parsed = DragonStaticFileUrlParser.parseFromSpineAnimation(validUrl)
        expect(parsed.id).toBe(1230)
    })
})
