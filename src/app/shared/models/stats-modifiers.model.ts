import {StatsEnum} from './stats-enum.model';

export interface Modifier {
  uuid: string;
  name: StatsEnum;
  value: number;
}
