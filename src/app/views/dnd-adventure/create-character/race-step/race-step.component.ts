import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NotifService} from '../../../../shared/services/notif.service';
import {RaceService} from '../../../../shared/services/race.service';
import {Race} from '../../../../shared/models/race.model';

@Component({
  selector: 'app-race-step',
  templateUrl: './race-step.component.html',
  styleUrls: ['./race-step.component.scss']
})
export class RaceStepComponent implements OnInit {

  isLoading = false;
  races: Race[];
  @Output() race: EventEmitter<Race> = new EventEmitter();

  constructor(private raceService: RaceService,
              private notifService: NotifService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.raceService.getAllRaces().subscribe(races => {
        this.races = races;
      }, error => this.notifService.errorNotification(error),
      () => this.isLoading = false);
  }

  selectRace(race: Race) {
    this.race.emit(race);
  }

  setIsExpanded(event, clickedObject) {
    clickedObject.isExpanded = event;
  }

}
