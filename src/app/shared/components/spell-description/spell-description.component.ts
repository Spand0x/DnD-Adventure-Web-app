import {Component, OnInit} from '@angular/core';
import {Spell} from '../../models/spell.model';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {SpellService} from '../../services/spell.service';
import {NotifService} from '../../services/notif.service';

@Component({
  selector: 'app-spell-description',
  templateUrl: './spell-description.component.html',
})
export class SpellDescriptionComponent implements OnInit {
  spellUuid: string;
  spell: Spell;

  constructor(public bsModalRef: BsModalRef,
              private spellService: SpellService,
              private notifService: NotifService) {
  }

  ngOnInit(): void {
    if (!this.spell) {
      this.spellService.getById(this.spellUuid)
        .subscribe(spell => {
            this.spell = spell;
          }, error => this.notifService.errorNotification(error)
        );
    }
  }
}
