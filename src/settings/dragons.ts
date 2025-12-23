import { DragonCategory } from "../enums/dragon-category"
import { DragonRarity } from "../enums/dragon-rarity"
import { DragonPhase } from "../enums/dragon-phase"
import { DragonRank } from "../enums/dragon-rank"

export const dragonSettings = {
    levels: {
        minimum: 1,
        maximum: 70,
        maximumWithoutEmpowerment: 40,
        minimumToEmpower: 7
    },
    ranks: {
        bronzeIII: {
            index: DragonRank.BronzeIII,
            nameKey: "tid_rank_bronze_iii"
        },
        bronzeII: {
            index: DragonRank.BronzeII,
            nameKey: "tid_rank_bronze_ii"
        },
        bronzeI: {
            index: DragonRank.BronzeI,
            nameKey: "tid_rank_bronze_i"
        },
        silverIII: {
            index: DragonRank.SilverIII,
            nameKey: "tid_rank_silver_iii"
        },
        silverII: {
            index: DragonRank.SilverII,
            nameKey: "tid_rank_silver_ii"
        },
        silverI: {
            index: DragonRank.SilverI,
            nameKey: "tid_rank_silver_i"
        },
        goldIII: {
            index: DragonRank.GoldIII,
            nameKey: "tid_rank_gold_iii"
        },
        goldII: {
            index: DragonRank.GoldII,
            nameKey: "tid_rank_gold_ii"
        },
        goldI: {
            index: DragonRank.GoldI,
            nameKey: "tid_rank_gold_i"
        },
        platinumIII: {
            index: DragonRank.PlatinumIII,
            nameKey: "tid_rank_platinum_iii"
        },
        platinumII: {
            index: DragonRank.PlatinumII,
            nameKey: "tid_rank_platinum_ii"
        },
        platinumI: {
            index: DragonRank.PlatinumI,
            nameKey: "tid_rank_platinum_i"
        },
    },
    empowerment: {
        starts: {
            minimum: 0,
            maximum: 5,
        },
        stages: [
            {
                requestedOrbs: 120,
                usableJokerOrbs: 25,
                dragonMaximumLevel: 45
            },
            {
                requestedOrbs: 200,
                usableJokerOrbs: 50,
                dragonMaximumLevel: 50
            },
            {
                requestedOrbs: 320,
                usableJokerOrbs: 80,
                dragonMaximumLevel: 55
            },
            {
                requestedOrbs: 560,
                usableJokerOrbs: 170,
                dragonMaximumLevel: 60
            },
            {
                requestedOrbs: 800,
                usableJokerOrbs: 240,
                dragonMaximumLevel: 70
            }
        ],
    },
    categories: {
        basic: DragonCategory.Basic,
        proBasic: DragonCategory.ProBasic,
        preAdvanced: DragonCategory.PreAdvanced,
        advanced: DragonCategory.Advanced,
        elite: DragonCategory.Elite,
        amazing: DragonCategory.Amazing,
        charming: DragonCategory.Charming,
        graceful: DragonCategory.Graceful,
        champion: DragonCategory.Champion,
        mythical: DragonCategory.Mythical,
        heroic: DragonCategory.Heroic
    },
    rarities: {
        common: DragonRarity.Common,
        rare: DragonRarity.Rare,
        veryRare: DragonRarity.VeryRare,
        epic: DragonRarity.Epic,
        legendary: DragonRarity.Legendary,
        mythic: DragonRarity.Mythic,
        heroic: DragonRarity.Heroic
    },
    phases: {
        egg: DragonPhase.Egg,
        baby: DragonPhase.Baby,
        young: DragonPhase.Young,
        adult: DragonPhase.Adult
    },
    attacks: {
        rankPowers: {
            1: .5,
            2: .10,
            3: .15,
            4: .20,
            5: .25,
            6: .30,
            7: .35,
            8: .40,
            9: .50,
            10: .55,
            11: .60,
            12: .70
        },
        oneStarPower: .38223,
        categoryPowers: {
            1: 3200,
            2: 3600,
            3: 4000,
            4: 4800,
            5: 5600,
            6: 5000,
            7: 4500,
            8: 3000,
            9: 6000,
            10: 7300,
            11: 9000
        },
        damageVariant: [.9, 1.1]
    }
}
