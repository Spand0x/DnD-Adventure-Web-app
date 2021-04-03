import {Component, OnInit, ViewChild} from '@angular/core';
import {Race} from '../../../shared/models/race.model';
import {WizardComponent} from 'angular-archwizard';
import {NotifService} from '../../../shared/services/notif.service';
import {CharacterClass} from '../../../shared/models/character-class.model';
import {WeaponService} from '../../../shared/services/weapon.service';
import {Weapon} from '../../../shared/models/weapon.model';
import {Spell} from '../../../shared/models/spell.model';
import {Character} from '../../../shared/models/character.model';
import {CharacterService} from '../../../shared/services/character.service';
import {CharacterStats} from '../../../shared/models/character-stats.model';
import {StatsEnum} from '../../../shared/models/stats.enum';

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
  selectedSpells: Spell[] = [];
  stats: CharacterStats[] = [];

  isWeaponsStep = false;
  isSpellStep = false;

  constructor(private itemService: WeaponService,
              private notifService: NotifService,
              private characterService: CharacterService) {
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
    Object.entries(stats).map((stat) => {
      const enumKey = Object.keys(StatsEnum).filter(x => StatsEnum[x] === StatsEnum[stat[0].toUpperCase()])[0];
      // @ts-ignore
      return this.stats.push({uuid: null, name: enumKey, value: stat[1]});
    });
    this.isWeaponsStep = true;
    this.wizard.goToNextStep();
  }

  selectWeapons(weapons: Weapon[]) {
    this.selectedWeapons = weapons;
    this.isSpellStep = true;
    this.wizard.goToNextStep();
  }

  selectSpells(spells: Spell[]) {
    this.selectedSpells = spells;
    this.createCharacter();
  }

  goBack() {
    this.wizard.goToPreviousStep();
  }

  private createCharacter() {
    const character: Character = this.generalInfo;
    // @ts-ignore
    character.race = this.selectedRace.uuid;
    // @ts-ignore
    character.clazz = this.selectedClass.uuid;
    character.stats = this.stats;
    character.weapons = this.selectedWeapons.map(w => w.uuid);
    character.spells = this.selectedSpells.map(s => s.uuid);

    this.characterService.createCharacter(character)
      .subscribe(char => {
        this.notifService.successNotification('Character created successfully');
        this.wizard.goToNextStep();
      }, error => this.notifService.errorNotification(error));
  }
}
