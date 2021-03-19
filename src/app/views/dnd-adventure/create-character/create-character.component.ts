import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TabsetComponent} from 'ngx-bootstrap/tabs';
import {Race} from '../../../shared/models/race.model';
import {RaceService} from '../../../shared/services/race.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {
  @ViewChild('tabset') tabset: TabsetComponent;
  createCharacterForm: FormGroup;
  isLoading: boolean;
  races: Race[];

  constructor(private raceService: RaceService) {
    this.createCharacterForm = new FormGroup({
      characterName: new FormControl(),
      characterDescription: new FormControl(),
      characterRace: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  createForm(): void {
  }

  changeTab(tabId): void {
    switch (tabId.id) {
      case 'race':
        this.isLoading = true;
        this.raceService.getAllRaces()
          .subscribe(races => {
            this.races = races;
            this.isLoading = false;
          });
        break;
      default:
        console.log(tabId);
    }
  }

  selectRace(raceId): void {
    this.createCharacterForm.patchValue({
      characterRace: raceId
    });
    this.goToNextTab();
  }

  goToNextTab(): void {
    let activeTab;
    for (let i = 0; i < this.tabset.tabs.length; i++) {
      if (this.tabset.tabs[i].active === true) {
        activeTab = i;
        break;
      }
    }
    this.tabset.tabs[activeTab + 1].active = true;
    console.log(this.createCharacterForm);
  }
}
