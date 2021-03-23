import {Modifier} from './stats-modifiers.model';
import {BaseRaceTraits} from './base-race-traits.model';

export interface Race {
  uuid: string;
  name: string;
  description: string;
  advantages: BaseRaceTraits[];
  disadvantages: BaseRaceTraits[];
  modifiers: Modifier[];
  isExpanded: false;
}
