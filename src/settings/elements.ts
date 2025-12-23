
import { DragonElement } from "../enums/dragon-element"

export const elementSettings = {
    [DragonElement.Terra]: {
        acronym: "e",
        nameKey: "TerraKey_DragonUtils",
        strengths: [DragonElement.Electric, DragonElement.Flame],
        weaknesses: [DragonElement.Metal, DragonElement.War]
    },
    [DragonElement.Flame]: {
        acronym: "f",
        nameKey: "FlameKey_DragonUtils",
        strengths: [DragonElement.Nature, DragonElement.Ice],
        weaknesses: [DragonElement.Sea, DragonElement.Terra]
    },
    [DragonElement.Sea]: {
        acronym: "w",
        nameKey: "SeaKey_DragonUtils",
        strengths: [DragonElement.Flame, DragonElement.War],
        weaknesses: [DragonElement.Nature, DragonElement.Electric]
    },
    [DragonElement.Nature]: {
        acronym: "p",
        nameKey: "NatureKey_DragonUtils",
        strengths: [DragonElement.Sea, DragonElement.Light],
        weaknesses: [DragonElement.Flame, DragonElement.Ice]
    },
    [DragonElement.Electric]: {
        acronym: "el",
        nameKey: "ElectricKey_DragonUtils",
        strengths: [DragonElement.Sea, DragonElement.Metal],
        weaknesses: [DragonElement.Terra, DragonElement.Light]
    },
    [DragonElement.Ice]: {
        acronym: "i",
        nameKey: "IceKey_DragonUtils",
        strengths: [DragonElement.Nature, DragonElement.War],
        weaknesses: [DragonElement.Flame, DragonElement.Metal]
    },
    [DragonElement.Metal]: {
        acronym: "m",
        nameKey: "MetalKey_DragonUtils",
        strengths: [DragonElement.Terra, DragonElement.Ice],
        weaknesses: [DragonElement.Electric, DragonElement.Dark]
    },
    [DragonElement.Dark]: {
        acronym: "d",
        nameKey: "DarkKey_DragonUtils",
        strengths: [DragonElement.Metal, DragonElement.Light],
        weaknesses: [DragonElement.War]
    },
    [DragonElement.Light]: {
        acronym: "li",
        nameKey: "LightKey_DragonUtils",
        strengths: [DragonElement.Electric, DragonElement.Dark],
        weaknesses: [DragonElement.Nature]
    },
    [DragonElement.War]: {
        acronym: "wr",
        nameKey: "WarKey_DragonUtils",
        strengths: [DragonElement.Terra, DragonElement.Dark],
        weaknesses: [DragonElement.Sea, DragonElement.Ice]
    },
    [DragonElement.Pure]: {
        acronym: "pu",
        nameKey: "PureKey_DragonUtils",
        strengths: [DragonElement.Wind],
        weaknesses: [DragonElement.Primal]
    },
    [DragonElement.Legend]: {
        acronym: "l",
        nameKey: "LegendKey_DragonUtils",
        strengths: [DragonElement.Primal],
        weaknesses: [DragonElement.Pure]
    },
    [DragonElement.Primal]: {
        acronym: "pr",
        nameKey: "tid_nw_hud_element_primal",
        strengths: [DragonElement.Pure],
        weaknesses: [DragonElement.Time]
    },
    [DragonElement.Wind]: {
        acronym: "wd",
        nameKey: "tid_nw_hud_element_wind",
        strengths: [DragonElement.Time],
        weaknesses: [DragonElement.Legend]
    },
    [DragonElement.Time]: {
        acronym: "ti",
        nameKey: "tid_nw_hud_element_time",
        strengths: [DragonElement.Legend],
        weaknesses: [DragonElement.Wind]
    },
    [DragonElement.Happy]: {
        acronym: "hp",
        nameKey: "tid_nw_hud_element_happiness",
        strengths: [DragonElement.Chaos, DragonElement.Magic],
        weaknesses: []
    },
    [DragonElement.Chaos]: {
        acronym: "ch",
        nameKey: "tid_nw_hud_element_chaos",
        strengths: [DragonElement.Magic, DragonElement.Soul],
        weaknesses: []
    },
    [DragonElement.Magic]: {
        acronym: "mg",
        nameKey: "tid_nw_hud_element_magic",
        strengths: [DragonElement.Soul, DragonElement.Beauty],
        weaknesses: []
    },
    [DragonElement.Soul]: {
        acronym: "so",
        nameKey: "tid_nw_hud_element_soul",
        strengths: [DragonElement.Dream, DragonElement.Beauty],
        weaknesses: []
    },
    [DragonElement.Beauty]: {
        acronym: "bt",
        nameKey: "tid_nw_hud_element_beauty",
        strengths: [DragonElement.Dream, DragonElement.Happy],
        weaknesses: []
    },
    [DragonElement.Dream]: {
        acronym: "dr",
        nameKey: "tid_nw_hud_element_dream",
        strengths: [DragonElement.Happy, DragonElement.Chaos],
        weaknesses: []
    },
    [DragonElement.Physical]: {
        acronym: "ph",
        name: "Physical",
        strengths: [],
        weaknesses: [DragonElement.Legend]
    }
}