//units.js
var corrinF = {
    n: "Corrin (F)",
    vName: "corrinF",
    baseClass: ["Nohr Princess", "-"],
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    baseHPGR: 45,
    baseStrGR: 45,
    baseMagGR: 30,
    baseSklGR: 40,
    baseSpdGR: 45,
    baseLckGR: 45,
    baseDefGR: 35,
    baseResGR: 25,
    hpGR: 45,
    strGR: 45,
    magGR: 30,
    sklGR: 40,
    spdGR: 45,
    lckGR: 45,
    defGR: 35,
    resGR: 25,
    isChild: false,
    isRoyal: true,
    sex: "F"
}
var corrinM = {
    n: "Corrin (M)",
    vName: "corrinM",
    baseClass: ["Nohr Prince", "-"],
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    baseHPGR: 45,
    baseStrGR: 45,
    baseMagGR: 30,
    baseSklGR: 40,
    baseSpdGR: 45,
    baseLckGR: 45,
    baseDefGR: 35,
    baseResGR: 25,
    hpGR: 45,
    strGR: 45,
    magGR: 30,
    sklGR: 40,
    spdGR: 45,
    lckGR: 45,
    defGR: 35,
    resGR: 25,
    isChild: false,
    isRoyal: true,
    sex: "M"
}
var gunter = {
    n: "Gunter",
    vName: "gunter",
    baseClass: ["Cavalier", "Mercenary", "Wyvern Rider"],
    strMod: 2,
    magMod: 0,
    sklMod: 1,
    spdMod: -2,
    lckMod: 0,
    defMod: 2,
    resMod: -2,
    hpGR: 15,
    strGR: 5,
    magGR: 0,
    sklGR: 5,
    spdGR: 0,
    lckGR: 15,
    defGR: 5,
    resGR: 5,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var felicia = {
    n: "Felicia",
    vName: "felicia",
    baseClass: ["Troubadour", "Mercenary"],
    strMod: -2,
    magMod: 2,
    sklMod: 0,
    spdMod: 1,
    lckMod: 0,
    defMod: -1,
    resMod: 1,
    hpGR: 40,
    strGR: 10,
    magGR: 35,
    sklGR: 30,
    spdGR: 40,
    lckGR: 55,
    defGR: 15,
    resGR: 35,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var jakob = {
    n: "Jakob",
    vName: "jakob",
    baseClass: ["Troubadour", "Cavalier"],
    strMod: 2,
    magMod: -2,
    sklMod: 2,
    spdMod: 0,
    lckMod: -1,
    defMod: 0,
    resMod: -1,
    hpGR: 50,
    strGR: 30,
    magGR: 15,
    sklGR: 40,
    spdGR: 35,
    lckGR: 45,
    defGR: 25,
    resGR: 25,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var kaze = {
    n: "Kaze",
    vName: "kaze",
    baseClass: ["Ninja", "Samurai"],
    strMod: -2,
    magMod: 0,
    sklMod: 2,
    spdMod: 3,
    lckMod: -2,
    defMod: -1,
    resMod: 1,
    hpGR: 55,
    strGR: 40,
    magGR: 0,
    sklGR: 45,
    spdGR: 65,
    lckGR: 20,
    defGR: 20,
    resGR: 35,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var azura = {
    n: "Azura",
    vName: "azura",
    baseClass: ["Songstress", "Sky Knight"],
    strMod: 0,
    magMod: 0,
    sklMod: 1,
    spdMod: 3,
    lckMod: 0,
    defMod: -3,
    resMod: 0,
    hpGR: 25,
    strGR: 50,
    magGR: 25,
    sklGR: 60,
    spdGR: 60,
    lckGR: 40,
    defGR: 15,
    resGR: 35,
    isChild: false,
    isRoyal: true,
    sex: "F"
}
var silas = {
    n: "Silas",
    vName: "silas",
    baseClass: ["Cavalier", "Mercenary"],
    strMod: 1,
    magMod: 0,
    sklMod: 2,
    spdMod: 0,
    lckMod: -1,
    defMod: 0,
    resMod: -1,
    hpGR: 40,
    strGR: 45,
    magGR: 5,
    sklGR: 50,
    spdGR: 40,
    lckGR: 40,
    defGR: 40,
    resGR: 25,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var shura = {
    n: "Shura",
    vName: "shura",
    baseClass: ["Outlaw", "Ninja", "Fighter"],
    strMod: -1,
    magMod: 0,
    sklMod: -1,
    spdMod: 3,
    lckMod: -1,
    defMod: -2,
    resMod: 2,
    hpGR: 30,
    strGR: 25,
    magGR: 10,
    sklGR: 20,
    spdGR: 35,
    lckGR: 30,
    defGR: 15,
    resGR: 35,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var izana = {
    n: "Izana",
    vName: "izana",
    baseClass: ["Monk", "Samurai", "Apothecary"],
    strMod: 0,
    magMod: 1,
    sklMod: 1,
    spdMod: -2,
    lckMod: 0,
    defMod: 0,
    resMod: 1,
    hpGR: 45,
    strGR: 15,
    magGR: 35,
    sklGR: 55,
    spdGR: 30,
    lckGR: 45,
    defGR: 35,
    resGR: 35,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var mozu = {
    n: "Mozu",
    vName: "mozu",
    baseClass: ["Villager", "Archer"],
    strMod: 0,
    magMod: 0,
    sklMod: 1,
    spdMod: 1,
    lckMod: 1,
    defMod: 0,
    resMod: -2,
    hpGR: 30,
    strGR: 40,
    magGR: 5,
    sklGR: 50,
    spdGR: 55,
    lckGR: 45,
    defGR: 35,
    resGR: 30,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var elise = {
    n: "Elise",
    vName: "elise",
    baseClass: ["Troubadour", "Wyvern Rider"],
    strMod: -1,
    magMod: 3,
    sklMod: -2,
    spdMod: 1,
    lckMod: 1,
    defMod: -3,
    resMod: 1,
    hpGR: 30,
    strGR: 5,
    magGR: 65,
    sklGR: 25,
    spdGR: 55,
    lckGR: 70,
    defGR: 15,
    resGR: 40,
    isChild: false,
    isRoyal: true,
    sex: "F"
}
var arthur = {
    n: "Arthur",
    vName: "arthur",
    baseClass: ["Fighter", "Cavalier"],
    strMod: 1,
    magMod: 0,
    sklMod: 3,
    spdMod: 0,
    lckMod: -3,
    defMod: 1,
    resMod: -1,
    hpGR: 50,
    strGR: 45,
    magGR: 0,
    sklGR: 55,
    spdGR: 35,
    lckGR: 5,
    defGR: 45,
    resGR: 20,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var effie = {
    n: "Effie",
    vName: "effie",
    baseClass: ["Knight", "Troubadour"],
    strMod: 3,
    magMod: 0,
    sklMod: -1,
    spdMod: 1,
    lckMod: 0,
    defMod: -1,
    resMod: -1,
    hpGR: 35,
    strGR: 60,
    magGR: 0,
    sklGR: 35,
    spdGR: 50,
    lckGR: 50,
    defGR: 35,
    resGR: 30,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var odin = {
    n: "Odin",
    vName: "odin",
    baseClass: ["Dark Mage", "Samurai"],
    strMod: 0,
    magMod: 1,
    sklMod: 1,
    spdMod: -1,
    lckMod: 1,
    defMod: 0,
    resMod: -1,
    hpGR: 55,
    strGR: 35,
    magGR: 30,
    sklGR: 55,
    spdGR: 35,
    lckGR: 60,
    defGR: 40,
    resGR: 20,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var niles = {
    n: "Niles",
    vName: "niles",
    baseClass: ["Outlaw", "Dark Mage"],
    strMod: -2,
    magMod: 0,
    sklMod: -1,
    spdMod: 3,
    lckMod: 0,
    defMod: 0,
    resMod: 1,
    hpGR: 40,
    strGR: 35,
    magGR: 20,
    sklGR: 40,
    spdGR: 50,
    lckGR: 30,
    defGR: 30,
    resGR: 40,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var nyx = {
    n: "Nyx",
    vName: "nyx",
    baseClass: ["Dark Mage", "Outlaw"],
    strMod: 0,
    magMod: 3,
    sklMod: -2,
    spdMod: 2,
    lckMod: -1,
    defMod: -2,
    resMod: 1,
    hpGR: 30,
    strGR: 5,
    magGR: 50,
    sklGR: 35,
    spdGR: 50,
    lckGR: 20,
    defGR: 15,
    resGR: 30,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var camilla = {
    n: "Camilla",
    vName: "camilla",
    baseClass: ["Wyvern Rider", "Dark Mage"],
    strMod: 1,
    magMod: -1,
    sklMod: 1,
    spdMod: 1,
    lckMod: -2,
    defMod: 1,
    resMod: 0,
    hpGR: 40,
    strGR: 50,
    magGR: 25,
    sklGR: 50,
    spdGR: 55,
    lckGR: 25,
    defGR: 35,
    resGR: 45,
    isChild: false,
    isRoyal: true,
    sex: "F"
}
var selena = {
    n: "Selena",
    vName: "selena",
    baseClass: ["Mercenary", "Sky Knight"],
    strMod: -1,
    magMod: 0,
    sklMod: -1,
    spdMod: 2,
    lckMod: 0,
    defMod: 1,
    resMod: 0,
    hpGR: 40,
    strGR: 30,
    magGR: 5,
    sklGR: 25,
    spdGR: 45,
    lckGR: 30,
    defGR: 45,
    resGR: 30,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var beruka = {
    n: "Beruka",
    vName: "beruka",
    baseClass: ["Wyvern Rider", "Fighter"],
    strMod: -1,
    magMod: 0,
    sklMod: 2,
    spdMod: -2,
    lckMod: 0,
    defMod: 2,
    resMod: -1,
    hpGR: 45,
    strGR: 30,
    magGR: 10,
    sklGR: 55,
    spdGR: 30,
    lckGR: 45,
    defGR: 40,
    resGR: 25,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var laslow = {
    n: "Laslow",
    vName: "laslow",
    baseClass: ["Mercenary", "Ninja"],
    strMod: 1,
    magMod: 0,
    sklMod: 2,
    spdMod: -1,
    lckMod: 1,
    defMod: -1,
    resMod: -1,
    hpGR: 50,
    strGR: 45,
    magGR: 0,
    sklGR: 45,
    spdGR: 30,
    lckGR: 55,
    defGR: 35,
    resGR: 25,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var peri = {
    n: "Peri",
    vName: "peri",
    baseClass: ["Cavalier", "Dark Mage"],
    strMod: 1,
    magMod: 0,
    sklMod: -1,
    spdMod: 1,
    lckMod: 0,
    defMod: -2,
    resMod: 2,
    hpGR: 30,
    strGR: 50,
    magGR: 5,
    sklGR: 30,
    spdGR: 50,
    lckGR: 35,
    defGR: 25,
    resGR: 45,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var benny = {
    n: "Benny",
    vName: "benny",
    baseClass: ["Knight", "Fighter"],
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: -3,
    lckMod: 0,
    defMod: 3,
    resMod: 1,
    hpGR: 50,
    strGR: 40,
    magGR: 0,
    sklGR: 50,
    spdGR: 10,
    lckGR: 35,
    defGR: 55,
    resGR: 45,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var charlotte = {
    n: "Charlotte",
    vName: "charlotte",
    baseClass: ["Fighter", "Troubadour"],
    strMod: 3,
    magMod: 0,
    sklMod: 0,
    spdMod: 2,
    lckMod: 0,
    defMod: -2,
    resMod: -2,
    hpGR: 65,
    strGR: 55,
    magGR: 0,
    sklGR: 35,
    spdGR: 50,
    lckGR: 45,
    defGR: 20,
    resGR: 5,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var leo = {
    n: "Leo",
    vName: "leo",
    baseClass: ["Dark Mage", "Troubadour"],
    strMod: -2,
    magMod: 2,
    sklMod: 0,
    spdMod: -2,
    lckMod: 0,
    defMod: 0,
    resMod: 2,
    hpGR: 45,
    strGR: 25,
    magGR: 55,
    sklGR: 35,
    spdGR: 45,
    lckGR: 45,
    defGR: 30,
    resGR: 45,
    isChild: false,
    isRoyal: true,
    sex: "M"
}
var keaton = {
    n: "Keaton",
    vName: "keaton",
    baseClass: ["Wolfskin", "Fighter"],
    strMod: 3,
    magMod: 0,
    sklMod: -2,
    spdMod: -1,
    lckMod: 0,
    defMod: 2,
    resMod: -1,
    hpGR: 60,
    strGR: 60,
    magGR: 0,
    sklGR: 20,
    spdGR: 35,
    lckGR: 30,
    defGR: 50,
    resGR: 25,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var xander = {
    n: "Xander",
    vName: "xander",
    baseClass: ["Cavalier", "Wyvern Rider"],
    strMod: 2,
    magMod: -1,
    sklMod: -1,
    spdMod: -1,
    lckMod: 2,
    defMod: 1,
    resMod: -2,
    hpGR: 45,
    strGR: 50,
    magGR: 5,
    sklGR: 40,
    spdGR: 35,
    lckGR: 60,
    defGR: 40,
    resGR: 15,
    isChild: false,
    isRoyal: true,
    sex: "M"
}
var flora = {
    n: "Flora",
    vName: "flora",
    baseClass: ["Troubadour", "Dark Mage", "Mercenary"],
    strMod: 1,
    magMod: -1,
    sklMod: 2,
    spdMod: 0,
    lckMod: -1,
    defMod: 1,
    resMod: -1,
    hpGR: 35,
    strGR: 40,
    magGR: 20,
    sklGR: 45,
    spdGR: 30,
    lckGR: 35,
    defGR: 30,
    resGR: 30,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var rinkah = {
    n: "Rinkah",
    vName: "rinkah",
    baseClass: ["Oni Savage", "Ninja"],
    strMod: -1,
    magMod: 0,
    sklMod: -2,
    spdMod: 1,
    lckMod: 0,
    defMod: 2,
    resMod: 0,
    hpGR: 20,
    strGR: 25,
    magGR: 15,
    sklGR: 50,
    spdGR: 45,
    lckGR: 35,
    defGR: 45,
    resGR: 20,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var sakura = {
    n: "Sakura",
    vName: "sakura",
    baseClass: ["Shrine Maiden", "Sky Knight"],
    strMod: 0,
    magMod: 2,
    sklMod: -1,
    spdMod: 1,
    lckMod: 0,
    defMod: -1,
    resMod: 0,
    hpGR: 45,
    strGR: 30,
    magGR: 50,
    sklGR: 40,
    spdGR: 40,
    lckGR: 55,
    defGR: 30,
    resGR: 20,
    isChild: false,
    isRoyal: true,
    sex: "F"
}
var hana = {
    n: "Hana",
    vName: "hana",
    baseClass: ["Samurai", "Shrine Maiden"],
    strMod: 1,
    magMod: 0,
    sklMod: 1,
    spdMod: 2,
    lckMod: -1,
    defMod: -3,
    resMod: 1,
    hpGR: 25,
    strGR: 55,
    magGR: 10,
    sklGR: 45,
    spdGR: 55,
    lckGR: 25,
    defGR: 20,
    isRoyal: false,
    isChild: false,
    resGR: 30,
    isChild: false,
    isRoyal: false,
    sex: "F"

}
var subaki = {
    n: "Subaki",
    vName: "subaki",
    baseClass: ["Sky Knight", "Samurai"],
    strMod: -1,
    magMod: 0,
    sklMod: 2,
    spdMod: -2,
    lckMod: -1,
    defMod: 3,
    resMod: -1,
    hpGR: 55,
    strGR: 30,
    magGR: 20,
    sklGR: 50,
    spdGR: 20,
    lckGR: 25,
    defGR: 45,
    resGR: 5,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var saizo = {
    n: "Saizo",
    vName: "saizo",
    baseClass: ["Ninja", "Samurai"],
    strMod: 1,
    magMod: 0,
    sklMod: 3,
    spdMod: -2,
    lckMod: 0,
    defMod: 1,
    resMod: -2,
    hpGR: 40,
    strGR: 50,
    magGR: 45,
    sklGR: 60,
    spdGR: 30,
    lckGR: 55,
    defGR: 45,
    resGR: 10,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var orochi = {
    n: "Orochi",
    vName: "orochi",
    baseClass: ["Diviner", "Apothecary"],
    strMod: 0,
    magMod: 3,
    sklMod: 2,
    spdMod: -2,
    lckMod: -1,
    defMod: -2,
    resMod: 1,
    hpGR: 35,
    strGR: 5,
    magGR: 65,
    sklGR: 50,
    spdGR: 15,
    lckGR: 35,
    defGR: 25,
    resGR: 45,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var hinoka = {
    n: "Hinoka",
    vName: "hinoka",
    baseClass: ["Sky Knight", "Spear Fighter"],
    strMod: 1,
    magMod: -1,
    sklMod: -1,
    spdMod: 1,
    lckMod: 0,
    defMod: -1,
    resMod: 2,
    hpGR: 45,
    strGR: 45,
    magGR: 15,
    sklGR: 40,
    spdGR: 45,
    lckGR: 40,
    defGR: 35,
    resGR: 40,
    isChild: false,
    isRoyal: true,
    sex: "F"
}
var azama = {
    n: "Azama",
    vName: "azama",
    baseClass: ["Monk", "Apothecary"],
    strMod: 2,
    magMod: -3,
    sklMod: 0,
    spdMod: 1,
    lckMod: 0,
    defMod: 1,
    resMod: 0,
    hpGR: 55,
    strGR: 50,
    magGR: 20,
    sklGR: 40,
    spdGR: 45,
    lckGR: 40,
    defGR: 40,
    resGR: 20,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var setsuna = {
    n: "Setsuna",
    vName: "setsuna",
    baseClass: ["Archer", "Ninja"],
    strMod: 0,
    magMod: 0,
    sklMod: 1,
    spdMod: 3,
    lckMod: -1,
    defMod: -1,
    resMod: -1,
    hpGR: 30,
    strGR: 20,
    magGR: 0,
    sklGR: 30,
    spdGR: 60,
    lckGR: 30,
    defGR: 15,
    resGR: 40,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var hayato = {
    n: "Hayato",
    vName: "hayato",
    baseClass: ["Diviner", "Oni Savage"],
    strMod: 0,
    magMod: 1,
    sklMod: -1,
    spdMod: 2,
    lckMod: 1,
    defMod: -1,
    resMod: -1,
    hpGR: 50,
    strGR: 30,
    magGR: 40,
    sklGR: 30,
    spdGR: 45,
    lckGR: 60,
    defGR: 40,
    resGR: 20,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var oboro = {
    n: "Oboro",
    vName: "oboro",
    baseClass: ["Spear Fighter", "Apothecary"],
    strMod: 1,
    magMod: -1,
    sklMod: 1,
    spdMod: 1,
    lckMod: -1,
    defMod: 1,
    resMod: -1,
    hpGR: 30,
    strGR: 40,
    magGR: 20,
    sklGR: 40,
    spdGR: 40,
    lckGR: 40,
    defGR: 40,
    resGR: 30,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var hinata = {
    n: "Hinata",
    vName: "hinata",
    baseClass: ["Samurai", "Oni Savage"],
    strMod: 1,
    magMod: 0,
    sklMod: -1,
    spdMod: -2,
    lckMod: 0,
    defMod: 2,
    resMod: 0,
    hpGR: 55,
    strGR: 35,
    magGR: 0,
    sklGR: 25,
    spdGR: 15,
    lckGR: 45,
    defGR: 45,
    resGR: 15,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var takumi = {
    n: "Takumi",
    vName: "takumi",
    baseClass: ["Archer", "Spear Fighter"],
    strMod: 1,
    magMod: 0,
    sklMod: 3,
    spdMod: -2,
    lckMod: 1,
    defMod: 0,
    resMod: -2,
    hpGR: 50,
    strGR: 35,
    magGR: 0,
    sklGR: 60,
    spdGR: 40,
    lckGR: 45,
    defGR: 35,
    resGR: 20,
    isChild: false,
    isRoyal: true,
    sex: "M"
}
var kagero = {
    n: "Kagero",
    vName: "kagero",
    baseClass: ["Ninja", "Diviner"],
    strMod: 3,
    magMod: 0,
    sklMod: -1,
    spdMod: -1,
    lckMod: 0,
    defMod: -1,
    resMod: 1,
    hpGR: 30,
    strGR: 65,
    magGR: 0,
    sklGR: 20,
    spdGR: 50,
    lckGR: 30,
    defGR: 25,
    resGR: 40,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var reina = {
    n: "Reina",
    vName: "reina",
    baseClass: ["Sky Knight", "Diviner"],
    strMod: 2,
    magMod: 0,
    sklMod: 0,
    spdMod: 2,
    lckMod: -1,
    defMod: -2,
    resMod: -1,
    hpGR: 40,
    strGR: 45,
    magGR: 5,
    sklGR: 20,
    spdGR: 45,
    lckGR: 10,
    defGR: 20,
    resGR: 10,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var kaden = {
    n: "Kaden",
    vName: "kaden",
    baseClass: ["Kitsune",  "Diviner"],
    strMod: 1,
    magMod: 0,
    sklMod: -3,
    spdMod: 2,
    lckMod: 1,
    defMod: -2,
    resMod: 2,
    hpGR: 45,
    strGR: 40,
    magGR: 10,
    sklGR: 25,
    spdGR: 45,
    lckGR: 50,
    defGR: 35,
    resGR: 40,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var ryoma = {
    n: "Ryoma",
    vName: "ryoma",
    baseClass: ["Samurai", "Sky Knight"],
    strMod: 1,
    magMod: 0,
    sklMod: 2,
    spdMod: 1,
    lckMod: 1,
    defMod: -2,
    resMod: -2,
    hpGR: 50,
    strGR: 45,
    magGR: 0,
    sklGR: 50,
    spdGR: 45,
    lckGR: 40,
    defGR: 35,
    resGR: 25,
    isChild: false,
    isRoyal: true,
    sex: "M"
}
var scarlet = {
    n: "Scarlet",
    vName: "scarlet",
    baseClass: ["Wyvern Rider", "Outlaw"],
    strMod: 2,
    magMod: 0,
    sklMod: 0,
    spdMod: 1,
    lckMod: -1,
    defMod: 0,
    resMod: -2,
    hpGR: 30,
    strGR: 45,
    magGR: 20,
    sklGR: 40,
    spdGR: 50,
    lckGR: 40,
    defGR: 25,
    resGR: 20,
    isChild: false,
    isRoyal: false,
    sex: "F"
}
var yukimura = {
    n: "Yukimura",
    vName: "yukimura",
    baseClass: ["Apothecary",  "Samurai"],
    strMod: -1,
    magMod: 0,
    sklMod: 3,
    spdMod: -1,
    lckMod: 0,
    defMod: -1,
    resMod: 0,
    hpGR: 25,
    strGR: 25,
    magGR: 5,
    sklGR: 40,
    spdGR: 15,
    lckGR: 30,
    defGR: 25,
    resGR: 30,
    isChild: false,
    isRoyal: false,
    sex: "M"
}
var noPar = {
    n: "-",
    baseClass: ["-"],
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    isChild: false,
    isRoyal: false,
    sex: "A"
}
var kanaF = {
    n: "Kana (F)",
    vName: "kanaF",
    baseClass: ["Nohr Princess"],
    firstParent: corrinM,
    secondParent: ["-", "Felicia", "Azura", "Mozu", "Elise", "Effie", "Nyx", "Camilla", "Selena", "Beruka", "Peri", "Charlotte", "Flora", "Rinkah", "Sakura", "Hana", "Hinoka", "Orochi", "Setsuna", "Oboro", "Kagero", "Reina", "Scarlet", "Sophie", "Midori",  "Velouria", "Ophelia", "Soleil", "Nina", "Selkie", "Mitama", "Caeldori", "Rhajat"],
    baseHPGR: 30,
    baseStrGR: 35,
    baseMagGR: 30,
    baseSklGR: 40,
    baseSpdGR: 45,
    baseLckGR: 45,
    baseDefGR: 25,
    baseResGR: 25,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 30,
    strGR: 35,
    magGR: 30,
    sklGR: 40,
    spdGR: 45,
    lckGR: 45,
    defGR: 25,
    resGR: 25,
    sex: "F",
    isChild: true,
    isRoyal: true
}
var kanaM = {
    n: "Kana (M)",
    vName: "kanaM",
    baseClass: ["Nohr Prince"],
    firstParent: corrinF,
    secondParent: ["-", "Gunter", "Jakob", "Kaze", "Silas", "Shura", "Izana", "Arthur", "Odin", "Niles", "Laslow", "Benny", "Leo", "Keaton", "Xander", "Subaki", "Saizo", "Azama", "Hayato", "Hinata", "Takumi", "Kaden", "Ryoma", "Yukimura", "Siegbert", "Forrest", "Ignatius", "Percy", "Dwyer", "Shigure", "Shiro", "Kiragi", "Asugi", "Hisame"],
    baseHPGR: 30,
    baseStrGR: 35,
    baseMagGR: 30,
    baseSklGR: 40,
    baseSpdGR: 45,
    baseLckGR: 45,
    baseDefGR: 25,
    baseResGR: 25,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 30,
    strGR: 35,
    magGR: 30,
    sklGR: 40,
    spdGR: 45,
    lckGR: 45,
    defGR: 25,
    resGR: 25,
    sex: "M",
    isChild: true,
    isRoyal: true
}
var shigure = {
    n: "Shigure",
    vName: "shigure",
    baseClass: ["Sky Knight"],
    firstParent: azura,
    secondParent: ["-", "Arthur", "Azama", "Benny", "Corrin (M)", "Hayato", "Hinata", "Jakob", "Kaden", "Kaze", "Keaton", "Laslow", "Leo", "Niles", "Odin", "Ryoma", "Saizo", "Silas", "Subaki", "Takumi", "Xander"],
    baseHPGR: 35,
    baseStrGR: 45,
    baseMagGR: 5,
    baseSklGR: 45,
    baseSpdGR: 35,
    baseLckGR: 25,
    baseDefGR: 35,
    baseResGR: 25,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 35,
    strGR: 45,
    magGR: 5,
    sklGR: 45,
    spdGR: 35,
    lckGR: 25,
    defGR: 35,
    resGR: 25,
    sex: "M",
    isChild: true,
    isRoyal: true 
}
var dwyer = {
    n: "Dwyer",
    vName: "dwyer",
    baseClass: ["Troubadour"],
    firstParent: jakob,
    secondParent: ["-", "Azura", "Beruka", "Camilla", "Charlotte", "Corrin (F)", "Effie", "Elise", "Felicia", "Hana", "Hinoka", "Kagero", "Mozu", "Nyx", "Oboro", "Orochi", "Peri", "Rinkah", "Selena", "Sakura", "Setsuna"],
    baseHPGR: 45,
    baseStrGR: 45,
    baseMagGR: 30,
    baseSklGR: 20,
    baseSpdGR: 30,
    baseLckGR: 30,
    baseDefGR: 30,
    baseResGR: 35,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 45,
    strGR: 45,
    magGR: 30,
    sklGR: 20,
    spdGR: 30,
    lckGR: 30,
    defGR: 30,
    resGR: 35,
    sex: "M",
    isChild: true,
    isRoyal: false 
}
var sophie = {
    n: "Sophie",
    vName: "sophie",
    baseClass: ["Cavalier"],
    firstParent: silas,
    secondParent: ["-", "Azura", "Beruka", "Camilla", "Charlotte", "Corrin (F)", "Effie", "Elise", "Felicia", "Hana", "Hinoka", "Kagero", "Mozu", "Nyx", "Oboro", "Orochi", "Peri", "Rinkah", "Selena", "Sakura", "Setsuna"],
    baseHPGR: 35,
    baseStrGR: 35,
    baseMagGR: 10,
    baseSklGR: 55,
    baseSpdGR: 50,
    baseLckGR: 35,
    baseDefGR: 25,
    baseResGR: 35,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 35,
    strGR: 35,
    magGR: 10,
    sklGR: 55,
    spdGR: 50,
    lckGR: 35,
    defGR: 25,
    resGR: 35,
    sex: "F",
    isChild: true,
    isRoyal: false
}
var midori = {
    n: "Midori",
    vName: "midori",
    baseClass: ["Apothecary"],
    firstParent: kaze,
    secondParent: ["-", "Azura", "Beruka", "Camilla", "Charlotte", "Corrin (F)", "Effie", "Elise", "Felicia", "Hana", "Hinoka", "Kagero", "Mozu", "Nyx", "Oboro", "Orochi", "Peri", "Rinkah", "Selena", "Sakura", "Setsuna"],
    baseHPGR: 45,
    baseStrGR: 35,
    baseMagGR: 5,
    baseSklGR: 55,
    baseSpdGR: 35,
    baseLckGR: 50,
    baseDefGR: 30,
    baseResGR: 20,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 45,
    strGR: 35,
    magGR: 5,
    sklGR: 55,
    spdGR: 35,
    lckGR: 50,
    defGR: 30,
    resGR: 20,
    sex: "F",
    isChild: true,
    isRoyal: false 
}
var siegbert = {
    n: "Siegbert",
    vName: "siegbert",
    baseClass: ["Cavalier"],
    firstParent: xander,
    secondParent: ["-", "Azura", "Beruka", "Charlotte", "Corrin (F)", "Effie", "Felicia", "Hinoka", "Mozu", "Nyx", "Peri", "Sakura", "Selena"],
    baseHPGR: 40,
    baseStrGR: 45,
    baseMagGR: 5,
    baseSklGR: 45,
    baseSpdGR: 45,
    baseLckGR: 45,
    baseDefGR: 35,
    baseResGR: 20,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 40,
    strGR: 45,
    magGR: 5,
    sklGR: 45,
    spdGR: 45,
    lckGR: 45,
    defGR: 35,
    resGR: 20,
    sex: "M",
    isChild: true,
    isRoyal: true
}
var forrest = {
    n: "Forrest",
    vName: "forrest",
    baseClass: ["Troubadour"],
    firstParent: leo,
    secondParent: ["-", "Azura", "Beruka", "Charlotte", "Corrin (F)", "Effie", "Felicia", "Hinoka", "Mozu", "Nyx", "Peri", "Sakura", "Selena"],
    baseHPGR: 55,
    baseStrGR: 15,
    baseMagGR: 65,
    baseSklGR: 20,
    baseSpdGR: 35,
    baseLckGR: 25,
    baseDefGR: 25,
    baseResGR: 55,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 55,
    strGR: 15,
    magGR: 65,
    sklGR: 20,
    spdGR: 35,
    lckGR: 25,
    defGR: 25,
    resGR: 55,
    sex: "M",
    isChild: true,
    isRoyal: true 
}
var ignatius = {
    n: "Ignatius",
    vName: "ignatius",
    baseClass: ["Knight"],
    firstParent: benny,
    secondParent: ["-", "Azura", "Beruka", "Camilla", "Charlotte", "Corrin (F)", "Effie", "Elise", "Felicia", "Mozu", "Nyx", "Oboro", "Peri", "Rinkah", "Selena"],
    baseHPGR: 40,
    baseStrGR: 50,
    baseMagGR: 0,
    baseSklGR: 40,
    baseSpdGR: 30,
    baseLckGR: 55,
    baseDefGR: 45,
    baseResGR: 35,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 40,
    strGR: 50,
    magGR: 0,
    sklGR: 40,
    spdGR: 30,
    lckGR: 55,
    defGR: 45,
    resGR: 35,
    sex: "M",
    isChild: true,
    isRoyal: false
}
var velouria = {
    n: "Velouria",
    vName: "velouria",
    baseClass: ["Wolfskin"],
    firstParent: keaton,
    secondParent: ["-", "Azura", "Beruka", "Camilla", "Charlotte", "Corrin (F)", "Effie", "Elise", "Felicia", "Hana", "Mozu", "Nyx", "Peri", "Rinkah", "Selena"],
    baseHPGR: 50,
    baseStrGR: 50,
    baseMagGR: 0,
    baseSklGR: 40,
    baseSpdGR: 40,
    baseLckGR: 35,
    baseDefGR: 45,
    baseResGR: 30,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 50,
    strGR: 50,
    magGR: 0,
    sklGR: 40,
    spdGR: 40,
    lckGR: 35,
    defGR: 45,
    resGR: 30,
    sex: "F",
    isChild: true,
    isRoyal: false
}
var percy = {
    n: "Percy",
    vName: "percy",
    baseClass: ["Wyvern Rider"],
    firstParent: arthur,
    secondParent: ["-", "Azura", "Beruka", "Camilla", "Charlotte", "Corrin (F)", "Effie", "Elise", "Felicia", "Kagero", "Mozu", "Nyx", "Peri", "Selena", "Setsuna"],
    baseHPGR: 30,
    baseStrGR: 30,
    baseMagGR: 5,
    baseSklGR: 45,
    baseSpdGR: 40,
    baseLckGR: 75,
    baseDefGR: 55,
    baseResGR: 15,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 30,
    strGR: 30,
    magGR: 5,
    sklGR: 45,
    spdGR: 40,
    lckGR: 75,
    defGR: 55,
    resGR: 15,
    sex: "M",
    isChild: true,
    isRoyal: false
}
var ophelia = {
    n: "Ophelia",
    vName: "ophelia",
    baseClass: ["Dark Mage"],
    firstParent: odin,
    secondParent: ["-", "Azura", "Beruka", "Camilla", "Charlotte", "Corrin (F)", "Effie", "Elise", "Felicia", "Kagero", "Mozu", "Nyx", "Orochi", "Peri", "Selena"],
    baseHPGR: 45,
    baseStrGR: 15,
    baseMagGR: 45,
    baseSklGR: 40,
    baseSpdGR: 45,
    baseLckGR: 65,
    baseDefGR: 20,
    baseResGR: 30,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 45,
    strGR: 15,
    magGR: 45,
    sklGR: 40,
    spdGR: 45,
    lckGR: 65,
    defGR: 20,
    resGR: 30,
    sex: "F",
    isChild: true,
    isRoyal: false 
}
var soleil = {
    n: "Soleil",
    vName: "soleil",
    baseClass: ["Mercenary"],
    firstParent: laslow,
    secondParent: ["-", "Azura", "Beruka", "Camilla", "Charlotte", "Corrin (F)", "Effie", "Elise", "Felicia", "Hana", "Mozu", "Nyx", "Orochi", "Peri", "Selena"],
    baseHPGR: 25,
    baseStrGR: 60,
    baseMagGR: 0,
    baseSklGR: 35,
    baseSpdGR: 35,
    baseLckGR: 45,
    baseDefGR: 35,
    baseResGR: 40,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 25,
    strGR: 60,
    magGR: 0,
    sklGR: 35,
    spdGR: 35,
    lckGR: 45,
    defGR: 35,
    resGR: 40,
    sex: "F",
    isChild: true,
    isRoyal: false 
}
var nina = {
    n: "Nina",
    vName: "nina",
    baseClass: ["Outlaw"],
    firstParent: niles,
    secondParent: ["-", "Azura", "Beruka", "Camilla", "Charlotte", "Corrin (F)", "Effie", "Elise", "Felicia", "Mozu", "Nyx", "Oboro", "Peri", "Selena", "Setsuna"],
    baseHPGR: 30,
    baseStrGR: 45,
    baseMagGR: 30,
    baseSklGR: 35,
    baseSpdGR: 40,
    baseLckGR: 50,
    baseDefGR: 25,
    baseResGR: 45,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 30,
    strGR: 45,
    magGR: 30,
    sklGR: 35,
    spdGR: 40,
    lckGR: 50,
    defGR: 25,
    resGR: 45,
    sex: "F",
    isChild: true,
    isRoyal: false
}
var shiro = {
    n: "Shiro",
    vName: "shiro",
    baseClass: ["Spear Fighter"],
    firstParent: ryoma,
    secondParent: ["-", "Azura", "Camilla", "Corrin (F)", "Elise", "Felicia", "Hana", "Kagero", "Mozu", "Oboro", "Orochi", "Rinkah", "Setsuna"],
    baseHPGR: 50,
    baseStrGR: 50,
    baseMagGR: 0,
    baseSklGR: 40,
    baseSpdGR: 35,
    baseLckGR: 35,
    baseDefGR: 45,
    baseResGR: 30,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 50,
    strGR: 50,
    magGR: 0,
    sklGR: 40,
    spdGR: 35,
    lckGR: 35,
    defGR: 45,
    resGR: 30,
    sex: "M",
    isChild: true,
    isRoyal: true
}
var kiragi = {
    n: "Kiragi",
    vName: "kiragi",
    baseClass: ["Archer"],
    firstParent: takumi,
    secondParent: ["-", "Azura", "Camilla", "Corrin (F)", "Elise", "Felicia", "Hana", "Kagero", "Mozu", "Oboro", "Orochi", "Rinkah", "Setsuna"],
    baseHPGR: 45,
    baseStrGR: 40,
    baseMagGR: 0,
    baseSklGR: 45,
    baseSpdGR: 50,
    baseLckGR: 45,
    baseDefGR: 40,
    baseResGR: 15,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 45,
    strGR: 40,
    magGR: 0,
    sklGR: 45,
    spdGR: 50,
    lckGR: 45,
    defGR: 40,
    resGR: 15,
    sex: "M",
    isChild: true,
    isRoyal: true
}
var asugi = {
    n: "Asugi",
    vName: "asugi",
    baseClass: ["Ninja"],
    firstParent: saizo,
    secondParent: ["-", "Azura", "Beruka", "Charlotte", "Corrin (F)", "Felicia", "Hana", "Hinoka", "Kagero", "Mozu", "Oboro", "Orochi", "Rinkah", "Sakura", "Setsuna"],
    baseHPGR: 40,
    baseStrGR: 45,
    baseMagGR: 50,
    baseSklGR: 55,
    baseSpdGR: 45,
    baseLckGR: 50,
    baseDefGR: 30,
    baseResGR: 20,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 40,
    strGR: 45,
    magGR: 50,
    sklGR: 55,
    spdGR: 45,
    lckGR: 50,
    defGR: 30,
    resGR: 20,
    sex: "M",
    isChild: true,
    isRoyal: false 
}
var selkie = {
    n: "Selkie",
    vName: "selkie",
    baseClass: ["Kitsune"],
    firstParent: kaden,
    secondParent: ["-", "Azura", "Charlotte", "Corrin (F)", "Felicia", "Hana", "Hinoka", "Kagero", "Mozu", "Oboro", "Orochi", "Peri", "Rinkah", "Sakura", "Setsuna"],
    baseHPGR: 35,
    baseStrGR: 30,
    baseMagGR: 15,
    baseSklGR: 35,
    baseSpdGR: 55,
    baseLckGR: 60,
    baseDefGR: 30,
    baseResGR: 50,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 35,
    strGR: 30,
    magGR: 15,
    sklGR: 35,
    spdGR: 55,
    lckGR: 60,
    defGR: 30,
    resGR: 50,
    sex: "F",
    isChild: true,
    isRoyal: false
}
var hisame = {
    n: "Hisame",
    vName: "hisame",
    baseClass: ["Samurai"],
    firstParent: hinata,
    secondParent: ["-", "Azura", "Corrin (F)", "Felicia", "Hana", "Hinoka", "Kagero", "Mozu", "Oboro", "Orochi", "Peri", "Rinkah", "Sakura", "Selena", "Setsuna"],
    baseHPGR: 50,
    baseStrGR: 40,
    BaseMagGR: 0,
    baseSklGR: 40,
    baseSpdGR: 40,
    baseLckGR: 25,
    baseDefGR: 30,
    baseResGR: 20,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 50,
    strGR: 40,
    magGR: 0,
    sklGR: 40,
    spdGR: 40,
    lckGR: 25,
    defGR: 30,
    resGR: 20,
    sex: "M",
    isChild: true,
    isRoyal: false 
}
var mitama = {
    n: "Mitama",
    vName: "mitama",
    baseClass: ["Shrine Maiden"],
    firstParent: azama,
    secondParent: ["-", "Azura", "Beruka", "Corrin (F)", "Effie", "Felicia", "Hana", "Hinoka", "Kagero", "Mozu", "Oboro", "Orochi", "Rinkah", "Sakura", "Setsuna"],
    baseHPGR: 45,
    baseStrGR: 40,
    baseMagGR: 35,
    baseSklGR: 45,
    baseSpdGR: 50,
    baseLckGR: 50,
    baseDefGR: 30,
    baseResGR: 20,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 45,
    strGR: 40,
    magGR: 35,
    sklGR: 45,
    spdGR: 50,
    lckGR: 50,
    defGR: 30,
    resGR: 20,
    sex: "F",
    isChild: true,
    isRoyal: false
}
var caeldori = {
    n: "Caeldori",
    vName: "caeldori",
    baseClass: ["Sky Knight"],
    firstParent: subaki,
    secondParent: ["-", "Azura", "Corrin (F)", "Felicia", "Hana", "Hinoka", "Kagero", "Mozu", "Nyx", "Oboro", "Orochi", "Rinkah", "Sakura", "Selena", "Setsuna"],
    baseHPGR: 55,
    baseStrGR: 35,
    baseMagGR: 15,
    baseSklGR: 40,
    baseSpdGR: 40,
    baseLckGR: 45,
    baseDefGR: 35,
    baseResGR: 20,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 55,
    strGR: 35,
    magGR: 15,
    sklGR: 40,
    spdGR: 40,
    lckGR: 45,
    defGR: 35,
    resGR: 20,
    sex: "F",
    isChild: true,
    isRoyal: false
}
var rhajat = {
    n: "Rhajat",
    vName: "rhajat",
    baseClass: ["Diviner"],
    firstParent: hayato,
    secondParent: ["-", "Azura", "Corrin (F)", "Effie", "Felicia", "Hana", "Hinoka", "Kagero", "Mozu", "Nyx", "Oboro", "Orochi", "Rinkah", "Sakura", "Setsuna"],
    baseHPGR: 40,
    baseStrGR: 15,
    baseMagGR: 60,
    baseSklGR: 10,
    baseSpdGR: 50,
    baseLckGR: 30,
    baseDefGR: 25,
    baseResGR: 35,
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 40,
    strGR: 15,
    magGR: 60,
    sklGR: 10,
    spdGR: 50,
    lckGR: 30,
    defGR: 25,
    resGR: 35,
    sex: "F",
    isChild: true,
    isRoyal: false
}
var allParents = [corrinF, corrinM, gunter, felicia, jakob, kaze, azura, silas, shura, izana, mozu, elise, arthur, effie, odin, niles, nyx, camilla, selena, beruka, laslow, peri, benny, charlotte, leo, keaton, xander, flora, dwyer, shigure, sophie, midori, siegbert, forrest, ignatius, velouria, percy, ophelia, soleil, nina, rinkah, sakura, hana, subaki, saizo, orochi, hinoka, azama, setsuna, hayato, oboro, hinata, takumi, kagero, reina, kaden, ryoma, scarlet, yukimura, shiro, kiragi, asugi, selkie, hisame, mitama, caeldori, rhajat];
var allFG = [corrinF, corrinM, gunter, felicia, jakob, kaze, azura, silas, shura, izana, mozu, elise, arthur, effie, odin, niles, nyx, camilla, selena, beruka, laslow, peri, benny, charlotte, leo, keaton, xander, flora, rinkah, sakura, hana, subaki, saizo, orochi, hinoka, azama, setsuna, hayato, oboro, hinata, takumi, kagero, reina, kaden, ryoma, scarlet, yukimura];
var allKiddies = [kanaF, kanaM, dwyer, shigure, sophie, midori, siegbert, forrest, ignatius, velouria, percy, ophelia, soleil, nina, shiro, kiragi, asugi, selkie, hisame, mitama, caeldori, rhajat];
/* accepts unit object and returns array of unit's base growth rates */
function getGRBaseArr(unit) {
    return [unit.baseHPGR, unit.baseStrGR, unit.baseMagGR, unit.baseSklGR, unit.baseSpdGR, unit.baseLckGR, unit.baseDefGR, unit.baseResGR];
}
/* accepts unit object and returns array of unit's growth rates */
function getGRArrU(unit) {
    return [unit.hpGR, unit.strGR, unit.magGR, unit.sklGR, unit.spdGR, unit.lckGR, unit.defGR, unit.resGR];
}
