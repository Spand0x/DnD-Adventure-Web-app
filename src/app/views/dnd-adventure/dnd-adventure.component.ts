import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ISidebar, SidebarService} from 'src/app/containers/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-app',
  templateUrl: './dnd-adventure.component.html',
  styleUrls: ['./dnd-adventure.component.scss']
})
export class DndAdventureComponent implements OnInit, OnDestroy {
  sidebar: ISidebar;
  subscription: Subscription;

  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit() {
    this.subscription = this.sidebarService.getSidebar().subscribe(
      res => {
        this.sidebar = res;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
