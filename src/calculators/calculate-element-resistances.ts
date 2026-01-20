import { validateElementName } from "../tools/validate-element-name"
import { elementSettings } from "../settings/elements"
import { DragonElement } from "../enums"

export function calculateElementResistances(element: string) {
    validateElementName(element, { throwOnError: true })
    const elementKey = element as keyof typeof elementSettings
    const elementSetting = elementSettings[elementKey]
    const elementWeaknesses = elementSetting.weaknesses
    return elementWeaknesses as DragonElement[]
}