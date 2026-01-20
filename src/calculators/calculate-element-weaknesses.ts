import { validateElementName } from "../tools/validate-element-name"
import { elementSettings } from "../settings/elements"
import { DragonElement } from "../enums"

export function calculateElementWeaknesses(element: string) {
    validateElementName(element, { throwOnError: true })

    const weaknesses: DragonElement[] = []

    for (const element in elementSettings) {
        if ((elementSettings[element as DragonElement].strengths as DragonElement[]).includes(element as DragonElement)) {
            weaknesses.push(element as DragonElement)
        }
    }

    return weaknesses
}