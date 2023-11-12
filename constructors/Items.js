class Items {
  constructor(name) {
    this.name = name;
  }
}

// on créé ensuite une série de sous classes pour les items
// les armes
class Weapons extends Items {
  constructor(name, attack) {
    super(name);
    this.attack = attack;
  }
}
// les boucliers
class Shields extends Items {
  constructor(name, defense) {
    super(name);
    this.defense = defense;
  }
}
// la nourriture
class FoodItems extends Items {
  constructor(name, lifeback) {
    super(name);
    this.lifeback = lifeback;
  }
}

module.exports = { Items, Weapons, Shields, FoodItems };
