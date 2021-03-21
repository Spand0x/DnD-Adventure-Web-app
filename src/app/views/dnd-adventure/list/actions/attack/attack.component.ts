import {Component, OnInit, ViewChild} from '@angular/core';
import {ContextMenuComponent} from 'ngx-contextmenu';
import {Attack} from '../../../../../shared/models/attack.model';
import {ActionService} from '../../../../../shared/services/action.service';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
})
export class AttackComponent implements OnInit {

  @ViewChild('myTable') table: any;
  data: Attack[];

  constructor(private actionService: ActionService) {
  }

  ngOnInit(): void {
    this.actionService.findAllAttacks()
      .subscribe(attacks => {
        this.data = attacks;
      });
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }
}
