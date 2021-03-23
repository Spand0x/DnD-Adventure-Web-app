import {StatsEnum} from './stats.enum';

export interface Modifier {
  uuid: string;
  name: StatsEnum;
  value: number;
}
