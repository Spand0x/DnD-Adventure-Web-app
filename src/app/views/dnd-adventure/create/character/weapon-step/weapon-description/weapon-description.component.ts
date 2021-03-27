import {Component, OnInit} from '@angular/core';
import {Weapon} from '../../../../../../shared/models/weapon.model';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-weapon-description',
  templateUrl: './weapon-description.component.html',
  styleUrls: ['./weapon-description.component.scss']
})
export class WeaponDescriptionComponent implements OnInit {

  weapon: Weapon;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

}
