import {ActionTypeEnum} from './action-type-enum.model';
import {DiceTypeEnum} from './dice-type-enum.model';

export interface Attack {
  uuid: string;
  type: ActionTypeEnum;
  name: string;
  description: string;
  range: number;
  bonus: number;
  dice: DiceTypeEnum;
  damage: number;
  notes: string;
  unlockLevel: number;
}
