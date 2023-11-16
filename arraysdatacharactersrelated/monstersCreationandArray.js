const { Characters, Hero, Monsters } = require("../constructors/Characters.js");
const {
  randomNumberGeneration,
} = require("../gamemechanics/randomnumbergeneration.js");
// creation des monstres
const zombie = new Monsters("Bob le Zombie 🧟", 55, 15, 60, "undead", 0);
const zombie2 = new Monsters("Maurice le Zombie 🧟", 55, 15, 60, "undead", 0);
const vampire = new Monsters("Comte Choculat 🧛", 65, 15, 60, "undead", 0);
const vampire2 = new Monsters("Nosferaptu 🧛", 65, 15, 60, "undead", 0);
const bat = new Monsters("Chauve-souris 1 🦇", 25, 10, 20, "flying", 1);
const bat2 = new Monsters("Chauve-souris 2 🦇", 25, 10, 20, "flying", 1);
const spider = new Monsters("Araignée 1 🕷", 25, 5, 30, "insect", 2);
const spider2 = new Monsters("Araignée 2 🕷", 25, 5, 30, "insect", 2);
const buffedspider = new Monsters(
  "Araignée sous stéroides 🕷",
  45,
  5,
  30,
  "insect",
  3
);
const blobdeadfortesting = new Monsters(
  "Michel le blob 💧",
  0,
  0,
  0,
  "blob",
  3
);
const goblin = new Monsters("Goblina 🦑", 35, 15, 45, "goblin", 4);
const goblin2 = new Monsters("Goblin 🦑", 35, 15, 45, "goblin", 4);
const ape = new Monsters("Dos d'Argent 🦍", 55, 30, 60, "apes", 5);
const ape2 = new Monsters("Geunon 🦍", 55, 30, 60, "apes", 5);
const lizardman1 = new Monsters("Frank 🐍", 50, 50, 70, "homme-lezard", 6);
const lizardman2 = new Monsters("Marc 🐍", 50, 50, 70, "homme-lezard", 6);
const golem = new Monsters("Kevin 🗿", 90, 20, 150, "golem", 7);
const dragonchild = new Monsters("Proteus 🐉", 80, 40, 120, "dragon", 8);
const dragonchild2 = new Monsters("Anguinus 🐉", 80, 40, 120, "dragon", 8);
const dragon = new Monsters(
  "Dragon Millénaire aux yeux vitreux 🐉",
  100,
  45,
  800,
  "dragon",
  8
);

// on créé un tableau qui va nous servir à contenir les monstres du bestiaire
const everyMonsters = [
  zombie,
  zombie2,
  vampire,
  vampire2,
  bat,
  bat2,
  spider,
  spider2,
  buffedspider,
  goblin,
  goblin2,
  ape,
  ape2,
  lizardman1,
  lizardman2,
  golem,
];

// le combat final
const arrayfinalBoss = [dragonchild, dragon, dragonchild2];
// on créé un tableau pour la première rencontre
const arrayEncounterOne = [];
// on génére le remplissage du tableau correspondant, on veut 2 monstres sur le premier combat
for (let i = 0; i < 3; i++) {
  // on génére l'index des tableaux pour les monstres des rencontres
  let indexArrayMonstersOne = randomNumberGeneration(everyMonsters);
  // je veux savoir si l'index que je récupere dans le tableau
  while (
    arrayEncounterOne.find(
      (m) => m.name === everyMonsters[indexArrayMonstersOne].name
    )
  ) {
    indexArrayMonstersOne = randomNumberGeneration(everyMonsters);
  }
  arrayEncounterOne.push(everyMonsters[indexArrayMonstersOne]);
}

module.exports = { everyMonsters, arrayfinalBoss, arrayEncounterOne };
