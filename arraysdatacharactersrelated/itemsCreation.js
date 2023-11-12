const { Items, Weapons, Shields, FoodItems } = require("../constructors/Items");
// l'équipement
// Epée
const woodstick = new Weapons("🗡 Epée en bois", 5);
const sword = new Weapons("🗡 Epée de Lumiére +2", 25);
const fabledsword = new Weapons("🗡 Epée de la Legende +99", 60);
// Bouclier
const littleshield = new Shields("🛡️ Couvercle de cocotte minute en acier", 5);
const bigshield = new Shields("🛡️ Rondache enchantée +2", 20);
const fabledshield = new Shields("🛡️ Bouclier de la Legende +99", 50);
// création de la nourriture
const apple = new FoodItems("🍎 UNE POMME ! 🍎", 15);
const applePie = new FoodItems(
  "🥧 Une tarte aux pommes, à consommer chaude de préférence 🥧",
  30
);
const spiderLeg = new FoodItems(
  "🔥 Une patte d'araignéee, grillée au feu de bois🔥",
  5
);
const batEyes = new FoodItems(
  "👁️ Un oeil de chauve-souris, croquant à souhait👁️",
  5
);

module.exports = {
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
};
