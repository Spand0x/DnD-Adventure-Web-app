import {StatsEnum} from './stats.enum';

export interface CharacterStats {
  uuid: string;
  name: StatsEnum;
  value: number;
}
