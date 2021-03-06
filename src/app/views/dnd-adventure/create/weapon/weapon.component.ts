import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiceTypeEnum} from '../../../../shared/models/dice-type.enum';
import {RarityEnum} from '../../../../shared/models/rarity.enum';
import {WeaponService} from '../../../../shared/services/weapon.service';
import {NotifService} from '../../../../shared/services/notif.service';
import {SpellService} from '../../../../shared/services/spell.service';
import {SpellName} from '../../../../shared/models/spell-name.model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {StatsEnum} from '../../../../shared/models/stats.enum';
import {Weapon} from '../../../../shared/models/weapon.model';
import {SpellDescriptionComponent} from '../../../../shared/components/spell-description/spell-description.component';

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
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      gold: new FormControl(null, [Validators.required, Validators.min(0)]),
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
      const weapon: Weapon = this.weaponForm.value;
      if (weapon.spell) {
        weapon.spell = {uuid: this.weaponForm.value.spell, name: null};
      }
      this.itemService.createWeapon(weapon)
        .subscribe(wep => {
          this.notifService.successNotification('Weapon created successfully');
        }, error => this.notifService.errorNotification(error));
    }
  }
}
