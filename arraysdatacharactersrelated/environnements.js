const {
  randomNumberGeneration,
} = require("../gamemechanics/randomnumbergeneration");
const placestoVisit = [
  { id: "0", name: "la prairie", minlevelencounter: 1, maxlevelencounter: 15 },
  {
    id: "1",
    name: "le marécage de l'oubli",
    minlevelencounter: 10,
    maxlevelencounter: 25,
  },
  {
    id: "2",
    name: "la montagne du poney qui tousse",
    minlevelencounter: 20,
    maxlevelencounter: 45,
  },
  {
    id: "3",
    name: "le chateau du Roi Démon",
    minlevelencounter: 35,
    maxlevelencounter: 60,
  },
  {
    id: "4",
    name: "l'antre du Dragon Millénaire",
    minlevelencounter: 55,
    maxlevelencounter: 80,
  },
];

// je lui rajoute un tableau pour ensuite comparer ses valeurs et ne pas repeter les endroits où je combat
const arrayofLandsAlreadyVisited = [];
// la fonction pour ne pas repeter les visites
const visitingLands = () => {
  if (arrayofLandsAlreadyVisited < 5) {
    randomIndex = randomNumberGeneration(placestoVisit);
    // je lance un find pour voir si le nombre aléatoire existe déjà dans le tableau
    while (
      arrayofLandsAlreadyVisited.find(
        (l) => l.name === placestoVisit[randomIndex].name
      )
    ) {
      // mon find est vrai, je relance le chiffre aléatoire
      randomIndex = randomNumberGeneration(placestoVisit);
    }
    // mon find est faux, je n'ai donc pas de doublons. Je conserve le chiffre
    arrayofLandsAlreadyVisited.push(placestoVisit[randomIndex]);
    console.log(
      `Cher Héros, bienvenue dans ${placestoVisit[randomIndex].name}`
    );
  } else {
    console.log(
      `Vous avez déjà visité l'immensité du Monde de Dragon Quest Poo,  Cher Joueur !`
    );
  }
};

module.exports = {
  placestoVisit,
  arrayofLandsAlreadyVisited,
  visitingLands,
};
