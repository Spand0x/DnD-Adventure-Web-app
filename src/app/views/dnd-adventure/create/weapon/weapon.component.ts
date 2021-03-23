import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiceTypeEnum} from '../../../../shared/models/dice-type-enum.model';
import {RarityEnum} from '../../../../shared/models/rarity-enum.model';
import {ItemService} from '../../../../shared/services/item.service';
import {NotifService} from '../../../../shared/services/notif.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {

  weaponForm: FormGroup;
  dices = Object.keys(DiceTypeEnum);
  rarities = Object.keys(RarityEnum);

  constructor(private itemService: ItemService,
              private notifService: NotifService) {
  }

  ngOnInit(): void {
    this.weaponForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      gold: new FormControl(null, [Validators.required, Validators.min(0)]),
      quantity: new FormControl(null, [Validators.required, Validators.min(0)]),
      rarity: new FormControl(null, [Validators.required]),
      weaponType: new FormControl(null, [Validators.required]),
      attackType: new FormControl(null, [Validators.required]),
      diceDamage: new FormControl(null, [Validators.required]),
      bonusDamage: new FormControl(null, [Validators.required])
    });
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
