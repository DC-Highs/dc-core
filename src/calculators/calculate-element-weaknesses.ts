import { validateElementName } from "../tools/validate-element-name"
import { elementSettings } from "../settings/elements"
import { DragonElement } from "../enums"

export function calculateElementWeaknesses(element: string) {
    validateElementName(element, { throwOnError: true })

    const weaknesses: DragonElement[] = []

    for (const key in elementSettings) {
        if ((elementSettings[key as DragonElement].strengths as DragonElement[]).includes(element as DragonElement)) {
            weaknesses.push(key as DragonElement)
        }
    }

    return weaknesses
}