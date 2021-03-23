import {Injectable} from '@angular/core';
import {DiceTypeEnum} from '../models/dice-type-enum.model';

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
    const minNumber = Math.min(...result);
    const minNumberIndex = result.indexOf(minNumber);
    result.splice(minNumberIndex, 1);
    return result;
  }
}
