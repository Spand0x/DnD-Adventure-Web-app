import {Injectable} from '@angular/core';
import {NotificationsService, NotificationType} from 'angular2-notifications';

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
      message = error.error ? error.error.message : 'Uh-oh, something went wrong.';
    }

    this.notifications.create('Error', message, NotificationType.Error,
      {theClass: 'outline', timeOut: 3000, showProgressBar: false});
  }


  infoNotification(message) {
    this.notifications.create('Info', message, NotificationType.Info,
      {theClass: 'outline', timeOut: 3000, showProgressBar: false});
  }
}
