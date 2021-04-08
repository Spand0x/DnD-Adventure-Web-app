import {Component, OnInit} from '@angular/core';
import {Modifier} from '../../../../shared/models/stats-modifiers.model';
import {ModifierService} from '../../../../shared/services/modifier.service';
import {NotifService} from '../../../../shared/services/notif.service';
import value from '*.json';
import {AuthService} from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-list-modifier',
  templateUrl: './list-modifier.component.html'
})
export class ListModifierComponent implements OnInit {
  isLoading = false;
  modifiers: Modifier[];
  modifiersPerPage: number;
  searchValue: string;
  orderBy: { label, value };
  optionsOrderBy: { label: string, value: string }[];
  isAdmin: boolean;

  constructor(public modifierService: ModifierService,
              private notifService: NotifService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.getRoles().includes('ADMIN');
    this.optionsOrderBy = [{label: 'Name', value: 'name'}, {label: 'Value', value: 'value'}];
    this.orderBy = this.optionsOrderBy[0];
    this.modifiersPerPage = 10;
  }

  modifiersPerPageChange(perPage: number) {
    this.modifiersPerPage = perPage;
  }

  searchModifierByKeyUp(searchValue: string) {
    this.searchValue = searchValue.toLowerCase().trim();
  }

  changeOrderBy($event: any) {
    this.orderBy = $event;
  }

  setData($event: any) {
    this.modifiers = $event.content;
    this.modifiersPerPage = $event.pageable.pageSize;
  }

  // edit(modifier) {
  //   console.log(modifier);
  // }
  //
  // delete(modifier) {
  //   this.modifierService.delete(modifier.uuid).subscribe(res => {
  //     this.notifService.successNotification('Modifier deleted successfully!');
  //     this.searchValue = '';
  //   }, error => this.notifService.errorNotification(error));
  // }
}
