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
const { gameOver } = require("./gamemechanics/gameover.js");
const { lootGeneration } = require("./gamemechanics/lootgeneration.js");
const {
  recruitaRandomHero,
} = require("./gamemechanics/recruitrandomheroes.js");
const {
  randomNumberGeneration,
} = require("./gamemechanics/randomnumbergeneration.js");
const {
  advancedFightsforHeroesOnly,
} = require("./gamemechanics/advancedfighting.js");
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
// visitingLands();
// // on lance dans la boucle la "Premiere rencontre / round 1"
// // on imprime le nombre de monstres dans la rencontre
// console.log(
//   `⚔️ Pour votre combat n°${randomEncounter} vous rencontrez ${arrayEncounterOne.length} ennemis qui décident de vous attaquer !!! ⚔️`
// );
// randomEncounter += 1;
// // boucle de combat pour les Heros et les monstres
// while (
//   heroofLight.life > 0 &&
//   (arrayEncounterOne[0].life > 0 ||
//     arrayEncounterOne[1].life > 0 ||
//     arrayEncounterOne[2].life > 0)
// ) {
//   // le tour commence
//   turnBasedCombat += 1;
//   console.log(`💪 Début du tour ${turnBasedCombat} 💪`);
//   // le héros attaque un monstre au hasard
//   // je définis une constante pour choisir un index au hasard à chaque fois
//   let indexRandomOne = Math.floor(Math.random() * arrayEncounterOne.length);
//   // si le monstre est mort on change de cible !
//   while (arrayEncounterOne[indexRandomOne].life == 0) {
//     indexRandomOne = Math.floor(Math.random() * arrayEncounterOne.length);
//   }
//   heroofLight.fight(arrayEncounterOne[indexRandomOne]);

//   // ensuite on for each les monstres du tableau contre le héros
//   arrayEncounterOne.forEach((d) => {
//     if (d.life > 0) {
//       d.fight(heroofLight);
//     }
//   });
// }
// gameOver(
//   heroofLight,
//   arrayEncounterOne[0],
//   arrayEncounterOne[1],
//   arrayEncounterOne[2]
// );
// // on vérifie bien si notre héros est en vie, si c'est le cas on lance une boucle sur les monstres pour connaitre le loot
// heroofLight.life > 0
//   ? arrayEncounterOne.forEach((a) => lootGeneration(heroofLight, a))
//   : "";
// //
// //
// // pause entre les deux phases de jeu
// // on arrive au combat final
// // mais le héros recrutera avant cela 2 alliés
// heroofLight.life > 0 ? recruitaRandomHero() : "";
lootGeneration(heroofLight, everyMonsters[1]);
lootGeneration(heroofLight, everyMonsters[1]);
lootGeneration(heroofLight, everyMonsters[1]);
lootGeneration(heroofLight, everyMonsters[1]);
lootGeneration(heroofLight, everyMonsters[1]);
lootGeneration(heroofLight, everyMonsters[1]);
lootGeneration(heroofLight, everyMonsters[1]);
lootGeneration(heroofLight, everyMonsters[1]);
lootGeneration(heroofLight, everyMonsters[1]);
