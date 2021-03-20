import {ActionTypeEnum} from './action-type-enum.model';
import {DiceTypeEnum} from './dice-type-enum.model';

export interface Attack {
  uuid: string;
  type: ActionTypeEnum;
  name: string;
  description: string;
  range: number;
  damageDice: DiceTypeEnum;
  damageBonus: number;
  hitChanceBonus: number;
  unlockLevel: number;
  notes: string;
  effect: string;
  attackType: string;
}
