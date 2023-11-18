const {
  Items,
  Weapons,
  Shields,
  FoodItems,
} = require("./constructors/Items.js");
const {
  everyMonsters,
  arrayfinalBoss,
  arrayEncounterOne,
} = require("./arraysdatacharactersrelated/monstersCreationandArray.js");
const {
  heroofLight,
  heroofFood,
  heroofGold,
  heroofMetal,
} = require("./arraysdatacharactersrelated/heroesCreationandArray.js");
//dossier gamemechanics
const {
  giftingSwordorShield,
} = require("./gamemechanics/giftingEquipement.js");
const { gameOver } = require("./gamemechanics/gameover.js");
const { lootGeneration } = require("./gamemechanics/lootgeneration.js");
const {
  recruitaRandomHero,
  heroesinParty,
} = require("./gamemechanics/recruitrandomheroes.js");
const {
  randomNumberGeneration,
} = require("./gamemechanics/randomnumbergeneration.js");
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
} = require("./arraysdatacharactersrelated/itemsCreation.js");
const { loottable } = require("./arraysdatacharactersrelated/loottable.js");
const {
  placestoVisit,
  arrayofLandsAlreadyVisited,
  visitingLands,
} = require("./arraysdatacharactersrelated/environnements.js");
const { gameClear } = require("./gamemechanics/gameClear.js");

// le compteur pour le nombre de rencontre aléatoire
let randomEncounter = 1;
// le nombre de tours pour les combats
let turnBasedCombat = 0;
//
//
//
// DEBUT DU COMBAT ICI
//
// Tour 1
// je lance d'abord la séquence pour introduire l'endroit où notre héros va atterir
visitingLands();
// on lance dans la boucle la "Premiere rencontre / round 1"
// on imprime le nombre de monstres dans la rencontre
console.log(
  `⚔️ Pour votre combat n°${randomEncounter} vous rencontrez ${arrayEncounterOne.length} ennemis qui décident de vous attaquer !!! ⚔️`
);
randomEncounter += 1;
// boucle de combat pour les Heros et les monstres
while (
  heroofLight.life > 0 &&
  (arrayEncounterOne[0].life > 0 ||
    arrayEncounterOne[1].life > 0 ||
    arrayEncounterOne[2].life > 0)
) {
  // le tour commence
  turnBasedCombat += 1;
  console.log(`💪 Début du tour ${turnBasedCombat} 💪`);
  // le héros attaque un monstre au hasard
  // je définis une constante pour choisir un index au hasard à chaque fois
  let indexRandomOne = Math.floor(Math.random() * arrayEncounterOne.length);
  // si le monstre est mort on change de cible !
  while (arrayEncounterOne[indexRandomOne].life == 0) {
    indexRandomOne = Math.floor(Math.random() * arrayEncounterOne.length);
  }
  heroofLight.fight(arrayEncounterOne[indexRandomOne]);

  // ensuite on for each les monstres du tableau contre le héros
  arrayEncounterOne.forEach((d) => {
    if (d.life > 0) {
      d.fight(heroofLight);
    }
  });
}
gameOver(
  heroofLight,
  arrayEncounterOne[0],
  arrayEncounterOne[1],
  arrayEncounterOne[2]
);
// on vérifie bien si notre héros est en vie, si c'est le cas on lance une boucle sur les monstres pour connaitre le loot
if (heroofLight.life > 0) {
  arrayEncounterOne.forEach((a) => lootGeneration(heroofLight, a));
  // on arrive au combat final
  // mais le héros recrutera avant cela 2 alliés
  recruitaRandomHero();
  recruitaRandomHero();
  giftingSwordorShield(heroofLight);
}
//
// Tour 2
//
visitingLands();
// on lance dans la boucle la "Premiere rencontre / round 1"
// on imprime le nombre de monstres dans la rencontre
console.log(
  `⚔️ Pour votre combat n°${randomEncounter} vous rencontrez ${arrayEncounterOne.length} ennemis qui décident de vous attaquer !!! ⚔️`
);
while (
  (heroesinParty[0].life > 0 ||
    heroesinParty[1].life > 0 ||
    heroesinParty[2].life > 0) &&
  (arrayfinalBoss[0].life > 0 ||
    arrayfinalBoss[1].life > 0 ||
    arrayfinalBoss[2].life > 0)
) {
  // le tour commence
  turnBasedCombat += 1;
  console.log(`💪 Début du tour ${turnBasedCombat} 💪`);
  // on filtre le tableau arrayfinal en fonction de la vie, on ne veut combattre que les monstres en vie
  let arrayMonsterstoFightThisTurn = [];
  const newArray = [0, 1, 2];
  for (const index of newArray) {
    arrayfinalBoss[index].life > 0
      ? arrayMonsterstoFightThisTurn.push(arrayfinalBoss[index])
      : "";
  }
  // Héros 1 attaque
  if (heroesinParty[0].life > 0) {
    let indexRandomOne = Math.floor(
      Math.random() * arrayMonsterstoFightThisTurn.length
    );
    arrayMonsterstoFightThisTurn[indexRandomOne].life > 0
      ? heroesinParty[0].fight(arrayMonsterstoFightThisTurn[indexRandomOne])
      : "";
  }
  // Héros 2 attaque
  if (heroesinParty[1].life > 0) {
    indexRandomOne = Math.floor(
      Math.random() * arrayMonsterstoFightThisTurn.length
    );
    arrayMonsterstoFightThisTurn[indexRandomOne].life > 0
      ? heroesinParty[1].fight(arrayMonsterstoFightThisTurn[indexRandomOne])
      : "";
  }
  // Héros 3 attaque
  if (heroesinParty[2].life > 0) {
    indexRandomOne = Math.floor(
      Math.random() * arrayMonsterstoFightThisTurn.length
    );
    arrayMonsterstoFightThisTurn[indexRandomOne].life > 0
      ? heroesinParty[2].fight(arrayMonsterstoFightThisTurn[indexRandomOne])
      : "";
  }
  // je vide le tableau pour la prochaine boucle
  arrayMonsterstoFightThisTurn = [];

  // les monsters attaques
  // on filtre le tableau heroesinparty en fonction de la vie, on ne veut combattre que les heros en vie
  let arrayHeroestoFightThisTurn = [];
  // on utilise à nouveau newArray
  for (const index of newArray) {
    heroesinParty[index].life > 0
      ? arrayHeroestoFightThisTurn.push(heroesinParty[index])
      : "";
  }
  // Monstre 1 attaque
  if (arrayfinalBoss[0].life > 0) {
    let indexRandomOne = Math.floor(
      Math.random() * arrayHeroestoFightThisTurn.length
    );
    arrayHeroestoFightThisTurn[indexRandomOne].life > 0
      ? arrayfinalBoss[0].fight(arrayHeroestoFightThisTurn[indexRandomOne])
      : "";
  }
  // Monstre 2 attaque
  if (arrayfinalBoss[1].life > 0) {
    let indexRandomOne = Math.floor(
      Math.random() * arrayHeroestoFightThisTurn.length
    );
    arrayHeroestoFightThisTurn[indexRandomOne].life > 0
      ? arrayfinalBoss[1].fight(arrayHeroestoFightThisTurn[indexRandomOne])
      : "";
  }
  // Monstre 3 attaque
  if (arrayfinalBoss[2].life > 0) {
    let indexRandomOne = Math.floor(
      Math.random() * arrayHeroestoFightThisTurn.length
    );
    arrayHeroestoFightThisTurn[indexRandomOne].life > 0
      ? arrayfinalBoss[2].fight(arrayHeroestoFightThisTurn[indexRandomOne])
      : "";
  }
}
gameClear(heroesinParty, arrayfinalBoss);
