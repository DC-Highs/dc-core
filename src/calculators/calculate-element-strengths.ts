import { validateElementName } from "../tools/validate-element-name"
import { elementSettings } from "../settings/elements"

export function calculateElementStrengths(element: string) {
    validateElementName(element, { throwOnError: true })
    const elementKey = element as keyof typeof elementSettings
    const elementSetting = elementSettings[elementKey]
    const elementStrengths = elementSetting.strengths
    return elementStrengths
}
