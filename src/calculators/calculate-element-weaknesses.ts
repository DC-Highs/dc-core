import { validateElementName } from "../tools/validate-element-name"
import { elementSettings } from "../settings/elements"

export function calculateElementWeaknesses(element: string) {
    validateElementName(element, { throwOnError: true })
    const elementKey = element as keyof typeof elementSettings
    const elementSetting = elementSettings[elementKey]
    const elementWeaknesses = elementSetting.weaknesses
    return elementWeaknesses
}