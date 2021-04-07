import {Component, OnInit} from '@angular/core';
import {NotifService} from '../../../shared/services/notif.service';
import {User} from '../../../shared/models/user.model';
import {UserService} from '../../../shared/services/user.service';
import {UserRoleService} from '../../../shared/services/user-role.service';
import {UserRole} from '../../../shared/models/user-role.model';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html'
})
export class UsersManagementComponent implements OnInit {

  isLoading = false;
  users: User[];

  searchValue: string;
  currentPage: number;
  usersPerPage: number;
  totalUsers: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  isPageEmpty: boolean;
  availableRoles: UserRole[];


  constructor(private userService: UserService,
              private notifService: NotifService,
              private userRoleService: UserRoleService) {
  }

  ngOnInit(): void {
    this.userRoleService.getAll().subscribe(roles => this.availableRoles = roles
      , error => this.notifService.errorNotification(error));
    this.loadData(this.usersPerPage, this.currentPage, this.searchValue);
  }

  loadData(usersPerPage: number = 10, currentPage: number = 1, searchValue: string = '') {
    this.searchValue = searchValue;

    this.isLoading = true;
    this.userService.getAllPaginated(searchValue, currentPage - 1, usersPerPage)
      .subscribe(page => {
          this.currentPage = page.pageable.pageNumber + 1;
          this.usersPerPage = page.pageable.pageSize;
          this.totalUsers = page.totalElements;
          this.totalPages = page.totalPages;
          this.isFirstPage = page.first;
          this.isLastPage = page.last;
          this.isPageEmpty = page.empty;
          this.users = page.content;
        }, error => this.notifService.errorNotification(error),
        () => this.isLoading = false);
  }

  usersPerPageChange(perPage: number) {
    this.loadData(perPage, 1, this.searchValue);
  }

  searchUserByKeyUp($event: any) {
    const searchValue: string = $event.target.value.toLowerCase().trim();
    this.loadData(this.usersPerPage, 1, searchValue);
  }

  changePage($event: any) {
    if (this.currentPage === $event.page) {
      return;
    }
    this.currentPage = $event.page;
    this.loadData(this.usersPerPage, this.currentPage, this.searchValue);
  }

  changeRole(user) {
    if (!user.newRole) {
      this.notifService.errorNotification({error: 'You must select role first.'});
      return;
    }
    user = {uuid: user.uuid, newRole: user.newRole};
    this.userService.changeRole(user)
      .subscribe(u => {
        this.notifService.successNotification('Role changed successfully.');
        this.loadData();
      }, error => this.notifService.errorNotification(error));
  }

  getUserRole(roles: string[]) {
    switch (roles.length) {
      case 1:
        return 'User';
      case 2:
        return 'Dungeon Master';
      case 3:
        return 'Admin';
    }
  }
}
