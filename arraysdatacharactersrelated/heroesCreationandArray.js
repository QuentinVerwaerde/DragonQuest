const { Characters, Hero, Monsters } = require("../constructors/Characters.js");
// creation des héros et l'équipement pour les héros
// les heros
// Héro de la Lumière doit attaquer au hasard un monstre
const heroofLight = new Hero("Hero de la lumièèèèère", 100, 40, 100);
// Laios a une chance de ne pas attaquer un monstre et passer son tour à l'admirer
const heroofFood = new Hero("Laios, Roi Gourmet", 110, 60, 150);
// Sugimoto attaque même en étant mort mais une seule fois
const heroofGold = new Hero("Sugimoto l'immortel", 130, 30, 200);
// Bergheim Chrome attaque les 3 ennemis à la fois grâce à sa magie
const heroofMetal = new Hero(
  "Bergheim Chrome, Magicien Légendaire",
  90,
  20,
  100
);

module.exports = { heroofLight, heroofFood, heroofGold, heroofMetal };
