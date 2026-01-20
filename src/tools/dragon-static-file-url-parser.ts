import { DragonPhase, DragonSpriteQuality, StaticFileUrlPlatformPrefix } from "../enums"

export class DragonStaticFileUrlParser {
    static getPlatformPrefix(url: string): StaticFileUrlPlatformPrefix | null {
        const match = url.match(/https?:\/\/([a-z]+)-static/i)

        if (!match) {
            return null
        }

        const prefix = match[1]

        return prefix as StaticFileUrlPlatformPrefix
    }

    static getImageName(url: string): string | null {
        const match = url.match(/\/(basic_|thumb_|ui_)?(\d+)_([\w_]+)/)

        if (match) {
            const id = match[2]
            const imageNameWithoutId = match[3]
            const rawImageName = `${id}_${imageNameWithoutId}`

            let imageNameWithSkin = rawImageName.replace(/_\d+/, "")
            let imageNameWithoutSkin = imageNameWithSkin.replace(/_skin\d+/, "")

            return imageNameWithoutSkin
        }

        return null
    }

    static getId(url: string): number | null {
        const match = url.match(/\/(basic_|thumb_|ui_)?(\d+)_/)

        if (match) {
            return Number(match[2])
        }

        return null
    }

    static getPhase(url: string): DragonPhase | null {
        const match = url.match(
            /(\d+)@2x\.(png|swf)|(\d+)\.(png|swf)|(\d+)_HD_tweened_dxt5\.zip|(\d+)_HD_spine-3-8-59_dxt5\.zip/
        )

        if (match) {
            const phase =
                match[1] ||
                match[3] ||
                match[5] ||
                match[6]

            return phase ? Number(phase) : null
        }

        return null
    }

    static getSkin(url: string): string | null {
        const match = url.match(/_skin\d+/)

        if (match) {
            return match[0]
        }

        return null
    }

    static getImageQuality(url: string): DragonSpriteQuality {
        const match = url.match(/@\d+x/)

        if (match) {
            return match[0] as DragonSpriteQuality
        }

        return DragonSpriteQuality.Default
    }

    static parseFromSprite(url: string) {
        return {
            platformPrefix: this.getPlatformPrefix(url),
            id: this.getId(url),
            imageName: this.getImageName(url),
            phase: this.getPhase(url),
            skin: this.getSkin(url),
            imageQuality: this.getImageQuality(url),
        }
    }

    static parseFromThumbnail(url: string) {
        return {
            platformPrefix: this.getPlatformPrefix(url),
            id: this.getId(url),
            image_name: this.getImageName(url),
            phase: this.getPhase(url),
            skin: this.getSkin(url),
        }
    }

    static parseFromFlashAnimation(url: string) {
        return {
            platformPrefix: this.getPlatformPrefix(url),
            id: this.getId(url),
            imageName: this.getImageName(url),
            phase: this.getPhase(url),
            skin: this.getSkin(url),
        }
    }

    static parseFromSpineAnimation(url: string) {
        return {
            platformPrefix: this.getPlatformPrefix(url),
            id: this.getId(url),
            imageName: this.getImageName(url),
            phase: this.getPhase(url),
            skin: this.getSkin(url),
        }
    }
}
