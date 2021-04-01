import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotifService} from '../../../../shared/services/notif.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  hpModify = 0;

  @Input() initiative;
  @Input() curHP;
  @Input() maxHP;
  @Input() armor;
  @Input() availableSpellCharges;
  @Input() maxSpellCharges;
  @Input() gold;
  @Output() rollDice: EventEmitter<any> = new EventEmitter<any>();
  @Output() hpChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() castSpellBtn: EventEmitter<any> = new EventEmitter<any>();


  constructor(private notifService: NotifService) {
  }

  ngOnInit(): void {
  }

  changeHp(action) {
    if (this.hpModify === 0) {
      return;
    }
    this.hpModify = Math.round(this.hpModify);
    const hpAtStart = this.curHP;
    if (action === 'heal') {
      this.curHP += this.hpModify;
    } else {
      this.curHP -= this.hpModify;
    }
    this.curHP = this.curHP > this.maxHP ? this.maxHP : this.curHP;
    this.curHP = this.curHP < 0 ? 0 : this.curHP;
    this.hpModify = 0;
    if (hpAtStart !== this.curHP) {
      this.hpChanged.emit(this.curHP);
    }
  }

  castSpell() {
    if (this.availableSpellCharges <= 0) {
      this.notifService.infoNotification('You have no available spell charges!');
      return;
    }
    this.availableSpellCharges = this.availableSpellCharges - 1;
    this.castSpellBtn.emit();
  }
}
