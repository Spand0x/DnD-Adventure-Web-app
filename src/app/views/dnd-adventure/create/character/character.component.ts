import {Component, OnInit, ViewChild} from '@angular/core';
import {Race} from '../../../../shared/models/race.model';
import {WizardComponent} from 'angular-archwizard';
import {NotifService} from '../../../../shared/services/notif.service';
import {CharacterClass} from '../../../../shared/models/character-class.model';
import {WeaponService} from '../../../../shared/services/weapon.service';
import {Weapon} from '../../../../shared/models/weapon.model';

@Component({
  selector: 'app-create-character',
  templateUrl: './character.component.html',
})

export class CharacterComponent implements OnInit {
  @ViewChild('wizard') wizard: WizardComponent;

  generalInfo: any;
  selectedRace: Race;
  selectedClass: CharacterClass;
  selectedWeapons: Weapon[] = [];
  stats: any;

  isWeaponsStep: boolean = false;

  constructor(private itemService: WeaponService,
              private notifService: NotifService) {
  }

  ngOnInit(): void {
  }

  selectGeneral(general) {
    this.generalInfo = general;
    this.wizard.goToNextStep();
  }

  selectRace(race: Race) {
    this.selectedRace = race;
    if (!this.selectedRace) {
      this.notifService.errorNotification('You must select Race first. Please try again.');
      return;
    }
    this.wizard.goToNextStep();
  }

  selectClass(characterClass: CharacterClass) {
    this.selectedClass = characterClass;
    if (!this.selectedClass) {
      this.notifService.errorNotification('You must select Class first. Please try again.');
      return;
    }
    this.wizard.goToNextStep();
  }

  selectStats(stats) {
    this.stats = stats;
    this.isWeaponsStep = true;
    this.wizard.goToNextStep();
  }

  selectWeapons(weapons: Weapon[]) {
    this.selectedWeapons = weapons;
    console.log(this.selectedWeapons);
    this.wizard.goToNextStep();
  }

  goBack() {
    this.wizard.goToPreviousStep();
  }

}
