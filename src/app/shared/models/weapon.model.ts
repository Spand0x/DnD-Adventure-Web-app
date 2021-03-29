import {RarityEnum} from './rarity.enum';
import {DiceTypeEnum} from './dice-type.enum';
import {Spell} from './spell.model';
import {StatsEnum} from './stats.enum';
import {SpellName} from './spell-name.model';

export interface Weapon {
  uuid: string;
  name: string;
  description: string;
  gold: number;
  rarity: RarityEnum;
  spell: Spell | SpellName;
  weaponType: string;
  attackType: string;
  damageDice: DiceTypeEnum;
  damageModifier: StatsEnum;
  hitChanceBonus: number;
}
