import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CharacterStats} from '../../../../shared/models/character-stats.model';

@Component({
  selector: 'app-character-stats',
  templateUrl: './character-stats.component.html',
  styleUrls: ['./character-stats.component.scss']
})
export class CharacterStatsComponent implements OnInit {

  @Input() stats: CharacterStats[];
  @Output() rollDice: EventEmitter<any> = new EventEmitter<any>();
  statsAndModifiers: any = [];

  constructor() {
  }

  ngOnInit(): void {
    const statsOrder = ['STRENGTH', 'DEXTERITY', 'CONSTITUTION', 'INTELLIGENCE', 'WISDOM', 'CHARISMA'];
    this.stats.sort((a, b) => statsOrder.indexOf(a.name) - statsOrder.indexOf(b.name));
    this.stats.forEach(s => {
      this.statsAndModifiers.push({
        name: s.name.charAt(0).toUpperCase() + s.name.slice(1).toLowerCase(),
        value: s.value,
        modifier: Math.floor((s.value - 10) / 2)
      });
    });
  }
}
