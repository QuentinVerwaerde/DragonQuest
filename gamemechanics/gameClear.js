//gameClear est un gameOver() pour une équipe de Héros pleine et surtout pour terminer le jeu
const gameClear = (hero1, hero2, hero3, monster1, monster2, monster3) => {
  if (hero1.life > 0) {
    console.log(hero1.life);
    console.log(
      `${hero1.name} remporte le combat, les cadavres de ${monster1.name}, ${monster2.name} et ${monster3.name} gisent au sol`
    );
  } else {
    console.log(`${hero1.name} est mort 💀 GAME OVER 💀 `);
  }
};

module.exports = { gameClear };
