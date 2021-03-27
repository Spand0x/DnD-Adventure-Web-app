import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiceTypeEnum} from '../../../../shared/models/dice-type.enum';
import {RarityEnum} from '../../../../shared/models/rarity.enum';
import {WeaponService} from '../../../../shared/services/weapon.service';
import {NotifService} from '../../../../shared/services/notif.service';
import {SpellService} from '../../../../shared/services/spell.service';
import {SpellName} from '../../../../shared/models/spell-name.model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {SpellDescriptionComponent} from './spell-description/spell-description.component';
import {StatsEnum} from '../../../../shared/models/stats.enum';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {
  bsModalRef: BsModalRef;

  weaponForm: FormGroup;
  dices = Object.keys(DiceTypeEnum);
  rarities = Object.keys(RarityEnum);
  stats = Object.keys(StatsEnum);
  isSpellRequired = false;
  spellNames: SpellName[];
  selectedSpellUuid: string;

  constructor(private itemService: WeaponService,
              private spellService: SpellService,
              private notifService: NotifService,
              private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.weaponForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      gold: new FormControl(null, [Validators.required, Validators.min(0)]),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
      rarity: new FormControl(null, [Validators.required]),
      weaponType: new FormControl(null, [Validators.required]),
      attackType: new FormControl(null, [Validators.required]),
      damageDice: new FormControl(null, [Validators.required]),
      damageModifier: new FormControl(null),
      hitChanceBonus: new FormControl(null),
      spell: new FormControl(null)
    });
  }

  getSpells() {
    this.isSpellRequired = true;
    if (this.spellNames) {
      return;
    }
    this.spellService.getAllNames()
      .subscribe(spells => {
        this.spellNames = spells;
      }, error => this.notifService.errorNotification(error, 'There was a problem with the spells. Please try again later'));
  }

  removeSpell() {
    this.selectedSpellUuid = undefined;
    this.isSpellRequired = false;
  }

  openModal() {
    const initialState = {spellUuid: this.selectedSpellUuid};
    this.bsModalRef = this.modalService.show(SpellDescriptionComponent, {initialState});
  }

  onSubmit() {
    if (this.weaponForm.valid) {
      this.itemService.createWeapon(this.weaponForm.value)
        .subscribe(weapon => {
          this.notifService.successNotification('Weapon created successfully');
        }, error => this.notifService.errorNotification(error));
    }
  }
}
