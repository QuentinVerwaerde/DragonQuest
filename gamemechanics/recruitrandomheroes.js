const {
  heroofLight,
  heroofFood,
  heroofGold,
  heroofMetal,
} = require("../arraysdatacharactersrelated/heroesCreationandArray");
const { randomNumberGeneration } = require("./randomnumbergeneration.js");
// je créé un tableau pour nos héros, utile pour les recruter ensuite
const arrayofHeroes = [heroofFood, heroofGold, heroofMetal];
// je veux recruter ce heros et l'ajouter à mon tableau herosactifs deja existant
const heroesinParty = [heroofLight];
// on créé une fonction pour recruter un héros sans recruter le même a chaque fois
const recruitaRandomHero = () => {
  if (heroesinParty.length < 3) {
    // je veux lancer un chiffre aléatoire compris entre les indexs du tableau où j'ai stocké mes héros
    let random = randomNumberGeneration(arrayofHeroes);
    //cela rends 0, 1 ou 2 car arraylength = 3
    // une fois cet aléatoire obtenu, j'ai besoin de le comparer au tableau des héros inactifs pour savoir à qui cela correspond :
    // si c'est vrai, on ne veut pas de se push car il y'a DEJA un héro identique
    while (heroesinParty.find((f) => f.name === arrayofHeroes[random].name)) {
      random = randomNumberGeneration(arrayofHeroes);
    }
    heroesinParty.push(arrayofHeroes[random]);
    console.log(`${arrayofHeroes[random].name} rejoint votre équipe 🤝 !`);
  } else {
    console.log(
      `${heroofLight.name} votre équipe est pleine, vous ne pouvez pas recruter un nouveau héros`
    );
  }
};

module.exports = { recruitaRandomHero, heroesinParty };
