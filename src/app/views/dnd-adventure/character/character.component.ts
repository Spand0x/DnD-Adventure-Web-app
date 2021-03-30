import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Character} from '../../../shared/models/character.model';
import {CharacterService} from '../../../shared/services/character.service';
import {NotifService} from '../../../shared/services/notif.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character;
  isLoading = false;

  constructor(private route: ActivatedRoute,
              private notifService: NotifService,
              private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.characterService.get(this.route.snapshot.params.uuid)
      .subscribe(char => this.character = char,
        error => this.notifService.errorNotification(error),
        () => this.isLoading = false);
  }

}
