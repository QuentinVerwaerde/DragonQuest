const { binaryRandom } = require("./binaryRandom");
const {
  bigshield,
  sword,
} = require("../arraysdatacharactersrelated/itemsCreation.js");
const { heroesinParty } = require("./recruitrandomheroes.js");

//Après un recrutement et avant le second combat, on veut offrir à notre héros une arme ou un bouclier
const giftingSwordorShield = (hero) => {
  const swordorShield = binaryRandom();
  if (swordorShield === 0) {
    // le compagnon nous offre une pièce d'équipement
    console.log(
      ` ${heroesinParty[1].name} vous offre une pièce d'équipement pour survivre au prochain combat. ${hero.name} reçoit ${bigshield.name} `
    );
    // on vérifie plusieurs conditions pour réagir en fonction
    // si le héros n'a pas ce type d'équipement ou que le sien est moins bon, on équipe
    if (!hero.shield || bigshield.defense > hero.shield.defense) {
      hero.shield = bigshield;
      console.log(`${hero.name} s'équipe avec ${bigshield.name} }`);
    }
    // si le bouclier est moins fort, on ne fait rien
    else if (bigshield.defense < hero.shield.defense) {
      console.log(
        `Malheureusement ${bigshield.name} est moins efficace que ce que vous possédez déjà`
      );
    }
  } else if (swordorShield === 1) {
    // le compagnon nous offre une pièce d'équipement
    console.log(
      ` ${heroesinParty[1].name} vous offre une pièce d'équipement pour survivre au prochain combat. ${hero.name} reçoit ${sword.name} `
    );
    // on vérifie plusieurs conditions pour réagir en fonction
    // si le héros n'a pas ce type d'équipement ou que le sien est moins bon, on équipe
    if (!hero.weapon || sword.defense > hero.weapon.attack) {
      hero.weapon = sword;
      console.log(`${hero.name} s'équipe avec ${sword.name} }`);
    }
    // si l'épée est moins forte, on ne fait rien
    else if (sword.attack < hero.weapon.attack) {
      console.log(
        `Malheureusement ${sword.name} est moins efficace que ce que vous possédez déjà`
      );
    }
  }
};
module.exports = { giftingSwordorShield };
