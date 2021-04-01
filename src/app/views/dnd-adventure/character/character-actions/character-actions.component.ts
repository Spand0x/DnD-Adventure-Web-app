import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Weapon} from '../../../../shared/models/weapon.model';
import {Spell} from '../../../../shared/models/spell.model';
import {CharacterStats} from '../../../../shared/models/character-stats.model';
import {WeaponDescriptionComponent} from '../../../../shared/components/weapon-description/weapon-description.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {SpellDescriptionComponent} from '../../../../shared/components/spell-description/spell-description.component';

@Component({
  selector: 'app-character-actions',
  templateUrl: './character-actions.component.html',
  styleUrls: ['./character-actions.component.scss']
})
export class CharacterActionsComponent implements OnInit {
  bsModalRef: BsModalRef;

  @Input() weapons: Weapon[];
  @Input() spells: Spell[];
  @Input() stats: CharacterStats[];
  @Output() weaponHitChance: EventEmitter<any> = new EventEmitter<any>();
  @Output() rollDamageEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.weapons.sort((a, b) => a.name.localeCompare(b.name));
    this.spells.sort((a, b) => a.name.localeCompare(b.name));
  }

  weaponDamage(action: Weapon | Spell): string {
    const stat = this.getDmgModifier(action);
    let result = action.damageDice + '';
    if (stat < 0) {
      result += ` ${stat}`;
    } else if (stat > 0) {
      result += ` +${stat}`;
    }
    return result;
  }

  rollHitChance(event, item: Weapon | Spell) {
    event.stopPropagation();
    this.weaponHitChance.emit(item.hitChanceBonus);
  }

  rollDamage(event, action: Weapon | Spell) {
    event.stopPropagation();
    const stat = this.getDmgModifier(action);
    const dice = action.damageDice;
    this.rollDamageEvent.emit({dice, stat});
  }

  getDmgModifier(action): number {
    const stat = this.stats.filter(s => s.name === action.damageModifier)[0].value;
    return Math.floor((stat - 10) / 2);
  }

  showWepDescription(weapon: Weapon) {
    const initialState = {weapon};
    this.bsModalRef = this.modalService.show(WeaponDescriptionComponent, {initialState});
  }

  showWepSpellDescription(event, spell: Spell) {
    event.stopPropagation();
    const initialState = {spell};
    this.bsModalRef = this.modalService.show(SpellDescriptionComponent, {initialState});
  }

  // Spells Tab

  showSpellDescription(spell: Spell) {
    const initialState = {spell};
    this.bsModalRef = this.modalService.show(SpellDescriptionComponent, {initialState});
  }

  getSpellDuration(spell: Spell): string {
    if (spell.durationType.toString() === 'TIME') {
      return spell.duration + ' ' + spell.durationUnit.toString().charAt(0).toUpperCase() + spell.durationUnit.toString().slice(1).toLowerCase();
    }
    const spellDuration: string = spell.durationType.toString().replace('_', ' ');
    return spellDuration.charAt(0).toUpperCase() + spellDuration.slice(1).toLowerCase();
  }
}
