import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-users-management-header',
  templateUrl: './users-management-header.component.html'
})
export class UsersManagementHeaderComponent implements OnInit {

  @Input() usersPerPage = 10;
  usersOptionsPerPage = [5, 10, 20];

  @Output() searchUserByKey: EventEmitter<any> = new EventEmitter<any>();
  @Output() usersPerPageChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearchKeyUp($event: KeyboardEvent) {
    this.searchUserByKey.emit($event);
  }

  onChangeUsersPerPage(weapon: number) {
    this.usersPerPageChange.emit(weapon);
  }
}
