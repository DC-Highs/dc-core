# dc-core

`@dchighs/dc-core` is a TypeScript/JavaScript library that simulates core Dragon City game logic.

It provides:

- **Calculators** for attack damage, feed cost, orb recall gain, and element strengths/weaknesses.
- **Validation tools** for dragon metadata.
- **Static configuration** for dragons, islands, sounds, elements, and more.
- **Enums** for strongly-typed values used across the package.

## Installation

```bash
npm install @dchighs/dc-core
```

## Quick start

```ts
import {
  calculateAttackDamage,
  calculateDragonFeedCost,
  calculateElementStrengths,
  DragonElement,
} from "@dchighs/dc-core"

const damage = calculateAttackDamage({
  attackPower: 1800,
  dragon: {
    category: 9,
    level: 40,
    rank: 2,
    stars: 3,
  },
})

console.log(damage)
// { minimum: ..., maximum: ..., average: ..., random: ... }

const feedCost = calculateDragonFeedCost({ initialLevel: 1, finalLevel: 40 })
console.log(feedCost)

const strengths = calculateElementStrengths(DragonElement.Legend)
console.log(strengths)
```

## Main exports

### Calculators

- `calculateAttackDamage(options)`
- `calculateDragonFeedCost(options)`
- `calculateElementStrengths(element)`
- `calculateElementsStrengths(elements)`
- `calculateElementWeaknesses(element)`
- `calculateOrbRecallGain(options)`

#### `calculateAttackDamage(options)`

Calculates the expected damage range for a dragon attack.

- **Input**
  - `attackPower: number`
  - `dragon: { category: number; level: number; rank: number; stars: number }`
- **Validation**
  - Checks category, rank, and level/stars compatibility.
- **Output**
  - `{ minimum: number; maximum: number; average: number; random: number }`
- **Notes**
  - Uses dragon category, level scaling, rank bonus, and star bonus from `dragonSettings`.
  - `random` is sampled from the internal damage variance range.

#### `calculateDragonFeedCost(options)`

Computes the total food required based on dragon levels.

- **Input**
  - `initialLevel: number`
  - `finalLevel: number`
- **Validation**
  - Validates both levels and throws if `initialLevel > finalLevel`.
- **Output**
  - `number` (total food cost)

#### `calculateElementStrengths(element)`

Returns which elements are strong against a single element.

- **Input**
  - `element: string` (ideally from `DragonElement`)
- **Validation**
  - Validates if the element exists in internal settings.
- **Output**
  - `DragonElement[]`

#### `calculateElementsStrengths(elements)`

Combines strengths for multiple elements and removes duplicates.

- **Input**
  - `elements: string[]`
- **Validation**
  - Validates each provided element.
- **Output**
  - `string[]` with unique strengths from all provided elements.

#### `calculateElementWeaknesses(element)`

Returns which elements can hit the provided element effectively.

- **Input**
  - `element: string` (ideally from `DragonElement`)
- **Validation**
  - Validates if the element exists in internal settings.
- **Output**
  - `DragonElement[]`

#### `calculateOrbRecallGain(options)`

Calculates how many orbs are returned when recalling a dragon.

- **Input**
  - `level: number`
  - `stars?: number` (defaults to `0`)
- **Validation**
  - Validates level/stars compatibility.
- **Output**
  - `number` (total recalled orbs)
- **Notes**
  - Recall level contribution is capped internally at level `30`.

### Tools

- `validateDragonLevelCompatibilityWithStars(options)`
- `validateDragonCategory(category, options?)`
- `validateDragonRarity(rarity, options?)`
- `validateDragonStars(stars, options?)`
- `validateElementName(element, options?)`
- `validateDragonLevel(level, options?)`
- `validateDragonRank(rank, options?)`
- `getMusicKeyNameFromTag(tag)`
- `DragonStaticFileUrlParser`

### Settings

- `dragonSettings`
- `feedCostSettings`
- `orbRecallReturnSettings`
- `elementSettings`
- `islandSettings`
- `soundSettings`

### Enums

All enums are exported from the package root, including:

- `DragonElement`
- `DragonRarity`
- `DragonCategory`
- `DragonRank`
- `DragonPhase`
- `ConfigPlatform`
- `ConfigLanguage`

## Example: validating values before calculations

```ts
import {
  validateDragonLevelCompatibilityWithStars,
  validateDragonCategory,
  validateDragonRank,
} from "@dchighs/dc-core"

validateDragonLevelCompatibilityWithStars({
  level: 40,
  stars: 3,
  throwOnError: true,
})

validateDragonCategory(9, { throwOnError: true })
validateDragonRank(2, { throwOnError: true })
```

## Example: parsing static asset URLs

```ts
import { DragonStaticFileUrlParser } from "@dchighs/dc-core"

const spriteUrl = "https://aws-static.socialpointgames.com/static/dragoncity/mobile/ui/dragons/112_terra_3@2x.png"

const parsed = DragonStaticFileUrlParser.parseFromSprite(spriteUrl)
console.log(parsed)
// {
//   platformPrefix: 'aws',
//   id: 112,
//   imageName: '112_terra',
//   phase: 3,
//   skin: null,
//   imageQuality: '@2x'
// }
```

## Notes

- Functions may throw if invalid values are provided and `throwOnError: true` is used.
- This package is distributed as CommonJS with TypeScript definitions.

## License

MIT
