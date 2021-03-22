import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Race} from '../../../shared/models/race.model';
import {RaceService} from '../../../shared/services/race.service';
import {WizardComponent} from 'angular-archwizard';
import {NotifService} from '../../../shared/services/notif.service';
import {CharacterClassService} from '../../../shared/services/character-class.service';
import {CharacterClass} from '../../../shared/models/characterClass.model';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {
  @ViewChild('wizard') wizard: WizardComponent;

  generalForm: FormGroup;
  isLoading: boolean;
  races: Race[];
  classes: CharacterClass[];
  selectedRace: string;

  constructor(private raceService: RaceService,
              private classService: CharacterClassService,
              private notifService: NotifService) {
  }

  ngOnInit(): void {
    this.generalForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  selectRace(raceUuid: string) {
    this.selectedRace = raceUuid;
    this.goToStepClass();
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

  setIsExpanded(event, race: Race) {
    race.isExpanded = event;
  }

}
