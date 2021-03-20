import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActionService} from '../../../../../shared/services/action.service';
import {NotifService} from '../../../../../shared/services/notif.service';
import {DiceTypeEnum} from '../../../../../shared/models/dice-type-enum.model';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

  attackForm: FormGroup;
  dices = Object.keys(DiceTypeEnum);

  constructor(private actionService: ActionService,
              private notificationService: NotifService) {
  }

  ngOnInit(): void {
    this.attackForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      range: new FormControl(10, [Validators.required, Validators.min(10)]),
      damageDice: new FormControl(null, [Validators.required]),
      damageBonus: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
      hitChanceBonus: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
      effect: new FormControl(null),
      notes: new FormControl(null),
      attackType: new FormControl(null)
    });
  }

  onSubmit() {
    this.attackForm.value.type = 'ATTACK';
    if (this.attackForm.valid) {
      this.actionService.createAttack(this.attackForm.value)
        .subscribe(attack => {
          this.notificationService.successNotification('Attack created successfully');
        }, error => this.notificationService.errorNotification(error));
    }
  }

}
