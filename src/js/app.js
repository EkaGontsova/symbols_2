import { Bowerman, Swordsman, Magician } from './character.js';
import Team from './team.js';

const team = new Team();

const bowerman = new Bowerman('Лучник');
const swordsman = new Swordsman('Мечник');
const magician = new Magician('Маг');

team.add(bowerman);
team.add(swordsman);
team.add(magician);

for (const member of team) {
    console.log(member);
}