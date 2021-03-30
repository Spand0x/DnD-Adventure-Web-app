import {CharacterClass} from './character-class.model';
import {Race} from './race.model';
import {User} from './user.model';
import {Spell} from './spell.model';
import {Weapon} from './weapon.model';
import {CharacterStats} from './character-stats.model';

export interface Character {
  uuid: string;
  name: string;
  description: string;
  level: number;
  imageUrl: string;
  armor: number;
  maxHitPoints: number;
  currentHitPoints: number;
  initiative: number;
  gold: number;
  isDead: boolean;
  race: Race | string;
  clazz: CharacterClass | string;
  account: User;
  stats: CharacterStats[];
  spells: Spell[] | string[];
  weapons: Weapon[] | string[];
  maxSpellCharges: number;
  usedSpellCharges: number;
  // campaign: Campaign;
  // items: Item[];
  // armors: Armor[];
}
