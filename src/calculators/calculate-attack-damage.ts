import { validateDragonLevelCompatibilityWithStars } from "../tools/validate-dragon-level-compatibility-with-stars"
import { validateDragonCategory } from "../tools/validate-dragon-category"
import { validateDragonRank } from "../tools/validate-dragon-rank"
import { dragonSettings } from "../settings/dragons"

const damageVariant = dragonSettings.attacks.damageVariant

export type CalculateAttackDamageDragonOption = {
    category: number
    level: number
    rank: number
    stars: number
}

export type CalculateAttackDamageOptions = {
    attackPower: number
    dragon: CalculateAttackDamageDragonOption
}

export type CalculateAttackDamageResult = {
    minimum: number
    maximum: number
    average: number
    random: number 
}

export function calculateAttackDamage({
    attackPower,
    dragon
}: CalculateAttackDamageOptions): CalculateAttackDamageResult {
    validateDragonLevelCompatibilityWithStars({ level: dragon.level, stars: dragon.stars, throwOnError: true })
    validateDragonCategory(dragon.category, { throwOnError: true })
    validateDragonRank(dragon.rank, { throwOnError: true })

    const categoryKey = dragon.category as keyof typeof dragonSettings.attacks.categoryPowers
    const initialDamage = dragonSettings.attacks.categoryPowers[categoryKey]
    const levelBonus = dragon.level ** 1.5 + 10
    let rankBonus = 0
    let starsBonus = 0

    if (dragon.rank > 0) {
        const rankKey = dragon.rank as keyof typeof dragonSettings.attacks.rankPowers
        rankBonus = dragonSettings.attacks.rankPowers[rankKey]
    }

    if (dragon.stars > 0) {
        starsBonus = dragonSettings.attacks.oneStarPower * dragon.stars
    }

    const damage = 1.5 * (1 + rankBonus + starsBonus) * (initialDamage * levelBonus / 250) + attackPower

    const minimum = Math.round(damageVariant[0] * damage)
    const maximum = Math.round(damageVariant[1] * damage)
    const avarage = Math.round((minimum + maximum) / 2)

    const randomFactor = Math.random() * (damageVariant[1] - damageVariant[0]) + damageVariant[0]
    const randomDamage = Math.round(randomFactor * damage)

    return {
        minimum: minimum,
        maximum: maximum,
        average: avarage,
        random: randomDamage,
    }
}