import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StatsEnum} from '../../../../../shared/models/stats.enum';
import {Race} from '../../../../../shared/models/race.model';
import {Modifier} from '../../../../../shared/models/stats-modifiers.model';
import {DiceTypeEnum} from '../../../../../shared/models/dice-type.enum';
import {RollDiceService} from '../../../../../shared/services/roll-dice.service';

@Component({
  selector: 'app-stats-step',
  templateUrl: './stats-step.component.html',
  styleUrls: ['./stats-step.component.scss']
})
export class StatsStepComponent implements OnInit {

  statsForm: FormGroup;
  stats: string[];
  statsDropdown = [];
  selectedRaceModifiers = {} as Modifier;
  statsFormSubmitted = false;
  diceRollsResult = [];
  selectedStats = [];
  @Input() race: Race;
  @Output() statsResult: EventEmitter<any> = new EventEmitter();

  constructor(private rollDiceService: RollDiceService) {
  }

  ngOnInit(): void {
    this.statsForm = new FormGroup({
      strength: new FormControl(null, [Validators.required, Validators.min(3), Validators.max(18)]),
      dexterity: new FormControl(null, [Validators.required, Validators.min(3), Validators.max(18)]),
      constitution: new FormControl(null, [Validators.required, Validators.min(3), Validators.max(18)]),
      intelligence: new FormControl(null, [Validators.required, Validators.min(3), Validators.max(18)]),
      wisdom: new FormControl(null, [Validators.required, Validators.min(3), Validators.max(18)]),
      charisma: new FormControl(null, [Validators.required, Validators.min(3), Validators.max(18)])
    });
    this.stats = Object.keys(StatsEnum).map(stat => stat.charAt(0).toUpperCase() + stat.slice(1).toLowerCase());
    for (let i = 0; i < 6; i++) {
      this.statsDropdown[i] = this.stats;
    }
    this.race.modifiers.forEach(modif => {
      this.selectedRaceModifiers[modif.name.toString().toLowerCase()]
        = modif.value > 0 ? '+' + modif.value : modif.value;
    });
  }

  selectStat() {
    this.statsDropdown.forEach((arr: [], index) => {
      this.statsDropdown[index] = this.stats;
      this.statsDropdown[index] =
        this.statsDropdown[index].filter(curStat => !this.selectedStats.includes(curStat));
    });
  }

  applyStats() {
    for (let i = 0; i < 6; i++) {
      const curStat = this.selectedStats[i].toLowerCase();
      const curStatResult = this.diceRollsResult[i];
      this.statsForm.get(curStat).patchValue(curStatResult);
    }
  }

  rollDice() {
    const rolls = this.rollDiceService.rollDiceForStats(DiceTypeEnum.D6, 4);
    const result = rolls.reduce((acc, cur) => acc + cur, 0);
    // result = result === 4 ? 3 : result;
    // result = result > 18 ? 18 : result;
    this.diceRollsResult.push(result);
  }

  submit() {
    if (this.statsForm.valid) {
      console.log('patch values with modifiers');
      this.statsResult.emit(this.statsForm.value);
    } else {
      this.statsFormSubmitted = true;
    }
  }
}
