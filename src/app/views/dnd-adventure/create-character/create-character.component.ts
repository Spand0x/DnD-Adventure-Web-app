import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Race} from '../../../shared/models/race.model';
import {RaceService} from '../../../shared/services/race.service';
import {WizardComponent} from 'angular-archwizard';
import {NotifService} from '../../../shared/services/notif.service';
import {CharacterClassService} from '../../../shared/services/character-class.service';
import {CharacterClass} from '../../../shared/models/character-class.model';
import {StatsEnum} from '../../../shared/models/stats-enum.model';
import {RollDiceService} from '../../../shared/services/roll-dice.service';
import {DiceTypeEnum} from '../../../shared/models/dice-type-enum.model';
import {Modifier} from '../../../shared/models/stats-modifiers.model';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
})

export class CreateCharacterComponent implements OnInit {
  @ViewChild('wizard') wizard: WizardComponent;

  generalForm: FormGroup;
  statsForm: FormGroup;
  isLoading: boolean;
  races: Race[];
  classes: CharacterClass[];
  stats: string[];
  statsDropdown = [];
  diceRollsResult = [];
  selectedRace: string;
  selectedClass: string;
  selectedRaceModifiers = {} as Modifier;
  selectedStats = [];
  statsFormSubmitted = false;

  constructor(private raceService: RaceService,
              private classService: CharacterClassService,
              private notifService: NotifService,
              private rollDiceService: RollDiceService) {
  }

  ngOnInit(): void {
    this.generalForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null)
    });
    this.statsForm = new FormGroup({
      strength: new FormControl(null, [Validators.required, Validators.min(3), Validators.max(18)]),
      dexterity: new FormControl(null, [Validators.required, Validators.min(3), Validators.max(18)]),
      constitution: new FormControl(null, [Validators.required, Validators.min(3), Validators.max(18)]),
      intelligence: new FormControl(null, [Validators.required, Validators.min(3), Validators.max(18)]),
      wisdom: new FormControl(null, [Validators.required, Validators.min(3), Validators.max(18)]),
      charisma: new FormControl(null, [Validators.required, Validators.min(3), Validators.max(18)])
    });
  }

  selectRace(raceUuid: string) {
    this.selectedRace = raceUuid;
    this.goToStepClass();
  }

  selectClass(classUuid: string) {
    this.selectedClass = classUuid;
    this.goToStepStats();
  }

  goToStepRace() {
    if (this.generalForm.valid) {
      this.isLoading = true;
      this.wizard.goToNextStep();
      this.raceService.getAllRaces().subscribe(races => {
        this.races = races;
        this.isLoading = false;
      }, error => this.notifService.errorNotification(error));
    }
  }

  goToStepClass() {
    if (!this.selectedRace) {
      this.notifService.errorNotification('You must select Race first. Please try again');
    }
    this.wizard.goToNextStep();
    this.isLoading = true;
    this.classService.getAllClasses().subscribe(classes => {
      this.classes = classes;
      this.isLoading = false;
    }, error => this.notifService.errorNotification(error));
  }

  goToStepStats() {
    if (!this.selectedClass) {
      this.notifService.errorNotification('You must select Class first. Please try again');
      return;
    }
    this.stats = Object.keys(StatsEnum).map(stat => stat.charAt(0).toUpperCase() + stat.slice(1).toLowerCase());
    for (let i = 0; i < 6; i++) {
      this.statsDropdown[i] = this.stats;
    }
    this.races.filter(curRace => curRace.uuid === this.selectedRace)[0]
      .modifiers.forEach(modif => {
      this.selectedRaceModifiers[modif.name.toString().toLowerCase()]
        = modif.value > 0 ? '+' + modif.value : modif.value;
    });
    this.wizard.goToNextStep();
  }

  setIsExpanded(event, clickedObject) {
    clickedObject.isExpanded = event;
  }

  hitPointsDiceNumber(characterClass: CharacterClass) {
    return characterClass.hitPointsDice.toString().slice(1);
  }

  rollDice() {
    const rolls = this.rollDiceService.rollDiceForStats(DiceTypeEnum.D6, 4);
    let result = rolls.reduce((acc, cur) => acc + cur, 0);
    result = result === 4 ? 3 : result;
    result = result > 18 ? 18 : result;
    this.diceRollsResult.push(result);
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

  submit() {
    if (this.statsForm.valid) {
      console.log(this.statsForm);
      console.log('patch values with modifiers');
    } else {
      this.statsFormSubmitted = true;
    }
  }

}
