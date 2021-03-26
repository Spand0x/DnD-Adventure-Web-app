import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {SpellService} from '../../../../../shared/services/spell.service';
import {Spell} from '../../../../../shared/models/spell.model';
import {NotifService} from '../../../../../shared/services/notif.service';

@Component({
  selector: 'app-spell-description',
  templateUrl: './spell-description.component.html',
  styleUrls: ['./spell-description.component.scss']
})
export class SpellDescriptionComponent implements OnInit {
  spellUuid: string;
  spell: Spell;

  constructor(public bsModalRef: BsModalRef,
              private spellService: SpellService,
              private notifService: NotifService) {
  }

  ngOnInit(): void {
    this.spellService.getById(this.spellUuid)
      .subscribe(spell => {
          this.spell = spell;
        }, error => this.notifService.errorNotification(error)
      );
  }
}
