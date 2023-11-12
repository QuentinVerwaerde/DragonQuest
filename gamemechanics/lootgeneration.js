const { lootTable } = require("../arraysdatacharactersrelated/loottable.js");
const lootGeneration = (hero1, monster1) => {
  // on demandera au code de n'executer cette fonction que si le héros est en vie mais en dehors du code
  // on génére un numéro aléatoire de 1 à 100 pour le loot
  randomNumberLootTable = Math.floor(Math.random() * 100);
  // on stocke l'index de race du monstre dans une const
  const lootRaceMonster = monster1.idloot;
  // le chiffre aléatoire est en dessous de 30
  if (randomNumberLootTable < 30) {
    console.log(
      `Les poches de ${monster1.name} sont aussi vide que votre compte en banque, ${hero1.name}`
    );
  }
  // le chiffre aléatoire est entre 30 et 60
  else if (randomNumberLootTable >= 30 && randomNumberLootTable < 60) {
    // verifions si l'objet existe
    if (lootTable[lootRaceMonster].loot2) {
      // si c'est le cas on rajoute le regain de vie au point de vie du heros
      hero1.life += lootTable[lootRaceMonster].loot2.lifeback;
      console.log(
        `${hero1.name} récupère ${lootTable[lootRaceMonster].loot2.lifeback} point de vie grâce à ${lootTable[lootRaceMonster].loot2.name}`
      );
    } else {
      console.log(
        `Les poches de ${monster1.name} sont aussi vide que votre compte en banque, ${hero1.name}`
      );
    }
  }
  // le chiffre aléatoire est supérieur ou égal à 60 et inférieur à 90
  else if (randomNumberLootTable >= 60 && randomNumberLootTable < 90) {
    // verifions si l'objet existe
    if (lootTable[lootRaceMonster].loot3) {
      // nous devons maintenant verifier si notre héros possède bien un bouclier sur lui
      if (hero1.shield) {
        // si c'est le cas il faut ensuite verifier si le bouclier looté est meilleur que celui actuel
        if (lootTable[lootRaceMonster].loot3.defense > hero1.shield.defense) {
          // je l'équipe à mon personnage
          hero1.shield = lootTable[lootRaceMonster].loot3;
          console.log(
            `${hero1.name} s'équipe de ${lootTable[lootRaceMonster].loot3.name}`
          );
        } else {
          // sinon je renvoie juste un texte indiquant que l'objet n'est pas si bien que ça
          console.log(
            `L'équipement trouvé par ${hero1.name} sur le cadavre de ${monster1.name} n'est malheureusement pas au niveau de son ${hero1.weapon.name}`
          );
        }
      } else {
        // je l'équipe à mon personnage
        hero1.shield = lootTable[lootRaceMonster].loot3;
        console.log(
          `${hero1.name} s'équipe de ${lootTable[lootRaceMonster].loot3.name}`
        );
      }
    } else {
      console.log(
        `Les poches de ${monster1.name} sont aussi vide que votre compte en banque, ${hero1.name}`
      );
    }
  }
  // le chiffre aléatoire est supérieur ou égal à 90 et inférieur ou égal à 100
  else if (randomNumberLootTable >= 90 && randomNumberLootTable <= 100) {
    // verifions si l'objet existe
    if (lootTable[lootRaceMonster].loot4) {
      // nous devons maintenant verifier si notre héros possède bien un bouclier sur lui
      if (hero1.sword) {
        // si c'est le cas il faut ensuite verifier si le bouclier looté est meilleur que celui actuel
        if (lootTable[lootRaceMonster].loot3.attack > hero1.sword.attack) {
          // je l'équipe à mon personnage
          hero1.shield = lootTable[lootRaceMonster].loot4;
          console.log(
            `${hero1.name} s'équipe de ${lootTable[lootRaceMonster].loot4.name}`
          );
        } else {
          // sinon je renvoie juste un texte indiquant que l'objet n'est pas si bien que ça
          console.log(
            `L'équipement trouvé par ${hero1.name} sur le cadavre de ${monster1.name} n'est malheureusement pas au niveau de son ${hero1.weapon.name}`
          );
        }
      } else {
        // je l'équipe à mon personnage
        hero1.sword = lootTable[lootRaceMonster].loot4;
        console.log(
          `${hero1.name} s'équipe de ${lootTable[lootRaceMonster].loot4.name}`
        );
      }
    } else {
      console.log(
        `Les poches de ${monster1.name} sont aussi vide que votre compte en banque, ${hero1.name}`
      );
    }
  }
};

module.exports = { lootGeneration };
