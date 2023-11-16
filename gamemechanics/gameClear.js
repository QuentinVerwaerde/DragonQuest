const {
  arrayFinalBoss,
} = require("../arraysdatacharactersrelated/monstersCreationandArray");
const { heroesinParty } = require("./recruitrandomheroes");
//gameClear est un gameOver() pour une équipe de Héros pleine et surtout pour terminer le jeu
const gameClear = (arrayheroes, arraymonsters) => {
  // on veut déjà vérifier qui est en vie chez les héros et faire un cas pour
  if (arrayheroes[0].life > 0) {
    if (arrayheroes[1].life > 0 && arrayheroes[2].life > 0) {
      console.log(
        `Félicitations, ${arrayheroes[0].name} et ses compagnons, ${arrayheroes[1].name} et ${arrayheroes[2].name} sont venus à bout du terrible ${arraymonsters[1].name} ! Vous avez terminé mon projet Dragon Quest en programation orienté objet sans qu'aucun héros ne périsse !`
      );
    } else if (arrayheroes[1].life > 0 && arrayheroes[2].life === 0) {
      console.log(
        `Félicitations, ${arrayheroes[0].name} et son compagnons ${arrayheroes[1].name} sont venus à bout du terrible ${arraymonsters[1].name} ! Il ne leur reste plus qu'à prier pour l'âme de ${arrayheroes[2].name}, mort tragiquement au combat.`
      );
    } else if (arrayheroes[1].life === 0 && arrayheroes[2].life > 0) {
      console.log(
        `Félicitations, ${arrayheroes[0].name} et son compagnons ${arrayheroes[2].name} sont venus à bout du terrible ${arraymonsters[1].name} ! Il ne leur reste plus qu'à prier pour l'âme de ${arrayheroes[1].name}, mort tragiquement au combat.`
      );
    }
  } else if (arrayheroes[0].life === 0) {
    if (arrayheroes[1].life > 0 && arrayheroes[2].life > 0) {
      console.log(
        `Félicitations, ${arrayheroes[1].name} et son compagnons ${arrayheroes[2].name} sont venus à bout du terrible ${arraymonsters[1].name} ! Malheureusement le ${arrayheroes[0].name} n'a pas réussi à accomplir sa destinée et à péri lors du combat contre le Dragon !`
      );
    } else if (arrayheroes[1].life > 0 && arrayheroes[2].life === 0) {
      console.log(
        `Félicitations, ${arrayheroes[1].name} sort vainqueur du combat contre le ${arraymonsters[1].name} ! Malheureusement ${arrayheroes[0].name} et ${arrayheroes[2].name} ont succombés à leurs blessures au cours de la bataille`
      );
    } else if (arrayheroes[1].life === 0 && arrayheroes[2].life > 0) {
      console.log(
        `Félicitations, ${arrayheroes[2].name} sort vainqueur du combat contre le ${arraymonsters[1].name} ! Malheureusement ${arrayheroes[0].name} et ${arrayheroes[1].name} ont succombés à leurs blessures au cours de la bataille`
      );
    } else if (arrayheroes[1].life === 0 && arrayheroes[2].life === 0) {
      console.log(
        `Le ${arraymonsters[1].name} se dresse en vainqueur, au dessus des cadavres de ${arrayheroes[0].name}, ${arrayheroes[1].name} et ${arrayheroes[2].name}. La victoire vous échappe, retentez donc votre chance :)`
      );
    }
  }
};

module.exports = { gameClear };
