export default class Character {
  constructor(name, type, attack, defence) {
      const heroes = [
          'Bowerman',
          'Swordsman',
          'Magician',
      ];
      
      if (!heroes.includes(type)) {
          throw new Error(`Unknown character type: ${type}`);
      }

      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = attack;
      this.defence = defence;
  }
}

export class Bowerman extends Character {
  constructor(name) {
      super(name, 'Bowerman', 25, 25);
  }
}

export class Swordsman extends Character {
  constructor(name) {
      super(name, 'Swordsman', 40, 10);
  }
}

export class Magician extends Character {
  constructor(name) {
      super(name, 'Magician', 10, 40);
  }
}