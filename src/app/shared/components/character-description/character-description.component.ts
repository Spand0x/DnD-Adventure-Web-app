import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character.model';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html'
})
export class CharacterDescriptionComponent implements OnInit {
  character: Character;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

}
