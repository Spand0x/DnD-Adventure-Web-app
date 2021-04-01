import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Character} from '../../../shared/models/character.model';
import {CharacterService} from '../../../shared/services/character.service';
import {NotifService} from '../../../shared/services/notif.service';
import {DiceTypeEnum} from '../../../shared/models/dice-type.enum';
import {RollDiceService} from '../../../shared/services/roll-dice.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {CharacterDescriptionComponent} from '../../../shared/components/character-description/character-description.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  bsModalRef: BsModalRef;

  character: Character;
  isLoading = false;

  constructor(private route: ActivatedRoute,
              private notifService: NotifService,
              private rollDiceService: RollDiceService,
              private characterService: CharacterService,
              private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.characterService.get(this.route.snapshot.params.uuid)
      .subscribe(char => this.character = char,
        error => this.notifService.errorNotification(error),
        () => this.isLoading = false);
  }

  rollDice(modifier): void {
    const result = this.rollDiceService.rollDiceWithModifier(DiceTypeEnum.D20, modifier);
    this.notifService.diceNotification(result, DiceTypeEnum.D20, 1, modifier);
  }

  rollDamageDice(damage): void {
    const result = this.rollDiceService.rollDiceWithModifier(damage.dice, damage.stat);
    this.notifService.diceNotification(result, damage.dice, 1, damage.stat);
  }

  changeHp(newHp): void {
    this.characterService.changeHp(this.character.uuid, newHp)
      .subscribe(res => this.notifService.successNotification('Hp changed successfully.'),
        error => this.notifService.errorNotification(error));
  }

  showDescription() {
    const initialState = {character: this.character};
    this.bsModalRef = this.modalService.show(CharacterDescriptionComponent, {initialState});
  }

  castSpell() {
    this.characterService.castSpell(this.character.uuid)
      .subscribe(res => this.notifService.successNotification('Successfully casted a spell.'),
        error => this.notifService.errorNotification(error));
  }
}
