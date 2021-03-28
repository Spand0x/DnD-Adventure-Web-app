import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-spells-header',
  templateUrl: './spells-header.component.html',
})
export class SpellsHeaderComponent implements OnInit {

  @Input() spellsPerPage = 10;
  spellsOptionsPerPage = [5, 10, 20];

  @Output() searchSpellsByKey: EventEmitter<any> = new EventEmitter();
  @Output() spellsPerPageChange: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  onSearchKeyUp($event: KeyboardEvent) {
    this.searchSpellsByKey.emit($event);
  }

  onChangeWeaponsPerPage(spell: number) {
    this.spellsPerPageChange.emit(spell);
  }
}
