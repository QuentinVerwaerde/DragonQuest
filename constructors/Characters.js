/** je créé la class Charactes pour pouvoir instancier des personnages ensuite **/
class Characters {
  constructor(name, attack, defense, life) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.life = life;
  }

  // methode pour savoir si le personnage est en vie
  isAlive() {
    return this.life > 0;
  }

  // fonction aléatoire pour le calcul de certains degats et defense
  getRandomNumberGenerated(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  // calculer les degats d'une attaque du hero sur les monstres
  getDamage() {
    return this.weapon ? this.attack + this.weapon.attack : this.attack;
  }
  // calculer la defense à une attaque de notre héros
  getDefense() {
    return this.shield ? this.defense + this.shield.defense : this.defense;
  }

  //combat
  fight(defender) {
    // on calcule l'attaque du héros, un aléatoire entre 1 et son attaque max
    const atk = this.getRandomNumberGenerated(this.getDamage());
    // on calcule la defense du monstre
    const damage = Math.max(atk - defender.getDefense(), 0);
    // on calcule ensuite les points de vie du monstre
    defender.life = Math.max(defender.life - damage, 0);
    console.log(
      `${this.name} attaque ⚔️  ${defender.name} : le coup inflige ${damage} points de dégats et il reste ${defender.life} 💖 point de vie à ${defender.name} !`
    );
  }
}
// une classe Hero pour les personnages principaux
class Hero extends Characters {
  constructor(
    name,
    attack,
    defense,
    life,
    weapon = null,
    shield = null,
    fooditem = null
  ) {
    super(name, attack, defense, life);
    this.weapon = weapon;
    this.shield = shield;
    this.fooditem = fooditem;
  }
}

// une classe Monsters pour les monstres et Boss
class Monsters extends Characters {
  constructor(name, attack, defense, life, race, idloot) {
    super(name, attack, defense, life);

    this.race = race;
    this.idloot = idloot;
  }
}
module.exports = { Characters, Hero, Monsters };
