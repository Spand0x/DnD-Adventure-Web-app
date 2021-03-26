import {RarityEnum} from './rarity.enum';
import {DiceTypeEnum} from './dice-type.enum';
import {Spell} from './spell.model';
import {StatsEnum} from './stats.enum';

export interface Weapon {
  uuid: string;
  name: string;
  description: string;
  gold: number;
  quantity: number;
  rarity: RarityEnum;
  spell: Spell;
  weaponType: string;
  attackType: string;
  damageDice: DiceTypeEnum;
  damageModifier: StatsEnum;
  hitChanceBonus: number;
}
