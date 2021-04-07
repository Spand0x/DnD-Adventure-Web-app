import {Injectable} from '@angular/core';
import {NotificationsService, NotificationType} from 'angular2-notifications';
import {DiceTypeEnum} from '../models/dice-type.enum';

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor(private notifications: NotificationsService) {
  }

  successNotification(message) {
    this.notifications.create('Success', message, NotificationType.Success,
      {theClass: 'outline', timeOut: 3000, showProgressBar: false});
  }


  errorNotification(error, message?) {
    if (!message) {
      message = error.error ?
        error.error.message ? error.error.message : error.error
        : 'Uh-oh, something went wrong.';
    }

    this.notifications.create('Error', message, NotificationType.Error,
      {theClass: 'outline', timeOut: 3000, showProgressBar: false});
  }


  infoNotification(message) {
    this.notifications.create('Info', message, NotificationType.Info,
      {theClass: 'outline', timeOut: 3000, showProgressBar: false});
  }

  diceNotification(result, diceType: DiceTypeEnum, times: number, modifier?) {
    let message;
    if (modifier) {
      message = `<h4 class="font-weight-bolder">${result}</h4>${times}${diceType}${modifier >= 0 ? '+' + modifier : modifier}`;
    } else {
      message = `<h4 class="font-weight-bolder">${result}</h4>${times}${diceType}`;
    }
    this.notifications.create('Dice Rolled:', message, NotificationType.Success,
      {theClass: 'outline', timeOut: 10000, showProgressBar: false});
  }

  diceStatNotification(rolls: number[], result: string) {
    const message = `<h4 class="font-weight-bolder">${result}</h4>${rolls[0]} + ${rolls[1]} + ${rolls[2]} + <span class="text-danger">${rolls[3]}</span>`;
    this.notifications.create('Dice Rolled:', message, NotificationType.Success,
      {theClass: 'outline', timeOut: 10000, showProgressBar: false});
  }
}
