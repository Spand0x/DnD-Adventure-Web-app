import {Component, OnInit} from '@angular/core';
import {Spell} from '../../../../../../shared/models/spell.model';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-spell-description',
  templateUrl: './spell-description.component.html'
})
export class SpellDescriptionComponent implements OnInit {

  spell: Spell;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

}
