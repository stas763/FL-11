
class Fighter {
  constructor(player) {
    this._name = player.name;
    this._damage = player.damage;
    this._agility = player.agility;
    this._healts = player.health;
  }

  getName() {
    return this._name;
    // console.log(name);
  }
  getDamage() {
    return this._damage;
    // console.log(damage);
  }
  getAgility() {
    return this._agility;
    // console.log(agility);
  }
  getHealth() {
    return this._health;
    // console.log(health);
  }

  attack() {
    console.log('attack');
  }

  battle() {
    console.log('battle');
  }

}
