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
    let curHP = this.curHP;
    if (action === 'heal') {
      curHP += this.hpModify;
    } else {
      curHP -= this.hpModify;
    }
    curHP = curHP > this.maxHP ? this.maxHP : curHP;
    curHP = curHP < 0 ? 0 : curHP;
    this.hpModify = 0;
    if (hpAtStart !== curHP) {
      this.hpChanged.emit(curHP);
    }
  }

  castSpell() {
    if (this.availableSpellCharges <= 0) {
      this.notifService.infoNotification('You have no available spell charges!');
      return;
    }
    this.castSpellBtn.emit();
  }
}
