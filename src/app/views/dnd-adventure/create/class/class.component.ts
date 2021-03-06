import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiceTypeEnum} from '../../../../shared/models/dice-type.enum';
import {CharacterClassService} from '../../../../shared/services/character-class.service';
import {NotifService} from '../../../../shared/services/notif.service';
import {StatsEnum} from '../../../../shared/models/stats.enum';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  classForm: FormGroup;
  dices = Object.keys(DiceTypeEnum);
  stats = Object.keys(StatsEnum);
  hpDice: string;
  hpNumber: number;

  constructor(private classService: CharacterClassService,
              private notifService: NotifService) {
  }

  ngOnInit(): void {
    this.classForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      hitPointsDice: new FormControl(null, [Validators.required]),
      savingThrowStat: new FormControl(null, [Validators.required]),
      maxSpellCharges: new FormControl(null),
      spellChargesPerLevel: new FormControl(null)
    });
  }

  changeHpDice(event) {
    this.hpDice = event;
    this.hpNumber = event.slice(1);
  }

  onSubmit() {
    if (this.classForm.valid) {
      this.classService.createClass(this.classForm.value)
        .subscribe(characterClass => {
          this.notifService.successNotification('Class created successfully');
        }, error => this.notifService.errorNotification(error));
    }
  }

}
