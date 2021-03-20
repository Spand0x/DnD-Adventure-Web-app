import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotifService} from '../../../../../shared/services/notif.service';
import {DiceTypeEnum} from '../../../../../shared/models/dice-type-enum.model';
import {ActionService} from '../../../../../shared/services/action.service';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent implements OnInit {
  spellForm: FormGroup;
  dices = Object.keys(DiceTypeEnum);

  constructor(private actionService: ActionService,
              private notificationService: NotifService) {
  }

  ngOnInit(): void {
    this.spellForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      range: new FormControl(10, [Validators.required, Validators.min(10)]),
      damageDice: new FormControl(null, [Validators.required]),
      damageBonus: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
      hitChanceBonus: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
      maxCharges: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
      unlockLevel: new FormControl(1, [Validators.required, Validators.min(0)]),
      effect: new FormControl(null),
      notes: new FormControl(null),
    });
  }

  onSubmit() {
    this.spellForm.value.type = 'SPELL';
    if (this.spellForm.valid) {
      this.actionService.createSpell(this.spellForm.value)
        .subscribe(spell => {
          this.notificationService.successNotification('Spell created successfully');
        }, error => this.notificationService.errorNotification(error));
    }
  }

}
