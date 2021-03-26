import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotifService} from '../../../../shared/services/notif.service';
import {DiceTypeEnum} from '../../../../shared/models/dice-type.enum';
import {SpellService} from '../../../../shared/services/spell.service';
import {StatsEnum} from '../../../../shared/models/stats.enum';
import {SpellCastingTypeEnum} from '../../../../shared/models/spell-casting-type.enum';
import {SpellDurationTypeEnum} from '../../../../shared/models/spell-duration-type.enum';
import {DurationUnitEnum} from '../../../../shared/models/duration-unit.enum';
import {Spell} from '../../../../shared/models/spell.model';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent implements OnInit {
  spellForm: FormGroup;

  dices = Object.values(DiceTypeEnum);
  stats = Object.values(StatsEnum);
  castingTypes = Object.values(SpellCastingTypeEnum);
  durationTypes = Object.values(SpellDurationTypeEnum);
  durationUnits = Object.values(DurationUnitEnum);

  durationType;

  constructor(private spellService: SpellService,
              private notificationService: NotifService) {
  }

  ngOnInit(): void {
    this.spellForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      level: new FormControl(1, [Validators.required, Validators.min(1)]),
      damageDice: new FormControl(null ),
      damageModifier: new FormControl(null),
      hitChanceBonus: new FormControl(0),
      maxCharges: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
      effect: new FormControl(null),
      notes: new FormControl(null),
      range: new FormControl(null, [Validators.required]),
      castingType: new FormControl(null, [Validators.required]),
      durationType: new FormControl(null, [Validators.required]),
      duration: new FormControl(null),
      durationUnit: new FormControl(null)
    });
    console.log(this.durationType);
  }

  onSubmit() {
    if (this.spellForm.valid) {
      const damageModifier = Object.keys(StatsEnum).find(
        key => StatsEnum[key] === this.spellForm.get('damageModifier').value);

      const durationType = Object.keys(SpellDurationTypeEnum).find(
        key => SpellDurationTypeEnum[key] === this.spellForm.get('durationType').value);

      const spell: Spell = this.spellForm.value;
      spell.damageModifier = damageModifier as StatsEnum;
      spell.durationType = durationType as SpellDurationTypeEnum;

      this.spellService.create(spell)
        .subscribe(spl => {
          this.notificationService.successNotification('Spell created successfully');

        }, error => this.notificationService.errorNotification(error));
    }
  }
}
