import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-weapons-header',
  templateUrl: './weapons-header.component.html'
})
export class WeaponsHeaderComponent implements OnInit {

  @Input() weaponsPerPage = 10;
  weaponsOptionsPerPage = [5, 10, 20];

  @Output() searchWeaponsByKey: EventEmitter<any> = new EventEmitter();
  @Output() weaponsPerPageChange: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  onSearchKeyUp($event: KeyboardEvent) {
    this.searchWeaponsByKey.emit($event);
  }

  onChangeWeaponsPerPage(weapon: number) {
    this.weaponsPerPageChange.emit(weapon);
  }
}
