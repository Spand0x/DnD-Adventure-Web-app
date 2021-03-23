import {DiceTypeEnum} from './dice-type-enum.model';
import {StatsEnum} from './stats-enum.model';

export interface CharacterClass {
  uuid: string;
  name: string;
  description: string;
  hitPointsDice: DiceTypeEnum;
  primaryStat: StatsEnum;
  savingThrowStat: StatsEnum;
  isExpanded: boolean;
}
