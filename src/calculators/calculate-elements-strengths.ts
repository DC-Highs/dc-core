import { validateElementName } from "../tools/validate-element-name"
import { elementSettings } from "../settings/elements"

export function calculateElementsStrengths(elements: string[]) {
    elements.forEach(element => validateElementName(element, { throwOnError: true }))

    const allElementStrengths: string[] = []

    for (const element of elements) {
        const elementKey = element as keyof typeof elementSettings
        const elementSetting = elementSettings[elementKey]
        const elementStrengths = elementSetting.strengths
        allElementStrengths.push(...elementStrengths)
    }

    const uniqueElements = [...new Set(allElementStrengths)]
    
    return uniqueElements
}
