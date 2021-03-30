import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Character} from '../../../shared/models/character.model';
import {CharacterService} from '../../../shared/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character;

  constructor(private route: ActivatedRoute,
              private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.characterService.get(this.route.snapshot.params.uuid);
  }

}
