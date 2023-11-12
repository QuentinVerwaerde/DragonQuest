const { randomNumberGeneration } = require("./randomnumbergeneration.js");
const {
  arrayEncounterOne,
  everyMonsters,
} = require("../arraysdatacharactersrelated/monstersCreationandArray.js");
// pour determiner des effets spéciaux sur mes attaques, je dois simplement l'appeler dans une autre fonction
// dans la nouvelle, je pourrais cibler defender et le donner en argument à fight()
const advancedFightsforHeroesOnly = (fighter) => {
  //  je définis une constante pour choisir un index au hasard à chaque fois
  let indexRandomOne = randomNumberGeneration(arrayEncounterOne);
  // si le monstre est mort on change de cible !
  while (arrayEncounterOne[indexRandomOne].life === 0) {
    indexRandomOne = randomNumberGeneration(arrayEncounterOne);
  }
  defender = arrayEncounterOne[indexRandomOne];
  if (fighter.name === "Hero de la lumièèèèère") {
    fighter.fight(defender);
  } else if (fighter.name === "Laios, Roi Gourmet") {
    // Laios a une chance de ne pas attaquer un monstre et passer son tour à l'admirer
    const arrayBinary = [0, 1];
    const laiosDoingNothing = randomNumberGeneration(arrayBinary);
    laiosDoingNothing === 0
      ? console.log("Laios admire le monstre sous toutes ses coutures")
      : fighter.fight(defender);
  } else if (fighter.name === "Sugimoto l'immortel") {
    // Sugimoto attaque toujours deux fois le même ennemi, même si celui ci est mort !
    fighter.fight(defender);
    defender.life === 0
      ? console.log("Sugimoto s'acharne sur le cadavre du monstre")
      : fighter.fight(defender);
  } else if (fighter.name === "Bergheim Chrome, Magicien Légendaire") {
    console.log(
      "Les monstres sont pris dans la tempête de feu de Bergheim Chrome"
    );
    arrayEncounterOne.forEach((monster) => {
      monster.life > 0 ? fighter.fight(monster) : "";
    });
    // Bergheim Chrome attaque les 3 ennemis à la fois grâce à sa magie
  }
};

module.exports = { advancedFightsforHeroesOnly };
