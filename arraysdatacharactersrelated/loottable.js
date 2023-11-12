const {
  woodstick,
  sword,
  fabledsword,
  littleshield,
  bigshield,
  fabledshield,
  apple,
  applePie,
  spiderLeg,
  batEyes,
} = require("./itemsCreation.js");
// le tableau du loot pour les monstres par race
// index 1 undead 2 flying 3 insect 4 blob 5 gobelin 6 ape 7 lizard-man 8 golem 9 dragon
// format : null, nourriture, bouclier, épée
const lootTable = [
  { id: "undead", loot1: "", loot2: applePie, loot3: bigshield, loot4: sword },
  { id: "flying", loot1: "", loot2: batEyes, loot3: "", loot4: "" },
  {
    id: "insect",
    loot1: "",
    loot2: spiderLeg,
    loot3: littleshield,
    loot4: woodstick,
  },
  { id: "blob", loot1: "", loot2: apple, loot3: "", loot4: "" },
  { id: "goblin", loot1: "", loot2: apple, loot3: "", loot4: "" },
  { id: "ape", loot1: "", loot2: apple, loot3: littleshield, loot4: woodstick },
  {
    id: "lizard-man",
    loot1: "",
    loot2: applePie,
    loot3: bigshield,
    loot4: sword,
  },
  { id: "golem", loot1: "", loot2: applePie, loot3: bigshield, loot4: sword },
  {
    id: "dragon",
    loot1: "",
    loot2: applePie,
    loot3: fabledshield,
    loot4: fabledsword,
  },
];

module.exports = { lootTable };
