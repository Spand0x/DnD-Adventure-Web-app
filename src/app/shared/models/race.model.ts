import {Modifier} from './stats-modifiers.model';

export interface Race {
  uuid: string;
  name: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
  modifiers: Modifier[];
}
