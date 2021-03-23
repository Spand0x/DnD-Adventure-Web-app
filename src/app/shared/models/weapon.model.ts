import {RarityEnum} from './rarity.enum';
import {DiceTypeEnum} from './dice-type.enum';

export interface Weapon {
  uuid: string;
  name: string;
  description: string;
  gold: number;
  quantity: number;
  rarity: RarityEnum;
  weaponType: string;
  attackType: string;
  diceDamage: DiceTypeEnum;
  bonusDamage: string;
}
