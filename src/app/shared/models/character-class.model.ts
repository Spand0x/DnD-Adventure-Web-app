import {DiceTypeEnum} from './dice-type.enum';
import {StatsEnum} from './stats.enum';

export interface CharacterClass {
  uuid: string;
  name: string;
  description: string;
  hitPointsDice: DiceTypeEnum;
  savingThrowStat: StatsEnum;
  isExpanded: boolean;
}
