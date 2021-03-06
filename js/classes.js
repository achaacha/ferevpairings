//classes.js

var nohrPrincess = {
    n: "Nohr Princess",
    promotesTo: ["Nohr Noble", "Hoshido Noble"],
    llCl: "-",
    maxHP: 40,
    maxStr: 23,
    maxMag: 17,
    maxSkl: 19,
    maxSpd: 21,
    maxLck: 22,
    maxDef: 21,
    maxRes: 19,
    hpGR: 15,
    strGR: 15,
    magGR: 10,
    sklGR: 10,
    spdGR: 10,
    lckGR: 10,
    defGR: 10,
    resGR: 5,
    pb: [2, 0, 1, 1, 2, 0, 0, 0]
}
var nohrPrince = {
    n: "Nohr Prince",
    promotesTo: ["Nohr Noble", "Hoshido Noble"],
    llCl: "-",
    maxHP: 40,
    maxStr: 23,
    maxMag: 17,
    maxSkl: 19,
    maxSpd: 21,
    maxLck: 22,
    maxDef: 21,
    maxRes: 19,
    hpGR: 15,
    strGR: 15,
    magGR: 10,
    sklGR: 10,
    spdGR: 10,
    lckGR: 10,
    defGR: 10,
    resGR: 5,
    pb: [2, 0, 1, 1, 2, 0, 0, 0]
}
var nohrNoble = {
    n: "Nohr Noble",
    maxHP: 60,
    maxStr: 32,
    maxMag: 31,
    maxSkl: 28,
    maxSpd: 32,
    maxLck: 27,
    maxDef: 29,
    maxRes: 32,
    hpGR: 15,
    strGR: 10,
    magGR: 15,
    sklGR: 5,
    spdGR: 15,
    lckGR: 5,
    defGR: 5,
    resGR: 15,
    pb: [2, 2, 1, 1, 0, 0, 2, 0]
}
var cavalier = {
    n: "Cavalier",
    talentN: "Cavalier",
    promotesTo: ["Paladin", "Great Knight"],
    llCl: "Ninja",
    maxHP: 40,
    maxStr: 22,
    maxMag: 15,
    maxSkl: 21,
    maxSpd: 20,
    maxLck: 24,
    maxDef: 22,
    maxRes: 21,
    hpGR: 10,
    strGR: 15,
    magGR: 0,
    sklGR: 10,
    spdGR: 10,
    lckGR: 15,
    defGR: 10,
    resGR: 5,
    pb: [2, 0, 0, 0, 0, 2, 2, 0]
}
var paladin = {
    n: "Paladin",
    maxHP: 60,
    maxStr: 31,
    maxMag: 26,
    maxSkl: 30,
    maxSpd: 30,
    maxLck: 32,
    maxDef: 32,
    maxRes: 32,
    hpGR: 10,
    strGR: 15,
    magGR: 0,
    sklGR: 10,
    spdGR: 10,
    lckGR: 15,
    defGR: 10,
    resGR: 10,
    pb: [2, 0, 0, 0, 0, 2, 2, 1]
}
var greatKnight = {
    n: "Great Knight",
    maxHP: 65,
    maxStr: 35,
    maxMag: 25,
    maxSkl: 29,
    maxSpd: 27,
    maxLck: 28,
    maxDef: 37,
    maxRes: 28,
    hpGR: 20,
    strGR: 20,
    magGR: 0,
    sklGR: 10,
    spdGR: 5,
    lckGR: 5,
    defGR: 20,
    resGR: 0,
    pb: [2, 0, 0, 0, 0, 4, 0, 1]
}
var knight = {
    n: "Knight",
    talentN: "Knight",
    promotesTo: ["Great Knight", "General"],
    llCl: "Spear Fighter",
    maxHP: 45,
    maxStr: 24,
    maxMag: 15,
    maxSkl: 22,
    maxSpd: 17,
    maxLck: 22,
    maxDef: 26,
    maxRes: 18,
    hpGR: 20,
    strGR: 20,
    magGR: 0,
    sklGR: 15,
    spdGR: 5,
    lckGR: 10,
    defGR: 20,
    resGR: 0,
    pb: [2, 0, 0, 0, 0, 4, 0, 0]
}
var general = {
    n: "General",
    maxHP: 70,
    maxStr: 38,
    maxMag: 25,
    maxSkl: 32,
    maxSpd: 25,
    maxLck: 32,
    maxDef: 40,
    maxRes: 30,
    hpGR: 25,
    strGR: 20,
    magGR: 0,
    sklGR: 15,
    spdGR: 0,
    lckGR: 10,
    defGR: 20,
    resGR: 5,
    pb: [3, 0, 0, 0, 0, 5, 0, 0]
}
var fighter = {
    n: "Fighter",
    talentN: "Fighter",
    promotesTo: ["Berserker", "Hero"],
    llCl: "Oni Savage",
    maxHP: 45,
    maxStr: 25,
    maxMag: 15,
    maxSkl: 23,
    maxSpd: 22,
    maxLck: 21,
    maxDef: 19,
    maxRes: 18,
    hpGR: 20,
    strGR: 20,
    magGR: 0,
    sklGR: 15,
    spdGR: 15,
    lckGR: 5,
    defGR: 5,
    resGR: 0,
    pb: [4, 0, 0, 2, 0, 0, 0, 0]
}
var berserker = {
    n: "Berserker",
    maxHP: 70,
    maxStr: 40,
    maxMag: 25,
    maxSkl: 32,
    maxSpd: 33,
    maxLck: 25,
    maxDef: 27,
    maxRes: 25,
    hpGR: 30,
    strGR: 25,
    magGR: 0,
    sklGR: 15,
    spdGR: 15,
    lckGR: 0,
    defGR: 0,
    resGR: 0,
    pb: [5, 0, 0, 3, 0, 0, 0, 0]
}
var mercenary = {
    n: "Mercenary",
    talentN: "Mercenary",
    promotesTo: ["Hero", "Bow Knight"],
    llCl: "Samurai",
    maxHP: 40,
    maxStr: 22,
    maxMag: 15,
    maxSkl: 24,
    maxSpd: 22,
    maxLck: 20,
    maxDef: 21,
    maxRes: 19,
    hpGR: 10,
    strGR: 15,
    magGR: 0,
    sklGR: 20,
    spdGR: 15,
    lckGR: 5,
    defGR: 10,
    resGR: 5,
    pb: [0, 0, 2, 3, 0, 1, 0, 0]
}
var hero = {
    n: "Hero",
    maxHP: 60,
    maxStr: 32,
    maxMag: 25,
    maxSkl: 35,
    maxSpd: 32,
    maxLck: 31,
    maxDef: 30,
    maxRes: 27,
    hpGR: 20,
    strGR: 15,
    magGR: 0,
    sklGR: 20,
    spdGR: 15,
    lckGR: 5,
    defGR: 10,
    resGR: 0,
    pb: [0, 0, 3, 3, 0, 2, 0, 0]
}
var bowKnight = {
    n: "Bow Knight",
    maxHP: 55,
    maxStr: 29,
    maxMag: 25,
    maxSkl: 32,
    maxSpd: 33,
    maxLck: 30,
    maxDef: 27,
    maxRes: 32,
    hpGR: 10,
    strGR: 10,
    magGR: 0,
    sklGR: 15,
    spdGR: 15,
    lckGR: 10,
    defGR: 0,
    resGR: 10,
    pb: [0, 0, 3, 3, 0, 0, 0, 1]
}
var outlaw = {
    n: "Outlaw",
    talentN: "Outlaw",
    promotesTo: ["Adventurer", "Bow Knight"],
    llCl: "Archer",
    maxHP: 35,
    maxStr: 19,
    maxMag: 18,
    maxSkl: 20,
    maxSpd: 24,
    maxLck: 18,
    maxDef: 17,
    maxRes: 22,
    hpGR: 0,
    strGR: 10,
    magGR: 5,
    sklGR: 10,
    spdGR: 20,
    lckGR: 0,
    defGR: 0,
    resGR: 20,
    pb: [0, 0, 0, 2, 0, 0, 2, 1]
}
var adventurer = {
    n: "Adventurer",
    maxHP: 50,
    maxStr: 27,
    maxMag: 31,
    maxSkl: 27,
    maxSpd: 34,
    maxLck: 27,
    maxDef: 25,
    maxRes: 34,
    hpGR: 0,
    strGR: 5,
    magGR: 15,
    sklGR: 5,
    spdGR: 20,
    lckGR: 0,
    defGR: 0,
    resGR: 20,
    pb: [0, 0, 0, 4, 0, 0, 2, 1]
}
var wyvernRider = {
    n: "Wyvern Rider",
    talentN: "Dragon",
    promotesTo: ["Malig Knight", "Wyvern Lord"],
    llCl: "Sky Knight",
    maxHP: 40,
    maxStr: 22,
    maxMag: 17,
    maxSkl: 21,
    maxSpd: 20,
    maxLck: 19,
    maxDef: 24,
    maxRes: 15,
    hpGR: 10,
    strGR: 15,
    magGR: 5,
    sklGR: 10,
    spdGR: 10,
    lckGR: 5,
    defGR: 20,
    resGR: 0,
    pb: [3, 0, 0, 0, 0, 3, 0, 0]
}
var wyvernLord = {
    n: "Wyvern Lord",
    maxHP: 60,
    maxStr: 33,
    maxMag: 25,
    maxSkl: 33,
    maxSpd: 29,
    maxLck: 28,
    maxDef: 35,
    maxRes: 26,
    hpGR: 10,
    strGR: 15,
    magGR: 0,
    sklGR: 15,
    spdGR: 10,
    lckGR: 5,
    defGR: 20,
    resGR: 0,
    pb: [3, 0, 0, 0, 0, 3, 0, 1]
}
var maligKnight = {
    n: "Malig Knight",
    maxHP: 55,
    maxStr: 31,
    maxMag: 30,
    maxSkl: 28,
    maxSpd: 27,
    maxLck: 25,
    maxDef: 31,
    maxRes: 31,
    hpGR: 0,
    strGR: 15,
    magGR: 15,
    sklGR: 10,
    spdGR: 5,
    lckGR: 0,
    defGR: 10,
    resGR: 15,
    pb: [0, 2, 0, 0, 0, 2, 2, 1]
}
var darkMage = {
    n: "Dark Mage",
    talentN: ["Mage"],
    promotesTo: ["Dark Knight", "Sorcerer"],
    llCl: "Diviner",
    maxHP: 35,
    maxStr: 19,
    maxMag: 24,
    maxSkl: 16,
    maxSpd: 19,
    maxLck: 18,
    maxDef: 19,
    maxRes: 22,
    hpGR: 0,
    strGR: 10,
    magGR: 20,
    sklGR: 0,
    spdGR: 10,
    lckGR: 0,
    defGR: 5,
    resGR: 10,
    pb: [0, 3, 0, 0, 0, 0, 3, 0]
}
var sorcerer = {
    n: "Sorcerer",
    maxHP: 50,
    maxStr: 25,
    maxMag: 35,
    maxSkl: 26,
    maxSpd: 29,
    maxLck: 26,
    maxDef: 29,
    maxRes: 33,
    hpGR: 0,
    strGR: 0,
    magGR: 25,
    sklGR: 0,
    spdGR: 10,
    lckGR: 0,
    defGR: 5,
    resGR: 15,
    pb: [0, 5, 0, 0, 0, 0, 3, 0]
}
var darkKnight = {
    n: "Dark Knight",
    maxHP: 55,
    maxStr: 32,
    maxMag: 31,
    maxSkl: 28,
    maxSpd: 27,
    maxLck: 31,
    maxDef: 34,
    maxRes: 30,
    hpGR: 15,
    strGR: 20,
    magGR: 10,
    sklGR: 5,
    spdGR: 5,
    lckGR: 5,
    defGR: 15,
    resGR: 5,
    pb: [0, 3, 0, 0, 0, 3, 0, 1]
}
var troubadour = {
    n: "Troubadour",
    talentN: "Troubadour",
    promotesTo: ["Maid", "Strategist"],
    llCl: "-",
    maxHP: 35,
    maxStr: 16,
    maxMag: 19,
    maxSkl: 24,
    maxSpd: 20,
    maxLck: 23,
    maxDef: 16,
    maxRes: 21,
    hpGR: 0,
    strGR: 0,
    magGR: 10,
    sklGR: 20,
    spdGR: 10,
    lckGR: 15,
    defGR: 0,
    resGR: 15,
    pb: [0, 2, 0, 0, 2, 0, 2, 0]
}
var strategist = {
    n: "Strategist",
    maxHP: 45,
    maxStr: 25,
    maxMag: 33,
    maxSkl: 28,
    maxSpd: 31,
    maxLck: 33,
    maxDef: 25,
    maxRes: 32,
    hpGR: 0,
    strGR: 0,
    magGR: 15,
    sklGR: 5,
    spdGR: 10,
    lckGR: 20,
    defGR: 0,
    resGR: 15,
    pb: [0, 2, 0, 0, 2, 0, 2, 1]
}
var maid = {
    n: "Maid",
    maxHP: 50,
    maxStr: 28,
    maxMag: 31,
    maxSkl: 33,
    maxSpd: 33,
    maxLck: 32,
    maxDef: 29,
    maxRes: 29,
    hpGR: 0,
    strGR: 10,
    magGR: 10,
    sklGR: 15,
    spdGR: 15,
    lckGR: 10,
    defGR: 5,
    resGR: 10,
    pb: [0, 2, 0, 3, 3, 0, 0, 0]
}
var butler = {
    n: "Butler",
    maxHP: 50,
    maxStr: 28,
    maxMag: 31,
    maxSkl: 33,
    maxSpd: 33,
    maxLck: 32,
    maxDef: 29,
    maxRes: 29,
    hpGR: 0,
    strGR: 10,
    magGR: 10,
    sklGR: 15,
    spdGR: 15,
    lckGR: 10,
    defGR: 5,
    resGR: 10,
    pb: [0, 2, 0, 3, 3, 0, 0, 0]
}
var wolfskin = {
    n: "Wolfskin",
    promotesTo: ["Wolfssegner"],
    llCl: "Outlaw",
    maxHP: 45,
    maxStr: 24,
    maxMag: 15,
    maxSkl: 18,
    maxSpd: 22,
    maxLck: 17,
    maxDef: 21,
    maxRes: 15,
    hpGR: 20,
    strGR: 20,
    magGR: 0,
    sklGR: 5,
    spdGR: 15,
    lckGR: 5,
    defGR: 10,
    resGR: 0,
    pb: [3, 0, 0, 3, 0, 0, 0, 0]
}
var wolfssegner = {
    n: "Wolfssegner",
    maxHP: 65,
    maxStr: 36,
    maxMag: 25,
    maxSkl: 29,
    maxSpd: 31,
    maxLck: 26,
    maxDef: 32,
    maxRes: 26,
    hpGR: 20,
    strGR: 20,
    magGR: 0,
    sklGR: 5,
    spdGR: 15,
    lckGR: 5,
    defGR: 10,
    resGR: 0,
    pb: [4, 0, 0, 4, 0, 0, 0, 0]
}
var hoshidoNoble = {
    n: "Hoshido Noble",
    maxHP: 60,
    maxStr: 34,
    maxMag: 28,
    maxSkl: 29,
    maxSpd: 30,
    maxLck: 33,
    maxDef: 31,
    maxRes: 28,
    hpGR: 15,
    strGR: 15,
    magGR: 10,
    sklGR: 10,
    spdGR: 10,
    lckGR: 10,
    defGR: 15,
    resGR: 0,
    pb: [2, 0, 1, 1, 2, 2, 0, 0]
}
var samurai = {
    n: "Samurai",
    talentN: "Samurai",
    promotesTo: ["Swordmaster", "Master of Arms"],
    llCl: "Mercenary",
    maxHP: 40,
    maxStr: 20,
    maxMag: 16,
    maxSkl: 23,
    maxSpd: 25,
    maxLck: 24,
    maxDef: 18,
    maxRes: 20,
    hpGR: 10,
    strGR: 10,
    magGR: 0,
    sklGR: 15,
    spdGR: 20,
    lckGR: 15,
    defGR: 0,
    resGR: 10,
    pb: [0, 0, 0, 4, 2, 0, 0, 0]
}
var swordmaster = {
    n: "Swordmaster",
    maxHP: 55,
    maxStr: 30,
    maxMag: 28,
    maxSkl: 32,
    maxSpd: 35,
    maxLck: 33,
    maxDef: 27,
    maxRes: 31,
    hpGR: 10,
    strGR: 10,
    magGR: 5,
    sklGR: 15,
    spdGR: 20,
    lckGR: 15,
    defGR: 0,
    resGR: 10,
    pb: [0, 0, 0, 5, 3, 0, 0, 0]
}
var masterOfArms = {
    n: "Master of Arms",
    maxHP: 65,
    maxStr: 33,
    maxMag: 25,
    maxSkl: 30,
    maxSpd: 30,
    maxLck: 31,
    maxDef: 31,
    maxRes: 28,
    hpGR: 20,
    strGR: 15,
    magGR: 0,
    sklGR: 10,
    spdGR: 10,
    lckGR: 10,
    defGR: 10,
    resGR: 0,
    pb: [2, 0, 2, 2, 0, 2, 0, 0]
}
var oniSavage = {
    n: "Oni Savage",
    talentN: "Oni Savage",
    promotesTo: ["Oni Chieftain", "Blacksmith"],
    llCl: "Fighter",
    maxHP: 45,
    maxStr: 24,
    maxMag: 19,
    maxSkl: 16,
    maxSpd: 20,
    maxLck: 17,
    maxDef: 23,
    maxRes: 18,
    hpGR: 20,
    strGR: 20,
    magGR: 10,
    sklGR: 0,
    spdGR: 10,
    lckGR: 0,
    defGR: 20,
    resGR: 0,
    pb: [4, 0, 0, 0, 0, 2, 0, 0]
}
var oniChieftain = {
    n: "Oni Chieftain",
    maxHP: 60,
    maxStr: 34,
    maxMag: 28,
    maxSkl: 25,
    maxSpd: 30,
    maxLck: 25,
    maxDef: 36,
    maxRes: 31,
    hpGR: 10,
    strGR: 20,
    magGR: 15,
    sklGR: 0,
    spdGR: 10,
    lckGR: 0,
    defGR: 20,
    resGR: 5,
    pb: [4, 0, 0, 0, 0, 2, 0, 0]
}
var blacksmith = {
    n: "Blacksmith",
    maxHP: 65,
    maxStr: 33,
    maxMag: 25,
    maxSkl: 32,
    maxSpd: 31,
    maxLck: 30,
    maxDef: 32,
    maxRes: 27,
    hpGR: 20,
    strGR: 15,
    magGR: 0,
    sklGR: 15,
    spdGR: 10,
    lckGR: 5,
    defGR: 15,
    resGR: 0,
    pb: [3, 0, 2, 0, 0, 3, 0, 0]
}
var spearFighter = {
    n: "Spear Fighter",
    talentN: "Lancer",
    promotesTo: ["Spear Master", "Basara"],
    llCl: "Knight",
    maxHP: 40,
    maxStr: 22,
    maxMag: 15,
    maxSkl: 23,
    maxSpd: 22,
    maxLck: 21, 
    maxDef: 22,
    maxRes: 21,
    hpGR: 15,
    strGR: 15,
    magGR: 0,
    sklGR: 15,
    spdGR: 15,
    lckGR: 5,
    defGR: 10,
    resGR: 5,
    pb: [2, 0, 2, 2, 0, 0, 0, 0]
}
var spearMaster = {
    n: "Spear Master",
    maxHP: 60,
    maxStr: 34,
    maxMag: 25,
    maxSkl: 33,
    maxSpd: 32,
    maxLck: 29,
    maxDef: 30,
    maxRes: 29,
    hpGR: 15,
    strGR: 15,
    magGR: 0,
    sklGR: 15,
    spdGR: 15,
    lckGR: 5,
    defGR: 10,
    resGR: 5,
    pb: [3, 0, 3, 2, 0, 0, 0, 0]
}
var basara = {
    n: "Basara",
    maxHP: 65,
    maxStr: 31,
    maxMag: 30,
    maxSkl: 30,
    maxSpd: 31,
    maxLck: 35,
    maxDef: 30,
    maxRes: 32,
    hpGR: 20,
    strGR: 10,
    magGR: 10,
    sklGR: 10,
    spdGR: 10,
    lckGR: 15,
    defGR: 5,
    resGR: 10,
    pb: [0, 0, 0, 0, 5, 0, 3, 0]
}
var diviner = {
    n: "Diviner",
    talentN: "Diviner",
    promotesTo: ["Onmyoji", "Basara"],
    llCl: "Dark Mage",
    maxHP: 35,
    maxStr: 17,
    maxMag: 22,
    maxSkl: 20,
    maxSpd: 23,
    maxLck: 19,
    maxDef: 16,
    maxRes: 20,
    hpGR: 0,
    strGR: 5,
    magGR: 15,
    sklGR: 10,
    spdGR: 15,
    lckGR: 5,
    defGR: 0,
    resGR: 10,
    pb: [0, 3, 0, 3, 0, 0, 0, 0]
}
var onmyoji = {
    n: "Onmyoji",
    maxHP: 45,
    maxStr: 25,
    maxMag: 33,
    maxSkl: 31,
    maxSpd: 32,
    maxLck: 27,
    maxDef: 25,
    maxRes: 31,
    hpGR: 0,
    strGR: 0,
    magGR: 20,
    sklGR: 10,
    spdGR: 15,
    lckGR: 0,
    defGR: 0,
    resGR: 15,
    pb: [0, 4, 0, 4, 0, 0, 0, 0]
}
var shrineMaiden = {
    n: "Shrine Maiden",
    talentN: "Priestess",
    promotesTo: ["Priestess", "Onmyoji"],
    llCl: "-",
    maxHP: 35,
    maxStr: 18,
    maxMag: 21,
    maxSkl: 20,
    maxSpd: 22,
    maxLck: 23,
    maxDef: 17,
    maxRes: 24,
    hpGR: 0,
    strGR: 5,
    magGR: 10,
    sklGR: 10,
    spdGR: 15,
    lckGR: 15,
    defGR: 0,
    resGR: 20,
    pb: [0, 2, 0, 0, 2, 0, 2, 0]
}
var monk = {
    n: "Monk",
    talentN: "Monk",
    promotesTo: ["Onmyoji", "Great Master"],
    llCl: "-",
    maxHP: 35,
    maxStr: 18,
    maxMag: 21,
    maxSkl: 20,
    maxSpd: 22,
    maxLck: 23,
    maxDef: 17,
    maxRes: 24,
    hpGR: 0,
    strGR: 5,
    magGR: 10,
    sklGR: 10,
    spdGR: 15,
    lckGR: 15,
    defGR: 0,
    resGR: 20,
    pb: [0, 2, 0, 0, 2, 0, 2, 0]
}
var greatMaster = {
    n: "Great Master",
    maxHP: 55,
    maxStr: 32,
    maxMag: 30,
    maxSkl: 31,
    maxSpd: 33,
    maxLck: 32,
    maxDef: 28,
    maxRes: 32,
    hpGR: 10,
    strGR: 15,
    magGR: 5,
    sklGR: 5,
    spdGR: 15,
    lckGR: 15,
    defGR: 10,
    resGR: 10,
    pb: [0, 3, 0, 0, 2, 0, 3, 0]
}
var priestess = {
    n: "Priestess",
    maxHP: 50,
    maxStr: 29,
    maxMag: 32,
    maxSkl: 30,
    maxSpd: 33,
    maxLck: 34,
    maxDef: 26,
    maxRes: 34,
    hpGR: 10,
    strGR: 10,
    magGR: 10,
    sklGR: 5,
    spdGR: 15,
    lckGR: 15,
    defGR: 0,
    resGR: 20,
    pb: [0, 3, 0, 0, 2, 0, 3, 0]
}
var skyKnight = {
    n: "Sky Knight",
    talentN: "Sky Knight",
    promotesTo: ["Falcon Knight", "Kinshi Knight"],
    llCl: "Wyvern Rider",
    maxHP: 35,
    maxStr: 19,
    maxMag: 16,
    maxSkl: 21,
    maxSpd: 23,
    maxLck: 25,
    maxDef: 18,
    maxRes: 25,
    hpGR: 0,
    strGR: 10,
    magGR: 0,
    sklGR: 10,
    spdGR: 15,
    lckGR: 20,
    defGR: 0,
    resGR: 20,
    pb: [0, 0, 0, 3, 0, 0, 3, 0]
}
var falconKnight = {
    n: "Falcon Knight",
    maxHP: 55,
    maxStr: 28,
    maxMag: 27,
    maxSkl: 30,
    maxSpd: 34,
    maxLck: 35,
    maxDef: 27,
    maxRes: 35,
    hpGR: 0,
    strGR: 10,
    magGR: 10,
    sklGR: 10,
    spdGR: 15,
    lckGR: 20,
    defGR: 0,
    resGR: 20,
    pb: [0, 0, 0, 3, 0, 0, 3, 1]
}
var kinshiKnight = {
    n: "Kinshi Knight",
    maxHP: 50,
    maxStr: 27,
    maxMag: 26,
    maxSkl: 33,
    maxSpd: 31,
    maxLck: 34,
    maxDef: 25,
    maxRes: 31,
    hpGR: 0,
    strGR: 5,
    magGR: 0,
    sklGR: 15,
    spdGR: 15,
    lckGR: 15,
    defGR: 0,
    resGR: 15,
    pb: [0, 0, 2, 2, 2, 0, 0, 1]
}
var archer = {
    n: "Archer",
    talentN: "Archer",
    promotesTo: ["Sniper", "Kinshi Knight"],
    llCl: "Outlaw",
    maxHP: 40,
    maxStr: 21,
    maxMag: 15,
    maxSkl: 23,
    maxSpd: 21,
    maxLck: 20,
    maxDef: 20,
    maxRes: 17,
    hpGR: 10,
    strGR: 15,
    magGR: 0,
    sklGR: 15,
    spdGR: 15,
    lckGR: 5,
    defGR: 10,
    resGR: 0,
    pb: [2, 0, 2, 2, 0, 0, 0, 0]
}
var sniper = {
    n: "Sniper",
    maxHP: 55,
    maxStr: 31,
    maxMag: 25,
    maxSkl: 35,
    maxSpd: 33,
    maxLck: 30,
    maxDef: 31,
    maxRes: 28,
    hpGR: 10,
    strGR: 15,
    magGR: 0,
    sklGR: 20,
    spdGR: 15,
    lckGR: 5,
    defGR: 10,
    resGR: 0,
    pb: [2, 0, 3, 3, 0, 0, 0, 0]
}
var ninja = {
    n: "Ninja",
    talentN: "Ninja",
    promotesTo: ["Mechanist", "Master Ninja"],
    llCl: "Cavalier",
    maxHP: 35,
    maxStr: 17,
    maxMag: 15,
    maxSkl: 25,
    maxSpd: 25,
    maxLck: 18,
    maxDef: 19,
    maxRes: 20,
    hpGR: 5,
    strGR: 5,
    magGR: 0,
    sklGR: 20,
    spdGR: 20,
    lckGR: 0,
    defGR: 5,
    resGR: 15,
    pb: [0, 0, 1, 3, 0, 0, 0, 1]
}
var masterNinja = {
    n: "Master Ninja",
    maxHP: 55,
    maxStr: 27,
    maxMag: 25,
    maxSkl: 35,
    maxSpd: 35,
    maxLck: 28,
    maxDef: 26,
    maxRes: 34,
    hpGR: 5,
    strGR: 5,
    magGR: 0,
    sklGR: 20,
    spdGR: 20,
    lckGR: 0,
    defGR: 5,
    resGR: 20,
    pb: [0, 0, 2, 4, 0, 0, 0, 1]
}
var mechanist = {
    n: "Mechanist",
    maxHP: 60,
    maxStr: 30,
    maxMag: 25,
    maxSkl: 33,
    maxSpd: 30,
    maxLck: 30,
    maxDef: 31,
    maxRes: 31,
    hpGR: 10,
    strGR: 10,
    magGR: 0,
    sklGR: 15,
    spdGR: 10,
    lckGR: 5,
    defGR: 5,
    resGR: 15,
    pb: [2, 0, 2, 0, 0, 2, 2, 0]
}
var apothecary = {
    n: "Apothecary",
    talentN: "Apothecary",
    promotesTo: ["Merchant", "Mechanist"],
    llCl: "-",
    maxHP: 45,
    maxStr: 24,
    maxMag: 15,
    maxSkl: 19,
    maxSpd: 19,
    maxLck: 21,
    maxDef: 23,
    maxRes: 20,
    hpGR: 20,
    strGR: 20,
    magGR: 0,
    sklGR: 10,
    spdGR: 10,
    lckGR: 5,
    defGR: 10,
    resGR: 5,
    pb: [3, 0, 0, 0, 0, 2, 1, 0]
}
var merchant = {
    n: "Merchant",
    maxHP: 65,
    maxStr: 33,
    maxMag: 25,
    maxSkl: 29,
    maxSpd: 28,
    maxLck: 32,
    maxDef: 33,
    maxRes: 30,
    hpGR: 20,
    strGR: 20,
    magGR: 0,
    sklGR: 10,
    spdGR: 5,
    lckGR: 15,
    defGR: 10,
    resGR: 5,
    pb: [3, 0, 0, 0, 0, 3, 2, 0]
}
var kitsune = {
    n: "Kitsune",
    promotesTo: ["Nine-Tails"],
    llCl: "Apothecary",
    maxHP: 40,
    maxStr: 20,
    maxMag: 18,
    maxSkl: 23,
    maxSpd: 24,
    maxLck: 24,
    maxDef: 18,
    maxRes: 23,
    hpGR: 10,
    strGR: 10,
    magGR: 0,
    sklGR: 15,
    spdGR: 20,
    lckGR: 10,
    defGR: 0,
    resGR: 20,
    pb: [0, 0, 0, 4, 2, 0, 0, 0]
}
var nineTails = {
    n: "Nine-Tails",
    maxHP: 55,
    maxStr: 29,
    maxMag: 29,
    maxSkl: 33,
    maxSpd: 34,
    maxLck: 33,
    maxDef: 27,
    maxRes: 34,
    hpGR: 10,
    strGR: 10,
    magGR: 0,
    sklGR: 15,
    spdGR: 20,
    lckGR: 10,
    defGR: 0,
    resGR: 20,
    pb: [0, 0, 0, 5, 3, 0, 0, 0]
}
var songstress = {
    n: "Songstress",
    llCl: "Troubadour",
    promotesTo: [],
    maxHP: 45,
    maxStr: 28,
    maxMag: 27,
    maxSkl: 31,
    maxSpd: 31,
    maxLck: 35,
    maxDef: 27,
    maxRes: 28,
    hpGR: 0,
    strGR: 10,
    magGR: 0,
    sklGR: 20,
    spdGR: 20,
    lckGR: 20,
    defGR: 0,
    resGR: 0,
    pb: [0, 0, 2, 2, 4, 0, 0, 0]
}
var villager = {
    n: "Villager",
    llCl: "Apothecary",
    promotesTo: ["Master of Arms", "Merchant"],
    maxHP: 35,
    maxStr: 19,
    maxMag: 15,
    maxSkl: 19,
    maxSpd: 19,
    maxLck: 22,
    maxDef: 18,
    maxRes: 15,
    hpGR: 10,
    strGR: 10,
    magGR: 0,
    sklGR: 10,
    spdGR: 10,
    lckGR: 20,
    defGR: 10,
    resGR: 0,
    pb: [0, 0, 3, 0, 3, 0, 0, 0]
}
var dreadFighter = {
    n: "Dread Fighter",
    maxHP: 55,
    maxStr: 32, 
    maxMag: 28,
    maxSkl: 29,
    maxSpd: 31,
    maxLck: 26,
    maxDef: 29,
    maxRes: 34,
    hpGR: 15,
    strGR: 15,
    magGR: 5,
    sklGR: 5,
    spdGR: 15,
    lckGR: 0,
    defGR: 5,
    resGR: 20,
    pb: [2, 0, 0, 2, 0, 0, 4, 0]
}
var darkFalcon = {
    n: "Dark Falcon",
    maxHP: 45,
    maxStr: 27,
    maxMag: 32,
    maxSkl: 28,
    maxSpd: 33,
    maxLck: 32,
    maxDef: 26,
    maxRes: 34,
    hpGR: 0,
    strGR: 10,
    magGR: 15,
    sklGR: 5,
    spdGR: 15,
    lckGR: 15,
    defGR: 0,
    resGR: 20,
    pb: [0, 3, 0, 3, 0, 0, 0, 1]
}
var ballistician = {
    n: "Ballistician",
    maxHP: 50,
    maxStr: 39,
    maxMag: 25,
    maxSkl: 31,
    maxSpd: 25,
    maxLck: 32,
    maxDef: 27,
    maxRes: 26,
    hpGR: 5,
    strGR: 25,
    magGR: 0,
    sklGR: 15,
    spdGR: 0,
    lckGR: 10,
    defGR: 5,
    resGR: 5,
    pb: [3, 0, 1, 0, 2, 1, 1, 0]
}
var witch = {
    n: "Witch",
    maxHP: 50,
    maxStr: 25,
    maxMag: 36,
    maxSkl: 27,
    maxSpd: 34,
    maxLck: 28,
    maxDef: 26,
    maxRes: 29,
    hpGR: 5,
    strGR: 0,
    magGR: 25,
    sklGR: 5,
    spdGR: 20,
    lckGR: 5,
    defGR: 0,
    resGR: 10,
    pb: [0, 5, 0, 3, 0, 0, 0, 0]
}
var lodestar = {
    n: "Lodestar",
    maxHP: 60,
    maxStr: 29,
    maxMag: 26,
    maxSkl: 35,
    maxSpd: 33,
    maxLck: 40,
    maxDef: 30,
    maxRes: 29,
    hpGR: 15,
    strGR: 10,
    magGR: 0,
    sklGR: 20,
    spdGR: 10,
    lckGR: 25,
    defGR: 5,
    resGR: 5,
    pb: [2, 0, 0, 3, 3, 0, 0, 0]
}
var vanguard = {
    n: "Vanguard",
    maxHP: 65,
    maxStr: 36,
    maxMag: 25,
    maxSkl: 29,
    maxSpd: 30,
    maxLck: 30,
    maxDef: 32,
    maxRes: 27,
    hpGR: 20,
    strGR: 20,
    magGR: 0,
    sklGR: 5,
    spdGR: 5,
    lckGR: 10,
    defGR: 15,
    resGR: 0,
    pb: [5, 0, 0, 0, 0, 3, 0, 0]
}
var greatLord = {
    n: "Great Lord",
    maxHP: 60,
    maxStr: 30,
    maxMag: 25,
    maxSkl: 32,
    maxSpd: 34,
    maxLck: 35,
    maxDef: 29,
    maxRes: 31,
    hpGR: 15,
    strGR: 15,
    magGR: 0,
    sklGR: 10,
    spdGR: 10,
    lckGR: 15,
    defGR: 10,
    resGR: 5,
    pb: [0, 0, 0, 4, 4, 0, 0, 0]
}
var grandmaster = {
    n: "Grandmaster",
    maxHP: 55,
    maxStr: 31,
    maxMag: 33,
    maxSkl: 33,
    maxSpd: 29,
    maxLck: 26,
    maxDef: 28,
    maxRes: 33,
    hpGR: 10,
    strGR: 15,
    magGR: 15,
    sklGR: 15,
    spdGR: 5,
    lckGR: 0,
    defGR: 5,
    resGR: 15,
    pb: [2, 2, 2, 2, 0, 0, 0, 0]
}
var noClass = { //lol
    n: "-",
    talentN: "-",
    promotesTo: [],
    hpGR: 0,
    strGR: 0,
    magGR: 0,
    sklGR: 0,
    spdGR: 0,
    lckGR: 0,
    defGR: 0,
    resGR: 0
}
var allClasses = [nohrPrincess, nohrPrince, nohrNoble, cavalier, paladin, greatKnight, knight, general, fighter, berserker, mercenary, hero, bowKnight, outlaw, adventurer, wyvernRider, wyvernLord, maligKnight, darkMage, sorcerer, darkKnight, troubadour, strategist, maid, butler, wolfskin, wolfssegner, hoshidoNoble, samurai, swordmaster, masterOfArms, oniSavage, oniChieftain, blacksmith, spearFighter, spearMaster, basara, diviner, onmyoji, monk, shrineMaiden, greatMaster, priestess, skyKnight, falconKnight, kinshiKnight, archer, sniper, ninja, masterNinja, mechanist, apothecary, merchant, kitsune, nineTails, songstress, villager, dreadFighter, darkFalcon, witch, greatLord, grandmaster, ballistician, lodestar, vanguard];
var allClCorF = [nohrPrincess, nohrNoble, hoshidoNoble, cavalier, paladin, greatKnight, knight, general, fighter, berserker, mercenary, hero, bowKnight, outlaw, adventurer, wyvernRider, wyvernLord, maligKnight, darkMage, sorcerer, darkKnight, troubadour, strategist, maid, samurai, swordmaster, masterOfArms, oniSavage, oniChieftain, blacksmith, spearFighter, spearMaster, basara, diviner, onmyoji, shrineMaiden, priestess, skyKnight, falconKnight, kinshiKnight, archer, sniper, ninja, masterNinja, mechanist, apothecary, merchant, dreadFighter, darkFalcon, witch, greatLord];
var allClCorM = [nohrPrince, nohrNoble, hoshidoNoble, cavalier, paladin, greatKnight, knight, general, fighter, berserker, mercenary, hero, bowKnight, outlaw, adventurer, wyvernRider, wyvernLord, maligKnight, darkMage, sorcerer, darkKnight, troubadour, strategist, butler, samurai, swordmaster, masterOfArms, oniSavage, oniChieftain, blacksmith, spearFighter, spearMaster, basara, diviner, onmyoji, monk, greatMaster, skyKnight, falconKnight, kinshiKnight, archer, sniper, ninja, masterNinja, mechanist, apothecary, merchant, dreadFighter, darkFalcon, grandmaster, ballistician, lodestar, vanguard];
var talents = [noClass, cavalier, knight, fighter, mercenary, outlaw, samurai, oniSavage, spearFighter, diviner, monk, shrineMaiden, skyKnight, archer, wyvernRider, ninja, darkMage, troubadour, apothecary];
var unpromotedCls = [cavalier, knight, fighter, mercenary, outlaw, samurai, oniSavage, spearFighter, diviner, monk, shrineMaiden, skyKnight, archer, wyvernRider, ninja, darkMage, troubadour, apothecary, wolfskin, kitsune];
var otherClsF = [dreadFighter, darkFalcon, witch, greatLord];
var otherClsM = [dreadFighter, darkFalcon, ballistician, lodestar, vanguard, grandmaster];
/* accepts cl object and returns array of cl's max stats */
function getModArr(cl) {
    return ["-", cl.strMod, cl.magMod, cl.sklMod, cl.spdMod, cl.lckMod, cl.defMod, cl.resMod];
}
/* accepts cl string and returns array of cl's grs */
function getGRArrC(cl) {
    return [cl.hpGR, cl.strGR, cl.magGR, cl.sklGR, cl.spdGR, cl.lckGR, cl.defGR, cl.resGR];
}
/* accepts unit object and returns array of unit's max stats */
function getMaxStatArr(unit) {
    return [unit.maxHP, unit.maxStr, unit.maxMag, unit.maxSkl, unit.maxSpd, unit.maxLck, unit.maxDef, unit.maxRes];
}
