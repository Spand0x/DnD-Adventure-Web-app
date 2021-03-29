import {DiceTypeEnum} from './dice-type.enum';
import {StatsEnum} from './stats.enum';
import {SpellCastingTypeEnum} from './spell-casting-type.enum';
import {SpellDurationTypeEnum} from './spell-duration-type.enum';
import {DurationUnitEnum} from './duration-unit.enum';

export interface Spell {
  uuid: string;
  name: string;
  description: string;
  level: number;
  damageDice: DiceTypeEnum;
  damageModifier: StatsEnum;
  hitChanceBonus: number;
  effect: string;
  notes: string;

  // Self /Ranged 20ft
  range: string;
  castingType: SpellCastingTypeEnum;
  durationType: SpellDurationTypeEnum;
  duration: number;
  durationUnit: DurationUnitEnum;
}
