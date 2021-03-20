import {ActionTypeEnum} from './action-type-enum.model';
import {DiceTypeEnum} from './dice-type-enum.model';

export interface Spell {
  uuid: string;
  type: ActionTypeEnum;
  name: string;
  description: string;
  range: number;
  damageDice: DiceTypeEnum;
  damageBonus: number;
  hitChanceBonus: number;
  availableCharges: number;
  maxCharges: number;
  unlockLevel: number;
  effect: string;
  notes: string;
}
