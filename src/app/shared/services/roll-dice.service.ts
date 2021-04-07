import {Injectable} from '@angular/core';
import {DiceTypeEnum} from '../models/dice-type.enum';
import {NotifService} from './notif.service';

@Injectable({
  providedIn: 'root'
})
export class RollDiceService {

  constructor() {
  }

  rollDiceForStats(diceType: DiceTypeEnum, times: number) {
    const dice = Number(diceType.slice(1));
    const result = [];
    for (let i = 0; i < times; i++) {
      result.push(Math.floor(Math.random() * dice) + 1);
    }
    return result;
  }

  rollDiceWithModifier(diceType: DiceTypeEnum, modifier: number) {
    const dice = Number(diceType.slice(1));
    const rolled = Math.floor(Math.random() * dice) + 1;
    if (modifier !== 0) {
      return `${rolled} + ${modifier} = ${rolled + modifier}`;
    }
    return rolled;
  }
}
